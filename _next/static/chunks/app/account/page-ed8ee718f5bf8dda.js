(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{8628:function(e,t,n){Promise.resolve().then(n.bind(n,3928))},4177:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(8421),i=n(2351),a=n(6008),r=n(2298),o=n(2913);function l(){let e=(0,a.useRouter)(),{data:t,isLoading:n,error:l}=(0,i.a)({refetchOnWindowFocus:!0,staleTime:60,queryKey:["user"],queryFn:async()=>{let t=await (0,s.Z)();if(!t)return null;let n=await fetch("".concat("","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}),i=await n.json(),{data:a}=i,l=401===i.code;if(l)return e.push("/login");if(403===i.code){var c;let t=null===(c=i.data)||void 0===c?void 0:c.type;return"unverified_email"===t?e.push("/email/verification"):"unsubscription"===t?e.push("/subscription"):e.push("/403")}return 200!=i.code?((0,o.Am)(i.message,{type:"error"}),e.push("/login"),null):(r.ZP.identify(a.id,a),a)}});return{user:t,isLoading:n,error:l}}},3928:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(9268),i=n(5846),a=n.n(i),r=n(4177);function o(){let{user:e}=(0,r.Z)();return(0,s.jsxs)("main",{className:"flex min-h-[80vh] w-full flex-col  gap-4 p-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1 ",children:[(0,s.jsx)("h3",{className:"m-0 text-xs font-semibold text-[#989898]",children:"ACCOUNT"}),(0,s.jsx)("p",{className:"m-0 ",children:null==e?void 0:e.name}),(0,s.jsx)("p",{className:"m-0 ",children:null==e?void 0:e.email}),(0,s.jsx)(a(),{href:"http://typenomore.com",target:"_blank",className:"m-0 text-blue-500",children:"Change Password"})]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 ",children:[(0,s.jsx)("h3",{className:"m-0 text-xs font-semibold text-[#989898]",children:"SUBSCRIPTION"}),(0,s.jsx)("p",{className:"m-0 ",children:"Status: Active"}),(0,s.jsx)("p",{className:"m-0 ",children:"Your subscription ends on\xa05/5/24 and will be auto renew every month"}),(0,s.jsx)(a(),{href:"http://typenomore.com",target:"_blank",className:"m-0 text-blue-500",children:"Cancel"})]}),(0,s.jsx)("hr",{})]})}},2026:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=new class{run(e,t){return new Promise((n,s)=>{let i=this.id++,a=e=>{var t,r;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===i&&(window.removeEventListener("message",a),n(e.data.pluginMessage.result)),(null===(r=e.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===i)){window.removeEventListener("message",a);let t=e.data.pluginMessage.error;s(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",a);let r={pluginMessage:{type:"EVAL",code:e.toString(),id:i,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(r,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(2026);function i(){return s.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[934,705,351,253,961,744],function(){return e(e.s=8628)}),_N_E=e.O()}]);