(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1cc3":function(t,e,s){},2941:function(t,e,s){"use strict";s("41e3")},3395:function(t,e,s){},"41e3":function(t,e,s){},5037:function(t,e,s){"use strict";s("3395")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{itemsNavbar:t.headerNavbar}}),s("Main"),s("Footer",{attrs:{itemsNavbar:t.footerNavbar}})],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"topHeader justify-content-around"},[a("Navbar",{attrs:{items:t.itemsNavbar}}),a("img",{attrs:{src:s("7eb9"),alt:"logo"}}),t._m(0)],1),a("div",{staticClass:"bottomHeader"},[a("h3",[t._v("Commerce Business")]),a("h1",[t._v("Distant Mentoring Program")]),a("Bottone",{attrs:{testo:"Dowload free guidebook",colore:"verde"}})],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("i",{staticClass:"fa-solid fa-cart-shopping"}),s("i",{staticClass:"fa-regular fa-circle-user"}),s("input",{attrs:{type:"text",placeholder:"Search"}})])}],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[s("ul",{staticClass:"navbar-nav"},t._l(t.items,(function(e,a){return s("ul",{key:a,staticClass:"navbar-nav",attrs:{id:"footerNav"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link me-3",attrs:{id:"title",href:"#"}},[t._v(t._s(e.title||e)+" "),e.title?t._e():s("i",{staticClass:"fa-solid fa-angle-down ms-1 align-middle"})])]),t._l(e.subtitle,(function(e,a){return s("li",{key:a,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"sub",href:"#"}},[t._v(" "+t._s(e)+" ")])])}))],2)})),0)])])])},l=[],u={name:"Navbar",props:["items"]},d=u,f=(s("f829"),s("2877")),p=Object(f["a"])(d,c,l,!1,null,"4a55ed4d",null),v=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:{white:"verde"===t.colore},attrs:{type:"button"}},[s("strong",[t._v(t._s(t.testo))])])},b=[],g={name:"Bottone",props:["testo","colore"]},h=g,_=(s("851f"),Object(f["a"])(h,m,b,!1,null,"13604bf4",null)),C=_.exports,y={name:"Header",data:function(){return{}},props:["itemsNavbar"],components:{Navbar:v,Bottone:C}},x=y,w=(s("e733"),Object(f["a"])(x,i,o,!1,null,"cd4f398a",null)),j=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("section",{attrs:{id:"slider"}},[t._m(1),s("Slider"),t._m(2)],1)])])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("section",{attrs:{id:"culture"}},[a("div",{staticClass:"card border border-0 w-100"},[a("div",{staticClass:"row justify-content-center flex-row-reverse"},[a("div",{staticClass:"col-6"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:s("ba33"),alt:"..."}})]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"card-body p-3",staticStyle:{"max-width":"300px"}},[a("p",[t._v("everythins in maxchoach")]),a("h2",{staticClass:"card-title"},[t._v(" Learn about our work culture at maxcoach ")]),a("div",{staticClass:"card-text"},[t._v(" Spend some time to visit out website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month. ")]),a("div",{staticClass:"card-text mt-3"},[a("small",{staticClass:"text-muted"},[t._v("Have questions? Get Free Guide")])])])])])]),a("div",{staticClass:"stats"},[a("div",{staticClass:"stat text-center"},[a("span",[t._v("129+")]),a("p",[t._v("enrolled learned")])]),a("div",{staticClass:"stat text-center"},[a("span",[t._v("80")]),a("p",[t._v("finished session")])]),a("div",{staticClass:"stat text-center"},[a("span",[t._v("4%")]),a("p",[t._v("satisfatcion rate")])])]),a("div",{staticClass:"card border border-0 w-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-6"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:s("85ce"),alt:"..."}})]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"card-body",staticStyle:{"max-width":"300px"}},[a("p",[t._v("how we work")]),a("h2",{staticClass:"card-title"},[t._v(" Upgrade your skills upgrade your life ")]),a("div",{staticClass:"card-text"},[t._v(" Opening up more opportunities in front of you to get the ticket to more enjoyable door in life. Getting equipment with new skills for new sets of insights into carrer. MaxCoach accompany learners in every stage of learning. ")]),a("div",{staticClass:"card-text mt-3"},[a("small",{staticClass:"text-muted"},[t._v("Download free guidebook")])])])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider-text text-center mb-5"},[s("p",[t._v("join maxcoach at best")]),s("h2",[t._v("Latest Online Courses")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider-desc text-center"},[t._v(" Control your personal preference settings to get notified about apporpriate courses. "),s("span",[t._v("View all courses")])])}],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-bs-ride":"carousel"}},[s("div",{staticClass:"carousel-inner d-flex"},[s("div",{staticClass:"carousel-item d-flex"},t._l(t.cards,(function(t,e){return s("div",{key:e},[s("CardSlider",{attrs:{card:t}})],1)})),0)]),s("div",{staticClass:"carousel-indicators"},t._l(3,(function(t,e){return s("button",{key:e,staticClass:"active",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":e,"aria-current":"true","aria-label":"Slide 1"}})})),0)])])},E=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card me-5"},[a("img",{staticClass:"card-img-top",attrs:{src:s("ba33"),alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.card.price))]),a("h4",{staticClass:"card-text"},[t._v(" "+t._s(t.card.desc)+" ")]),a("div",{staticClass:"card-stats mt-4"},[a("span",{staticClass:"me-5"},[t._v(t._s(t.card.lessons)+" Lessons")]),a("span",[t._v(t._s(t.card.students)+" Students")])])])])},$=[],N={name:"CardSlider",props:["card"]},M=N,F=(s("5037"),Object(f["a"])(M,P,$,!1,null,"36c2eb24",null)),H=F.exports,B={name:"Slider",components:{CardSlider:H},data:function(){return{cards:[{price:"$40,00",desc:"Learning to Write as a professional Author",lessons:"20",students:"50",url:"../assets/img/course-02-480x298.jpg"},{price:"$0,00",desc:"Customers-centric Info-tech Strategies",lessons:"24",students:"769",url:"../assets/img/stock-full-hd-03-480x298.jpg"},{price:"$19,00",desc:"Open Programming courses for Everyonr: Python",lessons:"17",students:"62",url:"../assets/img/stock-full-hd-04-480x298.jpg"},{price:"$9,00",desc:"Open Programming courses for Everyonr: Python",lessons:"17",students:"62",url:"../assets/img/stock-full-hd-04-480x298.jpg"},{price:"$22,00",desc:"Open Programming courses for Everyonr: Python",lessons:"17",students:"62",url:"../assets/img/stock-full-hd-04-480x298.jpg"},{price:"$191,00",desc:"Open Programming courses for Everyonr: Python",lessons:"17",students:"62",url:"../assets/img/stock-full-hd-04-480x298.jpg"},{price:"$19s,00",desc:"Open Programming courses for Everyonr: Python",lessons:"17",students:"62",url:"../assets/img/stock-full-hd-04-480x298.jpg"}]}}},q=B,L=(s("2941"),Object(f["a"])(q,S,E,!1,null,"cc6501c4",null)),T=L.exports,A={name:"Main",components:{Slider:T}},D=A,I=(s("99a0"),Object(f["a"])(D,k,O,!1,null,"7e7b8753",null)),G=I.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("Navbar",{attrs:{items:t.itemsNavbar}})],1)},W=[],U={name:"Footer",props:["itemsNavbar"],components:{Navbar:v}},V=U,z=Object(f["a"])(V,J,W,!1,null,"7d3d9bed",null),K=z.exports,Q={name:"App",components:{Header:j,Main:G,Footer:K},data:function(){return{headerNavbar:["Home","Pages","Coursor","Features","Blog","Shop"],footerNavbar:[{title:"Address",subtitle:["382 NE 191st St # 87394 Miami, FL 33179-3899","+1(305)547-9909(9am - 5pm EST, Monday-Friday)","support@maxcoach.com"]},{title:"Explore",subtitle:["Start here","Blog","About us","Success story","Courses","Contact us"]},{title:"Information",subtitle:["Membership","Purchase guide","Privacy policy","Terms of service"]}]}}},R=Q,X=(s("5c0b"),Object(f["a"])(R,r,n,!1,null,null,null)),Y=X.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"7bcd":function(t,e,s){},"7eb9":function(t,e,s){t.exports=s.p+"img/dark-logo.c709104b.png"},"851f":function(t,e,s){"use strict";s("e99c")},"85ce":function(t,e,s){t.exports=s.p+"img/stock-full-hd-11-670x450.145cb8ff.jpg"},"99a0":function(t,e,s){"use strict";s("1cc3")},"9c0c":function(t,e,s){},b254:function(t,e,s){},ba33:function(t,e,s){t.exports=s.p+"img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.8139b284.jpg"},e733:function(t,e,s){"use strict";s("7bcd")},e99c:function(t,e,s){},f829:function(t,e,s){"use strict";s("b254")}});
//# sourceMappingURL=app.a9fd066a.js.map