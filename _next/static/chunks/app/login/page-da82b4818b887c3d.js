(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{1158:function(e,t,n){Promise.resolve().then(n.bind(n,5550))},2266:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9268);function i(e){let{error:t,...n}=e,{register:i}=n;return(0,r.jsxs)("label",{htmlFor:null==n?void 0:n.id,className:"form-control w-full",children:[(null==n?void 0:n.label)&&(0,r.jsx)("div",{className:"label",children:(0,r.jsx)("span",{className:"label-text",children:null==n?void 0:n.label})}),(0,r.jsx)("input",{className:"input input-bordered w-full data-[iserror=true]:input-error","data-iserror":!!t,...i,...n}),t&&(0,r.jsx)("div",{className:"label text-start",children:(0,r.jsx)("span",{className:"label-text-alt text-error",children:t})})]})}},9375:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9268);function i(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 shrink-0 stroke-current",fill:"none",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}},4177:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(8421),i=n(6934),a=n.n(i),s=n(990),o=n(6008),l=n(2298);function c(){let e=(0,o.useRouter)(),t=(0,o.usePathname)(),{data:n,isLoading:i,error:c}=(0,s.a)({refetchOnWindowFocus:!0,refetchOnMount:!0,refetchOnReconnect:!0,staleTime:1/6*60,refetchInterval:1/6*6e4,queryKey:["user"],queryFn:async()=>{let n=await (0,r.Z)();if(!n)return null;let i=await fetch("".concat("https://typenomore.com","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)}}),s=await i.json(),{data:o}=s,c="/login/"===t||"/register/"===t,u=401===s.code;if(u&&!c)return e.push("/login");if(o.email_verified_at&&"/email/verification/"===t)return e.push("/");if(403===s.code){var d;let t=null===(d=s.data)||void 0===d?void 0:d.type;return"unverified_email"===t?e.push("/email/verification"):"unsubscription"===t?e.push("/subscription"):e.push("/403")}return(o.id&&l.ZP.identify(o.id,o),200==s.code||c)?(a().setUser(o.id,o.email,o.name),o):(a().notify("Failed to fetch user"),e.push("/login"),null)}});return{user:n,isLoading:i,error:c}}},2432:function(e,t,n){"use strict";function r(e){var t,n,r,i;let{response:a,setError:s}=e;null===(t=window)||void 0===t||t.scrollTo(0,0);let o=[];422==a.code&&(null===(n=a.data)||void 0===n?void 0:n.errors)?Object.keys(null===(r=a.data)||void 0===r?void 0:r.errors).forEach(e=>{var t,n,r;let i=null===(r=a.data)||void 0===r?void 0:null===(n=r.errors)||void 0===n?void 0:null===(t=n[e])||void 0===t?void 0:t[0];if(!i)return 1;o.push(i),s(e,{type:"custom",message:i},{shouldFocus:!0})}):s("global",{type:"custom",message:(null===(i=a.data)||void 0===i?void 0:i.message)||a.message||"Failed"})}n.d(t,{Z:function(){return r}})},5550:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(9268),i=n(6394),a=n.n(i),s=n(5846),o=n.n(s),l=n(9700),c=n(2266),u=n(6008),d=n(2432),p=n(9375),m=n(2026),g=n(2913),f=n(4177),h=n(6934),v=n.n(h);function w(){var e,t,n,i;let s=(0,u.useRouter)(),{user:h}=(0,f.Z)();(null==h?void 0:h.id)&&s.replace("/");let{register:w,handleSubmit:y,formState:{errors:x,isSubmitting:b,isDirty:j,isValid:N},setError:k,clearErrors:E}=(0,l.cI)();async function Z(e){try{E();let t=await fetch("".concat("https://typenomore.com","/api/login"),{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(e)}),n=await t.json();if(200!=n.code){(0,d.Z)({response:n,setError:k});return}let{token:r}=n.data;await m.Z.run(async(e,t)=>{let{token:n}=t;return await e.clientStorage.setAsync("token",n)},{token:r}),await m.Z.run(async e=>await e.clientStorage.getAsync("token")),s.push("/")}catch(t){g.Am.error("Something went wrong"),console.error({error:t}),v().notify(t,t=>{t.request.body={email:e.email}})}}return(0,r.jsxs)("main",{className:"flex h-screen w-full flex-col items-center justify-center gap-6 p-5 text-center",children:[(0,r.jsx)(a(),{width:100,height:46.27,src:"/images/logo.png",alt:"typenomore logo"}),(0,r.jsxs)("form",{className:"flex w-full flex-col gap-3",onSubmit:y(Z),children:[(null==x?void 0:null===(e=x.global)||void 0===e?void 0:e.message)&&(0,r.jsxs)("section",{role:"alert",className:"alert alert-error inline-flex gap-2 text-start",children:[(0,r.jsx)(p.Z,{}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:null==x?void 0:null===(t=x.global)||void 0===t?void 0:t.message}})]}),(0,r.jsx)(c.Z,{type:"email",placeholder:"Email address",error:null==x?void 0:null===(n=x.email)||void 0===n?void 0:n.message,register:w("email"),required:!0}),(0,r.jsx)(c.Z,{type:"password",placeholder:"Password",error:null==x?void 0:null===(i=x.password)||void 0===i?void 0:i.message,register:w("password"),required:!0}),(0,r.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block disabled:bg-primary disabled:bg-opacity-20 disabled:text-white",disabled:b||!j||!N,onClick:()=>E(),children:[b&&(0,r.jsx)("span",{className:"loading loading-spinner"}),"Login"]}),(0,r.jsx)(o(),{href:"".concat("https://typenomore.com","/forgot-password"),className:"text-primary",target:"_blank",children:"Forgot password?"})]}),(0,r.jsxs)("p",{className:"text-blacktext",children:["Haven't registered yet? \xa0",(0,r.jsx)(o(),{href:"/register",className:"text-primary",children:"Sign Up here"})]})]})}},2026:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=new class{run(e,t){return new Promise((n,r)=>{let i=this.id++,a=e=>{var t,s;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===i&&(window.removeEventListener("message",a),n(e.data.pluginMessage.result)),(null===(s=e.data.pluginMessage)||void 0===s?void 0:s.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===i)){window.removeEventListener("message",a);let t=e.data.pluginMessage.error;r(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",a);let s={pluginMessage:{type:"EVAL",code:e.toString(),id:i,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(s,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2026);function i(){return r.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[342,834,846,394,700,253,961,744],function(){return e(e.s=1158)}),_N_E=e.O()}]);