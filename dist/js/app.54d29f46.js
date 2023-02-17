(function(){"use strict";var t={6485:function(t,n,e){var o=e(3032),a=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},s=[],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"myNavbarContainer"},[n("div",{staticClass:"myNavbar"},[n("h2",[t._v("MyBlog")]),n("router-link",{attrs:{to:"/create",custom:""},scopedSlots:t._u([{key:"default",fn:function({navigate:e}){return[n("button",{staticClass:"btn",attrs:{role:"link"},on:{click:e}},[t._v("Create")])]}}])})],1)])},i=[],l={name:"NavBar"},c=l,u=e(3736),p=(0,u.Z)(c,r,i,!1,null,null,null),v=p.exports,f={name:"App",components:{Navbar:v}},d=f,m=(0,u.Z)(d,a,s,!1,null,null,null),h=m.exports,_=e(2631),b=function(){var t=this,n=t._self._c;return n("div",{staticClass:"home"},[n("div",{staticClass:"list"},[n("PostList")],1)])},C=[],g=function(){var t=this,n=t._self._c;return n("div",{staticClass:"blog"},t._l(t.posts,(function(e){return n("div",{key:e._id,staticClass:"Listcontainer"},[n("div",{staticClass:"contentList"},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(e.title))])]),n("div",{staticClass:"contentlist"},[n("p",[t._v(" "+t._s(e.content)+" ")])]),n("div",{staticClass:"creator"},[n("h4",[t._v("Yazar : "+t._s(e.creator))])])]),n("button",{staticClass:"editBtn",on:{click:function(n){return t.updatePost(e._id)}}},[t._v("Edit")]),n("button",{staticClass:"deleteBtn",on:{click:function(n){return t.removePost(e._id)}}},[t._v("Delete")])])})),0)},y=[],w=(e(7658),{name:"PostList",setup(){const t=(0,o.iH)([]),n="http://localhost:5000/posts",e=(0,_.useRouter)();async function a(){const e=await fetch(n),o=await e.json();t.value=o}async function s(t){await fetch(`${n}/${t}`,{method:"DELETE"});return a()}async function r(t){e.push({name:"update",params:{id:t}})}return(0,o.bv)((()=>{a()})),{posts:t,removePost:s,updatePost:r}}}),x=w,P=(0,u.Z)(x,g,y,!1,null,null,null),k=P.exports,Z={name:"home",components:{PostList:k}},O=Z,N=(0,u.Z)(O,b,C,!1,null,"70ea2b79",null),j=N.exports,L=function(){var t=this,n=t._self._c;return n("div",[n("PostForm")],1)},B=[],T=function(){var t=this,n=t._self._c;return n("div",{staticClass:"container",staticStyle:{"margin-top":"25px"}},[n("form",{on:{submit:function(n){return n.preventDefault(),t.submitBtnClick.apply(null,arguments)}}},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Title")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(n){n.target.composing||(t.title=n.target.value)}}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Content")]),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea",attrs:{placeholder:"Content"},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}})])]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Creater")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.creator,expression:"creator"}],staticClass:"input",attrs:{type:"text",placeholder:"Creater"},domProps:{value:t.creator},on:{input:function(n){n.target.composing||(t.creator=n.target.value)}}})]),t._m(0)])])])},E=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"btncontainer"},[n("button",{staticClass:"button is-link",staticStyle:{"background-color":"#e0954f"},attrs:{type:"submit"}},[t._v(" Submit ")])])}],S=e(5939),A={data(){return{title:"",content:"",creator:""}},methods:{submitBtnClick:async function(){try{const t="http://localhost:5000/posts",n={title:this.title,content:this.content,creator:this.creator},e=await S.Z.post(t,n);console.log(e)}catch(t){console.log(t)}}},computed:{postJson:function(){return JSON.parse(this.post)}}},D=A,F=(0,u.Z)(D,T,E,!1,null,null,null),J=F.exports,M={name:"CreateL",components:{PostForm:J}},$=M,z=(0,u.Z)($,L,B,!1,null,null,null),H=z.exports,R=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("Update")])])}],V={name:"updateView"},Y=V,q=(0,u.Z)(Y,R,U,!1,null,null,null),G=q.exports;o.ZP.use(_.Z);var I=new _.Z({routes:[{path:"/",name:"home",component:j},{path:"/create",name:"create",component:H},{path:"/update/:id",name:"update",component:G}]});o.ZP.config.productionTip=!1,new o.ZP({el:"#app",router:I,components:{App:h},template:"<App/>"})}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var s=n[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,s){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],s=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,a,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,s,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(l)var u=l(e)}for(n&&n(o);c<r.length;c++)s=r[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(u)},o=self["webpackChunkfrontend2"]=self["webpackChunkfrontend2"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(6485)}));o=e.O(o)})();
//# sourceMappingURL=app.54d29f46.js.map