// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package fairroulette

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"

const (
	ScName        = "fairroulette"
	ScDescription = ""
	HScName       = wasmlib.ScHname(0xdf79d138)
)

const (
	ParamNumber     = wasmlib.Key("number")
	ParamPlayPeriod = wasmlib.Key("playPeriod")
)

const (
	ResultLastWinningNumber = wasmlib.Key("lastWinningNumber")
	ResultRoundNumber       = wasmlib.Key("roundNumber")
	ResultRoundStartedAt    = wasmlib.Key("roundStartedAt")
	ResultRoundStatus       = wasmlib.Key("roundStatus")
)

const (
	StateBets              = wasmlib.Key("bets")
	StateLastWinningNumber = wasmlib.Key("lastWinningNumber")
	StatePlayPeriod        = wasmlib.Key("playPeriod")
	StateRoundNumber       = wasmlib.Key("roundNumber")
	StateRoundStartedAt    = wasmlib.Key("roundStartedAt")
	StateRoundStatus       = wasmlib.Key("roundStatus")
)

const (
	FuncForcePayout       = "forcePayout"
	FuncForceReset        = "forceReset"
	FuncPayWinners        = "payWinners"
	FuncPlaceBet          = "placeBet"
	FuncPlayPeriod        = "playPeriod"
	ViewLastWinningNumber = "lastWinningNumber"
	ViewRoundNumber       = "roundNumber"
	ViewRoundStartedAt    = "roundStartedAt"
	ViewRoundStatus       = "roundStatus"
)

const (
	HFuncForcePayout       = wasmlib.ScHname(0x555a4c4f)
	HFuncForceReset        = wasmlib.ScHname(0xa331951e)
	HFuncPayWinners        = wasmlib.ScHname(0xfb2b0144)
	HFuncPlaceBet          = wasmlib.ScHname(0xdfba7d1b)
	HFuncPlayPeriod        = wasmlib.ScHname(0xcb94b293)
	HViewLastWinningNumber = wasmlib.ScHname(0x2f5f09fe)
	HViewRoundNumber       = wasmlib.ScHname(0x0dcfe520)
	HViewRoundStartedAt    = wasmlib.ScHname(0x725de8b4)
	HViewRoundStatus       = wasmlib.ScHname(0x145053b5)
)
