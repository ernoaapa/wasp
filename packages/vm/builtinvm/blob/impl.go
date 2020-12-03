package blob

import (
	"fmt"

	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/kv/codec"
	"github.com/iotaledger/wasp/packages/kv/datatypes"
	"github.com/iotaledger/wasp/packages/kv/dict"
	"github.com/iotaledger/wasp/packages/util"
	"github.com/iotaledger/wasp/packages/vm/vmtypes"
)

func initialize(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("blob.initialize.begin")
	state := ctx.State()
	if state.MustGet(VarStateInitialized) != nil {
		// can't be initialized twice
		return nil, fmt.Errorf("blob.initialize.fail: already_initialized")
	}
	state.Set(VarStateInitialized, []byte{0xFF})
	ctx.Eventf("blob.initialize.success hname = %s", Interface.Hname().String())
	return nil, nil
}

// storeBlob treats parameters as names of fields and field values
// it stores it in the state in deterministic binary representation
// Returns hash of the blob
func storeBlob(ctx vmtypes.Sandbox) (dict.Dict, error) {
	ctx.Eventf("blob.storeBlob.begin")
	state := ctx.State()
	if state.MustGet(VarStateInitialized) == nil {
		return nil, fmt.Errorf("blob.storeBlob.fail: not initalized")
	}
	params := ctx.Params()
	// calculate a deterministic hash of all blob fields
	blobHash, kSorted, values := mustGetBlobHash(params)

	// get a record by blob hash
	blb := datatypes.NewMustMap(state, string(blobHash[:]))
	blbLen := datatypes.NewMustMap(state, string(blobHash[:])+"_len")
	if blb.Len() > 0 || blb.Len() > 0 {
		// blob already exists
		return nil, fmt.Errorf("blob.storeBlob.fail: blob with hash %s already exist", blobHash.String())
	}
	// save record of the blob. In parallel save record of lenghts of blo fields
	for i, k := range kSorted {
		blb.SetAt([]byte(k), values[i])
		blbLen.SetAt([]byte(k), util.Uint32To4Bytes(uint32(len(values[i]))))
	}
	ret := dict.New()
	ret.Set(ParamHash, codec.EncodeHashValue(&blobHash))

	ctx.Eventf("blob.storeBlob.success hash = %s", blobHash.String())
	return ret, nil
}

// getBlobInfo return lenghts of all fields in the blob
func getBlobInfo(ctx vmtypes.SandboxView) (dict.Dict, error) {
	ctx.Eventf("blob.getBlobInfo.begin")
	state := ctx.State()
	if state.MustGet(VarStateInitialized) == nil {
		return nil, fmt.Errorf("blob.getBlobInfo.fail: not initalized")
	}
	blobHash, ok, err := codec.DecodeHashValue(ctx.Params().MustGet(ParamHash))
	if err != nil {
		return nil, err
	}
	if !ok {
		return nil, fmt.Errorf("paremeter 'blob hash' not found")
	}
	blbLen := datatypes.NewMustMap(state, string(blobHash[:])+"_len")
	ret := dict.New()
	if blbLen.Len() == 0 {
		// not found is not an error but result is empty
		return ret, nil
	}
	blbLen.Iterate(func(elemKey []byte, value []byte) bool {
		ret.Set(kv.Key(elemKey), codec.EncodeInt64(int64(util.MustUint32From4Bytes(value))))
		return true
	})
	return ret, nil
}

func getBlobField(ctx vmtypes.SandboxView) (dict.Dict, error) {
	ctx.Eventf("blob.getBlobField.begin")
	state := ctx.State()
	if state.MustGet(VarStateInitialized) == nil {
		return nil, fmt.Errorf("blob.getBlobField.fail: not initalized")
	}
	blobHash, ok, err := codec.DecodeHashValue(ctx.Params().MustGet(ParamHash))
	if err != nil {
		return nil, err
	}
	if !ok {
		return nil, fmt.Errorf("paremeter 'blob hash' not found")
	}
	blb := datatypes.NewMustMap(state, string(blobHash[:]))
	if blb.Len() == 0 {
		return nil, fmt.Errorf("blob with hash %s has not been found", blobHash.String())
	}
	field := ctx.Params().MustGet(ParamField)
	if field == nil {
		return nil, fmt.Errorf("paremeter 'blob field' not found")
	}
	value := GetBlobField(state, *blobHash, field)
	if value == nil {
		return nil, fmt.Errorf("'blob field %s value not found", string(field))
	}
	ret := dict.New()
	ret.Set(ParamBytes, value)
	return ret, nil
}
