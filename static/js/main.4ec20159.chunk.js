(this["webpackJsonppetlovers-app"]=this["webpackJsonppetlovers-app"]||[]).push([[0],{100:function(e,a,t){e.exports=t.p+"static/media/user.accbd70d.svg"},101:function(e,a,t){e.exports=t.p+"static/media/logout.e03fdaf3.svg"},102:function(e,a,t){e.exports=t.p+"static/media/cat.ee5d6238.svg"},103:function(e,a,t){e.exports=t.p+"static/media/bone.1e54352a.svg"},104:function(e,a,t){e.exports=t.p+"static/media/food.88b23f77.svg"},105:function(e,a,t){e.exports=t.p+"static/media/ball.0b3a9c06.svg"},106:function(e,a,t){e.exports=t.p+"static/media/world.54e8062a.svg"},107:function(e,a,t){e.exports=t.p+"static/media/heart.70ebbcd1.svg"},108:function(e,a,t){e.exports=t.p+"static/media/heart-active.a8cd76c1.svg"},109:function(e,a,t){e.exports=t.p+"static/media/save.3a1ffe6b.svg"},110:function(e,a,t){e.exports=t.p+"static/media/comment.55da0b1f.svg"},112:function(e,a,t){e.exports=t.p+"static/media/catsleep.256b6e53.png"},113:function(e,a,t){e.exports=t.p+"static/media/search.a0c5eda5.svg"},114:function(e,a,t){e.exports=t.p+"static/media/edit.0679ff7c.svg"},115:function(e,a,t){e.exports=t.p+"static/media/gallery.6ade051a.svg"},117:function(e,a,t){e.exports=t(270)},122:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){e.exports=t.p+"static/media/bell.ffb4c987.svg"},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},267:function(e,a,t){},268:function(e,a,t){},269:function(e,a,t){},270:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(96),l=t.n(r),o=t(2),s=(t(122),t(6)),i=t(4),m=t(116),u=Object(n.createContext)();function p(){return Object(n.useContext)(u)}var d=t(1),f=t.n(d);var g=function(e){var a=e.component,t=Object(m.a)(e,["component"]),r=p().authToken;return Object(n.useEffect)((function(){if(r&&localStorage.getItem("userInfo")){var e=JSON.parse(localStorage.getItem("userInfo")),a="https://petlovers-backend.herokuapp.com/api/v1/"+"users/".concat(e.id,"/info");f.a.get(a).then((function(a){var t=a.data,n=t.avatarUrl,c=t.backgroundUrl,r=t.name;e={avatarUrl:n,backgroundUrl:c,name:r,id:a.data._id},localStorage.setItem("userInfo",JSON.stringify(e))}))}})),c.a.createElement(i.b,Object.assign({},t,{render:function(e){return r?c.a.createElement(a,e):c.a.createElement(i.a,{to:"/login"})}}))};t(143);var v=function(){return c.a.createElement("div",{className:"not-found"},c.a.createElement("h1",null,"404"),c.a.createElement("h3",null,"Page not found"))},E=(t(144),t(145),t(98)),h=t.n(E),b=t(99),N=t.n(b),_=t(100),k=t.n(_),O=t(101),I=t.n(O);t(146);var j=function(e){var a=Object(i.h)(),t=Object(i.g)(),n=e.userInfo,r=[{title:"Trang ch\u1ee7",color:"#63D5FA",path:"/",icon:N.a},{title:"T\xe0i kho\u1ea3n",color:"#E8AB73",path:"/profile/".concat(n.id),icon:k.a}];return c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"wrap-content"},function(e,a){return e.map((function(e,t){return c.a.createElement("li",{key:t,className:"menu__item ".concat(a===e.path?"menu__item--active":"")},c.a.createElement(s.b,{to:e.path,className:"link"},c.a.createElement("div",{style:{backgroundColor:e.color},className:"icon"},c.a.createElement("img",{src:e.icon,alt:"icon"})),c.a.createElement("p",null,e.title)))}))}(r,a),c.a.createElement("li",{className:"menu__item",onClick:function(){localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),t.push("/login")}},c.a.createElement("a",{href:"#",className:"link"},c.a.createElement("div",{className:"icon",style:{backgroundColor:"#9a7f92"}},c.a.createElement("img",{src:I.a,style:{marginLeft:"3px"},alt:"icon"})),c.a.createElement("p",null,"\u0110\u0103ng xu\u1ea5t")))))};var w=function(e){var a=e.currentUserId;return console.log(a),c.a.createElement("div",{className:"noti-box"},c.a.createElement("h1",null,"Xin cho cac bans"))};var y=function(e){var a=e.userLogined,t=Object(n.useState)(!1),r=Object(o.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=m[0];return m[1],c.a.createElement("div",{className:"header-wrap"},l&&c.a.createElement(j,{userInfo:a}),u&&c.a.createElement(w,{currentUserId:a.id}),c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{className:"header-content__title"},c.a.createElement("h1",null,"Petlovers"),c.a.createElement("h4",null,"Ng\xf4i nh\xe0 cho nh\u1eefng ng\u01b0\u1eddi th\xedch ch\xf3 m\xe8o !")),function(e){return e?c.a.createElement("div",{className:"header-content__navbar"},c.a.createElement("ul",{className:"navbar__content"},c.a.createElement("li",{className:"navbar__item info"},c.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(e.avatarUrl||"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",")")}}),c.a.createElement("p",null,e.name)),c.a.createElement("li",{className:"navbar__item navbar__menu"},c.a.createElement("img",{src:h.a,alt:"menu",onClick:function(){return s(!l)}})))):c.a.createElement("div",{className:"header-content__navbar"},c.a.createElement("ul",{className:"navbar__content"},c.a.createElement("li",{className:"navbar__item"},"Li\xean h\u1ec7"),c.a.createElement("li",{className:"navbar__item"},"H\u01b0\u1edbng d\u1eabn"),c.a.createElement("li",{className:"navbar__item"},"Th\xf4ng tin")))}(a)))},x=t(14),S=t(3);t(147);var U=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(o.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(null),u=Object(o.a)(m,2),d=u[0],g=u[1],v=Object(i.g)(),E=p(),h=E.authToken,b=E.setAuthToken;function N(e){var a=e.target.name,t=e.target.value,n=Object(S.a)(Object(S.a)({},r),{},Object(x.a)({},a,t));l(n)}return h&&localStorage.getItem("userInfo")&&v.push("/"),c.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),f.a.post("https://petlovers-backend.herokuapp.com/api/v1/auth/login",r).then((function(e){var a=e.data,t=a.success,n=a.msg;if(t){var c=a.accessToken,r=a.userInfo;f.a.defaults.headers.common["x-access-token"]=c,localStorage.setItem("accessToken",c),g({success:t,msg:n}),b(c),console.log(r),localStorage.setItem("userInfo",JSON.stringify(r)),v.push("/profile/".concat(r.id))}else g({success:t,msg:n})}))}},d&&function(e,a){if(!e)return c.a.createElement("div",{className:"login-toast login-toast--success"},a)}(d.success,d.msg),c.a.createElement("h1",null,"\u0110\u0103ng nh\u1eadp"),c.a.createElement("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:r.email,onChange:N}),c.a.createElement("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u",required:!0,name:"password",value:r.password,onChange:N}),c.a.createElement("button",{type:"submit"},"\u0110\u0103ng nh\u1eadp"),c.a.createElement("p",null,"B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n"),c.a.createElement(s.b,{to:"/signup",className:"create-account"},"\u0110\u0103ng k\xfd m\u1edbi"))},C=t(102),T=t.n(C),A=t(103),q=t.n(A),D=t(104),J=t.n(D),P=t(105),H=t.n(P);t(148);var L=function(){return c.a.createElement("div",{className:"login"},c.a.createElement(y,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"effect-wrap"},c.a.createElement("div",{className:"effect-content"},c.a.createElement("img",{className:"effect-content__svg",src:T.a,alt:"cat"}),c.a.createElement("div",{className:"effect-content__box"},c.a.createElement("div",{className:"box__item"}),c.a.createElement("div",{className:"box__item"}),c.a.createElement("div",{className:"box__item"},"Meo meo ...")))),c.a.createElement("div",{className:"login-form-wrap"},c.a.createElement(U,null)))),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"footer-container__item"},c.a.createElement("img",{alt:"icon",src:H.a})),c.a.createElement("div",{className:"footer-container__item"},c.a.createElement("img",{alt:"icon",src:J.a})),c.a.createElement("div",{className:"footer-container__item"},c.a.createElement("img",{alt:"icon",src:q.a})))))};t(149);var B=function(e){var a=Object(i.g)();p().authToken&&a.push("/");var t=Object(n.useState)({email:"",password:"",confirmPassword:"",name:""}),r=Object(o.a)(t,2),l=r[0],s=r[1];function m(e){var a=e.target.name,t=e.target.value,n=Object(S.a)(Object(S.a)({},l),{},Object(x.a)({},a,t));s(n)}return c.a.createElement("div",{className:"signup-wrap"},c.a.createElement("form",{className:"signup-form",onSubmit:function(e){e.preventDefault();var t=l.password,n=l.confirmPassword;if(t.length<6)alert("Mat khau phai tu 6 ky tu !");else if(t!==n)alert("Mat khau khong khop");else{console.log("Oke");var c={name:l.name,email:l.email,password:l.password};f.a.post("https://petlovers-backend.herokuapp.com/api/v1/auth/signup",c).then((function(e){console.log(e),alert("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng !"),a.push("/login")}))}}},c.a.createElement("h1",null,"\u0110\u0103ng k\xfd"),c.a.createElement("input",{type:"text",placeholder:"H\u1ecd t\xean",required:!0,name:"name",value:l.name,onChange:m}),c.a.createElement("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:l.email,onChange:m}),c.a.createElement("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u",required:!0,name:"password",value:l.password,onChange:m}),c.a.createElement("input",{type:"password",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",required:!0,name:"confirmPassword",value:l.confirmPassword,onChange:m}),c.a.createElement("button",{type:"submit"},"\u0110\u0103ng k\xfd")))},F=(t(150),t(151),t(37)),M=t.n(F),W=t(38),G=function(e,a){var t=W.Util.withSnakeCaseKeys(e);window.cloudinary.openUploadWidget(t,a)};var R=function(e){var a=e.userInfo,t=e.onCloseInput,r=Object(n.useState)({userId:a.id,createAt:new Date,caption:"",imageUrl:""}),l=Object(o.a)(r,2),s=l[0],i=l[1];return c.a.createElement("div",{className:"box-input"},c.a.createElement("div",{className:"box-wrap"},c.a.createElement("textarea",{name:"caption",value:s.caption,rows:"6",cols:"56",placeholder:"H\xe3y n\xf3i g\xec \u0111\xf3 ...",onChange:function(e){var a=e.target.value,t=Object(S.a)(Object(S.a)({},s),{},{caption:a});i(t)}}),c.a.createElement("div",{className:"image"},s.imageUrl&&c.a.createElement("img",{src:s.imageUrl,alt:"postimage"})),c.a.createElement("div",{className:"upload-image",onClick:function(){G({cloudName:"dk4idhtwn",uploadPreset:"pnto4uty"},(function(e,a){if(e)console.log(e);else if("success"===a.event){var t=a.info.url,n=Object(S.a)(Object(S.a)({},s),{},{imageUrl:t});i(n)}}))}},c.a.createElement("img",{src:M.a,alt:"camera"})),c.a.createElement("div",{className:"button"},c.a.createElement("button",{onClick:function(){return t(!1)}},"H\u1ee7y"),c.a.createElement("button",{onClick:function(){f.a.post("https://petlovers-backend.herokuapp.com/api/v1/posts",s).then((function(e){t(),window.location.reload(!1)}))}},"\u0110\u0103ng b\xe0i"))))};var X=function(e){var a=e.userInfo;a||(a={});var t=Object(n.useState)(!1),r=Object(o.a)(t,2),l=r[0],s=r[1];return c.a.createElement("div",{className:"create-post"},l&&c.a.createElement(R,{onCloseInput:s,userInfo:a,currentUserInfo:a}),c.a.createElement("h1",{className:"create-post__title"},"T\u1ea1o b\xe0i vi\u1ebft"),c.a.createElement("div",{className:"create-post__content",onClick:function(){return s(!0)}},c.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(a.avatarUrl||"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",")")}}),c.a.createElement("p",null,a.name,"  \u01a1i, b\u1ea1n \u0111ang ngh\u0129 g\xec ?")))},Y=t(18),z=t(106),K=t.n(z),Z=t(107),Q=t.n(Z),V=t(108),$=t.n(V),ee=t(109),ae=t.n(ee),te=t(110),ne=t.n(te),ce=t(274),re=t(111),le=t.n(re),oe="https://petlovers-backend.herokuapp.com/api/v1/";function se(e){return ce.a.addLocale(le.a),new ce.a("vi").format(new Date(e))}var ie=function(e){var a="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",t=e.post,r=t._id,l=t.userId,i=t.caption,m=t.imageUrl,u=t.createAt,p=Object(n.useState)({}),d=Object(o.a)(p,2),g=d[0],v=d[1],E=Object(n.useState)(null),h=Object(o.a)(E,2),b=h[0],N=h[1],_=Object(n.useState)([]),k=Object(o.a)(_,2),O=k[0],I=k[1],j=Object(n.useState)(""),w=Object(o.a)(j,2),y=w[0],x=w[1],U=Object(n.useState)([]),C=Object(o.a)(U,2),T=C[0],A=C[1],q=e.currentUserInfo,D=e.userInfo;function J(){f.a.get(oe+"comments/".concat(r,"/by-postId")).then((function(e){for(var a=e.data,t=[],n=0;n<a.length;n++)t.push(f.a.get(oe+"users/".concat(a[n].userId,"/info"))),f.a.all(t).then((function(e){var t=e.map((function(e){return e.data})).map((function(e,t){return Object(S.a)(Object(S.a)({},a[t]),{},{avatarUrl:e.avatarUrl,name:e.name})}));A(t)}))}))}return Object(n.useEffect)((function(){f.a.get(oe+"users/".concat(l,"/info")).then((function(e){e.data;v(e.data)})),f.a.get(oe+"postReactions/".concat(r,"/by-postId")).then((function(e){e.data.forEach((function(e){e.userId===q.id&&N(e)})),function(e){for(var a=[],t=[],n=0;n<e.length;n++)a.push(f.a.get(oe+"users/".concat(e[n].userId,"/info")));f.a.all(a).then((function(e){t=e.map((function(e){return e.data.name})),I(t)}))}(e.data)})),J()}),[l,D]),c.a.createElement("div",{className:"newfeeds-item"},c.a.createElement("div",{className:"newfeeds-item__header"},c.a.createElement(s.b,{to:"/profile/".concat(l),className:"avatar",style:{backgroundImage:"url(".concat(g.avatarUrl||a,")")}}),c.a.createElement("div",{className:"info"},c.a.createElement(s.b,{to:"/profile/".concat(l),className:"user-name"},g._id===q.id?q.name:g.name),c.a.createElement("p",{className:"time"},se(u)," \u2022 ",c.a.createElement("img",{src:K.a,alt:"world"})," "))),c.a.createElement("div",{className:"newfeeds-item__body"},c.a.createElement("p",{className:"content"},i),m&&c.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(m,")")}}),O.length>0&&c.a.createElement("div",{className:"react-info"},c.a.createElement("span",null,O[0])," v\xe0 ",O.length-1," ng\u01b0\u1eddi th\xedch \u2022 0 b\xecnh lu\u1eadn")),c.a.createElement("div",{className:"newfeeds-item__react"},c.a.createElement("ul",{className:"type-react"},c.a.createElement("li",{onClick:function(){var e={postId:r,userId:q.id,type:"heart"};b?(console.log("react id,",b._id),f.a.get(oe+"postReactions/".concat(b._id,"/delete")).then((function(e){N(null)}))):f.a.post(oe+"postReactions",e).then((function(a){N(e)}))},className:b?"heart-react--active":""},c.a.createElement("img",{src:b?$.a:Q.a,alt:"heart"}),"Th\xedch"),c.a.createElement("li",null,c.a.createElement("img",{src:ne.a,alt:"comment"}),"B\xecnh lu\u1eadn"),c.a.createElement("li",null,c.a.createElement("img",{src:ae.a,alt:"save"}),"L\u01b0u")),c.a.createElement("div",{className:"list-comment"},T.map((function(e,a){return c.a.createElement("div",{key:a,className:"item"},c.a.createElement(s.b,{to:"/profile/".concat(e.userId),className:"avatar",style:{backgroundImage:"url(".concat(e.avatarUrl,")")}}),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,c.a.createElement(s.b,{to:"/profile/".concat(e.userId),className:"name"},e.name),e.content),c.a.createElement("p",null,"Th\xedch \u2022 Tr\u1ea3 l\u1eddi \u2022",e.userId===q.id&&c.a.createElement("span",{onClick:function(){return function(e){var a=Object(Y.a)(T);console.log(a),f.a.get(oe+"comments/".concat(T[e]._id,"/delete")).then((function(t){console.log(t),a.splice(e,1),A(a)})).catch((function(e){console.log(e)}))}(a)}},"X\xf3a \u2022 ")," ",se(e.createAt))))}))),c.a.createElement("div",{className:"comment"},c.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(q.avatarUrl||a,")")}}),c.a.createElement("input",{onChange:function(e){var a=e.target.value;x(a)},name:"inputContent",value:y,type:"text",placeholder:"H\xe3y b\xecnh lu\u1eadn g\xec \u0111\xf3 . . .",onKeyDown:function(e){if("Enter"===e.key&&(e.preventDefault(),y)){var a={userId:q.id,postId:r,content:y,createAt:new Date};f.a.post(oe+"comments",a).then((function(e){a=Object(S.a)(Object(S.a)({},a),{},{name:q.name,avatarUrl:q.avatarUrl}),A([].concat(Object(Y.a)(T),[a])),x(""),J()}))}}}))))},me=(t(267),t(112)),ue=t.n(me);var pe=function(e){var a=e.userInfo,t=e.type;return c.a.createElement("div",{className:"guide-box"},c.a.createElement("div",{className:"guide-box__header"},c.a.createElement("p",null,"H\u01b0\u1edbng d\u1eabn")),c.a.createElement("div",{className:"guide-box__main"},c.a.createElement("div",{className:"guide-box__image"},c.a.createElement("img",{src:ue.a,alt:"cat-sleep"})),function(e,a){return"profile"===e?c.a.createElement("p",{className:"guide-box__text"},c.a.createElement("span",null,a)," ch\u01b0a c\xf3 b\xe0i vi\u1ebft n\xe0o !",c.a.createElement("br",null)):c.a.createElement("p",{className:"guide-box__text"},c.a.createElement("span",null,a)," ch\u01b0a theo d\xf5i ai.",c.a.createElement("br",null)," H\xe3y theo d\xf5i ng\u01b0\u1eddi kh\xe1c \u0111\u1ec3 th\u1ea5y nh\u1eefng \u0111i\u1ec1u th\xfa v\u1ecb nh\xe9 !")}(t,a.name)))};var de=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],l=t[1],s=e.userInfo,i=e.followings,m=e.type,u=e.currentUserInfo;return Object(n.useEffect)((function(){var e=[];if(e=i?[].concat(Object(Y.a)(i),[s.id]):[s.id]){for(var a=[],t=0;t<e.length;t++)a.push(f.a.get("https://petlovers-backend.herokuapp.com/api/v1/posts/by-userId/"+e[t]));f.a.all(a).then((function(e){var a=e.map((function(e){return e.data})).reduce((function(e,a){return e.concat(a)}),[]);a.sort((function(e,a){return e.creataAt>a.creataAt?1:-1})),l(a)}))}}),[i,s]),c.a.createElement("div",{className:"newfeeds"},r.length>0&&r.map((function(e,a){return c.a.createElement(ie,{key:a,post:e,currentUserInfo:u,userInfo:s})})),r.length>0||c.a.createElement(pe,{type:m,userInfo:s}))},fe=t(113),ge=t.n(fe);t(268);var ve=function(e){var a=e.userInfo,t=e.listNotFollowing,n=e.setListNotFollowing;return c.a.createElement("div",{className:"follower-box"},c.a.createElement("h1",{className:"follower-box__title"},"Theo d\xf5i"),c.a.createElement("div",{className:"follower-box__search"},c.a.createElement("input",{type:"text",placeholder:"T\xecm ki\u1ebfm ai \u0111\xf3 . . . "}),c.a.createElement("button",null,c.a.createElement("img",{src:ge.a,alt:"search"}))),c.a.createElement("div",{className:"follower-box__list"},t.map((function(e,r){return c.a.createElement("div",{key:r,className:"follower-box__item"},c.a.createElement(s.b,{to:"/profile/".concat(e._id),className:"avatar",style:{backgroundImage:"url(".concat(e.avatarUrl,")")}}),c.a.createElement(s.b,{to:"/profile/".concat(e._id),className:"info"},c.a.createElement("p",{className:"user-name"},e.name)),c.a.createElement("button",{onClick:function(){return function(e){var c={userId:a.id,targetId:t[e]};f.a.post("https://petlovers-backend.herokuapp.com/api/v1/followings",c).then((function(a){var c=Object(Y.a)(t);c.splice(e,1),n(c.slice(0,10))}))}(r)}},"Theo d\xf5i"))}))))};var Ee=function(e){var a=JSON.parse(localStorage.getItem("userInfo")),t=Object(n.useState)([]),r=Object(o.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)([]),m=Object(o.a)(i,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){var e="https://petlovers-backend.herokuapp.com/api/v1/"+"followings/by-userId/".concat(a.id);f.a.get(e).then((function(e){var t=e.data.map((function(e){return e.targetId}));f.a.get("https://petlovers-backend.herokuapp.com/api/v1/users/get-info").then((function(e){var n=e.data,c=[];n.forEach((function(e){-1===t.indexOf(e._id)&&e._id!==a.id&&c.push(e)})),p(c),s(t)}))}))}),[]),c.a.createElement("div",{className:"home-wrap"},c.a.createElement(y,{userLogined:a}),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"main__content"},c.a.createElement(X,{userInfo:a}),c.a.createElement(de,{type:"home",followings:l,userInfo:a,currentUserInfo:a})),c.a.createElement("div",{className:"main__follower"},c.a.createElement(ve,{userInfo:a,listNotFollowing:u,setListNotFollowing:p})))))},he=(t(269),t(114)),be=t.n(he);var Ne=function(e){var a=e.userInfo,t=e.onUploadImage,n=e.isMe;function r(e){G({cloudName:"dk4idhtwn",uploadPreset:"pnto4uty"},(function(n,c){if(n)console.log(n);else if("success"===c.event){var r=c.info.url,l="https://petlovers-backend.herokuapp.com/api/v1/"+"users/".concat(a.id,"/update");f.a.post(l,Object(x.a)({},e,r)).then((function(n){console.log(n,"oke");var c=Object(S.a)(Object(S.a)({},a),{},Object(x.a)({},e,r));t(c)}))}}))}return c.a.createElement("div",{className:"box-info",style:{backgroundImage:"url(".concat(a.backgroundUrl,")")}},n&&c.a.createElement("div",{className:"upload",onClick:function(){return r("backgroundUrl")}},c.a.createElement("img",{src:M.a,alt:"camera"}),c.a.createElement("p",null,"C\u1eadp nh\u1eadt \u1ea3nh b\xeca")),c.a.createElement("div",{className:"box-info__content"},n&&c.a.createElement("div",{onClick:function(){return r("avatarUrl")},className:"avatar",style:{backgroundImage:"url(".concat(a.avatarUrl,")")}}),n||c.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(a.avatarUrl,")")}}),c.a.createElement("p",{className:"name"},a.name)),n&&c.a.createElement("div",{className:"box-info__edit"},c.a.createElement("img",{src:be.a,alt:"edit"}),c.a.createElement("p",null,"C\u1eadp nh\u1eadt th\xf4ng tin")))},_e=t(115),ke=t.n(_e),Oe=[{id:1,url:"https://www.abc.net.au/cm/rimage/11095486-4x3-large.jpg?v=2"},{id:2,url:"https://ontariospca.ca/wp-content/uploads/2018/04/Cat-outside-small-600x399.png"},{id:3,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYtUSHp29-aNsWwT6khxYETjgiZIoAvP-jgw&usqp=CAU"},{id:4,url:"https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/04/petCoronovirus-DG-042320-770x553-1-650x428.jpg"},{id:5,url:"https://cdn.shopify.com/s/files/1/2194/6011/files/adorable-animal-cat-747795_grande.jpg?v=1545527845"},{id:6,url:"https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"},{id:7,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQelyAZ7JOm6z2bgBkEO-k3BEOF7DOn2TytjA&usqp=CAU"},{id:8,url:"https://cdn.pixabay.com/photo/2018/05/13/21/24/cat-3398010_960_720.jpg"}];var Ie=function(e){return c.a.createElement("div",{className:"gallery"},c.a.createElement("div",{className:"gallery__header"},c.a.createElement("div",{className:"icon-wrap"},c.a.createElement("img",{src:ke.a,alt:"gallery"})),c.a.createElement("p",null,"H\xecnh \u1ea3nh")),c.a.createElement("div",{className:"gallery__content"},Oe.map((function(e,a){return c.a.createElement("div",{key:a,className:"item"},c.a.createElement("img",{src:e.url,alt:"pet",className:"image"}))}))))};var je=function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],l=t[1],s=Object(i.i)().userId,m={};return localStorage.getItem("userInfo")&&(m=JSON.parse(localStorage.getItem("userInfo"))),Object(n.useEffect)((function(){var e="https://petlovers-backend.herokuapp.com/api/v1/"+"users/".concat(s,"/info");f.a.get(e).then((function(e){var a=Object(S.a)({},e.data);delete a._id,(a=Object(S.a)(Object(S.a)({},a),{},{id:s})).backgroundUrl||(a=Object(S.a)(Object(S.a)({},a),{},{backgroundUrl:"https://img2.pngio.com/default-png-5-png-image-default-png-1200_800.png"})),a.avatarUrl||(a=Object(S.a)(Object(S.a)({},a),{},{avatarUrl:"https://img2.pngio.com/index-of-wp-content-themes-fgm21-child-assets-images-default-png-495_495.png"})),l(a)}))}),[s]),c.a.createElement("div",{className:"profile-wrap"},c.a.createElement(y,{userLogined:m}),c.a.createElement("div",{className:"profile__main"},c.a.createElement("div",{className:"container"},c.a.createElement(Ne,{userInfo:r,onUploadImage:function(e){localStorage.setItem("userInfo",JSON.stringify(e)),l(e)},isMe:m.id===s}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"newfeed-wrap"},c.a.createElement(de,{userInfo:r,type:"profile",currentUserInfo:m})),c.a.createElement("div",{className:"gallery-wrap"},c.a.createElement(Ie,null))))))};var we=function(){var e=localStorage.getItem("accessToken"),a=Object(n.useState)(e),t=Object(o.a)(a,2),r=t[0],l=t[1];return f.a.defaults.headers.common["x-access-token"]=e,c.a.createElement(u.Provider,{value:{authToken:r,setAuthToken:l}},c.a.createElement(s.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/login",component:L}),c.a.createElement(i.b,{path:"/signup",component:B}),c.a.createElement(g,{path:"/",exact:!0,component:Ee}),c.a.createElement(g,{path:"/profile/:userId",component:je}),c.a.createElement(i.b,{component:v})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,a,t){e.exports=t.p+"static/media/camera.a5377696.svg"},98:function(e,a,t){e.exports=t.p+"static/media/open-menu.12327444.svg"},99:function(e,a,t){e.exports=t.p+"static/media/home.6606c14d.svg"}},[[117,1,2]]]);
//# sourceMappingURL=main.4ec20159.chunk.js.map