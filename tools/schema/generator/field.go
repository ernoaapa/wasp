// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

package generator

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/iotaledger/wasp/packages/vm/wasmlib"
)

var (
	fldNameRegexp  = regexp.MustCompile(`^[a-zA-Z][a-zA-Z0-9]*$`)
	fldAliasRegexp = regexp.MustCompile(`^[a-zA-Z0-9_$#@*%\-]+$`)
	fldTypeRegexp  = regexp.MustCompile(`^[A-Z][a-zA-Z0-9]+$`)
)

var FieldTypes = map[string]int32{
	"Address":   wasmlib.TYPE_ADDRESS,
	"AgentID":   wasmlib.TYPE_AGENT_ID,
	"Bytes":     wasmlib.TYPE_BYTES,
	"ChainID":   wasmlib.TYPE_CHAIN_ID,
	"Color":     wasmlib.TYPE_COLOR,
	"Hash":      wasmlib.TYPE_HASH,
	"Hname":     wasmlib.TYPE_HNAME,
	"Int16":     wasmlib.TYPE_INT16,
	"Int32":     wasmlib.TYPE_INT32,
	"Int64":     wasmlib.TYPE_INT64,
	"RequestID": wasmlib.TYPE_REQUEST_ID,
	"String":    wasmlib.TYPE_STRING,
}

type Field struct {
	Name     string // external name for this field
	Alias    string // internal name alias, can be different from Name
	Array    bool
	Comment  string
	KeyID    int
	MapKey   string
	Optional bool
	Type     string
	TypeID   int32
}

func (f *Field) Compile(s *Schema, fldName, fldType string) error {
	fldName = strings.TrimSpace(fldName)
	f.Name = fldName
	f.Alias = fldName
	index := strings.Index(fldName, "=")
	if index >= 0 {
		f.Name = strings.TrimSpace(fldName[:index])
		f.Alias = strings.TrimSpace(fldName[index+1:])
	}
	if !fldNameRegexp.MatchString(f.Name) {
		return fmt.Errorf("invalid field name: %s", f.Name)
	}
	if !fldAliasRegexp.MatchString(f.Alias) {
		return fmt.Errorf("invalid field alias: %s", f.Alias)
	}

	fldType = strings.TrimSpace(fldType)

	// remove // comment
	index = strings.Index(fldType, "//")
	if index >= 0 {
		f.Comment = " " + fldType[index:]
		fldType = strings.TrimSpace(fldType[:index])
	}

	// remove optional indicator
	n := len(fldType)
	if n > 1 && fldType[n-1:] == "?" {
		f.Optional = true
		fldType = strings.TrimSpace(fldType[:n-1])
	}

	n = len(fldType)
	if n > 2 && fldType[n-2:] == "[]" {
		// must be array
		f.Array = true
		fldType = strings.TrimSpace(fldType[:n-2])
	} else if n > 4 && fldType[:4] == "map[" {
		// must be map
		index = strings.Index(fldType, "]")
		if index > 5 {
			f.MapKey = strings.TrimSpace(fldType[4:index])
			if !fldTypeRegexp.MatchString(f.MapKey) {
				return fmt.Errorf("invalid key field type: %s", f.MapKey)
			}
			fldType = strings.TrimSpace(fldType[index+1:])
		}
	}
	f.Type = fldType
	if !fldTypeRegexp.MatchString(f.Type) {
		return fmt.Errorf("invalid field type: %s", f.Type)
	}
	typeID, ok := FieldTypes[f.Type]
	if ok {
		f.TypeID = typeID
		return nil
	}
	for _, typeDef := range s.Structs {
		if f.Type == typeDef.Name {
			return nil
		}
	}
	for _, subtype := range s.Typedefs {
		if f.Type == subtype.Name {
			return nil
		}
	}
	return fmt.Errorf("invalid field type: %s", f.Type)
}
