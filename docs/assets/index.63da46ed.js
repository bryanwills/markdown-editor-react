import{u as m,r as s,R as r}from"./vendor.cdc065db.js";import{E as d,a as n}from"./md-editor-rt.es.42602270.js";import{v as u}from"./package.d444c5d2.js";const v=()=>{const t=m(e=>e),[o,a]=s.exports.useState(""),c=()=>{n.get(`/about-${t.lang}.md`).then(({data:e})=>{a(e.replace(/\$\{EDITOR_VERSION\}/g,u))}).catch(e=>{console.error(e),a("\u6587\u6863\u8BFB\u53D6\u5931\u8D25\uFF01")})};return s.exports.useEffect(c,[t.lang]),r.createElement("div",{className:"container"},r.createElement("div",{className:"doc"},r.createElement("div",{className:"content",style:{width:"100%"}},r.createElement(d,{theme:t.theme,modelValue:o,previewTheme:t.previewTheme,previewOnly:!0,showCodeRowNumber:!0}))))};export{v as default};
