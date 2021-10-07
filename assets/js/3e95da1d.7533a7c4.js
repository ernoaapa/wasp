(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1032],{1871:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(4179);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,f=e.groupId,m=e.className,p=o(),h=p.tabGroupChoices,v=p.setTabGroupChoices,g=(0,a.useState)(r),y=g[0],b=g[1],k=a.Children.toArray(e.children),w=[];if(null!=f){var x=h[f];null!=x&&x!==y&&d.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;b(a),null!=f&&(v(f,a),setTimeout((function(){var e,n,a,r,o,c,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,n>=0&&o<=s&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},311:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),c=n(1137),i=n(1871),l=["components"],s={},u="Calling Functions",d={unversionedId:"guide/schema/call",id:"guide/schema/call",isDocsHomePage:!1,title:"Calling Functions",description:"Synchronous function calls between smart contracts act very similar to how normal function",source:"@site/docs/guide/schema/call.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/call",permalink:"/docs/guide/schema/call",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/call.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function Descriptors",permalink:"/docs/guide/schema/funcdesc"},next:{title:"Posting Asynchronous Requests",permalink:"/docs/guide/schema/post"}},f=[],m={toc:f};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-functions"},"Calling Functions"),(0,o.kt)("p",null,"Synchronous function calls between smart contracts act very similar to how normal function\ncalls work in any programming language, but with a slight twist. With normal function\ncalls you share all the memory that you can access with every function that you call.\nHowever, when calling a smart contract function you can only access the memory assigned to\nthat specific smart contract. Remember, each smart contract runs in its own sandbox\nenvironment. Therefore, the only way to share data between smart contracts that call each\nother is through function parameters and return values."),(0,o.kt)("p",null,"Synchronous calls can only be made between contracts that are running on the same contract\nchain. The ISCP host knows about all the contracts it is running on a chain, and therefore\nis able to dispatch the call to the correct contract function. The function descriptor is\nused to specify the call parameters (if any) through its ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," proxy, and to invoke the\nfunction through its ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," interface."),(0,o.kt)("p",null,"In addition, when the function that is called is not a View it is possible to pass tokens\nto the function call through this interface. Note that the only way to call a function and\nproperly pass tokens to it ",(0,o.kt)("em",{parentName:"p"},"within the same contract")," is through the function descriptor,\nbecause otherwise the incoming() function will not register any incoming tokens."),(0,o.kt)("p",null,"Then the call is made the calling function will be paused and wait for the called function\nto complete. After completion, it may access returned values (if any) through\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," proxy of the function descriptor."),(0,o.kt)("p",null,"When calling from a View function, it is only possible to call other View functions. The\nScFuncs interface enforces this at compile-time through the ISCP function context that\nneeds to be passed to the member function that creates the function descriptor."),(0,o.kt)("p",null,"Here's how a smart contract would tell a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to divide\nthe 1000 tokens it passes to the function:"),(0,o.kt)(c.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.Divide(ctx)\nf.Func.TransferIotas(1000).Call()\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::divide(ctx);\nf.func.transfer_iotas(1000).call();\n")))),(0,o.kt)("p",null,"And here is how a smart contract would ask a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to\nreturn the dispersion factor for a specific address:"),(0,o.kt)(c.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.GetFactor(ctx)\nf.Params.Address().SetValue(address)\nf.Func.Call()\nfactor := f.Results.Factor().Value()\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::get_factor(ctx);\nf.params.address().set_value( & address);\nf.func.call();\nlet factor = f.results.factor().value();\n")))),(0,o.kt)("p",null,"You see how we first create a function descriptor for the desired function, then use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," proxy in the function descriptor to set any required parameters, then direct\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," member of the function descriptor to call the associated function, and finally\nwe use the ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," proxy in the function descriptor to retrieve any results we are\ninterested in."),(0,o.kt)("p",null,'Note that the function descriptors assume that the function to be called is associated\nwith the default Hname of the contract, in this case ScHname::new("dividend"). If you\ndeployed the contract that contains the function you want to call under a different name\nthen you would have to provide its associated Hname to the ',(0,o.kt)("inlineCode",{parentName:"p"},"func")," member through the\nof_contract() member function like this:"),(0,o.kt)(c.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'altContract := NewScHname("alternateName")\nf := dividend.ScFuncs.Divide(ctx)\nf.Func.OfContract(altContract).TransferIotas(1000).Call()\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let altContract = ScHname::new("alternateName");\nlet f = dividend::ScFuncs::divide(ctx);\nf.func.of_contract(altContract).transfer_iotas(1000).call();\n')))),(0,o.kt)("p",null,"In the next section we will look at how we can request smart contract functions in a\ndifferent chain to be executed in a similar way."))}p.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||o;return n?a.createElement(p,c(c({ref:t},u),{},{components:n})):a.createElement(p,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);