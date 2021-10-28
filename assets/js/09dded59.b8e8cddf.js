"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[2011],{36742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(63366),i=n(67294),a=n(73727),o=n(52263),u=n(13919),s=n(10412),c=(0,i.createContext)({collectLink:function(){}}),l=n(44996),f=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,h=e.to,m=e.href,p=e.activeClassName,b=e.isActive,w=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,k=void 0===g||g,C=(0,r.Z)(e,d),y=(0,o.Z)().siteConfig,E=y.trailingSlash,_=y.baseUrl,j=(0,l.C)().withBaseUrl,Z=(0,i.useContext)(c),U=h||m,L=(0,u.Z)(U),O=null==U?void 0:U.replace("pathname://",""),N=void 0!==O?(n=O,k&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;N&&L&&(N=(0,f.applyTrailingSlash)(N,{trailingSlash:E,baseUrl:_}));var B,W=(0,i.useRef)(!1),S=v?a.OL:a.rU,A=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!A&&L&&null!=N&&window.docusaurus.prefetch(N),function(){A&&B&&B.disconnect()}}),[N,A,L]);var I=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,P=!N||!L||I;return N&&L&&!I&&!w&&Z.collectLink(N),P?i.createElement("a",Object.assign({href:N},U&&!L&&{target:"_blank",rel:"noopener noreferrer"},C)):i.createElement(S,Object.assign({},C,{onMouseEnter:function(){W.current||null==N||(window.docusaurus.preload(N),W.current=!0)},innerRef:function(e){var t,n;A&&e&&L&&(t=e,n=function(){null!=N&&window.docusaurus.prefetch(N)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:N||""},v&&{isActive:b,activeClassName:p}))}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,s=a.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},42754:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(67294),i="container_3r7W",a="animation_1FDf",o="details_jKNi",u=n(44996),s=n(36742);function c(){return r.createElement(r.Fragment,null,r.createElement("div",{className:i},r.createElement("section",{className:o},r.createElement("h3",null,"Command Line Interface"),r.createElement("p",null,"The ",r.createElement(s.Z,{to:(0,u.Z)("docs/tutorial/new-project#with-herbs-cli")}," Herbs CLI ")," makes it easy to create and manage your herbs project directly from the terminal. CLI is essential to improve development time and is designed to get you working quickly with herbs, with an emphasis on your domain.")),r.createElement("section",{className:a},r.createElement(s.Z,{to:(0,u.Z)("docs/tutorial/new-project#with-herbs-cli")},r.createElement("img",{src:(0,u.Z)("/assets/herbs-new.gif")})))))}}}]);