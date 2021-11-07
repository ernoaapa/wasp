// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

use crate::*;
use crate::keys::*;

#[derive(Clone, Copy)]
pub struct ImmutableApproveParams {
    pub(crate) id: i32,
}

impl ImmutableApproveParams {

    pub fn amount(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}

    pub fn delegation(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_DELEGATION))
	}
}

#[derive(Clone, Copy)]
pub struct MutableApproveParams {
    pub(crate) id: i32,
}

impl MutableApproveParams {

    pub fn amount(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}

    pub fn delegation(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_DELEGATION))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableInitParams {
    pub(crate) id: i32,
}

impl ImmutableInitParams {

    pub fn creator(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_CREATOR))
	}

    pub fn supply(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_SUPPLY))
	}
}

#[derive(Clone, Copy)]
pub struct MutableInitParams {
    pub(crate) id: i32,
}

impl MutableInitParams {

    pub fn creator(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_CREATOR))
	}

    pub fn supply(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_SUPPLY))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableTransferParams {
    pub(crate) id: i32,
}

impl ImmutableTransferParams {

    pub fn account(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn amount(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}
}

#[derive(Clone, Copy)]
pub struct MutableTransferParams {
    pub(crate) id: i32,
}

impl MutableTransferParams {

    pub fn account(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn amount(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableTransferFromParams {
    pub(crate) id: i32,
}

impl ImmutableTransferFromParams {

    pub fn account(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn amount(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}

    pub fn recipient(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_RECIPIENT))
	}
}

#[derive(Clone, Copy)]
pub struct MutableTransferFromParams {
    pub(crate) id: i32,
}

impl MutableTransferFromParams {

    pub fn account(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn amount(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_AMOUNT))
	}

    pub fn recipient(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_RECIPIENT))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableAllowanceParams {
    pub(crate) id: i32,
}

impl ImmutableAllowanceParams {

    pub fn account(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn delegation(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_DELEGATION))
	}
}

#[derive(Clone, Copy)]
pub struct MutableAllowanceParams {
    pub(crate) id: i32,
}

impl MutableAllowanceParams {

    pub fn account(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}

    pub fn delegation(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_DELEGATION))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableBalanceOfParams {
    pub(crate) id: i32,
}

impl ImmutableBalanceOfParams {

    pub fn account(&self) -> ScImmutableAgentID {
		ScImmutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}
}

#[derive(Clone, Copy)]
pub struct MutableBalanceOfParams {
    pub(crate) id: i32,
}

impl MutableBalanceOfParams {

    pub fn account(&self) -> ScMutableAgentID {
		ScMutableAgentID::new(self.id, idx_map(IDX_PARAM_ACCOUNT))
	}
}
