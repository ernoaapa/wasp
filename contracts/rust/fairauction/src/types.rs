// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use wasmlib::*;

//@formatter:off
pub struct Auction {
    pub color:          ScColor,   // color of tokens for sale
    pub creator:        ScAgentId, // issuer of start_auction transaction
    pub deposit:        i64,       // deposit by auction owner to cover the SC fees
    pub description:    String,    // auction description
    pub duration:       i32,       // auction duration in minutes
    pub highest_bid:    i64,       // the current highest bid amount
    pub highest_bidder: ScAgentId, // the current highest bidder
    pub minimum_bid:    i64,       // minimum bid amount
    pub num_tokens:     i64,       // number of tokens for sale
    pub owner_margin:   i64,       // auction owner's margin in promilles
    pub when_started:   i64,       // timestamp when auction started
}
//@formatter:on

impl Auction {
    pub fn from_bytes(bytes: &[u8]) -> Auction {
        let mut decode = BytesDecoder::new(bytes);
        Auction {
            color: decode.color(),
            creator: decode.agent_id(),
            deposit: decode.int64(),
            description: decode.string(),
            duration: decode.int32(),
            highest_bid: decode.int64(),
            highest_bidder: decode.agent_id(),
            minimum_bid: decode.int64(),
            num_tokens: decode.int64(),
            owner_margin: decode.int64(),
            when_started: decode.int64(),
        }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut encode = BytesEncoder::new();
        encode.color(&self.color);
        encode.agent_id(&self.creator);
        encode.int64(self.deposit);
        encode.string(&self.description);
        encode.int32(self.duration);
        encode.int64(self.highest_bid);
        encode.agent_id(&self.highest_bidder);
        encode.int64(self.minimum_bid);
        encode.int64(self.num_tokens);
        encode.int64(self.owner_margin);
        encode.int64(self.when_started);
        return encode.data();
    }
}

//@formatter:off
pub struct Bid {
    pub amount:    i64, // cumulative amount of bids from same bidder
    pub index:     i32, // index of bidder in bidder list
    pub timestamp: i64, // timestamp of most recent bid
}
//@formatter:on

impl Bid {
    pub fn from_bytes(bytes: &[u8]) -> Bid {
        let mut decode = BytesDecoder::new(bytes);
        Bid {
            amount: decode.int64(),
            index: decode.int32(),
            timestamp: decode.int64(),
        }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut encode = BytesEncoder::new();
        encode.int64(self.amount);
        encode.int32(self.index);
        encode.int64(self.timestamp);
        return encode.data();
    }
}
