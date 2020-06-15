package runvm

import (
	"fmt"
	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/balance"
	"github.com/iotaledger/hive.go/daemon"
	"github.com/iotaledger/hive.go/logger"
	"github.com/iotaledger/hive.go/node"
	"github.com/iotaledger/wasp/packages/hashing"
	"github.com/iotaledger/wasp/packages/sctransaction"
	"github.com/iotaledger/wasp/packages/state"
	"github.com/iotaledger/wasp/packages/util"
	"github.com/iotaledger/wasp/packages/vm"
	"github.com/iotaledger/wasp/packages/vm/vmnil"
	"sync"
	"time"
)

// PluginName is the name of the NodeConn plugin.
const PluginName = "VM"

var (
	// Plugin is the plugin instance of the database plugin.
	Plugin = node.NewPlugin(PluginName, node.Enabled, configure, run)
	log    *logger.Logger

	vmDaemon        = daemon.New()
	processors      = make(map[string]vm.Processor)
	processorsMutex sync.RWMutex
)

func configure(_ *node.Plugin) {
	log = logger.NewLogger(PluginName)
}

func run(_ *node.Plugin) {
	err := daemon.BackgroundWorker(PluginName, func(shutdownSignal <-chan struct{}) {
		// globally initialize VM
		go vmDaemon.Run()

		<-shutdownSignal

		vmDaemon.Shutdown()
		log.Infof("shutdown VM...  Done")
	})
	if err != nil {
		log.Errorf("failed to start NodeConn worker")
	}
}

// LoadProcessorAsync creates and registers processor for program hash
// asynchronously
// possibly, locates Wasm program code in IPFS and caches here
func LoadProcessorAsync(programHash string, onFinish func(err error)) {
	go func() {
		processorsMutex.Lock()
		defer processorsMutex.Unlock()

		switch programHash {
		case "67F3YgmwXT23PuRwVzDYNLhyXxwQz8WubwmYoWK2hUmE": // sc0
			processors[programHash] = vmnil.New()
			onFinish(nil)

		default:
			onFinish(fmt.Errorf("can't create processor for progam hash %s", programHash))
		}
	}()
}

func CheckProcessor(programHash string) bool {
	_, err := getProcessor(programHash)
	return err == nil
}

func getProcessor(programHash string) (vm.Processor, error) {
	processorsMutex.RLock()
	defer processorsMutex.RUnlock()

	ret, ok := processors[programHash]
	if !ok {
		return nil, fmt.Errorf("no such processor: %v", programHash)
	}
	return ret, nil
}

// RunComputationsAsync runs computations for the batch of requests in the background
func RunComputationsAsync(ctx *vm.VMTask) error {
	if len(ctx.Requests) == 0 {
		return fmt.Errorf("must be at least 1 request")
	}
	processor, err := getProcessor(ctx.ProgramHash.String())
	if err != nil {
		return err
	}
	txbuilder, err := vm.NewTxBuilder(vm.TransactionBuilderParams{
		Balances:   ctx.Balances,
		OwnColor:   ctx.Color,
		OwnAddress: ctx.Address,
	})
	if err != nil {
		ctx.Log.Debugf("NewTxBuilder: %v\n%s", err, util.BalancesToString(ctx.Balances))
		return err
	}

	reqids := sctransaction.TakeRequestIds(ctx.Requests)
	bh := vm.BatchHash(reqids, ctx.Timestamp)
	taskName := ctx.Address.String() + "." + bh.String()

	err = vmDaemon.BackgroundWorker(taskName, func(shutdownSignal <-chan struct{}) {
		runTask(ctx, txbuilder, processor, shutdownSignal)
	})
	return err
}

// runs batch
func runTask(ctx *vm.VMTask, txbuilder *vm.TransactionBuilder, processor vm.Processor, shutdownSignal <-chan struct{}) {
	ctx.Log.Debugw("runTask IN",
		"addr", ctx.Address.String(),
		"finalTimestamp", ctx.Timestamp,
		"balances hash", util.BalancesHash(ctx.Balances),
		"state index", ctx.VariableState.StateIndex(),
		"num req", len(ctx.Requests),
		"leader", ctx.LeaderPeerIndex,
	)
	//ctx.Log.Debugf("input balances:\n%s", util.BalancesToString(ctx.Balances))

	vmctx := &vm.VMContext{
		Address:       ctx.Address,
		TxBuilder:     txbuilder,
		Timestamp:     ctx.Timestamp,
		VariableState: state.NewVariableState(ctx.VariableState), // clone
		Log:           ctx.Log,
	}
	stateUpdates := make([]state.StateUpdate, 0, len(ctx.Requests))
	for _, reqRef := range ctx.Requests {
		// destroy token corresponding to request
		// NOTE: it is assumed here that balances contain all necessary request token balances
		// it is checked in the dispatcher.dispatchAddressUpdate
		err := txbuilder.EraseColor(ctx.Address, (balance.Color)(reqRef.Tx.ID()), 1)
		if err != nil {
			// not enough balance for requests tokens
			// major inconsistency
			ctx.Log.Panicf("something wrong with request token for reqid = %s. Not all requests were processed: %v",
				reqRef.RequestId().String(), err)
		}
		// run processor
		vmctx.Request = reqRef
		vmctx.StateUpdate = state.NewStateUpdate(reqRef.RequestId()).WithTimestamp(vmctx.Timestamp)

		processor.Run(vmctx)

		stateUpdates = append(stateUpdates, vmctx.StateUpdate)
		// update state
		vmctx.VariableState.ApplyStateUpdate(vmctx.StateUpdate)
		if vmctx.Timestamp != 0 {
			// increasing (nonempty) timestamp for 1 nanosecond for each request in the batch
			// the reason is to provide a different timestamp for each VM call albeit remain deterministic
			vmctx.Timestamp += 1
		}
	}
	if len(stateUpdates) == 0 {
		// should not happen
		ctx.Log.Errorf("RunVM: no state updates were produced")
		return
	}

	var err error

	// create batch from state updates.
	ctx.ResultBatch, err = state.NewBatch(stateUpdates)
	if err != nil {
		ctx.Log.Errorf("RunVM: %v", err)
		return
	}

	// timestamp of the resulting batch is equal to the timestamp of the last state update (if not empty)
	finalTimestamp := int64(0)
	if ctx.Timestamp != 0 {
		finalTimestamp = ctx.Timestamp + int64(len(stateUpdates)) - 1
	}
	ctx.ResultBatch.WithStateIndex(ctx.VariableState.StateIndex() + 1).WithTimestamp(finalTimestamp)

	// create final transaction
	vsClone := state.NewVariableState(ctx.VariableState)
	if err = vsClone.ApplyBatch(ctx.ResultBatch); err != nil {
		ctx.Log.Errorf("RunVM: %v", err)
		return
	}
	vsh := vsClone.Hash()
	ctx.ResultTransaction = vmctx.TxBuilder.Finalize(ctx.VariableState.StateIndex()+1, vsh, finalTimestamp)

	// check of all provided inputs were properly consumed
	if err := ctx.ResultTransaction.ValidateConsumptionOfInputs(&ctx.Address, ctx.Balances); err != nil {
		ctx.Log.Errorf("RunVM.ValidateConsumptionOfInputs: wrong result transaction: %v", err)
		return
	}

	ctx.Log.Debugw("runTask OUT",
		"result batch size", ctx.ResultBatch.Size(),
		"result batch state index", ctx.ResultBatch.StateIndex(),
		"result variable state hash", vsh.String(),
		"result essence hash", hashing.HashData(ctx.ResultTransaction.EssenceBytes()).String(),
		"result tx finalTimestamp", time.Unix(0, ctx.ResultTransaction.MustState().Timestamp()),
	)
	// call back
	ctx.OnFinish()
}
