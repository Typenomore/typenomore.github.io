(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{4262:function(e,t,n){Promise.resolve().then(n.bind(n,3250))},3250:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(9268),s=n(6006),i=n(8421),r=n(6934),o=n.n(r),c=n(6394),l=n.n(c),u=n(5846),g=n.n(u),d=n(6008),p=n(2913);function m(){let e=(0,d.usePathname)(),{timeLeft:t,setTimeLeft:n}=function(e){let[t,n]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=setInterval(()=>{n(e=>e>0?e-1:0)},1e3);return()=>clearInterval(e)},[]),{timeLeft:t,setTimeLeft:n}}(0),r="".concat(Math.floor(t/60)," : ").concat(t%60);async function c(){n(120);let e=await (0,i.Z)(),t=await fetch("".concat("https://typenomore.com","/api/email/resend"),{method:"GET",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(e)}}),a=await t.json();if(200!=a.code)return(0,p.Am)(a.message,{type:"error"}),o().notify("Failed to resend verification email"),null;(0,p.Am)(a.message,{type:"success"})}return(0,a.jsxs)("main",{className:"flex h-[90vh] w-full flex-col items-center justify-center gap-6 p-5 text-center",children:[(0,a.jsx)(l(),{width:150,height:58,src:"/images/logo.png",alt:"typenomore logo"}),(0,a.jsx)("p",{className:"text-center",children:"Please check your mailbox to verify your email."}),(0,a.jsx)("hr",{}),(0,a.jsx)("p",{className:"text-[#ADB5BD]",children:"If you haven’t got please click button below to resend verification"}),(0,a.jsxs)("button",{type:"button",onClick:c,className:"btn btn-primary text-white",disabled:!!t,children:[t?(0,a.jsx)("span",{className:"loading loading-spinner"}):(0,a.jsx)(a.Fragment,{}),t?r:"Resend verification"]}),(0,a.jsx)(g(),{href:e,className:"text-primary",children:"Refresh this page"})]})}},2026:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});let a=new class{run(e,t){return new Promise((n,a)=>{let s=this.id++,i=e=>{var t,r;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===s&&(window.removeEventListener("message",i),n(e.data.pluginMessage.result)),(null===(r=e.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===s)){window.removeEventListener("message",i);let t=e.data.pluginMessage.error;a(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",i);let r={pluginMessage:{type:"EVAL",code:e.toString(),id:s,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(r,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2026);function s(){return a.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[387,846,394,253,961,744],function(){return e(e.s=4262)}),_N_E=e.O()}]);