// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";

export const ScName        = "erc20";
export const ScDescription = "ERC-20 PoC for IOTA Smart Contracts";
export const HScName       = new wasmlib.ScHname(0x200e3733);

export const ParamAccount = "ac";
export const ParamAmount = "am";
export const ParamCreator = "c";
export const ParamDelegation = "d";
export const ParamRecipient = "r";
export const ParamSupply = "s";

export const ResultAmount = "am";
export const ResultSupply = "s";

export const StateAllAllowances = "a";
export const StateBalances = "b";
export const StateSupply = "s";

export const FuncApprove = "approve";
export const FuncInit = "init";
export const FuncTransfer = "transfer";
export const FuncTransferFrom = "transferFrom";
export const ViewAllowance = "allowance";
export const ViewBalanceOf = "balanceOf";
export const ViewTotalSupply = "totalSupply";

export const HFuncApprove = new wasmlib.ScHname(0xa0661268);
export const HFuncInit = new wasmlib.ScHname(0x1f44d644);
export const HFuncTransfer = new wasmlib.ScHname(0xa15da184);
export const HFuncTransferFrom = new wasmlib.ScHname(0xd5e0a602);
export const HViewAllowance = new wasmlib.ScHname(0x5e16006a);
export const HViewBalanceOf = new wasmlib.ScHname(0x67ef8df4);
export const HViewTotalSupply = new wasmlib.ScHname(0x9505e6ca);
