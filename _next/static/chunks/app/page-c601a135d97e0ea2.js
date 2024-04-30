(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{18:function(e,t,a){Promise.resolve().then(a.bind(a,7135))},4177:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(8421),i=a(2351),s=a(6008),r=a(2298),o=a(2913);function l(){let e=(0,s.useRouter)(),t=(0,s.usePathname)(),{data:a,isLoading:l,error:c}=(0,i.a)({refetchOnWindowFocus:!0,staleTime:60,refetchInterval:5e3,queryKey:["user"],queryFn:async()=>{let a=await (0,n.Z)();if(!a)return null;let i=await fetch("".concat("https://beta.typenomore.com","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}),s=await i.json(),{data:l}=s,c=401===s.code;if(c)return e.push("/login");if(l.email_verified_at&&"/email/verification/"===t)return e.push("/");if(403===s.code){var u;let t=null===(u=s.data)||void 0===u?void 0:u.type;return"unverified_email"===t?e.push("/email/verification"):"unsubscription"===t?e.push("/subscription"):e.push("/403")}return 200!=s.code?((0,o.Am)(s.message,{type:"error"}),e.push("/login"),null):(r.ZP.identify(l.id,l),l)}});return{user:a,isLoading:l,error:c}}},7135:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(9268),i=a(2026),s=a(6394),r=a.n(s),o=a(6008),l=a(6006),c=a(3590);async function u(e){let{text:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:a}=e,n=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=".concat("AIzaSyB4BI7oivRtfVMNNi21DYRQ9IqaHfljeJI"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({contents:[{parts:[{text:t},{inline_data:{mime_type:"image/png",data:a}}]}]})}),i=await n.json();return i}var d=a(8421);async function p(e){let{prompt:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:a}=e,n=await (0,d.Z)(),i=await fetch("".concat("https://beta.typenomore.com","/api/generate"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)},method:"POST",body:JSON.stringify({prompt:t,image:"data:image/png;base64,".concat(a)})}),s=await i.json();return s}var g=a(4177),m=a(2913),f=a(2298);function h(){let e=(0,o.useRouter)(),[t,a]=(0,l.useState)(""),[s,h]=(0,l.useState)({frames:[],imageBytes:new Uint8Array,imageBase64:""}),{frames:y,imageBytes:v,imageBase64:b}=s,[w,x]=(0,l.useState)(!1),[E,j]=(0,l.useState)(""),[N,A]=(0,l.useState)([]);(0,l.useEffect)(()=>{if((async()=>{let t=await (0,d.Z)();t||e.push("/login")})(),i.Z.run(async e=>{e.on("selectionchange",async()=>{e.ui.postMessage({message:{frames:[],imageBytes:[],imageBase64:""},type:"selectionchange"});let t=e.currentPage.selection;if(!t.length)return;let a=t[0],n=await a.exportAsync({format:"PNG"}),i=e.base64Encode(n);e.ui.postMessage({message:{frames:t,imageBytes:n,imageBase64:i},type:"selectionchange"})})}),window.onmessage=e=>{let{message:t,type:a}=e.data.pluginMessage;"selectionchange"!=a||E||h(t)},f.ZP.isFeatureEnabled("generating-types")){let e=f.ZP.getFeatureFlagPayload("generating-types");A(e)}return()=>{i.Z.run(async e=>{e.off("selectionchange",()=>{})})}},[]);let{user:P,isLoading:C,error:I}=(0,g.Z)();if(I)return"An error has occurred: "+I.message;if(C)return"Loading...";async function Z(e){var a,n,i,s;null==e||e.preventDefault(),x(!0);let r=f.ZP.isFeatureEnabled("AI-driver")&&f.ZP.getFeatureFlagPayload("AI-driver")||"GEMINI",o="";if("OPENAI"==r){let e=await p({prompt:t,imageBase64:b});o=null==e?void 0:e.data}else if("GEMINI"==r){let e=await u({text:t,imageBase64:b});if(e.error)return console.error(e.error.message),!1;let{candidates:r}=e;o=null==r?void 0:null===(s=r[0])||void 0===s?void 0:null===(i=s.content)||void 0===i?void 0:null===(n=i.parts)||void 0===n?void 0:null===(a=n[0])||void 0===a?void 0:a.text}else o="Error: Unset AI Driver Gemini/Openai";j(o),x(!1)}return P||e.push("/login"),(0,n.jsx)("section",{className:"mx-auto flex w-full max-w-md flex-col gap-3 px-5 py-6",children:E?(0,n.jsxs)("article",{className:"flex w-full flex-col gap-3",children:[(0,n.jsx)("h2",{className:"",children:"Result"}),(0,n.jsx)(c.U,{className:" flex h-[375px] flex-col gap-3 overflow-auto rounded-md border border-[#DEE2E6] bg-white px-3 py-3.5 text-xs",children:E}),(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-2.5",children:[(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>{j(""),Z()},children:"Again"}),(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>(function(e){try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),(0,m.Am)("Copied to clipboard",{type:"success"})}catch(e){console.log({error:e}),(0,m.Am)("Failed to copy",{type:"error"})}})(E),children:"Copy"}),(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>j(""),children:"Reset"})]})]}):(0,n.jsxs)("form",{className:"flex w-full flex-col gap-3",onSubmit:Z,children:[(0,n.jsx)("h2",{className:"text-left ",children:y.length?"A frame is selected":"Please select a frame"}),(0,n.jsx)("div",{className:"h-36 w-full gap-2 overflow-hidden rounded-md border border-[#DEE2E6] bg-white",children:y.length?(0,n.jsx)(r(),{width:0,height:0,src:"data:image/png;base64,".concat(b),alt:"",className:"h-36 w-full bg-white object-contain"}):(0,n.jsx)("p",{className:"p-4 text-[#ADB5BD] ",children:"Your preview goes here"})}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("select",{className:"select select-sm w-full",name:"type",id:"type",value:t,onChange:e=>a(e.target.value),disabled:!y.length||y.length>=2||w,children:null==N?void 0:N.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm btn-block disabled:bg-primary disabled:text-white",disabled:!y.length||y.length>=2||w,children:w?"⏳Generating...":"Generate"})]})})}},2026:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});let n=new class{run(e,t){return new Promise((a,n)=>{let i=this.id++,s=e=>{var t,r;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===i&&(window.removeEventListener("message",s),a(e.data.pluginMessage.result)),(null===(r=e.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===i)){window.removeEventListener("message",s);let t=e.data.pluginMessage.error;n(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",s);let r={pluginMessage:{type:"EVAL",code:e.toString(),id:i,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(r,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(2026);function i(){return n.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[474,394,590,253,961,744],function(){return e(e.s=18)}),_N_E=e.O()}]);