(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6654:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(12115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let n=r(88229),o=r(95155),a=n._(r(12115)),l=r(82757),u=r(95227),s=r(69818),i=r(6654),c=r(69991),f=r(85929);r(43230);let d=r(24930);function p(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let h=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:h,children:y,prefetch:m=null,passHref:g,replace:b,shallow:v,scroll:x,onClick:j,onMouseEnter:k,onTouchStart:P,legacyBehavior:w=!1,...E}=e;r=y,w&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let N=a.default.useContext(u.AppRouterContext),_=!1!==m,A=null===m?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:M,as:C}=a.default.useMemo(()=>{let e=p(l);return{href:e,as:h?p(h):e}},[l,h]);w&&(n=a.default.Children.only(r));let O=w?n&&"object"==typeof n&&n.ref:t,S=a.default.useCallback(e=>(_&&null!==N&&(0,d.mountLinkInstance)(e,M,N,A),()=>{(0,d.unmountLinkInstance)(e)}),[_,M,N,A]),T={ref:(0,i.useMergedRef)(S,O),onClick(e){w||"function"!=typeof j||j(e),w&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&!function(e,t,r,n,o,l,u){let{nodeName:s}=e.currentTarget;!("A"===s.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),a.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,N,M,C,b,v,x)},onMouseEnter(e){w||"function"!=typeof k||k(e),w&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&_&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){w||"function"!=typeof P||P(e),w&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&_&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(C)?T.href=C:w&&!g&&("a"!==n.type||"href"in n.props)||(T.href=(0,f.addBasePath)(C)),w?a.default.cloneElement(n,T):(0,o.jsx)("a",{...E,...T,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19324:()=>{},19946:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(12115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:s,className:i="",children:c,iconNode:f,...d}=e;return(0,n.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:s?24*Number(u)/Number(o):u,className:a("lucide",i),...d},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:s,...i}=r;return(0,n.createElement)(u,{ref:l,iconNode:t,className:a("lucide-".concat(o(e)),s),...i})});return r.displayName="".concat(e),r}},46697:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(19946).A)("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]])},51930:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(95155),o=r(6874),a=r.n(o),l=r(18999),u=r(19946);let s=(0,u.A)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),i=(0,u.A)("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);var c=r(46697),f=r(84355);let d=(0,u.A)("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),p=(0,u.A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);var h=r(12115);let y=[{path:"/yearly-analysis",name:"Yearly Analysis",icon:s,color:"from-blue-600 to-blue-400"},{path:"/climate-discount-analysis",name:"Climate Discount",icon:i,color:"from-yellow-600 to-yellow-400"},{path:"/monthly-analysis",name:"Monthly Analysis",icon:c.A,color:"from-purple-600 to-purple-400"},{path:"/category-analysis",name:"Categories",icon:f.A,color:"from-green-600 to-green-400"},{path:"/investments",name:"Investments",icon:d,color:"from-orange-600 to-orange-400"},{path:"/details",name:"Details",icon:p,color:"from-red-600 to-red-400"}];function m(){let e=(0,l.usePathname)(),[t,r]=(0,h.useState)(null);return(0,n.jsx)("aside",{className:"w-16 h-full bg-white border-r border-gray-200 shadow-sm flex flex-col",children:(0,n.jsx)("div",{className:"flex-1 flex flex-col justify-evenly py-6",children:y.map(o=>{let l=e===o.path,u=o.icon,s=t===o.path;return(0,n.jsx)("div",{className:"relative flex justify-center",children:(0,n.jsxs)(a(),{href:o.path,className:"relative","aria-label":o.name,onMouseEnter:()=>r(o.path),onMouseLeave:()=>r(null),children:[(0,n.jsx)("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 ".concat(l?"bg-gradient-to-br ".concat(o.color," text-white"):"bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900"),children:(0,n.jsx)(u,{className:"h-5 w-5"})}),s&&(0,n.jsxs)("div",{className:"absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-50 shadow-lg",children:[o.name,(0,n.jsx)("div",{className:"absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-[6px] border-transparent border-r-gray-800"})]})]})},o.path)})})})}},65299:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_4b901f"}},67294:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,19324,23)),Promise.resolve().then(r.bind(r,51930)),Promise.resolve().then(r.t.bind(r,65299,23))},69991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return g},NormalizeError:function(){return y},PageNotFoundError:function(){return m},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return a},isResSent:function(){return i},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=l();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function i(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&i(r))return n;if(!n)throw Object.defineProperty(Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},78859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},82757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}});let n=r(6966)._(r(78859)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",l=e.pathname||"",u=e.hash||"",s=e.query||"",i=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?i=t+e.host:r&&(i=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(i+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==i?(i="//"+(i||""),l&&"/"!==l[0]&&(l="/"+l)):i||(i=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),""+a+i+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+u}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},84355:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(19946).A)("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[618,441,684,358],()=>t(67294)),_N_E=e.O()}]);