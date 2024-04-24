(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{18:function(e,t,n){Promise.resolve().then(n.bind(n,7135))},4177:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(8421),s=n(2351),i=n(6008),r=n(2298),o=n(2913);function l(){let e=(0,i.useRouter)(),{data:t,isLoading:n,error:l}=(0,s.a)({refetchOnWindowFocus:!0,staleTime:60,queryKey:["user"],queryFn:async()=>{let t=await (0,a.Z)();if(!t)return null;let n=await fetch("".concat("https://beta.typenomore.com","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}),s=await n.json(),{data:i}=s,l=401===s.code;if(l)return e.push("/login");if(403===s.code){var c;let t=null===(c=s.data)||void 0===c?void 0:c.type;return"unverified_email"===t?e.push("/email/verification"):"unsubscription"===t?e.push("/subscription"):e.push("/403")}return 200!=s.code?((0,o.Am)(s.message,{type:"error"}),e.push("/login"),null):(r.ZP.identify(i.id,i),i)}});return{user:t,isLoading:n,error:l}}},7135:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(9268),s=n(2026),i=n(6394),r=n.n(i),o=n(6008),l=n(6006),c=n(3590);async function u(e){let{text:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:n}=e,a=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=".concat("AIzaSyB4BI7oivRtfVMNNi21DYRQ9IqaHfljeJI"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({contents:[{parts:[{text:t},{inline_data:{mime_type:"image/png",data:n}}]}]})}),s=await a.json();return s}var d=n(8421);async function g(e){let{prompt:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:n}=e,a=await (0,d.Z)();console.log({accessToken:a,prompt:t,imageBase64:n});let s=await fetch("".concat("https://beta.typenomore.com","/api/generate"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)},method:"POST",body:JSON.stringify({prompt:t,image:"data:image/png;base64,".concat(n)})});console.log({res:s});let i=await s.json();return i}var p=n(4177),m=n(2913),f=n(2298),h=n(2040);function y(){let e=(0,o.useRouter)(),[t,n]=(0,l.useState)(""),[i,y]=(0,l.useState)({frames:[],imageBytes:new Uint8Array,imageBase64:""}),{frames:v,imageBytes:b,imageBase64:w}=i,[x,E]=(0,l.useState)(!1),[j,N]=(0,l.useState)(""),[A,C]=(0,l.useState)([]);(0,l.useEffect)(()=>{if((async()=>{let t=await (0,d.Z)();t||e.push("/login")})(),s.Z.run(async e=>{e.on("selectionchange",async()=>{e.ui.postMessage({message:{frames:[],imageBytes:[],imageBase64:""},type:"selectionchange"});let t=e.currentPage.selection;if(!t.length)return;let n=t[0],a=await n.exportAsync({format:"PNG"}),s=e.base64Encode(a);e.ui.postMessage({message:{frames:t,imageBytes:a,imageBase64:s},type:"selectionchange"})})}),window.onmessage=e=>{let{message:t,type:n}=e.data.pluginMessage;"selectionchange"!=n||j||y(t)},f.ZP.isFeatureEnabled("generating-types")){let e=f.ZP.getFeatureFlagPayload("generating-types");C(e)}return()=>{s.Z.run(async e=>{e.off("selectionchange",()=>{})})}},[]);let{user:P,isLoading:I,error:Z}=(0,p.Z)();if(Z)return"An error has occurred: "+Z.message;if(I)return"Loading...";async function S(e){var n,a,s,i;null==e||e.preventDefault(),E(!0);let r=f.ZP.isFeatureEnabled("AI-driver")&&f.ZP.getFeatureFlagPayload("AI-driver")||h.env.NEXT_PUBLIC_AI_DRIVE;console.log({DRIVER:r});let o="";if("OPENAI"==r){let e=await g({prompt:t,imageBase64:w});o=null==e?void 0:e.data}else if("GEMINI"==r){let e=await u({text:t,imageBase64:w});if(e.error)return console.error(e.error.message),!1;let{candidates:r}=e;o=null==r?void 0:null===(i=r[0])||void 0===i?void 0:null===(s=i.content)||void 0===s?void 0:null===(a=s.parts)||void 0===a?void 0:null===(n=a[0])||void 0===n?void 0:n.text}else o="Error: Unset AI Driver Gemini/Openai";N(o),E(!1)}return P||e.push("/login"),(0,a.jsx)("section",{className:"mx-auto flex w-full max-w-md flex-col gap-3 px-5 py-6",children:j?(0,a.jsxs)("article",{className:"flex w-full flex-col gap-3",children:[(0,a.jsx)("h2",{className:"",children:"Result"}),(0,a.jsx)(c.U,{className:" flex h-[375px] flex-col gap-3 overflow-auto rounded-md border border-[#DEE2E6] bg-white px-3 py-3.5 text-xs",children:j}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-2.5",children:[(0,a.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>{N(""),S()},children:"Again"}),(0,a.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>(function(e){try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),(0,m.Am)("Copied to clipboard",{type:"success"})}catch(e){console.log({error:e}),(0,m.Am)("Failed to copy",{type:"error"})}})(j),children:"Copy"}),(0,a.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>N(""),children:"Reset"})]})]}):(0,a.jsxs)("form",{className:"flex w-full flex-col gap-3",onSubmit:S,children:[(0,a.jsx)("h2",{className:"text-left ",children:v.length?"A frame is selected":"Please select a frame"}),(0,a.jsx)("div",{className:"h-36 w-full gap-2 overflow-hidden rounded-md border border-[#DEE2E6] bg-white",children:v.length?(0,a.jsx)(r(),{width:0,height:0,src:"data:image/png;base64,".concat(w),alt:"",className:"h-36 w-full bg-white object-contain"}):(0,a.jsx)("p",{className:"p-4 text-[#ADB5BD] ",children:"Your preview goes here"})}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("select",{className:"select select-sm w-full",name:"type",id:"type",value:t,onChange:e=>n(e.target.value),disabled:!v.length||v.length>=2,children:null==A?void 0:A.map(e=>(0,a.jsx)("option",{value:e.value,children:e.label},e.value))})}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm btn-block disabled:bg-primary disabled:text-white",disabled:!v.length||v.length>=2||x,children:x?"⏳Generating...":"Generate"})]})})}},2026:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});let a=new class{run(e,t){return new Promise((n,a)=>{let s=this.id++,i=e=>{var t,r;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===s&&(window.removeEventListener("message",i),n(e.data.pluginMessage.result)),(null===(r=e.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===s)){window.removeEventListener("message",i);let t=e.data.pluginMessage.error;a(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",i);let r={pluginMessage:{type:"EVAL",code:e.toString(),id:s,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(r,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2026);function s(){return a.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[394,705,351,518,253,961,744],function(){return e(e.s=18)}),_N_E=e.O()}]);