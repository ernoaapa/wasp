package test

import (
	"testing"

	"github.com/iotaledger/wasp/contracts/rust/testcore"
	"github.com/iotaledger/wasp/packages/solo"
	"github.com/stretchr/testify/require"
)

func TestMainCallsFromFullEP(t *testing.T) {
	run2(t, func(t *testing.T, w bool) {
		ctx := deployTestCore(t, w, true)
		user := ctx.Creator()

		f := testcore.ScFuncs.CheckContextFromFullEP(ctx.Sign(user))
		f.Params.ChainID().SetValue(ctx.ChainID())
		f.Params.AgentID().SetValue(ctx.AccountID())
		f.Params.Caller().SetValue(user.ScAgentID())
		f.Params.ChainOwnerID().SetValue(ctx.Originator().ScAgentID())
		f.Params.ContractCreator().SetValue(user.ScAgentID())
		f.Func.TransferIotas(1).Post()
		require.NoError(t, ctx.Err)
	})
}

func TestMainCallsFromViewEP(t *testing.T) {
	run2(t, func(t *testing.T, w bool) {
		ctx := deployTestCore(t, w, true)
		user := ctx.Creator()

		f := testcore.ScFuncs.CheckContextFromViewEP(ctx)
		f.Params.ChainID().SetValue(ctx.ChainID())
		f.Params.AgentID().SetValue(ctx.AccountID())
		f.Params.ChainOwnerID().SetValue(ctx.Originator().ScAgentID())
		f.Params.ContractCreator().SetValue(user.ScAgentID())
		f.Func.Call()
		require.NoError(t, ctx.Err)
	})
}

func TestMintedSupplyOk(t *testing.T) {
	run2(t, func(t *testing.T, w bool) {
		ctx := deployTestCore(t, w, true)
		user := ctx.Creator()

		f := testcore.ScFuncs.GetMintedSupply(ctx.Sign(user, 42))
		f.Func.TransferIotas(1).Post()
		require.NoError(t, ctx.Err)

		mintedColor, mintedAmount := ctx.Minted()

		requests := int64(2)
		if w {
			requests++
		}

		require.EqualValues(t, solo.Saldo-42-requests, user.Balance())
		require.EqualValues(t, 42, user.Balance(mintedColor))

		require.EqualValues(t, mintedColor, f.Results.MintedColor().Value())
		require.EqualValues(t, mintedAmount, f.Results.MintedSupply().Value())
	})
}
