// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package coreroot

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type ImmutableDeployContractParams struct {
	id int32
}

func (s ImmutableDeployContractParams) Description() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, ParamDescription.KeyID())
}

func (s ImmutableDeployContractParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, ParamName.KeyID())
}

func (s ImmutableDeployContractParams) ProgramHash() wasmlib.ScImmutableHash {
	return wasmlib.NewScImmutableHash(s.id, ParamProgramHash.KeyID())
}

type MutableDeployContractParams struct {
	id int32
}

func (s MutableDeployContractParams) Description() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, ParamDescription.KeyID())
}

func (s MutableDeployContractParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, ParamName.KeyID())
}

func (s MutableDeployContractParams) ProgramHash() wasmlib.ScMutableHash {
	return wasmlib.NewScMutableHash(s.id, ParamProgramHash.KeyID())
}

type ImmutableGrantDeployPermissionParams struct {
	id int32
}

func (s ImmutableGrantDeployPermissionParams) Deployer() wasmlib.ScImmutableAgentID {
	return wasmlib.NewScImmutableAgentID(s.id, ParamDeployer.KeyID())
}

type MutableGrantDeployPermissionParams struct {
	id int32
}

func (s MutableGrantDeployPermissionParams) Deployer() wasmlib.ScMutableAgentID {
	return wasmlib.NewScMutableAgentID(s.id, ParamDeployer.KeyID())
}

type ImmutableRevokeDeployPermissionParams struct {
	id int32
}

func (s ImmutableRevokeDeployPermissionParams) Deployer() wasmlib.ScImmutableAgentID {
	return wasmlib.NewScImmutableAgentID(s.id, ParamDeployer.KeyID())
}

type MutableRevokeDeployPermissionParams struct {
	id int32
}

func (s MutableRevokeDeployPermissionParams) Deployer() wasmlib.ScMutableAgentID {
	return wasmlib.NewScMutableAgentID(s.id, ParamDeployer.KeyID())
}

type ImmutableFindContractParams struct {
	id int32
}

func (s ImmutableFindContractParams) Hname() wasmlib.ScImmutableHname {
	return wasmlib.NewScImmutableHname(s.id, ParamHname.KeyID())
}

type MutableFindContractParams struct {
	id int32
}

func (s MutableFindContractParams) Hname() wasmlib.ScMutableHname {
	return wasmlib.NewScMutableHname(s.id, ParamHname.KeyID())
}
