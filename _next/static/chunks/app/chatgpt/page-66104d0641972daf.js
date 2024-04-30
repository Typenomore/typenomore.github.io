(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{760:function(e,t,r){Promise.resolve().then(r.bind(r,9455))},9455:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(9268),a=r(2026);async function i(){return await a.Z.run(e=>{let{selection:t}=e.currentPage,r=e=>"TEXT"===e.type?e.characters:"STICKY"===e.type||"SHAPE_WITH_TEXT"===e.type?e.text.characters:null,n=[];for(let e of t){if("findAllWithCriteria"in e){let t=e.findAllWithCriteria({types:["TEXT","STICKY","SHAPE_WITH_TEXT"]}).map(r).filter(e=>null!==e);n.push(...t)}let t=r(e);null!==t&&n.push(t)}return n})}async function o(){let e=await a.Z.run(e=>{let{selection:t}=e.currentPage;return t.reduce((e,t)=>{let r=t.absoluteBoundingBox;return r?{top:Math.min(e.top,r.y),right:Math.max(e.right,r.x+r.width)}:e},{top:1/0,right:-1/0})});return e.top===1/0||e.right===-1/0?null:{x:e.right+48,y:e.top}}var s=r(6006);async function l(e){var t;let r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("######")},body:JSON.stringify({...e,model:"gpt-3.5-turbo"})}),n=null===(t=r.body)||void 0===t?void 0:t.pipeThrough(new TextDecoderStream).getReader();if(!n)throw Error("Error reading response");return n}function c(){let[e,t]=(0,s.useState)(""),r=async()=>{t("");let e=await i();if(!e.length){a.Z.run(async e=>{e.notify("Please select a layer with text in it to generate a poem.",{error:!0})});return}let r=await l({layers:e}),n="";for(;;){let{done:e,value:a}=await r.read();if(e)break;t(n+=a)}},c=async()=>{let e=await i();if(!e.length){a.Z.run(async e=>{e.notify("Please select a layer with text in it to generate a poem.",{error:!0})});return}let t=await l({layers:e}),r="",n=null,s=await o(),c=async()=>{n=await a.Z.run(async(e,t)=>{let{nodeID:r,text:n,textPosition:a}=t,i=e.getNodeById(null!=r?r:"");if(!i){var o,s;(i=e.createText()).x=null!==(o=null==a?void 0:a.x)&&void 0!==o?o:0,i.y=null!==(s=null==a?void 0:a.y)&&void 0!==s?s:0}if("TEXT"!==i.type)return"";let l=i.height;return await e.loadFontAsync({family:"Inter",style:"Medium"}),i.fontName={family:"Inter",style:"Medium"},i.characters=n,l!==i.height&&e.viewport.scrollAndZoomIntoView([i]),i.id},{nodeID:n,text:r,textPosition:s})};for(;;){let{done:e,value:n}=await t.read();if(e)break;r+=n,await c()}};return(0,n.jsxs)("div",{className:"flex min-h-screen flex-col items-center bg-gray-900 text-white",children:[(0,n.jsx)("h1",{className:"mb-5 mt-2 text-4xl font-bold",children:"Poem Generator"}),(0,n.jsx)("div",{className:"mb-5 text-sm text-gray-300",children:"Select a node to create a poem about the text inside of it."}),(0,n.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,n.jsx)("button",{onClick:r,className:"mb-5 rounded bg-indigo-600 p-2 px-4 text-white hover:bg-indigo-700",children:"Generate Poem in iframe"}),(0,n.jsx)("button",{onClick:c,className:"mb-5 rounded bg-green-600 p-2 px-4 text-white hover:bg-green-700",children:"Generate Poem on Canvas"})]}),e&&(0,n.jsx)("div",{className:"m-2 rounded border border-gray-600 bg-gray-800 p-5 text-gray-200 shadow-lg",children:(0,n.jsx)("pre",{className:"whitespace-pre-wrap",children:(0,n.jsx)("p",{className:"text-md",children:e})})})]})}},2026:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=new class{run(e,t){return new Promise((r,n)=>{let a=this.id++,i=e=>{var t,o;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===a&&(window.removeEventListener("message",i),r(e.data.pluginMessage.result)),(null===(o=e.data.pluginMessage)||void 0===o?void 0:o.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===a)){window.removeEventListener("message",i);let t=e.data.pluginMessage.error;n(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",i);let o={pluginMessage:{type:"EVAL",code:e.toString(),id:a,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(o,e)}catch(e){}})})}constructor(){this.id=0}}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[253,961,744],function(){return e(e.s=760)}),_N_E=e.O()}]);