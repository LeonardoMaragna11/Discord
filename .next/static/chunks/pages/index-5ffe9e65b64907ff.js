(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},5718:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(5893),o=t(5717),a=t(7294),i=t(1181),l=t(6186),c=t(1163);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||p(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){if(e){if("string"===typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}var x=(0,l.eI)("https://sorexwekduheaphbaste.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk4OTkwMSwiZXhwIjoxOTU5NTY1OTAxfQ.wlsa4lsvscYYMDHNkHYAkHO6KRwvNfILgscedWFDjEE");function h(){var e,r=function(e){if(""!=e&&" "!=e&&"  "!=e){var r={de:t,texto:e};x.from("mensagens").insert([r]).then((function(e){var r=e.data;y([r[0]].concat(f(b)))})),p("")}else p("")},t=(0,c.useRouter)().query.username,l=d(a.useState(""),2),s=l[0],p=l[1],h=d(a.useState([]),2),b=h[0],y=h[1];return a.useEffect((function(){x.from("mensagens").select("*").order("id",{ascending:!1}).then((function(e){var r=e.data;y(r)}))}),[]),(0,n.jsx)(o.xu,{styleSheet:(e={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:i.r.O.T.pl},u(e,"backgroundColor","#282C34"),u(e,"backgroundRepeat","no-repeat"),u(e,"backgroundSize","cover"),u(e,"backgroundBlendMode","multiply"),u(e,"color",i.r.O.O.M6),e),children:(0,n.jsxs)(o.xu,{styleSheet:{display:"flex",flexDirection:"column",flex:1,boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",borderRadius:"5px",backgroundColor:i.r.O.O.qy,height:"100%",maxWidth:"95%",maxHeight:"95vh",padding:"32px"},children:[(0,n.jsx)(g,{}),(0,n.jsxs)(o.xu,{styleSheet:{position:"relative",display:"flex",flex:1,height:"80%",backgroundColor:i.r.O.O.H,flexDirection:"column",borderRadius:"5px",border:"1px solid",borderColor:i.r.O.T.pl,padding:"16px"},children:[(0,n.jsx)(m,{mensagem:b}),(0,n.jsxs)(o.xu,{as:"form",styleSheet:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(o.nv,{value:s,onChange:function(e){var r=e.target.value;p(r)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r(s))},placeholder:"Insira sua mensagem aqui...",type:"textarea",styleSheet:{border:"1px solid",borderColor:i.r.O.T.pl,width:"100%",resize:"none",borderRadius:"5px",padding:"6px 8px",backgroundColor:i.r.O.O.YY,marginRight:"12px",color:i.r.O.O.Ug}}),(0,n.jsx)(o.zx,{onClick:function(e){e.preventDefault(),r(s)},label:"Enviar",buttonColors:{contrastColor:i.r.O.O.jh,mainColor:i.r.O.T.pl,mainColorLight:i.r.O.T.aD,mainColorStrong:i.r.O.T.RW}})]})]})]})})}function g(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.xu,{styleSheet:{width:"100%",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,n.jsx)(o.xv,{variant:"heading5",children:"Chat"}),(0,n.jsx)(o.zx,{variant:"tertiary",colorVariant:"neutral",label:"Logout",href:"/"})]})})}function m(e){return(0,n.jsx)(o.xu,{tag:"ul",styleSheet:{overflow:"scroll",display:"flex",flexDirection:"column-reverse",flex:1,color:i.r.O.O.M6,marginBottom:"16px"},children:e.mensagem.map((function(e){return(0,n.jsxs)(o.xv,{tag:"li",styleSheet:{borderRadius:"5px",padding:"6px",marginBottom:"12px",hover:{backgroundColor:i.r.O.O.qy}},children:[(0,n.jsxs)(o.xu,{styleSheet:{marginBottom:"8px"},children:[(0,n.jsx)(o.Ee,{styleSheet:{width:"20px",height:"20px",borderRadius:"50%",display:"inline-block",marginRight:"8px"},src:"https://github.com/".concat(e.de,".png")}),(0,n.jsx)(o.xv,{tag:"strong",children:e.de}),(0,n.jsx)(o.xv,{styleSheet:{fontSize:"10px",marginLeft:"8px",color:i.r.O.O.wl},tag:"span",children:(new Date).toLocaleDateString()})]}),e.texto]},e.id)}))})}},3678:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(5988),a=t.n(o),i=t(1181),l=t(5717),c=t(7294),s=t(1163);t(5718);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){console.log(e);var r=e.tag;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{className:a().dynamic([["4f170e71be06acca",[r,i.r.O.O.M6]]]),children:e.children}),(0,n.jsx)(a(),{id:"4f170e71be06acca",dynamic:[r,i.r.O.O.M6],children:"".concat(r,".__jsx-style-dynamic-selector{color:").concat(i.r.O.O.M6,";\nfont-size:24px;\nfont-weight:600}")})]})}r.default=function(){var e,r=f(c.useState("React"),2),t=r[0],o=r[1],a=(0,s.useRouter)(),u=f(c.useState("https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/68674298_107083210661769_2811881768334917632_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHlDhC-Wcwe5sq51suKYUpTtOiF651XHma06IXrnVceZhi0gukWo1pXkjrgIqN9JdLsdFE-0Uc9akSQjb3GLotI&_nc_ohc=Z9_tqXnPYesAX9xhoAE&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_PpsuotoT7EoaFaG1PmXXXvvfPmjAw6Vb6Z1aZNLMzng&oe=62248DA2"),2),x=u[0],h=u[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.xu,{styleSheet:(e={display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:i.r.O.T.pl},d(e,"backgroundColor","#282C34"),d(e,"backgroundRepeat","no-repeat"),d(e,"backgroundSize","cover"),d(e,"backgroundBlendMode","multiply"),e),children:(0,n.jsxs)(l.xu,{styleSheet:d({display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"},width:"100%",maxWidth:"700px",borderRadius:"5px",padding:"32px",margin:"16px",boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",backgroundColor:i.r.O.O.qy},"borderRadius","10px"),children:[(0,n.jsxs)(l.xu,{as:"form",onSubmit:function(e){e.preventDefault(),""!=t&&" "!=t&&"  "!=t&&"React"!=t?a.push("/chat?username=".concat(t)):alert("Insira um nome valido")},styleSheet:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:{xs:"100%",sm:"50%"},textAlign:"center",marginBottom:"32px"},children:[(0,n.jsx)(p,{tag:"h2",children:"Boas vindas de volta!"}),(0,n.jsx)(l.xv,{variant:"body3",styleSheet:{marginBottom:"32px",color:i.r.O.O.wl},children:"Ol\xe1, ".concat(t)}),(0,n.jsx)(l.nv,{placeholder:t,onChange:function(e){if(""!=e.target.value){var r=e.target.value;o(r),h("https://github.com/".concat(r,".png"))}else o("React"),h("https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/68674298_107083210661769_2811881768334917632_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHlDhC-Wcwe5sq51suKYUpTtOiF651XHma06IXrnVceZhi0gukWo1pXkjrgIqN9JdLsdFE-0Uc9akSQjb3GLotI&_nc_ohc=Z9_tqXnPYesAX9xhoAE&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_PpsuotoT7EoaFaG1PmXXXvvfPmjAw6Vb6Z1aZNLMzng&oe=62248DA2")},fullWidth:!0,textFieldColors:{neutral:{textColor:i.r.O.O.Ug,mainColor:i.r.O.T.RW,mainColorHighlight:i.r.O.T.pl,backgroundColor:i.r.O.O.YY}}}),(0,n.jsx)(l.zx,{type:"submit",label:"Entrar",fullWidth:!0,buttonColors:{contrastColor:i.r.O.O.jh,mainColor:i.r.O.T.pl,mainColorLight:i.r.O.T.aD,mainColorStrong:i.r.O.T.RW}})]}),(0,n.jsxs)(l.xu,{styleSheet:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"200px",padding:"16px",backgroundColor:i.r.O.O.YY,border:"1px solid",borderColor:i.r.O.O.jh,borderRadius:"10px",flex:1,minHeight:"240px"},children:[(0,n.jsx)(l.Ee,{styleSheet:{borderRadius:"50%",marginBottom:"16px",border:"solid 2px",borderColor:i.r.O.O.jh},src:x}),(0,n.jsx)(l.xv,{variant:"body4",styleSheet:{color:i.r.O.O.Ug,backgroundColor:i.r.O.O.H,padding:"3px 10px",borderRadius:"1000px"},children:t})]})]})})})}},1181:function(e){"use strict";e.exports=JSON.parse('{"r":{"O":{"T":{"aD":"#57AE5B","pl":"#489FB8","RW":"#0F4554"},"O":{"Ug":"#CBD2D9","wl":"#9AA5B1","qy":"#282C34","YY":"#181F25","H":"#101418","jh":"#080A0C","M6":"#CCCCCC"}}}}')}},function(e){e.O(0,[445,621,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);