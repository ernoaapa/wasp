package tstemplates

var funcsTs = map[string]string{
	// *******************************
	"funcs.ts": `
$#emit tsImports
$#each func funcSignature
`,
	// *******************************
	"funcSignature": `

export function $kind$+$FuncName(ctx: wasmlib.Sc$Kind$+Context, f: sc.$FuncName$+Context): void {
$#emit init$Kind$FuncName
}
`,
	// *******************************
	"initFuncInit": `
    if (f.params.owner().exists()) {
        f.state.owner().setValue(f.params.owner().value());
        return;
    }
    f.state.owner().setValue(ctx.contractCreator());
`,
	// *******************************
	"initFuncSetOwner": `
    f.state.owner().setValue(f.params.owner().value());
`,
	// *******************************
	"initViewGetOwner": `
    f.results.owner().setValue(f.state.owner().value());
`,
}
