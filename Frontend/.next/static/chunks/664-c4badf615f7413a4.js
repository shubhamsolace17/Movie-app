(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),l=n(2725),f=n(3462),c=n(1018),i=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var n,o=e.href,b=e.as,h=e.children,_=e.prefetch,g=e.passHref,C=e.replace,M=e.shallow,x=e.scroll,m=e.locale,j=e.onClick,E=e.onMouseEnter,O=e.legacyBehavior,k=void 0===O?!0!==Boolean(!1):O,L=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=h,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==_,w=r(p?u.default.useTransition():[],2)[1],P=u.default.useContext(f.RouterContext),A=u.default.useContext(c.AppRouterContext);A&&(P=A);var I,T=u.default.useMemo((function(){var e=r(a.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:b?a.resolveHref(P,b):n||t}}),[P,o,b]),U=T.href,B=T.as,D=u.default.useRef(U),H=u.default.useRef(B);k&&(I=u.default.Children.only(n));var K=k?I&&"object"===typeof I&&I.ref:t,N=r(i.useIntersection({rootMargin:"200px"}),3),F=N[0],S=N[1],Z=N[2],q=u.default.useCallback((function(e){H.current===B&&D.current===U||(Z(),H.current=B,D.current=U),F(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[B,K,U,Z,F]);u.default.useEffect((function(){var e=S&&R&&a.isLocalURL(U),t="undefined"!==typeof m?m:P&&P.locale,n=v[U+"%"+B+(t?"%"+t:"")];e&&!n&&y(P,U,B,{locale:t})}),[B,U,S,m,R,P]);var z={ref:q,onClick:function(e){k||"function"!==typeof j||j(e),k&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,f,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var i=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:l})};c?c(i):i()}}(e,P,U,B,C,M,x,m,A?w:void 0)},onMouseEnter:function(e){k||"function"!==typeof E||E(e),k&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),a.isLocalURL(U)&&y(P,U,B,{priority:!0})}};if(!k||g||"a"===I.type&&!("href"in I.props)){var G="undefined"!==typeof m?m:P&&P.locale,J=P&&P.isLocaleDomain&&s.getDomainLocale(B,G,P.locales,P.domainLocales);z.href=J||d.addBasePath(l.addLocale(B,G,P&&P.defaultLocale))}return k?u.default.cloneElement(I,z):u.default.createElement("a",Object.assign({},L,z),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],b=v[1];o.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return y&&y.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,n,t,d]);var h=o.useCallback((function(){p(!1)}),[]);return[b,d,h]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},1664:function(e,t,n){e.exports=n(8418)}}]);