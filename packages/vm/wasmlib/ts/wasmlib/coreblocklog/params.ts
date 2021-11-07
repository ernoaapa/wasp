// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class ImmutableGetBlockInfoParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class MutableGetBlockInfoParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class ImmutableGetEventsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class MutableGetEventsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class ImmutableGetEventsForContractParams extends wasmlib.ScMapID {

    contractHname(): wasmlib.ScImmutableHname {
		return new wasmlib.ScImmutableHname(this.mapID, wasmlib.Key32.fromString(sc.ParamContractHname));
	}

    fromBlock(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamFromBlock));
	}

    toBlock(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamToBlock));
	}
}

export class MutableGetEventsForContractParams extends wasmlib.ScMapID {

    contractHname(): wasmlib.ScMutableHname {
		return new wasmlib.ScMutableHname(this.mapID, wasmlib.Key32.fromString(sc.ParamContractHname));
	}

    fromBlock(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamFromBlock));
	}

    toBlock(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamToBlock));
	}
}

export class ImmutableGetEventsForRequestParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScImmutableRequestID {
		return new wasmlib.ScImmutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}

export class MutableGetEventsForRequestParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScMutableRequestID {
		return new wasmlib.ScMutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}

export class ImmutableGetRequestIDsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class MutableGetRequestIDsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class ImmutableGetRequestReceiptParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScImmutableRequestID {
		return new wasmlib.ScImmutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}

export class MutableGetRequestReceiptParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScMutableRequestID {
		return new wasmlib.ScMutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}

export class ImmutableGetRequestReceiptsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class MutableGetRequestReceiptsForBlockParams extends wasmlib.ScMapID {

    blockIndex(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamBlockIndex));
	}
}

export class ImmutableIsRequestProcessedParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScImmutableRequestID {
		return new wasmlib.ScImmutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}

export class MutableIsRequestProcessedParams extends wasmlib.ScMapID {

    requestID(): wasmlib.ScMutableRequestID {
		return new wasmlib.ScMutableRequestID(this.mapID, wasmlib.Key32.fromString(sc.ParamRequestID));
	}
}
