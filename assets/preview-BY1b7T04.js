const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-CFRXHY34-C-fYFzuE.js","assets/chunk-NUUEMKO5-Dc9cIJ1e.js","assets/iframe--lTrFyhO.js","assets/index-WI1YhYyJ.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/index-1mov31Uk.js","assets/jsx-runtime-BoFrXSaA.js","assets/index-BeNflsVP.js","assets/index-CJyPbrN5.js","assets/index-DrFu-skq.js","assets/react-18-XGBH5gIB.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./iframe--lTrFyhO.js";import"../sb-preview/runtime.js";var a=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-CFRXHY34-C-fYFzuE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};