package root

import (
	"fmt"

	"github.com/iotaledger/wasp/packages/coretypes"
	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/kv/datatypes"
)

func FindContract(state kv.KVStore, hname coretypes.Hname) (*ContractRecord, error) {
	if hname == Interface.Hname() {
		return &RootContractRecord, nil
	}
	contractRegistry := datatypes.NewMustMap(state, VarContractRegistry)
	retBin := contractRegistry.GetAt(hname.Bytes())
	if retBin == nil {
		return nil, fmt.Errorf("root: contract %s not found", hname)
	}
	ret, err := DecodeContractRecord(retBin)
	if err != nil {
		return nil, fmt.Errorf("root: %v", err)
	}
	return ret, nil
}

func DecodeContractRegistry(contractRegistry *datatypes.MustMap) (map[coretypes.Hname]*ContractRecord, error) {
	ret := make(map[coretypes.Hname]*ContractRecord)
	var err error
	contractRegistry.Iterate(func(k []byte, v []byte) bool {
		var deploymentHash coretypes.Hname
		deploymentHash, err = coretypes.NewHnameFromBytes(k)
		if err != nil {
			return false
		}

		var cr *ContractRecord
		cr, err = DecodeContractRecord(v)
		if err != nil {
			return false
		}

		ret[deploymentHash] = cr
		return true
	})
	return ret, err
}
