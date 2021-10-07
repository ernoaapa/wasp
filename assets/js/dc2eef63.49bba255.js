(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[5144],{1871:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),o=n(4179);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,a.useState)(o),x=g[0],w=g[1],b=a.Children.toArray(e.children),y=[];if(null!=p){var k=h[p];null!=k&&k!==x&&d.some((function(e){return e.value===k}))&&w(k)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;w(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,o,i,r,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,c=r.innerHeight,l=r.innerWidth,n>=0&&i<=l&&o<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case l:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},1658:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=n(1137),c=n(1871),s=["components"],l={},u="Function Call Context",d={unversionedId:"guide/schema/context",id:"guide/schema/context",isDocsHomePage:!1,title:"Function Call Context",description:"We saw that proxy objects provide generic access capabilities to the data on the host. It",source:"@site/docs/guide/schema/context.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/context",permalink:"/docs/guide/schema/context",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/context.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WasmLib Data Types",permalink:"/docs/guide/schema/types"},next:{title:"Smart Contract Schema Tool",permalink:"/docs/guide/schema/schema"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"function-call-context"},"Function Call Context"),(0,i.kt)("p",null,"We saw that proxy objects provide generic access capabilities to the data on the host. It\nis now time to introduce the gateway to the host that allows us to access the\nfunctionality that the host sandbox interface provides. We call this gateway the ",(0,i.kt)("em",{parentName:"p"},"function\ncall context"),"\n, and it is provided as a predefined parameter to the smart contract function. In fact, we\ndistinguish two separate flavors of smart contract functions in the ISCP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Func"),", which allows full mutable access to the smart contract state, and always\nresults in a state update."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"),", which allows only limited, immutable access to the smart contract state, and\ntherefore does not result in a state update. Views can be used to efficiently query the\ncurrent state of the smart contract.")),(0,i.kt)("p",null,"To support this function type distinction, Func and View functions each receive a\nseparate, different function call context. Only the functionality that is necessary for\ntheir implementation can be accessed through their respective contexts,\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"ScFuncContext"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"ScViewContext"),". ScViewContext only provides a limited, immutable subset of the full\nfunctionality provided by ScFuncContext. By having separate context types compile-time\ntype-checking can be used to enforce their usage constraints."),(0,i.kt)("p",null,"An important part of setting up a smart contract is defining exactly which Funcs and Views\nare available and informing the host about them. It is the host that will have to dispatch\nthe function calls to the corresponding smart contract code. To that end the smart\ncontract Wasm code will expose an externally callable function named ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load")," that will\nbe called by the host upon initial loading of the smart contract code. The ",(0,i.kt)("inlineCode",{parentName:"p"},"on_load"),"\nfunction must provide the host with the list of Funcs and Views and specific identifiers\nthat can be used to invoke them. It uses a special temporary function context named\n",(0,i.kt)("inlineCode",{parentName:"p"},"ScExports"),". That context can be used to provide the host with a function, type, name, and\nidentifier for each Func and View that can be called in the smart contract."),(0,i.kt)("p",null,"When the host must call a smart contract function it will do so by invoking a second\nexternally callable function named ",(0,i.kt)("inlineCode",{parentName:"p"},"on_call"),". The host passes the identifier for the smart\ncontract Func or View that need to be invoked. The client Wasm code will then use this\nidentifier to set up the corresponding function context and call the function. Note that\nthere are no other parameters necessary because the function can subsequently access any\nother function-related data through its context object."),(0,i.kt)("p",null,"Here is a (simplified) example from the ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract that we will use\nto showcase some features of WasmLib:"),(0,i.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n'))),(0,i.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n')))),(0,i.kt)("p",null,"As you can see this on_load() function first creates the required ScExports context and\nthen proceeds to define four Funcs named ",(0,i.kt)("inlineCode",{parentName:"p"},"divide"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"setOwner"),". It\ndoes this by calling the add_func() method of the ScExports context. Next it defines two\nViews named ",(0,i.kt)("inlineCode",{parentName:"p"},"getFactor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getOwner")," by calling the add_view() method of the ScExports\ncontext. The second parameter to these methods is the actual smart contract function\nassociated with the name specified. These methods will also automatically assign a unique\nidentifier to the function and then send everything to the host."),(0,i.kt)("p",null,"In its simplest form this is all that is necessary to initialize a smart contract. To\nfinalize this example, here is what the skeleton function implementations for the above\nsmart contract definition would look like:"),(0,i.kt)(r.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func funcDivide(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcDivide")\n}\n\nfunc funcInit(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcInit")\n}\n\nfunc funcMember(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcMember")\n}\n\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n}\n\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetFactor")\n}\n\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetOwner")\n}\n'))),(0,i.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'fn func_divide(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.divide");\n}\n\nfn func_init(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.init");\n}\n\nfn func_member(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.member");\n}\n\nfn func_set_owner(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.setOwner");\n}\n\nfn view_get_factor(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getFactor");\n}\n\nfn view_get_owner(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getOwner");\n}\n')))),(0,i.kt)("p",null,"As you can see the functions are each provided with a context parameter, which is\nconventionally named ",(0,i.kt)("em",{parentName:"p"},"ctx"),". Notice that the four Funcs are passed an ScFuncContext,\nwhereas the two Views receive an ScViewContext. We're also already showcasing an important\nfeature of the contexts: the log() method. This can be used to log human-readable text to\nthe host's log output. Logging text is the only way to add tracing to a smart contract,\nbecause it does not have any I/O capabilities other than what the host provides. There is\na second logging method, called trace(), that can be used to provide extra debug\ninformation to the host's log output. This output can be selectively turned on and off at\nthe host."),(0,i.kt)("p",null,"In the next section we will introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," tool that simplifies smart contract\nprogramming a lot."))}f.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);