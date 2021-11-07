// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use crate::*;
use crate::coreblob::*;
use crate::host::*;

#[derive(Clone, Copy)]
pub struct ImmutableStoreBlobResults {
    pub(crate) id: i32,
}

impl ImmutableStoreBlobResults {

    pub fn hash(&self) -> ScImmutableHash {
		ScImmutableHash::new(self.id, RESULT_HASH.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableStoreBlobResults {
    pub(crate) id: i32,
}

impl MutableStoreBlobResults {

    pub fn hash(&self) -> ScMutableHash {
		ScMutableHash::new(self.id, RESULT_HASH.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableGetBlobFieldResults {
    pub(crate) id: i32,
}

impl ImmutableGetBlobFieldResults {

    pub fn bytes(&self) -> ScImmutableBytes {
		ScImmutableBytes::new(self.id, RESULT_BYTES.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableGetBlobFieldResults {
    pub(crate) id: i32,
}

impl MutableGetBlobFieldResults {

    pub fn bytes(&self) -> ScMutableBytes {
		ScMutableBytes::new(self.id, RESULT_BYTES.get_key_id())
	}
}

pub struct MapStringToImmutableInt32 {
	pub(crate) obj_id: i32,
}

impl MapStringToImmutableInt32 {
    pub fn get_int32(&self, key: &str) -> ScImmutableInt32 {
        ScImmutableInt32::new(self.obj_id, key.get_key_id())
    }
}

#[derive(Clone, Copy)]
pub struct ImmutableGetBlobInfoResults {
    pub(crate) id: i32,
}

impl ImmutableGetBlobInfoResults {

    pub fn blob_sizes(&self) -> MapStringToImmutableInt32 {
		MapStringToImmutableInt32 { obj_id: self.id }
	}
}

pub struct MapStringToMutableInt32 {
	pub(crate) obj_id: i32,
}

impl MapStringToMutableInt32 {
    pub fn clear(&self) {
        clear(self.obj_id);
    }

    pub fn get_int32(&self, key: &str) -> ScMutableInt32 {
        ScMutableInt32::new(self.obj_id, key.get_key_id())
    }
}

#[derive(Clone, Copy)]
pub struct MutableGetBlobInfoResults {
    pub(crate) id: i32,
}

impl MutableGetBlobInfoResults {

    pub fn blob_sizes(&self) -> MapStringToMutableInt32 {
		MapStringToMutableInt32 { obj_id: self.id }
	}
}

pub struct MapHashToImmutableInt32 {
	pub(crate) obj_id: i32,
}

impl MapHashToImmutableInt32 {
    pub fn get_int32(&self, key: &ScHash) -> ScImmutableInt32 {
        ScImmutableInt32::new(self.obj_id, key.get_key_id())
    }
}

#[derive(Clone, Copy)]
pub struct ImmutableListBlobsResults {
    pub(crate) id: i32,
}

impl ImmutableListBlobsResults {

    pub fn blob_sizes(&self) -> MapHashToImmutableInt32 {
		MapHashToImmutableInt32 { obj_id: self.id }
	}
}

pub struct MapHashToMutableInt32 {
	pub(crate) obj_id: i32,
}

impl MapHashToMutableInt32 {
    pub fn clear(&self) {
        clear(self.obj_id);
    }

    pub fn get_int32(&self, key: &ScHash) -> ScMutableInt32 {
        ScMutableInt32::new(self.obj_id, key.get_key_id())
    }
}

#[derive(Clone, Copy)]
pub struct MutableListBlobsResults {
    pub(crate) id: i32,
}

impl MutableListBlobsResults {

    pub fn blob_sizes(&self) -> MapHashToMutableInt32 {
		MapHashToMutableInt32 { obj_id: self.id }
	}
}
