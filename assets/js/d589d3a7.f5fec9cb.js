(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(116)),u={title:"Getting Started",slug:"/"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/getting-started.md",slug:"/",permalink:"/MPG/docs/",version:"current"},i=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",children:[]},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],s={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),Object(o.b)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(o.b)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),Object(o.b)("p",null,"Run the development server in the newly created ",Object(o.b)("inlineCode",{parentName:"p"},"my-website")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),Object(o.b)("h2",{id:"thats-it"},"That's it!"),Object(o.b)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."))}l.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var s=2;s<o;s++)u[s]=n[s];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);