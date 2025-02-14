// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// standard value types used by the ISCP

use std::convert::TryInto;

use crate::context::*;
use crate::host::*;
use crate::keys::*;

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 33-byte Tangle address ids
#[derive(PartialEq, Clone)]
pub struct ScAddress {
    id: [u8; 33],
}

impl ScAddress {
    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScAddress {
        ScAddress { id: bytes.try_into().expect("invalid address id length") }
    }

    // returns agent id representation of this Tangle address
    pub fn as_agent_id(&self) -> ScAgentID {
        let mut agent_id = ScAgentID { id: [0; 37] };
        agent_id.id[..33].copy_from_slice(&self.id[..33]);
        agent_id
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScAddress {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 37-byte agent ids
#[derive(PartialEq, Clone)]
pub struct ScAgentID {
    id: [u8; 37],
}

impl ScAgentID {
    // construct from address and contract name hash
    pub fn new(address: &ScAddress, hname: &ScHname) -> ScAgentID {
        let mut agent_id = ScAgentID { id: [0; 37] };
        agent_id.id[..33].copy_from_slice(&address.to_bytes());
        agent_id.id[33..].copy_from_slice(&hname.to_bytes());
        agent_id
    }

    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScAgentID {
        ScAgentID { id: bytes.try_into().expect("invalid agent id lengths") }
    }

    // gets Tangle address from agent id
    pub fn address(&self) -> ScAddress {
        let mut address = ScAddress { id: [0; 33] };
        address.id[..33].copy_from_slice(&self.id[..33]);
        address
    }

    // get contract name hash for this agent
    pub fn hname(&self) -> ScHname {
        ScHname::from_bytes(&self.id[33..])
    }

    // checks to see if agent id represents a Tangle address
    pub fn is_address(&self) -> bool {
        self.hname() == ScHname(0)
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScAgentID {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 33-byte chain ids
#[derive(PartialEq, Clone)]
pub struct ScChainID {
    id: [u8; 33],
}

impl ScChainID {
    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScChainID {
        ScChainID { id: bytes.try_into().expect("invalid chain id length") }
    }

    // gets Tangle address from chain id
    pub fn address(&self) -> ScAddress {
        let mut address = ScAddress { id: [0; 33] };
        address.id[..33].copy_from_slice(&self.id[..33]);
        address
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScChainID {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 32-byte token color
#[derive(PartialEq, Clone)]
pub struct ScColor {
    id: [u8; 32],
}

impl ScColor {
    // predefined colors
    pub const IOTA: ScColor = ScColor { id: [0x00; 32] };
    pub const MINT: ScColor = ScColor { id: [0xff; 32] };

    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScColor {
        ScColor { id: bytes.try_into().expect("invalid color id length") }
    }

    // construct from request id, this will return newly minted color
    pub fn from_request_id(request_id: &ScRequestID) -> ScColor {
        let mut color = ScColor { id: [0x00; 32] };
        color.id[..].copy_from_slice(&request_id.id[..]);
        color
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScColor {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 32-byte hash value
#[derive(PartialEq, Clone)]
pub struct ScHash {
    id: [u8; 32],
}

impl ScHash {
    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScHash {
        ScHash { id: bytes.try_into().expect("invalid hash id length") }
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScHash {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 4-byte name hash
#[derive(PartialEq, Clone, Copy)]
pub struct ScHname(pub u32);

impl ScHname {
    // construct from name string
    pub fn new(name: &str) -> ScHname {
        ScFuncContext {}.utility().hname(name)
    }

    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScHname {
        let val = u32::from_le_bytes(bytes.try_into().expect("invalid hname length"));
        ScHname(val)
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> Vec<u8> {
        self.0.to_le_bytes().to_vec()
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        self.0.to_string()
    }
}

// can be used as key in maps
impl MapKey for ScHname {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(&self.0.to_le_bytes())
    }
}

// \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

// value object for 34-byte transaction request ids
#[derive(PartialEq, Clone)]
pub struct ScRequestID {
    id: [u8; 34],
}

impl ScRequestID {
    // construct from byte array
    pub fn from_bytes(bytes: &[u8]) -> ScRequestID {
        ScRequestID { id: bytes.try_into().expect("invalid request id length") }
    }

    // convert to byte array representation
    pub fn to_bytes(&self) -> &[u8] {
        &self.id
    }

    // human-readable string representation
    pub fn to_string(&self) -> String {
        base58_encode(&self.id)
    }
}

// can be used as key in maps
impl MapKey for ScRequestID {
    fn get_key_id(&self) -> Key32 {
        get_key_id_from_bytes(self.to_bytes())
    }
}
