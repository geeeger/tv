(function(t){function e(e){for(var a,o,u=e[0],i=e[1],s=e[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,u=1;u<n.length;u++){const i=n[u];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;const n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;const n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(const a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){const e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";let u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(let s=0;s<u.length;s++)e(u[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1a4c":function(t,e,n){"use strict";const a=n("9f78"),r=n.n(a);r.a},"203b":function(t,e,n){"use strict";const a=n("ffdd"),r=n.n(a);r.a},2395:function(t,e,n){},"7c55":function(t,e,n){"use strict";const a=n("2395"),r=n.n(a);r.a},"8d91":function(t,e,n){},"9f78":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");const a=n("2b0e"),r=n("5c96"),c=n.n(r),o=function(){const t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("7c55"),n("2877")),s={},l=Object(i["a"])(s,o,u,!1,null,null,null),p=l.exports,f=n("8c4f"),d=function(){const t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-row",{staticClass:"row",attrs:{type:"flex",justify:"space-around"}},t._l(t.store.country,(function(e,a){return n("el-col",{key:a,attrs:{span:4}},[n("router-link",{attrs:{to:{name:"Channels",params:{path:e.file}}}},[n("el-card",{attrs:{"body-style":{padding:"5px"}}},[n("div",{staticClass:"countryIcon"},[n("div",{class:e.icon})]),n("div",{staticStyle:{padding:"14px"}},[t._v(t._s(t._f("cNameI18n")(e.title)))])])],1)],1)})),1)],1)},v=[],b=n("d4ec"),h=n("bee2"),y=n("262e"),m=n("2caf"),j=n("9ab4"),O=n("60a3"),g=n("6fc5"),w=(n("d81d"),n("d3b7"),n("ac1f"),n("3ca3"),n("466d"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),x=n("5530"),_=n("f8af"),C=n("2f62");a["default"].use(C["a"]);let k=new C["a"].Store({}),S=new URL("https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u"),$=function(t){Object(y["a"])(n,t);const e=Object(m["a"])(n);function n(){let t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.country=[],t}return Object(h["a"])(n,[{key:"updateCountry",value:function(t){this.country=Object(_["parse"])(t).tracks.map((function(t){let e=t.file.match(/([a-zA-Z]+)\.m3u/);return e&&(e=e[1]),Object(x["a"])({},t,{icon:"flag-icon flag-icon-".concat(e," flag-icon-squard")})}))}},{key:"fetchCountry",value:function(){const t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(S.origin,"/iptv-org/iptv/master/index.m3u")).then((function(t){return t.text()})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(g["d"]);Object(j["a"])([g["c"]],$.prototype,"updateCountry",null),Object(j["a"])([Object(g["a"])({commit:"updateCountry"})],$.prototype,"fetchCountry",null),$=Object(j["a"])([Object(g["b"])({name:"country",namespaced:!0,store:k,dynamic:!0})],$);const P=$,R=n("0efa"),E=n.n(R),I={};for(const L in E.a)I[E.a[L].en]=E.a[L];let M=function(t){Object(y["a"])(n,t);const e=Object(m["a"])(n);function n(){let t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.store=Object(g["e"])(P),t}return Object(h["a"])(n,[{key:"created",value:function(){this.store.fetchCountry()}}]),n}(O["b"]);M=Object(j["a"])([Object(O["a"])({filters:{cNameI18n:function(t){return I[t]&&I[t].zh||t}}})],M);let T=M,z=T,J=(n("de16"),Object(i["a"])(z,d,v,!1,null,null,null)),N=J.exports,U=function(){const t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-row",{staticClass:"row",attrs:{type:"flex",justify:"space-around"}},t._l(t.store.channels,(function(e,a){return n("el-col",{key:a,attrs:{span:4}},[n("router-link",{attrs:{to:{name:"Live",params:{live:e.file}}}},[n("el-card",{attrs:{"body-style":{padding:"5px"}}},[n("div",{staticClass:"channelIcon"},[e.params["tvg-logo"]?n("img",{staticClass:"icon",attrs:{src:e.params["tvg-logo"]}}):n("div",{staticClass:"icon"},[t._v("暂无封面")])]),n("div",{staticStyle:{padding:"14px"}},[t._v(t._s(e.title))])])],1)],1)})),1)],1)},q=[],A=(n("99af"),new URL("https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u")),H=function(t){Object(y["a"])(n,t);const e=Object(m["a"])(n);function n(){let t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.channels=[],t}return Object(h["a"])(n,[{key:"updateChannels",value:function(t){this.channels=Object(_["parse"])(t).tracks}},{key:"fetchChannel",value:function(){const t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(A.origin,"/iptv-org/iptv/master/").concat(e)).then((function(t){return t.text()})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(g["d"]);Object(j["a"])([g["c"]],H.prototype,"updateChannels",null),Object(j["a"])([Object(g["a"])({commit:"updateChannels"})],H.prototype,"fetchChannel",null),H=Object(j["a"])([Object(g["b"])({name:"channels",namespaced:!0,store:k,dynamic:!0})],H);let Z=H,B=function(t){Object(y["a"])(n,t);const e=Object(m["a"])(n);function n(){let t;return Object(b["a"])(this,n),t=e.apply(this,arguments),t.store=Object(g["e"])(Z),t}return Object(h["a"])(n,[{key:"created",value:function(){this.store.fetchChannel(this.$route.params.path)}}]),n}(O["b"]);B=Object(j["a"])([O["a"]],B);let D=B,F=D,G=(n("1a4c"),Object(i["a"])(F,U,q,!1,null,null,null)),K=G.exports,Q=function(){const t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[t.$route.params.live?n("video",{staticClass:"video",attrs:{src:t.$route.params.live,controls:"",autoplay:""}}):t._e()])},V=[],W=function(t){Object(y["a"])(n,t);const e=Object(m["a"])(n);function n(){return Object(b["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"mounted",value:function(){}}]),n}(O["b"]);W=Object(j["a"])([O["a"]],W);const X=W,Y=X,tt=(n("203b"),Object(i["a"])(Y,Q,V,!1,null,null,null)),et=tt.exports;a["default"].use(f["a"]);const nt=[{path:"/",name:"Home",component:N},{path:"/live/:live",name:"Live",component:et},{path:"/channels/:path",name:"Channels",component:K}],at=new f["a"]({mode:"hash",base:"",routes:nt}),rt=at;n("0fae"),n("d2ca"),n("fda2");a["default"].use(c.a),a["default"].config.productionTip=!1,new a["default"]({router:rt,render:function(t){return t(p)}}).$mount("#app")},de16:function(t,e,n){"use strict";const a=n("8d91"),r=n.n(a);r.a},ffdd:function(t,e,n){}});
//# sourceMappingURL=app.e10a731d.js.map