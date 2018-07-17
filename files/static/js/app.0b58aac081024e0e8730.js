webpackJsonp([1],{"7zck":function(t,e){},M9dx:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{staticStyle:{height:"100%"}},[e("v-toolbar",{attrs:{id:"toolbar"}},[e("v-toolbar-title",[this._v("Chat Application")])],1),this._v(" "),e("v-content",{staticClass:"pt-0",attrs:{id:"main-content"}},[e("router-view")],1)],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},n,!1,function(t){s("YuAK")},null,null).exports,r=s("/ocq"),l={data:function(){return this.$store.commit("setName",""),{name:""}},methods:{login:function(){this.$store.commit("setName",this.name),console.log(this.$store.state.name),this.$router.push("/chat")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-card",{staticClass:"elevation-12"},[s("v-toolbar",{attrs:{dark:"",color:"blue-grey lighten-2"}},[s("v-toolbar-title",[t._v("Login")])],1),t._v(" "),s("v-card-text",[s("v-form",[s("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Your Nickname",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.login()}}},[t._v("Login")])],1)],1)],1)],1)],1)},staticRenderFns:[]},c=s("VU/8")(l,i,!1,null,null,null).exports,u=s("BO1k"),d=s.n(u),h=s("mvHQ"),v=s.n(h),m={name:"Top",created:function(){var t=this;try{var e=location.host,s=new WebSocket("ws://"+e+"/ws");s.onclose=function(e){alert(e),t.$router.push("/")};s.onmessage=function(e){!function(e){t.messages.push(e)}(JSON.parse(e.data))},this.ws=s}catch(t){alert(t),this.$router.push("/")}},methods:{scrolled:function(){var t=this.$el.querySelector("#chat-history");t.scrollTop+t.offsetHeight>=t.scrollHeight?this.bottomScrolled=!0:this.bottomScrolled=!1,console.log("scrolled")},send:function(){if(0!==this.message.length){var t=this.message;this.message="",this.ws.send(v()({user:this.$store.state.name,message:t})),this.bottomScrolled=!0}}},updated:function(){var t=this.$el.querySelector("#chat-history");console.log("resized"),null!=t&&this.bottomScrolled&&(t.scrollTop=t.scrollHeight)},computed:{getMessages:function(){var t=0,e=!0,s=!1,a=void 0;try{for(var n,o=d()(this.messages);!(e=(n=o.next()).done);e=!0){n.value.id=t,t++}}catch(t){s=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(s)throw a}}return this.messages}},data:function(){return{messages:[],message:"",ws:null,bottomScrolled:!1}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fill-height"},[s("div",{attrs:{id:"chat-history"},on:{scroll:t.scrolled}},t._l(t.getMessages,function(e){return s("div",{key:e.id,staticClass:"chat-element"},[s("v-layout",{attrs:{column:""}},[s("div",{staticClass:"chat-text body-1"},[t._v(t._s(e.user))]),t._v(" "),s("div",{staticClass:"chat-text subheading"},[t._v(t._s(e.message))])])],1)})),t._v(" "),s("div",{attrs:{id:"chat-bar"}},[s("v-layout",{attrs:{row:"","align-center":""}},[s("v-flex",{attrs:{xs10:""}},[s("v-text-field",{attrs:{label:"Message","auto-grow":"",autofocos:"",rows:"2"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),s("v-flex",{attrs:{xs2:""}},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.send()}}},[t._v("Send")])],1)],1)],1)])},staticRenderFns:[]};var p=s("VU/8")(m,f,!1,function(t){s("M9dx")},"data-v-4fd8ed71",null).exports,g=s("NYxO");a.default.use(g.a);var b=new g.a.Store({state:{name:""},mutations:{setName:function(t,e){t.name=e}}});a.default.use(r.a);var _=new r.a({routes:[{path:"/",name:"Top",component:c},{path:"/chat",name:"Chat",component:p}]});_.beforeEach(function(t,e,s){"/"!==t.path?(null==b.name&&s("/"),s()):s()});var y=_,x=s("3EgV"),S=s.n(x);s("7zck"),s("csSS"),s("gJtD");a.default.use(S.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:y,store:b,components:{App:o},template:"<App/>"})},YuAK:function(t,e){},csSS:function(t,e){},gJtD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0b58aac081024e0e8730.js.map