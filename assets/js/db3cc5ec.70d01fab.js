(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(116)),o=(a(123),a(124)),s=a(120),l=a(121),c={id:"array",title:"Arrays and Vectors",sidebar_label:"Arrays and Vectors"},m={unversionedId:"array",id:"array",isDocsHomePage:!1,title:"Arrays and Vectors",description:"Introduction to Array and Vector",source:"@site/docs/array.mdx",slug:"/array",permalink:"/docs/array",version:"current",sidebar_label:"Arrays and Vectors",sidebar:"comp",previous:{title:"MATHS",permalink:"/docs/maths"},next:{title:"Strings",permalink:"/docs/strings"}},b=[{value:"Introduction to Array and Vector",id:"introduction-to-array-and-vector",children:[]},{value:"TC of insert in vectors",id:"tc-of-insert-in-vectors",children:[]},{value:"Dynamic declarations of arrays",id:"dynamic-declarations-of-arrays",children:[]},{value:"Declarations and Initialising a vector",id:"declarations-and-initialising-a-vector",children:[]},{value:"Pass by reference vs value vs pointers",id:"pass-by-reference-vs-value-vs-pointers",children:[]},{value:"Passing of Array and Vectors into methods",id:"passing-of-array-and-vectors-into-methods",children:[]},{value:"Questions",id:"questions",children:[{value:"Array Rotation",id:"array-rotation",children:[]},{value:"Prefix/Suffix Array",id:"prefixsuffix-array",children:[]},{value:"Two Pointers",id:"two-pointers",children:[]},{value:"Kadane",id:"kadane",children:[]},{value:"Bucketing",id:"bucketing",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"Random",id:"random",children:[]}]}],d={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction-to-array-and-vector"},"Introduction to Array and Vector"),Object(i.b)("p",null,"If you are someone not new to CP, a quick overview of the introduction should do, but for a beginner read carefully and understand as arrays and vectors are data structures that you will be using in almost every programming question you solve."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The following STL utilities for vectors in C++ are  a must know : resize(), size(), push_back(), pop_back(), begin(), end(), sort(). Do read about what they do while learning about vectors."))),Object(i.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(i.b)(o.a,{resource:"true",list:[{name:"C Plus Plus Vector",link:"https://www.bitdegree.org/learn/c-plus-plus-vector/"},{name:"Vector In Cpp Stl",link:"https://www.geeksforgeeks.org/vector-in-cpp-stl/"},{name:"C Plus Plus Array",link:"https://www.bitdegree.org/learn/c-plus-plus-array/"},{name:"Arrays",link:"https://www.programiz.com/cpp-programming/arrays/"}],mdxType:"Question"})),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Vectors compared to arrays are more versatile and flexible, along with the utilities provided for vectors by STL makes them easy to work with, hence they are the preferred choice of programmers."))),Object(i.b)("h2",{id:"tc-of-insert-in-vectors"},"TC of insert in vectors"),Object(i.b)("p",null,"Now you know what a vector is, but do you know about the time complexity of insert operation in vectors. For arrays it is but simple O(1), is it the same case for vectors, what do you think ? Well here is a spoiler, the TC is not exactly O(1) but the amortised TC is O(1). So what does it mean and what is its significance, read on and you will find out, here is first a little introduction of Amortised TC and then TC of insert in vectors."),Object(i.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(i.b)(o.a,{resource:"true",list:[{name:"Analysis Algorithm Set 5 Amortized Analysis Introduction",link:"https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/"},{name:"Vectors",link:"https://people.engr.tamu.edu/andreas-klappenecker/csce411-s14/csce411-amortized2.pdf"}],mdxType:"Question"})),"QnA: What is the TC of delete in vectors ? If you have understood well enough you should be able to answer this.",Object(i.b)("h2",{id:"dynamic-declarations-of-arrays"},"Dynamic declarations of arrays"),Object(i.b)("p",null,"From what you have learnt so far about arrays, you know how you can declare arrays and vectors if you know the size , but in many real life scenarios and programming problems, you will not know the size beforehand not until the runtime, so you will need to allocate memory to arrays dynamically using the new keyword. ",Object(i.b)("a",{parentName:"p",href:"https://www.techiedelight.com/dynamic-memory-allocation-in-c-for-2d-3d-array/"},"Read here to find out more on the same.")),Object(i.b)("h2",{id:"declarations-and-initialising-a-vector"},"Declarations and Initialising a vector"),Object(i.b)("p",null,"This may seem very trivial, but doing this trivial thing properly will save you multiple lines of code to a single line, and improve your coding speed, unless you don\u2019t wanna be left behind in a competition it is advised to go through and read about the various ways of vector initialisation."),Object(i.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(i.b)(o.a,{resource:"true",list:[{name:"Initialize A Vector In Cpp Different Ways",link:"https://www.geeksforgeeks.org/initialize-a-vector-in-cpp-different-ways/"},{name:"C How To Initialize Two Dimensional Vector Initializing 2D Vectors Matrix",link:"https://thispointer.com/c-how-to-initialize-two-dimensional-vector-initializing-2d-vectors-matrix/"}],mdxType:"Question"})),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Initialise the vector with default values during its declaration, whenever possible."))),Object(i.b)("h2",{id:"pass-by-reference-vs-value-vs-pointers"},"Pass by reference vs value vs pointers"),Object(i.b)("p",null,"Passing parameters to functions is something you will do all the time, to be able to do it correctly and obtain the correct result from your method you will need to know and understand this fundamental concept. Here you will learn about these concepts from C++ point of view. ",Object(i.b)("br",null)),Object(i.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(i.b)(o.a,{resource:"true",list:[{name:"Pass By Value Vs Pass By Reference",link:"https://www.educative.io/edpresso/pass-by-value-vs-pass-by-reference/"},{name:"Pass by Value",link:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.cbclx01/pass_by_value.htm"},{name:"Pass by Pointer",link:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.cbclx01/pass_by_pointer.htm"},{name:"IBM Knowledge Center",link:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.cbclx01/cplr233.htm"}],mdxType:"Question"})),"Q. What will happen when you pass an array to a function by value ? Ponder over this, find the answer and remember it.",Object(i.b)("h2",{id:"passing-of-array-and-vectors-into-methods"},"Passing of Array and Vectors into methods"),Object(i.b)("p",null,"Now that you have learnt about the differences between pass by reference , value and pointer, here you will learn about passing of arrays and vectors into methods. ",Object(i.b)("br",null)),Object(i.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(i.b)(o.a,{resource:"true",list:[{name:"How Arrays Are Passed To Functions In Cc",link:"https://www.geeksforgeeks.org/how-arrays-are-passed-to-functions-in-cc/"},{name:"Pass 2D Array Function Parameter Cpp",link:"https://www.techiedelight.com/pass-2d-array-function-parameter-cpp/"}],mdxType:"Question"})),Object(i.b)("p",null,"Passing an array by value is a little tricky so understand clearly what happens when you pass an array by value, well at least you think you are passing by value, but is it really being passed by value ? ",Object(i.b)("a",{parentName:"p",href:"https://www.techiedelight.com/pass-array-by-value-to-function/"},"Read on to find out")),Object(i.b)("p",null,"Most of the time you will be using vectors instead of array, so do not miss out on learning how to pass a vector to a method.",Object(i.b)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/passing-vector-function-cpp/"},"Binge here")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"It will be useful to know that when you do not pass an array by reference to a function, it decays into pointers, so the changes that you do in the function will be reflected back, the same is not true for vectors"))),Object(i.b)("p",null,"QnA :\nHow are pointers similar to arrays ?\n",Object(i.b)("a",{parentName:"p",href:"https://www.quora.com/In-C++-functions-why-are-arrays-passed-by-reference-by-default"},"One click away")),Object(i.b)("h2",{id:"questions"},"Questions"),Object(i.b)("h3",{id:"array-rotation"},"Array Rotation"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Rotate Matrix",link:"https://www.interviewbit.com/problems/rotate-matrix/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"prefixsuffix-array"},"Prefix/Suffix Array"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Partitions",link:"https://www.interviewbit.com/problems/partitions/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Max Distance",link:"https://www.interviewbit.com/problems/max-distance/"},{name:"Maximum Sum Triplet",link:"https://www.interviewbit.com/problems/maximum-sum-triplet/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"two-pointers"},"Two Pointers"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"basic",values:[{label:"Basic",value:"basic"},{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"basic",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Remove Duplicates From Sorted Array Ii",link:"https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array-ii/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Intersection Of Sorted Arrays",link:"https://www.interviewbit.com/problems/intersection-of-sorted-arrays/"},{name:"Diffk",link:"https://www.interviewbit.com/problems/diffk/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"3 Sum",link:"https://www.interviewbit.com/problems/3-sum/"},{name:"Max Continuous Series Of 1S",link:"https://www.interviewbit.com/problems/max-continuous-series-of-1s/"},{name:"Array 3 Pointers",link:"https://www.interviewbit.com/problems/array-3-pointers/"},{name:"Container With Most Water",link:"https://www.interviewbit.com/problems/container-with-most-water/"},{name:"Window String",link:"https://www.interviewbit.com/problems/window-string/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Subarrays With Distinct Integers",link:"https://www.interviewbit.com/problems/subarrays-with-distinct-integers/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"kadane"},"Kadane"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Max Sum Contiguous Subarray",link:"https://www.interviewbit.com/problems/max-sum-contiguous-subarray/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Flip",link:"https://www.interviewbit.com/problems/flip/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"bucketing"},"Bucketing"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"hard",values:[{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Maximum Consecutive Gap",link:"https://www.interviewbit.com/problems/maximum-consecutive-gap/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"sorting"},"Sorting"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Wave Array",link:"https://www.interviewbit.com/problems/wave-array/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Largest Number",link:"https://www.interviewbit.com/problems/largest-number/"},{name:"Arrange",link:"https://www.spoj.com/problems/ARRANGE/"}],mdxType:"Question"}))),Object(i.b)("br",null),Object(i.b)("h3",{id:"random"},"Random"),Object(i.b)("br",null),Object(i.b)(s.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Anti Diagonals",link:"https://www.interviewbit.com/problems/anti-diagonals/"},{name:"Sorted Matrix2333",link:"https://practice.geeksforgeeks.org/problems/sorted-matrix2333/1"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Maximum Absolute Difference",link:"https://www.interviewbit.com/problems/maximum-absolute-difference/"},{name:"Hotel Bookings Possible",link:"https://www.interviewbit.com/problems/hotel-bookings-possible/"},{name:"Find Permutation",link:"https://www.interviewbit.com/problems/find-permutation/"},{name:"Merge Intervals",link:"https://www.interviewbit.com/problems/merge-intervals/"},{name:"Set Matrix Zeros",link:"https://www.interviewbit.com/problems/set-matrix-zeros/"}],mdxType:"Question"})),Object(i.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(i.b)(o.a,{list:[{name:"Triplets With Sum Between Given Range",link:"https://www.interviewbit.com/problems/triplets-with-sum-between-given-range/"},{name:"Find Duplicate In Array",link:"https://www.interviewbit.com/problems/find-duplicate-in-array/"},{name:"Maximum Unsorted Subarray",link:"https://www.interviewbit.com/problems/maximum-unsorted-subarray/"},{name:"Set Matrix Zeros",link:"https://www.interviewbit.com/problems/set-matrix-zeros/"},{name:"N3 Repeat Number",link:"https://www.interviewbit.com/problems/n3-repeat-number/"}],mdxType:"Question"}))),Object(i.b)("br",null))}u.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=m(a),u=n,p=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(p,s(s({ref:t},c),{},{components:a})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},117:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,a){"use strict";var n=a(0),r=a(119);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},120:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(118),o=a(117),s=a(56),l=a.n(s);const c=37,m=39;t.a=function(e){const{lazy:t,block:a,defaultValue:s,values:b,groupId:d,className:u}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(i.a)(),[w,v]=Object(n.useState)(s),y=n.Children.toArray(e.children),f=[];if(null!=d){const e=p[d];null!=e&&e!==w&&b.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.target,a=f.indexOf(t),n=y[a].props.value;v(n),null!=d&&(h(d,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&r<=o&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},O=e=>{var t;let a;switch(e.keyCode){case m:{const t=f.indexOf(e.target)+1;a=f[t]||f[0];break}case c:{const t=f.indexOf(e.target)-1;a=f[t]||f[f.length-1];break}}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},u)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===e}),key:e,ref:e=>f.push(e),onKeyDown:O,onFocus:g,onClick:g},t)))),t?Object(n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},122:function(e,t,a){"use strict";var n=a(0),r=a.n(n);class i extends n.Component{constructor(){super(),this.state={showText:"none",show:"Show More"}}showText(){}render(){return r.a.createElement("div",{className:(this.props.id,"")},r.a.createElement("div",{className:"text-center\tpy-5 mb-3 lg:mx-52"},r.a.createElement("div",{className:"m-0 lg:m-auto text-left"},r.a.createElement("div",{className:this.props.id?"lg:flex  lg:flex-row":"lg:flex  lg:flex-row-reverse"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"p-5 md:p-24 lg:p-5"},r.a.createElement("img",{src:this.props.imgUrl,alt:this.props.title}))),r.a.createElement("div",{className:" text-center lg:text-left flex justify-center align-center flex-col "},r.a.createElement("div",{className:"mt-3 p-16 py-18"},r.a.createElement("h1",{className:"font-medium  text-2xl lg:text-4xl pb-5 align-middle"},this.props.title),r.a.createElement("span",{className:" align-middle mb-0 text-lg"},this.props.description),r.a.createElement("span",{className:" align-middle mb-0 text-lg mt-0",style:{display:this.state.showText}},r.a.createElement("br",null),this.props.more),r.a.createElement("br",null),r.a.createElement("span",{className:"text-gray-500 cursor-pointer hover:text-gray-700",onClick:()=>{"none"==this.state.showText?this.setState({showText:"block",show:"Show Less"}):this.setState({showText:"none",show:"Show More"}),console.log(this.state.showText)}},this.state.show)))))))}}t.a=i},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n);class i extends n.Component{render(){return r.a.createElement("div",{className:"border-8 border-blue-600"},r.a.createElement("div",{className:this.props.link?"h-2 bg-blue-600":"none"}),r.a.createElement("div",{className:this.props.link?"p-5 font-semibold bg-blue-900 rounded-lg rounded-t-none text-white":"p-2 font-semibold bg-gray-800 rounded-md text-white"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"text-lg"},r.a.createElement("a",{href:this.props.url,className:"hover:no-underline hover:text-blue-400 text-white"},this.props.title)),r.a.createElement("svg",{className:"text-gray-300 h-5 w-5 ml-1 mt-2",fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),r.a.createElement("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}))),r.a.createElement("div",{className:"text-lg text-gray-400 pb-2"},this.props.titles),r.a.createElement("div",{className:"text-sm text-gray-300"},this.props.description)))}}t.a=i},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);a(122);function i(e){var t;t=e.resource?"RESOURCES":"QUESTION";const a=e.list;return a?r.a.createElement("div",null,r.a.createElement("div",{className:"flex flex-col mt-2 min-w-full rounded-lg"},r.a.createElement("table",{className:e.resource?"min-w-full table table-auto rounded-md bg-purple-800 border-none":"min-w-full table table-auto rounded-md bg-yellow-800 border-none"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"border-none"},r.a.createElement("th",{className:e.resource?"text-left pl-5 font-normal border-none text-purple-200":"text-left pl-5 font-normal border-none text-yellow-200"},t))),a.map(((e,t)=>r.a.createElement("tbody",{id:t,className:"bg-gray-900 "},r.a.createElement("tr",{className:"border-none"},r.a.createElement("td",{className:"pl-10 border-none border-b font-semibold",colSpan:2},r.a.createElement("a",{href:e.link,className:"text-blue-300 hover:text-blue-500"},e.name)),r.a.createElement("td",{className:"pl-5 border-none border-b"},r.a.createElement("div",{className:"text-gray-300"},e.desc))))))))):r.a.createElement("div",null)}}}]);