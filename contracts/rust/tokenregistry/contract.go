// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package tokenregistry

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type MintSupplyCall struct {
	Func   *wasmlib.ScFunc
	Params MutableMintSupplyParams
}

type TransferOwnershipCall struct {
	Func   *wasmlib.ScFunc
	Params MutableTransferOwnershipParams
}

type UpdateMetadataCall struct {
	Func   *wasmlib.ScFunc
	Params MutableUpdateMetadataParams
}

type GetInfoCall struct {
	Func   *wasmlib.ScView
	Params MutableGetInfoParams
}

type Funcs struct{}

var ScFuncs Funcs

func (sc Funcs) MintSupply(ctx wasmlib.ScFuncCallContext) *MintSupplyCall {
	f := &MintSupplyCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMintSupply)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) TransferOwnership(ctx wasmlib.ScFuncCallContext) *TransferOwnershipCall {
	f := &TransferOwnershipCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncTransferOwnership)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) UpdateMetadata(ctx wasmlib.ScFuncCallContext) *UpdateMetadataCall {
	f := &UpdateMetadataCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncUpdateMetadata)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) GetInfo(ctx wasmlib.ScViewCallContext) *GetInfoCall {
	f := &GetInfoCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetInfo)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}
