(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return h}));var n=a(3),i=a(7),r=(a(0),a(116)),s=(a(123),a(124)),o=a(120),l=a(121),c={id:"graph",title:"Graph",sidebar_label:"Graph"},m={unversionedId:"graph",id:"graph",isDocsHomePage:!1,title:"Graph",description:"Concept",source:"@site/docs/graph.mdx",slug:"/graph",permalink:"/MPG/docs/graph",version:"current",sidebar_label:"Graph",sidebar:"comp",previous:{title:"Trees",permalink:"/MPG/docs/trees"},next:{title:"Advance Topics",permalink:"/MPG/docs/advanced"}},d=[{value:"Concept",id:"concept",children:[]},{value:"Representation of a graph",id:"representation-of-a-graph",children:[]},{value:"DFS",id:"dfs",children:[]},{value:"Types of edges in DFS",id:"types-of-edges-in-dfs",children:[]},{value:"BFS",id:"bfs",children:[]},{value:"Connected Components :",id:"connected-components-",children:[]},{value:"Finding bridges",id:"finding-bridges",children:[]},{value:"Finding bridges online",id:"finding-bridges-online",children:[]},{value:"Finding articulation points",id:"finding-articulation-points",children:[]},{value:"Finding strongly connected component",id:"finding-strongly-connected-component",children:[]},{value:"Union-Find",id:"union-find",children:[]},{value:"Dijkstra\u2019s",id:"dijkstras",children:[]},{value:"0-1 BFS",id:"0-1-bfs",children:[]},{value:"Dijkstra\u2019s on sparse graphs",id:"dijkstras-on-sparse-graphs",children:[]},{value:"Bellman Ford\u2019s",id:"bellman-fords",children:[]},{value:"Floyd-Warshall\u2019s Algorithm",id:"floyd-warshalls-algorithm",children:[]},{value:"Spanning Tree",id:"spanning-tree",children:[]},{value:"Kruskal\u2019s Algo",id:"kruskals-algo",children:[]},{value:"Prim&#39;s Algo",id:"prims-algo",children:[]},{value:"Topological sort",id:"topological-sort",children:[]},{value:"Questions",id:"questions",children:[{value:"BIPARTITE",id:"bipartite",children:[]},{value:"Random",id:"random",children:[]}]}],p={toc:d};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"concept"},"Concept"),Object(r.b)("p",null,"Tree as you have seen and read is basically a graph with a well defined root node, in other words graph is an extension of trees, and are useful to represent real world connections and scenarios, for ex: connections on facebook or linkedin is a graph where you are a node and you are connected to other nodes in the graph. In order to get started with graphs you must first know the basic terminology of graphs and build a visual picture of what a graph looks like, the following articles will help you do so."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Terminology And Representations Of Graphs",link:"https://www.techiedelight.com/terminology-and-representations-of-graphs/"},{name:"Graph",link:"https://www.programiz.com/dsa/graph/"}],mdxType:"Question"})),Object(r.b)("h2",{id:"representation-of-a-graph"},"Representation of a graph"),Object(r.b)("p",null,"After knowing what a graph is , it\u2019s important that you know how you can code a graph. There are 2 ways to represent graphs and you will have to learn about them in detail, each have their own advantages and disadvantages. To know you must read on, be sure to learn the basics properly."),Object(r.b)("p",null,"Adjacency Matrix :"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Graph Adjacency Matrix",link:"https://www.programiz.com/dsa/graph-adjacency-matrix/"}],mdxType:"Question"})),Object(r.b)("p",null,"Adjacency List :"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Graph Adjacency List",link:"https://www.programiz.com/dsa/graph-adjacency-list/"}],mdxType:"Question"})),Object(r.b)("h2",{id:"dfs"},"DFS"),Object(r.b)("p",null,"DFS or depth first search is an algorithm for graph traversal, just like you have learnt tree traversal previously, this time you will learn about graph traversals, which are a must know because they help in solving more difficult and advanced level graph questions. So what is DFS ? What is the basic principle behind DFS ? How is it implemented ? What is the time complexity ? What are the applications of DFS ? All of these are important questions you should be able to answer once you have read about it from these good articles."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Depth First Search",link:"https://cp-algorithms.com/graph/depth-first-search.html"},{name:"Graph Dfs",link:"https://www.programiz.com/dsa/graph-dfs/"}],mdxType:"Question"})),Object(r.b)("p",null,"QnA : Can you use stack to implement DFS ?"),Object(r.b)("h2",{id:"types-of-edges-in-dfs"},"Types of edges in DFS"),Object(r.b)("p",null,"While performing DFS, you can store the arrival and departure times of a node/vertex which can be used to explore the type of edge between two vertices, this perspective of DFS will be critical and useful to your problem solving analysis. So don\u2019t you wanna know the different types of edges ? if you do, you must read on."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Arrival Departure Time Vertices Dfs",link:"https://www.techiedelight.com/arrival-departure-time-vertices-dfs/"},{name:"Types Edges Involved Dfs Relation",link:"https://www.techiedelight.com/types-edges-involved-dfs-relation/"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Valid Path",link:"https://www.interviewbit.com/problems/valid-path/"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Stepping Numbers",link:"https://www.interviewbit.com/problems/stepping-numbers/"},{name:"Path With Good Nodes",link:"https://www.interviewbit.com/problems/path-with-good-nodes/"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Delete Edge",link:"https://www.interviewbit.com/problems/delete-edge/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"bfs"},"BFS"),Object(r.b)("p",null,"You have studied about DFS, now you are going to study about BFS which is another graph traversal algorithm. The questions that you have answered for DFS, the same questions must be answered for BFS, which are, what is BFS ? What is the basic principle behind BFS ? How is it implemented ? What is the time complexity ? What are the applications of BFS ? So you better start reading."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Breadth First Search",link:"https://cp-algorithms.com/graph/breadth-first-search.html"},{name:"Graph Bfs",link:"https://www.programiz.com/dsa/graph-bfs/"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"},{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Knight On Chess Board",link:"https://www.interviewbit.com/problems/knight-on-chess-board/"},{name:"Steps By Knight5927",link:"https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Capture Regions On Board",link:"https://www.interviewbit.com/problems/capture-regions-on-board/"},{name:"Clone Graph",link:"https://www.interviewbit.com/problems/clone-graph/"},{name:"Description",link:"https://leetcode.com/problems/cheapest-flights-within-k-stops/description/"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Smallest Multiple With 0 And 1",link:"https://www.interviewbit.com/problems/smallest-multiple-with-0-and-1/"},{name:"Word Ladder I",link:"https://www.interviewbit.com/problems/word-ladder-i/"},{name:"Snake Ladder Problem",link:"https://www.interviewbit.com/problems/snake-ladder-problem/"},{name:"Water Jug Problem Using Bfs",link:"https://www.geeksforgeeks.org/water-jug-problem-using-bfs/"},{name:"Min Cost Path",link:"https://www.interviewbit.com/problems/min-cost-path/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"connected-components-"},"Connected Components :"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Search For Connected Components",link:"https://cp-algorithms.com/graph/search-for-connected-components.html"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Permutation Swaps",link:"https://www.interviewbit.com/problems/permutation-swaps/"},{name:"Strongly Connected Components Kosarajus Algo",link:"https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"finding-bridges"},"Finding bridges"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Bridge Searching",link:"https://cp-algorithms.com/graph/bridge-searching.html"}],mdxType:"Question"})),Object(r.b)("h2",{id:"finding-bridges-online"},"Finding bridges online"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Bridge Searching Online",link:"https://cp-algorithms.com/graph/bridge-searching-online.html"}],mdxType:"Question"})),Object(r.b)("h2",{id:"finding-articulation-points"},"Finding articulation points"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Articulation Points And Bridges",link:"https://www.hackerearth.com/practice/algorithms/graphs/articulation-points-and-bridges/tutorial"},{name:"Cutpoints",link:"https://cp-algorithms.com/graph/cutpoints.html"}],mdxType:"Question"})),Object(r.b)("h2",{id:"finding-strongly-connected-component"},"Finding strongly connected component"),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Strongly Connected Components",link:"https://cp-algorithms.com/graph/strongly-connected-components.html"},{name:"Strongly Connected Components",link:"https://www.hackerearth.com/practice/algorithms/graphs/strongly-connected-components/tutorial"}],mdxType:"Question"})),Object(r.b)("h2",{id:"union-find"},"Union-Find"),Object(r.b)("p",null,"The basic use case of an edge is to connect two vertices, but if you see it\u2019s not just connecting two vertices but all other vertices connected to these two vertices are now connected to each other via this edge, as if a union has happened. Union-find as you will see is a very useful algorithm that relates to union of two vertices whenever an edge is added between them, it helps to solve a specific pattern of questions very easily. So what is this union-find algorithm? What is the time complexity ? and how is it implemented ? All of these questions you must be able to answer after reading these wonderful articles ."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Disjoint_Set_Union",link:"https://cp-algorithms.com/data_structures/disjoint_set_union.html",desc:"Read upto time complexity inclusive"},{name:"Course",link:"https://codeforces.com/edu/course/2"},{name:"Disjoint Set Union Union Find",link:"https://www.hackerearth.com/practice/notes/disjoint-set-union-union-find/"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Cycle In Undirected Graph",link:"https://www.interviewbit.com/problems/cycle-in-undirected-graph/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"dijkstras"},"Dijkstra\u2019s"),Object(r.b)("p",null,"How does uber know the shortest distance between your pick up point and your drop off point ? Dijkstra\u2019s algorithm will be used whenever you want to find the shortest distance path from the source or starting vertex to all other vertices in the graph. Now that you know what Dijkstra is there are few other questions left to answer which are, what is the basic principle behind dijkstra ? how is it implemented ? What is the time complexity ? All of these questions you must be able to answer after reading these wonderful articles."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Dijkstras Shortest Path Algorithm Greedy Algo 7",link:"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"},{name:"Dijkstra",link:"https://cp-algorithms.com/graph/dijkstra.html"},{name:"Single Source Shortest Paths Dijkstras Algorithm",link:"https://www.techiedelight.com/single-source-shortest-paths-dijkstras-algorithm/"}],mdxType:"Question"})),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This tool will help you to visualise dijkstra\u2019s algo, be sure you are able to visualise it before proceeding any further\n",Object(r.b)("a",{parentName:"p",href:"https://visualgo.net/en/sssp"},"https://visualgo.net/en/sssp")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Dijkstra\u2019s algorithm does not work when the edge weights can have negative values."))),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"hard",values:[{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Useful Extra Edges",link:"https://www.interviewbit.com/problems/useful-extra-edges/"},{name:"Minimum Edges Reverse Make Path Source Destination",link:"https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"0-1-bfs"},"0-1 BFS"),Object(r.b)("p",null,"It so happens that finding the single source shortest path using dijkstra\u2019s can be an overkill if the edge weights contain one of only two possible values. For this special scenario 0-1 BFS can be deployed to find the SSSP ,which is easier to understand and code. So why does having this one special condition make it possible to use BFS ? The answer you will find in this articles but you must read on."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"01_Bfs",link:"https://cp-algorithms.com/graph/01_bfs.html"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"hard",values:[{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Min Cost Path",link:"ttps://www.interviewbit.com/problems/min-cost-path/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"dijkstras-on-sparse-graphs"},"Dijkstra\u2019s on sparse graphs"),Object(r.b)("p",null,"When it comes to graphs based on its representation adjacency matrix or adjacency list, the dijkstra\u2019s algorithm has different time complexity , here you will learn about the time complexity and implementation of dijkstra for sparse graphs which are represented using adjacency lists."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Dijkstra Sparse",link:"https://cp-algorithms.com/graph/dijkstra_sparse.html"},{name:"Dijkstras Algorithm For Adjacency List Representation Greedy Algo",link:"https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/"}],mdxType:"Question"})),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The Dijkstra\u2019s algorithm can be implemented using sets and priority with proper understanding of both containers you can use the more appropriate implementation."),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"[Link 1[(",Object(r.b)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-set-in-stl/"},"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-set-in-stl/"),")"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/"},"Link 2"))))),Object(r.b)("h2",{id:"bellman-fords"},"Bellman Ford\u2019s"),Object(r.b)("p",null,"Bellman Ford\u2019s algorithm overcomes the shortcoming of Dijkstra\u2019s algorithm and enables you to find the SSSP when the graph has negative edge weights. So the questions that arise are, what is the basic principle behind Bellman Ford\u2019s algorithm ? how is it implemented ? What is the time complexity ? All of these questions you must be able to answer after reading these wonderful articles."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Bellman Ford",link:"https://cp-algorithms.com/graph/bellman_ford.html"},{name:"Bellman Ford Algorithm",link:"https://www.programiz.com/dsa/bellman-ford-algorithm/"},{name:"Single Source Shortest Paths Bellman Ford Algorithm",link:"https://www.techiedelight.com/single-source-shortest-paths-bellman-ford-algorithm/"},{name:"Bellman Ford Algorithm Dp 23",link:"https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/"}],mdxType:"Question"})),Object(r.b)("h2",{id:"floyd-warshalls-algorithm"},"Floyd-Warshall\u2019s Algorithm"),Object(r.b)("p",null,"So far you have learned algorithms that find the shortest path from a single source vertex to all other vertices, but what if you have to find the shortest path from every vertex to every other vertex, is there any algorithm better than dijkstra's ? Fortunately there is , Floyd-Warshall\u2019s is a DP based approach that will help you to find the all pair shortest path easily. You know the principle behind this approach, DP, but do you know how it is implemented or what is the time complexity ? If you don\u2019t you must read these wonderful articles to find out."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"All Pair Shortest Path Floyd Warshall",link:"https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html"},{name:"Floyd Warshall Algorithm Dp 16",link:"https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/"}],mdxType:"Question"})),Object(r.b)("h2",{id:"spanning-tree"},"Spanning Tree"),Object(r.b)("p",null,"Spanning Tree is a type of graph which is a tree, in the sense that all the vertices will be connected and the number of edges will be one less than the vertex, building a spanning tree is usually a sub-problem to more difficult and challenging problems, but how do you build a spanning tree ? Is there any other useful variation to a spanning tree ? all  these questions will be answered, you have to just read on stay on track."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Spanning Tree And Minimum Spanning Tree",link:"https://www.programiz.com/dsa/spanning-tree-and-minimum-spanning-tree/"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"easy",values:[{label:"Easy",value:"easy"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"easy",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Commutable Islands",link:"https://www.interviewbit.com/problems/commutable-islands/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"kruskals-algo"},"Kruskal\u2019s Algo"),Object(r.b)("p",null,"You have learned about spanning tree and minimum spanning tree. Now you will learn how to create a minimum spanning tree from a graph. So what is the principle behind Kruskal\u2019s algorithm ? How is it implemented ? What is the time complexity ? All these questions you must be able to answer after reading these wonderful articles. As a spoiler, Kruskal\u2019s algorithm uses a greedy approach alongside union-find to find the minimum spanning tree. "),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Kruskal Algorithm",link:"https://www.programiz.com/dsa/kruskal-algorithm/"},{name:"Mst Kruskal",link:"https://cp-algorithms.com/graph/mst_kruskal.html"},{name:"Mst Kruskal With Dsu",link:"https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html"}],mdxType:"Question"})),Object(r.b)("h2",{id:"prims-algo"},"Prim's Algo"),Object(r.b)("p",null,"As an alternative to Kruskal\u2019s algorithm to find the minimum spanning tree, you can use Prim\u2019s Algorithm which also follows a greedy approach. So what is different about Prim\u2019s algorithm, of course it's the principle behind Prim\u2019s algorithm but what is this principle ? How is it implemented ? What is the time complexity ? All these questions you must be able to answer after reading these wonderful articles."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Mst Prim",link:"https://cp-algorithms.com/graph/mst_prim.html"},{name:"Prim Algorithm",link:"https://www.programiz.com/dsa/prim-algorithm/"},{name:"Minimum Spanning Tree",link:"https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/tutorial"}],mdxType:"Question"})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Incases where you can use both algorithms to find the MST, the choice of using Prim\u2019s or Kruskal\u2019s depends fairly on the ease of your understanding of the two and also on the ease of implementation."))),Object(r.b)("h2",{id:"topological-sort"},"Topological sort"),Object(r.b)("p",null,"For DAG, or Directed Acyclic Graphs you can come up with a special ordering of the vertices such that there is no backward edge. This ordering is a special condition that exists in many day to day scenarios, so it is very useful to learn about Topological sort which will help you to find this ordering of vertices. But remember that a graph must be a DAG. So what is a DAG ? How is it implemented ? What is the time complexity ? All these questions you must be able to answer after reading these wonderful articles."),Object(r.b)(l.a,{value:"resource",mdxType:"TabItem"},Object(r.b)(s.a,{resource:"true",list:[{name:"Topological Sort",link:"https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/tutorial"},{name:"Topological Sort",link:"https://cp-algorithms.com/graph/topological-sort.html"},{name:"Topological Sort",link:"https://www.interviewcake.com/concept/java/topological-sort/"},{name:"Topological Sorting Indegree Based Solution",link:"https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/"}],mdxType:"Question"})),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Possibility Of Finishing All Courses Given Prerequisites",link:"https://www.interviewbit.com/problems/possibility-of-finishing-all-courses-given-prerequisites/"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Alien Dictionary",link:"https://practice.geeksforgeeks.org/problems/alien-dictionary/1"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h2",{id:"questions"},"Questions"),Object(r.b)("h3",{id:"bipartite"},"BIPARTITE"),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Two Teams",link:"https://www.interviewbit.com/problems/two-teams/"}],mdxType:"Question"}))),Object(r.b)("br",null),Object(r.b)("h3",{id:"random"},"Random"),Object(r.b)("br",null),Object(r.b)(o.a,{defaultValue:"medium",values:[{label:"Medium",value:"medium"},{label:"Hard",value:"hard"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"medium",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Largest Distance Between Nodes Of A Tree",link:"https://www.interviewbit.com/problems/largest-distance-between-nodes-of-a-tree/"},{name:"Rat In A Maze Problem",link:"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"},{name:"M Coloring Problem 1587115620",link:"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"},{name:"The Celebrity Problem",link:"https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1"}],mdxType:"Question"})),Object(r.b)(l.a,{value:"hard",mdxType:"TabItem"},Object(r.b)(s.a,{list:[{name:"Sum Of Fibonacci Numbers",link:"https://www.interviewbit.com/problems/sum-of-fibonacci-numbers/"},{name:"Minimize Cash Flow Among Given Set Friends Borrowed Money",link:"https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/"}],mdxType:"Question"}))),Object(r.b)("br",null))}h.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),h=n,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return a?i.a.createElement(b,o(o({ref:t},c),{},{components:a})):i.a.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},117:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},118:function(e,t,a){"use strict";var n=a(0),i=a(119);t.a=function(){const e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)(void 0);t.a=i},120:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(118),s=a(117),o=a(56),l=a.n(o);const c=37,m=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:d,groupId:p,className:h}=e,{tabGroupChoices:b,setTabGroupChoices:u}=Object(r.a)(),[g,w]=Object(n.useState)(o),v=n.Children.toArray(e.children),f=[];if(null!=p){const e=b[p];null!=e&&e!==g&&d.some((t=>t.value===e))&&w(e)}const y=e=>{const t=e.target,a=f.indexOf(t),n=v[a].props.value;w(n),null!=p&&(u(p,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:s}=window;return t>=0&&i<=s&&n<=r&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let a;switch(e.keyCode){case m:{const t=f.indexOf(e.target)+1;a=f[t]||f[0];break}case c:{const t=f.indexOf(e.target)-1;a=f[t]||f[f.length-1];break}}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},h)},d.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>f.push(e),onKeyDown:j,onFocus:y,onClick:y},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},121:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},122:function(e,t,a){"use strict";var n=a(0),i=a.n(n);class r extends n.Component{constructor(){super(),this.state={showText:"none",show:"Show More"}}showText(){}render(){return i.a.createElement("div",{className:(this.props.id,"")},i.a.createElement("div",{className:"text-center\tpy-5 mb-3 lg:mx-52"},i.a.createElement("div",{className:"m-0 lg:m-auto text-left"},i.a.createElement("div",{className:this.props.id?"lg:flex  lg:flex-row":"lg:flex  lg:flex-row-reverse"},i.a.createElement("div",{className:""},i.a.createElement("div",{className:"p-5 md:p-24 lg:p-5"},i.a.createElement("img",{src:this.props.imgUrl,alt:this.props.title}))),i.a.createElement("div",{className:" text-center lg:text-left flex justify-center align-center flex-col "},i.a.createElement("div",{className:"mt-3 p-16 py-18"},i.a.createElement("h1",{className:"font-medium  text-2xl lg:text-4xl pb-5 align-middle"},this.props.title),i.a.createElement("span",{className:" align-middle mb-0 text-lg"},this.props.description),i.a.createElement("span",{className:" align-middle mb-0 text-lg mt-0",style:{display:this.state.showText}},i.a.createElement("br",null),this.props.more),i.a.createElement("br",null),i.a.createElement("span",{className:"text-gray-500 cursor-pointer hover:text-gray-700",onClick:()=>{"none"==this.state.showText?this.setState({showText:"block",show:"Show Less"}):this.setState({showText:"none",show:"Show More"}),console.log(this.state.showText)}},this.state.show)))))))}}t.a=r},123:function(e,t,a){"use strict";var n=a(0),i=a.n(n);class r extends n.Component{render(){return i.a.createElement("div",{className:"border-8 border-blue-600"},i.a.createElement("div",{className:this.props.link?"h-2 bg-blue-600":"none"}),i.a.createElement("div",{className:this.props.link?"p-5 font-semibold bg-blue-900 rounded-lg rounded-t-none text-white":"p-2 font-semibold bg-gray-800 rounded-md text-white"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"text-lg"},i.a.createElement("a",{href:this.props.url,className:"hover:no-underline hover:text-blue-400 text-white"},this.props.title)),i.a.createElement("svg",{className:"text-gray-300 h-5 w-5 ml-1 mt-2",fill:"currentColor",viewBox:"0 0 20 20"},i.a.createElement("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),i.a.createElement("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}))),i.a.createElement("div",{className:"text-lg text-gray-400 pb-2"},this.props.titles),i.a.createElement("div",{className:"text-sm text-gray-300"},this.props.description)))}}t.a=r},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);a(122);function r(e){var t;t=e.resource?"RESOURCES":"QUESTION";const a=e.list;return a?i.a.createElement("div",null,i.a.createElement("div",{className:"flex flex-col mt-2 min-w-full rounded-lg"},i.a.createElement("table",{className:e.resource?"min-w-full table table-auto rounded-md bg-purple-800 border-none":"min-w-full table table-auto rounded-md bg-yellow-800 border-none"},i.a.createElement("thead",null,i.a.createElement("tr",{className:"border-none"},i.a.createElement("th",{className:e.resource?"text-left pl-5 font-normal border-none text-purple-200":"text-left pl-5 font-normal border-none text-yellow-200"},t))),a.map(((e,t)=>i.a.createElement("tbody",{id:t,className:"bg-gray-900 "},i.a.createElement("tr",{className:"border-none"},i.a.createElement("td",{className:"pl-10 border-none border-b font-semibold",colSpan:2},i.a.createElement("a",{href:e.link,className:"text-blue-300 hover:text-blue-500"},e.name)),i.a.createElement("td",{className:"pl-5 border-none border-b"},i.a.createElement("div",{className:"text-gray-300"},e.desc))))))))):i.a.createElement("div",null)}}}]);