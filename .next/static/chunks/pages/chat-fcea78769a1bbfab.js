(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{8752:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return t(5718)}])},5718:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(5893),o=t(5717),a=t(7294),i=t(1181),l=t(6186),s=t(1163);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||x(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,r){if(e){if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}var p=(0,l.eI)("https://sorexwekduheaphbaste.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk4OTkwMSwiZXhwIjoxOTU5NTY1OTAxfQ.wlsa4lsvscYYMDHNkHYAkHO6KRwvNfILgscedWFDjEE");function h(){var e,r=function(e){if(""!=e&&" "!=e&&"  "!=e){var r={de:t,texto:e};p.from("mensagens").insert([r]).then((function(e){var r=e.data;b([r[0]].concat(f(m)))})),x("")}else x("")},t=(0,s.useRouter)().query.username,l=d(a.useState(""),2),u=l[0],x=l[1],h=d(a.useState([]),2),m=h[0],b=h[1];return a.useEffect((function(){p.from("mensagens").select("*").order("id",{ascending:!1}).then((function(e){var r=e.data;b(r)}))}),[]),(0,n.jsx)(o.xu,{styleSheet:(e={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:i.r.O.T.pl},c(e,"backgroundColor","#282C34"),c(e,"backgroundRepeat","no-repeat"),c(e,"backgroundSize","cover"),c(e,"backgroundBlendMode","multiply"),c(e,"color",i.r.O.O.M6),e),children:(0,n.jsxs)(o.xu,{styleSheet:{display:"flex",flexDirection:"column",flex:1,boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",borderRadius:"5px",backgroundColor:i.r.O.O.qy,height:"100%",maxWidth:"95%",maxHeight:"95vh",padding:"32px"},children:[(0,n.jsx)(g,{}),(0,n.jsxs)(o.xu,{styleSheet:{position:"relative",display:"flex",flex:1,height:"80%",backgroundColor:i.r.O.O.H,flexDirection:"column",borderRadius:"5px",border:"1px solid",borderColor:i.r.O.T.pl,padding:"16px"},children:[(0,n.jsx)(y,{mensagem:m}),(0,n.jsxs)(o.xu,{as:"form",styleSheet:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(o.nv,{value:u,onChange:function(e){var r=e.target.value;x(r)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r(u))},placeholder:"Insira sua mensagem aqui...",type:"textarea",styleSheet:{border:"1px solid",borderColor:i.r.O.T.pl,width:"100%",resize:"none",borderRadius:"5px",padding:"6px 8px",backgroundColor:i.r.O.O.YY,marginRight:"12px",color:i.r.O.O.Ug}}),(0,n.jsx)(o.zx,{onClick:function(e){e.preventDefault(),r(u)},label:"Enviar",buttonColors:{contrastColor:i.r.O.O.jh,mainColor:i.r.O.T.pl,mainColorLight:i.r.O.T.aD,mainColorStrong:i.r.O.T.RW}})]})]})]})})}function g(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.xu,{styleSheet:{width:"100%",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsx)(o.xv,{variant:"heading5",children:"Chat"}),(0,n.jsx)(o.zx,{variant:"tertiary",colorVariant:"neutral",label:"Logout",href:"/"})]})})}function y(e){return(0,n.jsx)(o.xu,{tag:"ul",styleSheet:{overflow:"scroll",display:"flex",flexDirection:"column-reverse",flex:1,color:i.r.O.O.M6,marginBottom:"16px"},children:e.mensagem.map((function(e){return(0,n.jsxs)(o.xv,{tag:"li",styleSheet:{borderRadius:"5px",padding:"6px",marginBottom:"12px",hover:{backgroundColor:i.r.O.O.qy}},children:[(0,n.jsxs)(o.xu,{styleSheet:{marginBottom:"8px"},children:[(0,n.jsx)(o.Ee,{styleSheet:{width:"20px",height:"20px",borderRadius:"50%",display:"inline-block",marginRight:"8px"},src:"https://github.com/".concat(e.de,".png")}),(0,n.jsx)(o.xv,{tag:"strong",children:e.de}),(0,n.jsx)(o.xv,{styleSheet:{fontSize:"10px",marginLeft:"8px",color:i.r.O.O.wl},tag:"span",children:(new Date).toLocaleDateString()})]}),e.texto]},e.id)}))})}},1181:function(e){"use strict";e.exports=JSON.parse('{"r":{"O":{"T":{"aD":"#57AE5B","pl":"#489FB8","RW":"#0F4554"},"O":{"Ug":"#CBD2D9","wl":"#9AA5B1","qy":"#282C34","YY":"#181F25","H":"#101418","jh":"#080A0C","M6":"#CCCCCC"}}}}')}},function(e){e.O(0,[445,621,774,888,179],(function(){return r=8752,e(e.s=r);var r}));var r=e.O();_N_E=r}]);