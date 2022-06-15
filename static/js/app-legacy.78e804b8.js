(function(){"use strict";var t={9022:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(4297),o=n.n(i),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},a=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")])])])}],l={name:"Banner",data:function(){return{}},mounted:function(){},methods:{}},c=l,f=n(1001),v=(0,f.Z)(c,u,s,!1,null,"60b26690",null),p=v.exports,d={name:"App",components:{Banner:p},mounted:function(){}},m=d,h=(0,f.Z)(m,r,a,!1,null,null,null),_=h.exports,g=n(617),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},w=[],x={name:"About",data:function(){return{}},beforeRouteEnterr:function(t,e,n){},beforeRouterLeave:function(t,e,n){}},y=x,C=(0,f.Z)(y,b,w,!1,null,"5ce89b87",null),k=C.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},O=[],$={name:"Home",data:function(){return{}},mounted:function(){},methods:{}},Z=$,A=(0,f.Z)(Z,E,O,!1,null,"265b5d8e",null),j=A.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习VUE")]),n("li",[t._v("news001")]),n("input",{attrs:{type:"text"}}),n("li",[t._v("news002")]),n("input",{attrs:{type:"text"}}),n("li",[t._v("news003")]),n("input",{attrs:{type:"text"}})])},S=[],B={name:"News",data:function(){return{opacity:1}},activated:function(){console.log("进入news")},deactivated:function(){console.log("离开news")}},H=B,L=(0,f.Z)(H,q,S,!1,null,"7f3d4679",null),M=L.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])])})),0),n("hr"),n("router-view")],1)},R=[],T=(n(4916),n(5306),{name:"Message",data:function(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},mounted:function(){},methods:{pushShow:function(t){this.$router.push({path:"/home/message/detail",query:{id:t.id,title:t.title}})},replaceShow:function(t){this.$router.replace({path:"/home/message/detail",query:{id:t.id,title:t.title}})}}}),D=T,P=(0,f.Z)(D,N,R,!1,null,"639e1374",null),V=P.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号"+t._s(t.id))]),n("li",[t._v("消息编号"+t._s(t.title))])])},F=[],I={name:"Detail",props:["id","title"],data:function(){return{}},mounted:function(){console.log(this.$route)},methods:{}},U=I,G=(0,f.Z)(U,z,F,!1,null,"5d035e82",null),J=G.exports,K=new g.Z({routes:[{name:"guanyu",path:"/about",component:k,meta:{title:"关于"}},{name:"zhuye",path:"/home",component:j,meta:{title:"主页"},children:[{path:"news",component:M,meta:{isAuth:!0,title:"新闻"},beforeEnter:function(t,e,n){console.log("@",t),console.log("@",e),t.meta.isAuth?"atguigu"==localStorage.getItem("school")&&n():n()}},{name:"xiaoxi",path:"message",component:V,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:J,props:function(t){return{id:t.query.id,title:t.query.title,a:1,b:"hello"}}}]}]}]});K.afterEach((function(t,e){document.title=t.meta.title}));var Q=K;o().config.productionTip=!1,o().use(g.Z);new(o())({el:"#app",render:function(t){return t(_)},router:Q})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var u=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(u=!1,r<a&&(a=r));if(u){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],u=i[1],s=i[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(e&&e(i);l<a.length;l++)r=a[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9022)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.78e804b8.js.map