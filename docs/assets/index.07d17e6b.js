import{u as m,r as o,R as r}from"./vendor.03af79c8.js";import{E as u,a as n}from"./md-editor-rt.es.7864d26e.js";import{v as l}from"./package.a5d730d2.js";const E=()=>{const t=m(e=>e),[s,a]=o.exports.useState(""),c=()=>{n.get(`/about-${t.lang}.md`).then(({data:e})=>{a(e.replace(/\$\{EDITOR_VERSION\}/g,l))}).catch(e=>{console.error(e),a("\u6587\u6863\u8BFB\u53D6\u5931\u8D25\uFF01")})};return o.exports.useEffect(c,[t.lang]),r.createElement("div",{className:"container"},r.createElement("div",{className:"doc"},r.createElement("div",{className:"content",style:{width:"100%"}},r.createElement(u,{theme:t.theme,modelValue:s,previewTheme:t.previewTheme,previewOnly:!0,showCodeRowNumber:!0}))))};export{E as default};
