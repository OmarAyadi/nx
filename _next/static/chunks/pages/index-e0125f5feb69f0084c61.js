_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{HyeM:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t("nNWW"),o=t.n(r),a=t("SuKu"),u=t.n(a),c=o.a.createElement;function i(){return c("div",null,"Hello World."," ",c(u.a,{href:"/about",as:"/nx/about"},c("a",null,"About")))}},SuKu:function(e,n,t){e.exports=t("tUer")},ia1m:function(e,n,t){"use strict";var r=t("WpJH"),o=t("8Q6m");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,o=(0,a.useRef)(),l=(0,a.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,a.useEffect)((function(){c||s||(0,u.default)((function(){return d(!0)}))}),[s]),[p,s]};var a=t("nNWW"),u=o(t("pBig")),c="undefined"!==typeof IntersectionObserver;var i=new Map},tUer:function(e,n,t){"use strict";var r=t("WpJH"),o=t("Ir7q");n.__esModule=!0,n.default=void 0;var a=o(t("nNWW")),u=t("RPGJ"),c=t("lPdj"),i=t("ia1m"),l={};function f(e,n,t,r){if(e&&(0,u.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),w=m&&"object"===typeof m&&m.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),g=r(E,2),M=g[0],L=g[1],N=a.default.useCallback((function(e){M(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,M]);(0,a.useEffect)((function(){var e=L&&n&&(0,u.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,L,_,n,t]);var R={ref:N,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,d,p,h,y,b,_)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var W="undefined"!==typeof _?_:t&&t.locale,H=(0,u.getDomainLocale)(p,W,t&&t.locales,t&&t.domainLocales);R.href=H||(0,u.addBasePath)((0,u.addLocale)(p,W,t&&t.defaultLocale))}return a.default.cloneElement(m,R)};n.default=s}},[["HyeM",0,1]]]);