(function(){"use strict";var e={3555:function(e,t,n){var a=n(9242),r=n(3396);function o(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var i=n(89);const s={},c=(0,i.Z)(s,[["render",o]]);var d=c,u=n(2483),l=n(65),p=n(70),m=(0,l.MT)({state:{threads:[],threadTitle:"",threadDescription:"",comments:[],tags:[],tagThread:[],tag_name:"",userMobile:0,user:[],loginCheck:!1},getters:{returnThreadData(e){return e.threads},returnTagThread(e){return e.tagThread},returnUserInformation(e){return e.user}},mutations:{setThreadData(e,t){e.threads=t},setComment(e,t){e.comments=t},setThreadTitle(e,t){e.threadTitle=t},setThreadDescription(e,t){e.threadDescription=t},setTagData(e,t){e.tags=t},setTag(e,t){e.tag_name=t},setUserMobile(e,t){e.userMobile=t},setUser(e,t){e.user=t},setLoginCheck(e,t){e.loginCheck=t}},actions:{async getThreads({commit:e}){await p.Z.get("/api/threads").then((t=>{e("setThreadData",t.data.threads)})).catch((e=>{console.log(e)}))},async getTags({commit:e},{id:t,path:n}){await p.Z.get("/api/tags").then((a=>{if(n.match(/home|thread_detail/))e("setTagData",a.data.tags);else{const n=a.data.tags.filter((e=>e.id!==parseInt(t)));e("setTagData",n)}})).catch((e=>{console.log(e)}))},async getTagThread({commit:e},t){await p.Z.get("/api/tag_threads/"+t).then((t=>{e("setThreadData",t.data.threads),e("setTag",t.data.tag.tag)})).catch((e=>{console.log(e)}))},async getThreadDetail({commit:e},t){await p.Z.get("/api/threads/"+t).then((t=>{e("setThreadTitle",t.data.thread[0].thread_title),e("setThreadDescription",t.data.thread[0].thread_description),e("setComment",t.data.comments)})).catch((e=>{console.log(e)}))},async getUserComment({commit:e},t){await p.Z.get("/api/comments/"+t).then((t=>{e("setComment",t.data.comments)}))},async createThread({commit:e},{id:t,name:n,title:a,description:r,tag:o}){await p.Z.post("/api/create_thread",{id:t,name:n,thread_title:a,thread_description:r,tag:o})},async createComment({commit:e},{id:t,index:n,thread_title:a,user_id:r,user_name:o,comment:i,src:s,bold:c,italic:d,underline:u}){await p.Z.post("/api/threads/"+t,{id:t,index:n,thread_title:a,user_id:r,user_name:o,comment:i,src:s,bold:c,italic:d,underline:u})},async getUser({commit:e}){await p.Z.get("/api/user").then((t=>{200===t.status&&(e("setUser",t.data.user),e("setLoginCheck",!0))})).catch((e=>{console.log(e)}))},async updateUser({commit:e},{id:t,formData:n}){await p.Z.post("/api/userupdate/"+t,n)},async logout({commit:e}){await p.Z.post("/api/logout"),e("setLoginCheck",!1)}},modules:{}});const h=[{path:"/:catchAll(.*)",name:"not-found",component:()=>n.e(445).then(n.bind(n,7445))},{path:"/",name:"home",component:()=>Promise.all([n.e(937),n.e(588)]).then(n.bind(n,6282)),children:[{path:"popular_thread",name:"popular_thread",component:()=>Promise.all([n.e(937),n.e(588)]).then(n.bind(n,6282))},{path:"recent_thread",name:"recent_thread",component:()=>Promise.all([n.e(937),n.e(588)]).then(n.bind(n,6282))}]},{path:"/tags/:id",name:"tag",component:()=>Promise.all([n.e(937),n.e(627)]).then(n.bind(n,8075)),props:!0,children:[{path:"tag_popular_thread",name:"tag_popular_thread",component:()=>Promise.all([n.e(937),n.e(588)]).then(n.bind(n,6282))},{path:"tag_recent_thread",name:"tag_recent_thread",component:()=>Promise.all([n.e(937),n.e(588)]).then(n.bind(n,6282))}]},{path:"/thread/:id",name:"thread_detail",component:()=>n.e(2).then(n.bind(n,9002)),props:!0},{path:"/register",name:"register",component:()=>n.e(930).then(n.bind(n,2930))},{path:"/login",name:"login",component:()=>n.e(707).then(n.bind(n,7707))},{path:"/user",children:[{path:"userdetail",name:"userdetail",component:()=>Promise.all([n.e(937),n.e(898)]).then(n.bind(n,6644)),async beforeEnter(e,t,n){await m.dispatch("getUser"),m.state.loginCheck?n():n({path:"/login",query:{redirect:e.fullPath}})}},{path:"createthread",name:"createthread",component:()=>n.e(372).then(n.bind(n,8372)),async beforeEnter(e,t,n){await m.dispatch("getUser"),m.state.loginCheck?n():n({path:"/login",query:{redirect:e.fullPath}})}},{path:"userupdate",name:"userupdate",component:()=>n.e(541).then(n.bind(n,5541)),async beforeEnter(e,t,n){await m.dispatch("getUser"),m.state.loginCheck?n():n({path:"/login",query:{redirect:e.fullPath}})}}]}],f=(0,u.p7)({history:(0,u.PO)(),routes:h});var g=f;const v=e=>((0,r.dD)("data-v-24ecd2e8"),e=e(),(0,r.Cn)(),e),b={class:"header w-100 mb-5 px-sm-5 px-3"},w={class:"px-0 py-2 navbar navbar-expand-sm navbar-dark"},y=v((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),_={key:0,class:"collapse navbar-collapse",id:"navbarSupportedContent"},k={class:"navbar-nav ml-auto mr-md-3"},T={class:"nav-item"},C=v((()=>(0,r._)("span",{class:"sr-only"},"(current)",-1))),Z={class:"nav-item dropdown"},D=v((()=>(0,r._)("a",{class:"nav-link dropdown-toggle active",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," ユーザー ",-1))),P={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},O=v((()=>(0,r._)("div",{class:"dropdown-divider"},null,-1))),A={key:1,class:"collapse navbar-collapse",id:"navbarSupportedContent"},E={class:"navbar-nav ml-auto mr-md-3"},j={class:"nav-item mr-sm-2"},x={class:"nav-item ml-sm-2"};function S(e,t,n,a,o,i){const s=(0,r.up)("RouterLinkAtomVue"),c=(0,r.up)("router-link"),d=(0,r.up)("ButtonAtomVue");return(0,r.wg)(),(0,r.iD)("header",b,[(0,r._)("nav",w,[(0,r.Wm)(s,{link:{to:"/",msg:"Thread App"},class:"navbar-brand h1 mb-0"}),y,!0===e.store.state.loginCheck?((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("ul",k,[(0,r._)("li",T,[(0,r.Wm)(c,{class:"nav-link active",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("ホーム "),C])),_:1})]),(0,r._)("li",Z,[D,(0,r._)("div",P,[(0,r.Wm)(c,{to:"/user/userdetail",class:"dropdown-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("ユーザー詳細")])),_:1}),(0,r.Wm)(c,{to:"/user/createthread",class:"dropdown-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("スレッド作成")])),_:1}),O,(0,r.Wm)(d,{onClick:t[0]||(t[0]=t=>e.logout()),button:{type:"button",msg:"ログアウト"},class:"dropdown-item"})])])])])):((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("ul",E,[(0,r._)("li",j,[(0,r.Wm)(s,{link:{to:"/login",msg:"ログイン"},class:"login nav-link active px-sm-3 py-sm-2"})]),(0,r._)("li",x,[(0,r.Wm)(s,{link:{to:"/register",msg:"ユーザー登録"},class:"register nav-link active px-sm-3 py-sm-2"})])])]))])])}var U=n(4870),L=n(5951),W=n(1579),M=(0,r.aZ)({name:"HomeView",components:{ButtonAtomVue:L.Z,RouterLinkAtomVue:W.Z},setup(){const e=(0,u.tv)(),t=(0,l.oR)(),n=(0,U.iH)(window.innerWidth),a=()=>{n.value=window.innerWidth},o=()=>{t.dispatch("logout"),e.go(0)};return(0,r.bv)((()=>{window.addEventListener("resize",a)})),(0,r.Jd)((()=>{window.removeEventListener("resize",a)})),{store:t,userMobile:n,logout:o}}});const N=(0,i.Z)(M,[["render",S],["__scopeId","data-v-24ecd2e8"]]);var B=N,F=n(1404),V=n(6027);window.Pusher=n(4410),window.Echo=new V.Z({broadcaster:"pusher",key:"f942672eba3c8745418f",cluster:"ap3",forceTLS:!0,disableStats:!0});const q=(0,a.ri)(d);q.use(m),q.use(g),q.component("NavBar",B),q.component("FooterBar",F.Z),q.mount("#app")},5951:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3396),r=n(7139);const o=["type"],i=["type"];function s(e,t,n,s,c,d){return"button"===e.button.type?((0,a.wg)(),(0,a.iD)("button",{key:0,type:e.button.type,class:"shadow-none"},(0,r.zw)(e.button.msg),9,o)):((0,a.wg)(),(0,a.iD)("button",{key:1,type:e.button.type,class:"btn-color shadow-none"},(0,r.zw)(e.button.msg),9,i))}var c=(0,a.aZ)({props:{button:{type:Object}}}),d=n(89);const u=(0,d.Z)(c,[["render",s],["__scopeId","data-v-29101258"]]);var l=u},1404:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3396);const r={class:"py-2"},o=(0,a._)("p",null,"ThreadApp",-1),i=[o];function s(e,t,n,o,s,c){return(0,a.wg)(),(0,a.iD)("footer",r,i)}var c=(0,a.aZ)({name:"FooterView"}),d=n(89);const u=(0,d.Z)(c,[["render",s]]);var l=u},1579:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3396),r=n(7139);function o(e,t,n,o,i,s){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(c,{to:e.link.to},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.link.msg),1)])),_:1},8,["to"])}var i=(0,a.aZ)({name:"RouterLinkAtom",props:{link:{type:Object}}}),s=n(89);const c=(0,s.Z)(i,[["render",o]]);var d=c}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{2:"273c5833",372:"1ecfc8d9",445:"35053052",541:"1d48ab95",588:"ff9bb726",627:"7d7714f8",707:"fa07a60a",898:"3bae5bdf",930:"ff678a90",937:"d0abe157"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{2:"1bc93f54",372:"3a199ee7",445:"80d9e6e8",541:"17488730",588:"0a397900",627:"3cbefe5d",707:"7a7a06a9",898:"4d0c6f10",930:"aac63183"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var s,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+o){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/app/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return r();e(a,s,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={2:1,372:1,445:1,541:1,588:1,627:1,707:1,898:1,930:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],c=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(a);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3555)}));a=n.O(a)})();
//# sourceMappingURL=app.a12260e3.js.map