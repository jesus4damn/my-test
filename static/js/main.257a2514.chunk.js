(this["webpackJsonptest-assignment"]=this["webpackJsonptest-assignment"]||[]).push([[0],{114:function(e,t,n){e.exports={users_header:"Users_users_header__1TdMB"}},143:function(e,t,n){e.exports=n(268)},148:function(e,t,n){},26:function(e,t,n){e.exports={container:"Authorization_container__3j9oq",animate_container:"Authorization_animate_container__3F5pX",enter:"Authorization_enter__17XAz",login_form:"Authorization_login_form__1kaOd",login_header:"Authorization_login_header__28aRz",btn_enter:"Authorization_btn_enter__1aTcL",error_message_login:"Authorization_error_message_login__3y0kD"}},268:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(46),u=n.n(o),c=(n(148),n(9)),i=n(48),s=n(49),l=n(52),p=n(53),m=n(36),_=n.n(m),h=n(26),d=n.n(h),f=n(108),g=n(109),b=n(117),v=n(37),k=n.n(v),E=function(e){var t=e.input,n=e.meta,r=Object(b.a)(e,["input","meta"]),o=n.error&&n.touched;return a.a.createElement("div",{className:k.a.input_container},a.a.createElement("div",null,a.a.createElement("input",Object.assign({},t,r,{className:(o?k.a.input_error:"")+" "+k.a.input}))),o&&a.a.createElement("div",{className:o?k.a.error_message:""},n.error))},w=function(e){if(!e)return"Required field"},j=Object(g.a)({form:"login"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit,className:d.a.login_form},a.a.createElement("span",{className:d.a.login_header},"Login"),a.a.createElement(f.a,{type:"text",autoComplete:"off",validate:[w],name:"username",placeholder:"Username",component:E}),a.a.createElement(f.a,{type:"password",autoComplete:"off",validate:[w],name:"password",placeholder:"Password",component:E}),a.a.createElement("button",{className:d.a.btn_enter},"Enter"),e.error&&a.a.createElement("div",{className:d.a.error_message_login},e.error))})),O=function(e){return a.a.createElement("div",{className:d.a.container},a.a.createElement(j,{onSubmit:function(t){e.auth(t.username,t.password)}}))},x=n(25),y=n.n(x),A=n(51),C=n(54),N=n(113),U=n.n(N).a.create({withCredentials:!1,baseURL:"https://emphasoft-test-assignment.herokuapp.com/"}),z=function(e,t){return U.post("api-token-auth/",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.request}))},L=function(e){return U.get("api/v1/users/",{withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+e}}).then((function(e){return e.data})).catch((function(e){return e.request}))},R=n(32),S={auth:!1,token:""},T=function(e,t){return{type:"auth/SET_AUTH",token:e,auth:t}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH":return Object(C.a)({},e,{token:t.token,auth:t.auth});default:return e}},B=Object(c.b)(null,{auth:function(e,t){return function(){var n=Object(A.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=null,n.prev=1,n.next=4,z(e,t);case 4:a=n.sent,n.next=13;break;case 7:return n.prev=7,n.t0=n.catch(1),a=null,console.log("ErrorLogin"),r(Object(R.a)("login",{_error:"Something is wrong with the server!"})),n.abrupt("return");case 13:"Bad Request"===a.statusText?r(Object(R.a)("login",{_error:"Wrong data!"})):r(T(a.token,!0));case 14:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}()}})(O),D=n(114),W=n.n(D),K=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.token)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:W.a.users_header},"Users"))}}]),n}(a.a.Component),X={users:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USERS":return Object(C.a)({},e);default:return e}},G=Object(c.b)((function(e){return{token:e.authReducer.token}}),{getUsers:function(e){return function(){var t=Object(A.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,t.next=4,L(e);case 4:r=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),console.log("ErrorGetUsers"),t.abrupt("return");case 11:console.log(r);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}})(K),H=function(e){Object(p.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.auth?a.a.createElement("div",{className:_.a.background+" "+_.a.background2},a.a.createElement("div",{className:_.a.btn_exit,onClick:function(){return e.props.setAuth("",!1)}},"Exit"),a.a.createElement(G,null)):a.a.createElement("div",{className:_.a.background},a.a.createElement(B,null))}}]),n}(a.a.Component),I=Object(c.b)((function(e){return{auth:e.authReducer.auth}}),{setAuth:T})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(6),M=n(115),P=n(110),V=Object(J.c)({authReducer:q,usersReducer:F,form:P.a}),$=Object(J.d)(V,Object(J.a)(M.a)),Q=n(116);u.a.render(a.a.createElement(Q.a,null,a.a.createElement(c.a,{store:$},a.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={background:"App_background__3CDGK",background2:"App_background2__1gXIa",btn_exit:"App_btn_exit__2uDPc"}},37:function(e,t,n){e.exports={input_container:"Login_input_container__3onpC",input:"Login_input__2WxVU",input_error:"Login_input_error__2jKCF",error_message:"Login_error_message__qxCLK"}}},[[143,1,2]]]);
//# sourceMappingURL=main.257a2514.chunk.js.map