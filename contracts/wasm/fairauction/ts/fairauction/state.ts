// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class MapColorToImmutableAuction {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getAuction(key: wasmlib.ScColor): sc.ImmutableAuction {
        return new sc.ImmutableAuction(this.objID, key.getKeyID());
    }
}

export class MapColorToImmutableBidderList {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getBidderList(key: wasmlib.ScColor): sc.ImmutableBidderList {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_ARRAY|wasmlib.TYPE_AGENT_ID);
        return new sc.ImmutableBidderList(subID);
    }
}

export class MapColorToImmutableBids {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getBids(key: wasmlib.ScColor): sc.ImmutableBids {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.ImmutableBids(subID);
    }
}

export class ImmutableFairAuctionState extends wasmlib.ScMapID {

    auctions(): sc.MapColorToImmutableAuction {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateAuctions], wasmlib.TYPE_MAP);
		return new sc.MapColorToImmutableAuction(mapID);
	}

    bidderList(): sc.MapColorToImmutableBidderList {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBidderList], wasmlib.TYPE_MAP);
		return new sc.MapColorToImmutableBidderList(mapID);
	}

    bids(): sc.MapColorToImmutableBids {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBids], wasmlib.TYPE_MAP);
		return new sc.MapColorToImmutableBids(mapID);
	}

    ownerMargin(): wasmlib.ScImmutableInt64 {
		return new wasmlib.ScImmutableInt64(this.mapID, sc.idxMap[sc.IdxStateOwnerMargin]);
	}
}

export class MapColorToMutableAuction {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getAuction(key: wasmlib.ScColor): sc.MutableAuction {
        return new sc.MutableAuction(this.objID, key.getKeyID());
    }
}

export class MapColorToMutableBidderList {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getBidderList(key: wasmlib.ScColor): sc.MutableBidderList {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_ARRAY|wasmlib.TYPE_AGENT_ID);
        return new sc.MutableBidderList(subID);
    }
}

export class MapColorToMutableBids {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getBids(key: wasmlib.ScColor): sc.MutableBids {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.MutableBids(subID);
    }
}

export class MutableFairAuctionState extends wasmlib.ScMapID {

    auctions(): sc.MapColorToMutableAuction {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateAuctions], wasmlib.TYPE_MAP);
		return new sc.MapColorToMutableAuction(mapID);
	}

    bidderList(): sc.MapColorToMutableBidderList {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBidderList], wasmlib.TYPE_MAP);
		return new sc.MapColorToMutableBidderList(mapID);
	}

    bids(): sc.MapColorToMutableBids {
		let mapID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBids], wasmlib.TYPE_MAP);
		return new sc.MapColorToMutableBids(mapID);
	}

    ownerMargin(): wasmlib.ScMutableInt64 {
		return new wasmlib.ScMutableInt64(this.mapID, sc.idxMap[sc.IdxStateOwnerMargin]);
	}
}
