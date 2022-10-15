"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[2],{8738:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(3396),l=s(7139);function a(e,t,s,a,o,i){return(0,n.wg)(),(0,n.iD)("h2",null,(0,l.zw)(e.msg.msg),1)}var o=(0,n.aZ)({props:{msg:{type:Object}}}),i=s(89);const m=(0,i.Z)(o,[["render",a]]);var c=m},7203:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(3396),l=s(7139);function a(e,t,s,a,o,i){return(0,n.wg)(),(0,n.iD)("p",null,(0,l.zw)(e.CommentTime(e.time)),1)}var o=(0,n.aZ)({props:["time"],setup(){const e=e=>{e=new Date(e);let t=String(e.getFullYear()),s=String(e.getMonth()+1),n=String(e.getDate()),l=String(e.getHours()+9);Number(l)>24&&(l=String(Number(l)-24));let a=String(e.getMinutes()),o=String(e.getSeconds());s=("0"+s).slice(-2),n=("0"+n).slice(-2),l=("0"+l).slice(-2),a=("0"+a).slice(-2),o=("0"+o).slice(-2);let i="YYYY-MM-DD hh:mm:ss";return i=i.replace(/YYYY/g,t),i=i.replace(/MM/g,s),i=i.replace(/DD/g,n),i=i.replace(/hh/g,l),i=i.replace(/mm/g,a),i=i.replace(/ss/g,o),i};return{CommentTime:e}}}),i=s(89);const m=(0,i.Z)(o,[["render",a]]);var c=m},9031:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(3396),l=s(7139);function a(e,t,s,a,o,i){return(0,n.wg)(),(0,n.iD)("h3",null,(0,l.zw)(e.msg.msg),1)}var o=(0,n.aZ)({props:{msg:{type:Object}}}),i=s(89);const m=(0,i.Z)(o,[["render",a]]);var c=m},7793:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(3396),l=s(7139);const a=["src"];function o(e,t,s,o,i,m){return(0,n.wg)(),(0,n.iD)("img",{src:e.profileImage.src,alt:"",style:(0,l.j5)("width: "+e.profileImage.width+"px;height: "+e.profileImage.height+"px;")},null,12,a)}var i=(0,n.aZ)({name:"UserProfileImage",props:{profileImage:{type:Object}}}),m=s(89);const c=(0,m.Z)(i,[["render",o],["__scopeId","data-v-49d63fc2"]]);var r=c},9453:function(e,t,s){s.d(t,{Z:function(){return h}});var n=s(3396),l=s(7139);const a={key:0},o={class:"text-success"},i={key:1},m={key:0,class:"mx-2 d-inline-block"},c={class:"text-success"};function r(e,t,s,r,u,d){const p=(0,n.up)("DisplayTimeAtomVue"),g=(0,n.up)("UserProfileImageVue");return this.$route.name.match(/home|popular|tag|recent|userdetail/)?((0,n.wg)(),(0,n.iD)("li",a,[(0,n.Uk)(" (comments as Comment).index "),(0,n._)("h4",{class:(0,l.C_)(e.comments.user_style)},[(0,n.Uk)((0,l.zw)(e.comments.index)+" ",1),(0,n._)("span",o,(0,l.zw)(e.comments.user_name),1),(0,n.Uk)(),(0,n.Wm)(p,{class:"d-inline-block",time:e.comments.created_at},null,8,["time"])],2),(0,n._)("p",{class:(0,l.C_)(e.comments.comment_style)},(0,l.zw)(e.comments.comment),3)])):((0,n.wg)(),(0,n.iD)("li",i,[(0,n._)("h4",{class:(0,l.C_)(e.comments.user_style)},[(0,n.Uk)((0,l.zw)(e.comments.index)+" ",1),"thread_detail"===e.$route.name?((0,n.wg)(),(0,n.iD)("p",m,[(0,n.Wm)(g,{profileImage:{src:e.comments.src,width:e.comments.width,height:e.comments.height}},null,8,["profileImage"])])):(0,n.kq)("",!0),(0,n.Uk)(),(0,n._)("span",c,(0,l.zw)(e.comments.user_name),1),(0,n.Uk)(),(0,n.Wm)(p,{class:"d-inline-block",time:e.comments.created_at},null,8,["time"])],2),(0,n._)("p",{class:(0,l.C_)([e.comments.comment_style,!0===Boolean(parseInt(e.comments.bold))?"bold-text":"",!0===Boolean(parseInt(e.comments.italic))?"italic-text":"",!0===Boolean(parseInt(e.comments.underline))?"underline-text":""])},(0,l.zw)(e.comments.comment),3)]))}var u=s(7203),d=s(7793),p=(0,n.aZ)({name:"CommentMolecules",components:{DisplayTimeAtomVue:u.Z,UserProfileImageVue:d.Z},props:{comments:{type:Object}}}),g=s(89);const b=(0,g.Z)(p,[["render",r],["__scopeId","data-v-15aeae9a"]]);var h=b},7721:function(e,t,s){s.d(t,{Z:function(){return r}});var n=s(3396),l=s(7139);function a(e,t,s,a,o,i){const m=(0,n.up)("RouterLinkAtomVue");return(0,n.wg)(),(0,n.iD)("li",{class:(0,l.C_)(e.link.class)},[(0,n.Wm)(m,{link:e.link,class:(0,l.C_)(e.link.link_class)},null,8,["link","class"])],2)}var o=s(1579),i=(0,n.aZ)({name:"RouterLinkMolecules",components:{RouterLinkAtomVue:o.Z},props:{link:{type:Object}}}),m=s(89);const c=(0,m.Z)(i,[["render",a]]);var r=c},934:function(e,t,s){s.d(t,{Z:function(){return b}});var n=s(3396);const l={class:"p-0 text-left"},a={class:"list-group"},o={key:0,class:"px-4 py-2 list-group-item"};function i(e,t,s,i,m,c){const r=(0,n.up)("SmallTitleAtomVue"),u=(0,n.up)("RouterLinkMoleculesVue");return(0,n.wg)(),(0,n.iD)("aside",null,[(0,n._)("div",l,[(0,n.Wm)(r,{class:"h4 mb-sm-4 mb-3",msg:{msg:e.SideBarItem.msg}},null,8,["msg"]),(0,n._)("ul",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.store.state.tags,(e=>((0,n.wg)(),(0,n.j4)(u,{key:e.id,link:{to:`/tags/${e.id}`,msg:`${e.tag}`,class:"p-0 py-1 list-group-item",link_class:"px-4 py-2 d-block"}},null,8,["link"])))),128)),0===e.store.state.tags.length?((0,n.wg)(),(0,n.iD)("li",o,"他のタグはまだありません")):(0,n.kq)("",!0)])])])}var m=s(9031),c=s(7721),r=s(65),u=s(2483),d=(0,n.aZ)({name:"SideBar",props:{SideBarItem:{type:Object}},components:{SmallTitleAtomVue:m.Z,RouterLinkMoleculesVue:c.Z},setup(){const e=(0,r.oR)(),t=(0,u.yj)(),s=(t,s)=>{e.dispatch("getTags",{id:t,path:s})};return(0,n.bv)((()=>{s(t.params.id,t.name)})),(0,u.ao)((e=>{s(e.params.id,e.name)})),{store:e,route:t}}}),p=s(89);const g=(0,p.Z)(d,[["render",i]]);var b=g},9002:function(e,t,s){s.r(t),s.d(t,{default:function(){return F}});var n=s(3396),l=s(7139),a=s(9242);const o=e=>((0,n.dD)("data-v-24b078cf"),e=e(),(0,n.Cn)(),e),i={class:"ThreadDetail"},m={key:0,class:"w-75 mx-auto mb-5 px-lg-5 px-3 row overflow-hidden"},c={class:"pt-4 px-4 col-sm-8 bg-white"},r={class:"mb-3"},u=o((()=>(0,n._)("div",{class:"row"},null,-1))),d={class:"form-group mb-0"},p={class:"px-2 py-1 form-menu d-flex justify-content-between"},g={class:"d-flex"},b={class:"mr-3"},h={class:"mr-3"},v={class:"mr-0"},w={class:""},_={key:0,class:"mb-sm-0 mb-5 px-sm-3 py-sm-3 px-4 py-3 bg-white"},k={key:1,class:"w-100"},y=o((()=>(0,n._)("li",{class:"mb-sm-3 mb-4 h4"},"コメントはまだありません",-1))),f=[y],C={key:1,class:"mx-auto mb-5 px-lg-5 px-sm-3 px-3 row overflow-hidden"},x={class:"mx-auto pt-4 px-sm-4 px-3 col-sm-10 bg-white"},D={class:"mb-4"},Z=o((()=>(0,n._)("div",{class:"row"},null,-1))),A={class:"form-group mb-0"},I={class:"p-2 form-menu d-flex justify-content-between"},B={class:"d-flex"},U={class:"mr-3"},V={class:"mr-3"},W={class:"mr-0"},S={class:""},T={key:0,class:"mb-0 px-md-4 py-sm-3 px-0 py-3 bg-white"},M={key:1,class:"w-100"},j=o((()=>(0,n._)("li",{class:"mb-sm-3 mb-4 h4"},"コメントはまだありません",-1))),z=[j];function Y(e,t,s,o,y,j){const Y=(0,n.up)("NavBar"),H=(0,n.up)("BigTitleAtomVue"),O=(0,n.up)("ButtonAtomVue"),L=(0,n.up)("CommentMoleculesVue"),R=(0,n.up)("SideBarOrganismsVue"),q=(0,n.up)("FooterBar");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(Y),e.store.state.userMobile>768?((0,n.wg)(),(0,n.iD)("main",m,[(0,n._)("section",c,[(0,n.Wm)(H,{class:"h1 mb-2 text-sm-left text-center",msg:{msg:e.store.state.threadTitle}},null,8,["msg"]),(0,n._)("p",r,(0,l.zw)(e.store.state.threadDescription),1),u,!0===e.store.state.loginCheck?((0,n.wg)(),(0,n.iD)("form",{key:0,class:"mb-3 py-sm-3",onSubmit:t[1]||(t[1]=(0,a.iM)((t=>e.createComment()),["prevent"]))},[(0,n._)("div",d,[(0,n.wy)((0,n._)("textarea",{name:"comment",id:"comment",class:"form-control shadow-none",cols:"30",rows:"6","onUpdate:modelValue":t[0]||(t[0]=t=>e.comment=t),placeholder:"コメント入力",required:""},null,512),[[a.nr,e.comment]]),(0,n._)("div",p,[(0,n._)("ul",g,[(0,n._)("li",b,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeBold:e.isBoldActiveClass}]),onClick:e.addBoldActiveClass,button:{type:"button",msg:"B"}},null,8,["onClick","class"])]),(0,n._)("li",h,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeItalic:e.isItalicActiveClass}]),onClick:e.addItalicActiveClass,button:{type:"button",msg:"i"}},null,8,["onClick","class"])]),(0,n._)("li",v,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeUnderline:e.isUnderlineActiveClass}]),onClick:e.addUnderlineActiveClass,button:{type:"button",msg:"u"}},null,8,["onClick","class"])])]),(0,n.Wm)(O,{class:"btn d-block comment-btn",button:{type:"submit",msg:"コメント"}})])])],32)):(0,n.kq)("",!0),(0,n._)("div",w,[0!==e.store.state.comments.length?((0,n.wg)(),(0,n.iD)("ul",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.store.state.comments,((e,t)=>((0,n.wg)(),(0,n.j4)(L,{class:"mb-sm-3 mb-4",key:e.id,comments:{index:t+1,user_name:e.user_name,created_at:new Date(e.created_at),comment:e.comment,user_style:"h6 mb-1",comment_style:"h4",src:e.src,width:30,height:30,bold:e.bold,italic:e.italic,underline:e.underline}},null,8,["comments"])))),128))])):((0,n.wg)(),(0,n.iD)("ul",k,f))])]),(0,n.Wm)(R,{class:"h-auto ml-auto px-0 col-md-3 col-sm d-inline-block",SideBarItem:{msg:"タグ一覧"}})])):((0,n.wg)(),(0,n.iD)("main",C,[(0,n._)("section",x,[(0,n.Wm)(H,{class:"h1 mb-2 text-sm-left text-center",msg:{msg:this.$store.state.threadTitle}},null,8,["msg"]),(0,n._)("p",D,(0,l.zw)(e.store.state.threadDescription),1),Z,!0===e.store.state.loginCheck?((0,n.wg)(),(0,n.iD)("form",{key:0,class:"mb-3 py-sm-3",onSubmit:t[3]||(t[3]=(0,a.iM)((t=>e.createComment()),["prevent"]))},[(0,n._)("div",A,[(0,n.wy)((0,n._)("textarea",{name:"comment",id:"comment",class:"form-control shadow-none",cols:"30",rows:"6","onUpdate:modelValue":t[2]||(t[2]=t=>e.comment=t),placeholder:"コメント入力",required:""},null,512),[[a.nr,e.comment]]),(0,n._)("div",I,[(0,n._)("ul",B,[(0,n._)("li",U,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeBold:e.isBoldActiveClass}]),onClick:e.addBoldActiveClass,button:{type:"button",msg:"B"}},null,8,["onClick","class"])]),(0,n._)("li",V,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeItalic:e.isItalicActiveClass}]),onClick:e.addItalicActiveClass,button:{type:"button",msg:"i"}},null,8,["onClick","class"])]),(0,n._)("li",W,[(0,n.Wm)(O,{class:(0,l.C_)(["my-auto btn d-block add-btn shadow-none",{activeUnderline:e.isUnderlineActiveClass}]),onClick:e.addUnderlineActiveClass,button:{type:"button",msg:"u"}},null,8,["onClick","class"])])]),(0,n.Wm)(O,{class:"btn d-block comment-btn",button:{type:"submit",msg:"コメント"}})])])],32)):(0,n.kq)("",!0),(0,n._)("div",S,[0!==e.store.state.comments.length?((0,n.wg)(),(0,n.iD)("ul",T,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.store.state.comments,((e,t)=>((0,n.wg)(),(0,n.j4)(L,{class:"mb-sm-3 mb-4",key:e.id,comments:{index:t+1,user_name:e.user_name,created_at:new Date(e.created_at),comment:e.comment,user_style:"h6 mb-1",comment_style:"h4",src:e.src,width:30,height:30,bold:e.bold,italic:e.italic,underline:e.underline}},null,8,["comments"])))),128))])):((0,n.wg)(),(0,n.iD)("ul",M,z))])])])),(0,n.Wm)(q)])}s(7658);var H=s(8738),O=s(5951),L=s(9453),R=s(934),q=s(4870),$=s(2483),E=s(65),K=(0,n.aZ)({components:{BigTitleAtomVue:H.Z,ButtonAtomVue:O.Z,CommentMoleculesVue:L.Z,SideBarOrganismsVue:R.Z},setup(){const e=(0,E.oR)(),t=(0,$.tv)(),s=(0,$.yj)(),l=(0,q.iH)(""),a=(0,q.iH)(!1),o=(0,q.iH)(!1),i=(0,q.iH)(!1),m=()=>{a.value=!a.value},c=()=>{o.value=!o.value},r=()=>{i.value=!i.value},u=()=>{e.commit("setUserMobile",window.innerWidth)},d=()=>{e.dispatch("createComment",{id:s.params.id,index:e.state.comments.length+1,thread_title:e.state.threadTitle,user_id:e.state.user.id,user_name:e.state.user.name,comment:l.value,src:e.state.user.profile_picture,bold:a.value,italic:o.value,underline:i.value}),l.value="",a.value=!1,o.value=!1,i.value=!1,e.dispatch("getThreadDetail",s.params.id)};return(0,n.bv)((async()=>{u(),e.dispatch("getUser"),window.addEventListener("resize",u),await e.dispatch("getThreadDetail",s.params.id),0===e.state.threadTitle.length&&t.push("/"),window.Echo.channel("comment-channel").listen("CommentAdded",(()=>{e.dispatch("getThreadDetail",s.params.id)}))})),(0,n.Jd)((()=>{window.removeEventListener("resize",u)})),{store:e,comment:l,isBoldActiveClass:a,isItalicActiveClass:o,isUnderlineActiveClass:i,addBoldActiveClass:m,addItalicActiveClass:c,addUnderlineActiveClass:r,createComment:d}}}),N=s(89);const P=(0,N.Z)(K,[["render",Y],["__scopeId","data-v-24b078cf"]]);var F=P}}]);
//# sourceMappingURL=2.273c5833.js.map