"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5790],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),f=l(n),m=i,O=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(O,a(a({ref:e},u),{},{components:n})):r.createElement(O,a({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},753:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={sidebar_position:2},c=void 0,l={unversionedId:"OptimizationWithPDE/OptPDE",id:"OptimizationWithPDE/OptPDE",title:"OptPDE",description:"\u5b66\u4e60\u8def\u7ebf",source:"@site/docs/OptimizationWithPDE/OptPDE.md",sourceDirName:"OptimizationWithPDE",slug:"/OptimizationWithPDE/OptPDE",permalink:"/MyProjects/docs/OptimizationWithPDE/OptPDE",editUrl:"https://github.com/Song921012/MyProjects/docs/OptimizationWithPDE/OptPDE.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"StepControl",permalink:"/MyProjects/docs/OptimizationWithPDE/StepControl"},next:{title:"Stochastic Optimal Control",permalink:"/MyProjects/docs/OptimizationWithPDE/StochasticOpt"}},u={},s=[{value:"\u5b66\u4e60\u8def\u7ebf",id:"\u5b66\u4e60\u8def\u7ebf",level:2}],f={toc:s};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opt-with-pde"},"Opt with PDE"),(0,o.kt)("h2",{id:"\u5b66\u4e60\u8def\u7ebf"},"\u5b66\u4e60\u8def\u7ebf"),(0,o.kt)("p",null,"\u786e\u5b9a\u6027\u548c\u968f\u673a\u89d2\u5ea6\uff0c\u7c7b\u4f3c"),(0,o.kt)("p",null,"(1)\u7b80\u5355\u4f18\u5316\u4e0e\u7b80\u5355\u8fd0\u7b79\u5b66"),(0,o.kt)("p",null,"\u53c2\u8003\u4e66\u76ee\uff1a\u5317\u5927\u4f18\u5316\u6559\u6750\u4e3a\u4e3b\uff0c06\u4f18\u5316\u6559\u6750\uff0c16\u8fd0\u7b79\u6559\u6750\uff0c18\u4f18\u5316\u6559\u6750\nConvex Optimization"),(0,o.kt)("p",null,"(2)ODE\u6700\u4f18\u63a7\u5236: "),(0,o.kt)("p",null,"\u53c2\u8003\u4e66\u76ee\uff1a\u751f\u7269\u4f18\u5316\uff0c12\u5e74\u4f18\u5316"),(0,o.kt)("p",null,"(3)Opt with PDE:"),(0,o.kt)("p",null,"\u65e0\u9650\u7ef4\u7a7a\u95f4\u4f18\u5316\u95ee\u9898"),(0,o.kt)("p",null,"(4)variational Analysis\n14\u5e74\u90a3\u672c\u4e66"))}m.isMDXComponent=!0}}]);