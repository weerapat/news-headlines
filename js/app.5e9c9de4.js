(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c5358":"a08331a3"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/news-headlines/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{staticClass:"indigo darken-4 white--text",attrs:{right:"",app:""},model:{value:e.isDrawerOpen,callback:function(t){e.isDrawerOpen=t},expression:"isDrawerOpen"}},[a("div",{staticClass:"pa-4"},[a("h2",[e._v("Visited Headlines")]),a("ul",e._l(e.visitedHeadlines,(function(t,n){return a("li",{key:n+t},[e._v(" "+e._s(t)+" ")])})),0)])]),a("v-app-bar",{staticClass:"text-h5 grey lighten-2",attrs:{app:"",dense:""}},[e._v(" News "),a("v-app-bar-nav-icon",{attrs:{fixed:"",right:""},on:{click:function(t){t.stopPropagation(),e.isDrawerOpen=!e.isDrawerOpen}}})],1),a("v-main",{staticClass:"blue-grey lighten-5"},[a("router-view")],1)],1)},r=[],s={name:"App",data:function(){return{isDrawerOpen:!0}},computed:{visitedHeadlines:function(){return this.$store.state.visitedHeadlines.data}}},o=s,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),f=a("40dc"),p=a("5bc1"),v=a("f6c4"),m=a("f774"),h=Object(c["a"])(o,i,r,!1,null,null,null),g=h.exports;u()(h,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:p["a"],VMain:v["a"],VNavigationDrawer:m["a"]});a("d3b7"),a("3ca3"),a("ddb0");var b=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[e.sources.length?a("v-col",{attrs:{sm:"6",md:"4"}},[a("v-autocomplete",{attrs:{items:e.sources,"item-text":"name","item-value":"id",label:"Sources",clearable:""},model:{value:e.filters.source,callback:function(t){e.$set(e.filters,"source",t)},expression:"filters.source"}})],1):e._e(),a("v-col",{attrs:{sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Search",clearable:"","append-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-row",[e.isHeadlinesLoading?a("v-col",{attrs:{cols:"12"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),e._v(" ..Loading ")],1):e._l(e.filteredHeadlines,(function(t){return a("v-col",{key:t.slug,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[a("news-headline",{attrs:{newsHeadline:t},on:{"open-dialog":e.openDialog}})],1)}))],2),a("v-dialog",{attrs:{width:"500"},model:{value:e.isDialogOpen,callback:function(t){e.isDialogOpen=t},expression:"isDialogOpen"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6 primary darken-1 white--text"},[e._v(" Edit Title ")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.form.isValid,callback:function(t){e.$set(e.form,"isValid",t)},expression:"form.isValid"}},[a("v-card-text",[a("v-text-field",{attrs:{label:"News Title*",counter:150,rules:e.validations.title,required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.isDialogOpen=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.form.isValid},on:{click:e.updateTitle}},[e._v(" Save ")])],1)],1)],1)],1),a("v-snackbar",{attrs:{timeout:"5000",color:"red darken-1"},model:{value:e.snackbar.isOpen,callback:function(t){e.$set(e.snackbar,"isOpen",t)},expression:"snackbar.isOpen"}},[e._v(" "+e._s(e.snackbar.text)+" ")])],1)},y=[],x=a("f7fe"),k=a.n(x),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mb-5 mx-auto",attrs:{elevation:"2","max-width":"450"}},[a("router-link",{attrs:{to:{name:"Detail",params:{slug:e.newsHeadline.slug}}}},[a("v-img",{attrs:{height:"200",src:e.newsHeadline.urlToImage}})],1),a("v-card-title",{staticClass:"text-h d-inline-block py-2"},[e._v(" "+e._s(e.newsHeadline.title)+" "),a("v-btn",{attrs:{"x-small":"",color:"primary accent-4"},on:{click:function(t){return e.$emit("open-dialog",e.newsHeadline.slug,e.newsHeadline.title)}}},[e._v(" edit ")])],1),a("v-card-subtitle",{staticClass:"mt-0 pb-1"},[a("v-icon",{attrs:{small:"",color:"grey darken-2"}},[e._v(" mdi-calendar ")]),e._v(" "+e._s(new Date(e.newsHeadline.publishedAt).toLocaleDateString("en-US"))+" ")],1),a("v-card-text",[e._v(e._s(e.newsHeadline.description))]),a("v-card-actions",[a("router-link",{attrs:{to:{name:"Detail",params:{slug:e.newsHeadline.slug}}}},[a("v-btn",{staticClass:"px-2",attrs:{text:"",color:"primary accent-4",small:""}},[e._v(" Read More ")])],1)],1)],1)},V=[],_={name:"NewsHeadline",props:{newsHeadline:{type:Object}}},H=_,S=a("8336"),C=a("b0af"),D=a("99d9"),T=a("132d"),j=a("adda"),$=Object(c["a"])(H,O,V,!1,null,null,null),L=$.exports;u()($,{VBtn:S["a"],VCard:C["a"],VCardActions:D["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VIcon:T["a"],VImg:j["a"]});var P={name:"Home",components:{NewsHeadline:L},data:function(){return{isDialogOpen:!1,search:"",filters:{source:null},form:{isValid:!1,headlineId:null,title:""},validations:{title:[function(e){return!!e||"Title is required"},function(e){return e&&e.length<=150||"Title must be less than 150 characters"}]},snackbar:{isOpen:!1,text:""}}},mounted:function(){var e=this;this.$store.dispatch("newsHeadlines/get").catch((function(t){e.snackbar.isOpen=!0,e.snackbar.text=t.response.data.message})),this.$store.dispatch("sources/get")},methods:{openDialog:function(e,t){this.isDialogOpen=!0,this.form.headlineId=e,this.form.title=t},updateTitle:function(){this.isDialogOpen=!1,this.$store.dispatch("newsHeadlines/updateTitle",{slug:this.form.headlineId,title:this.form.title})},searchHeadlines:k()((function(e){this.$store.dispatch("newsHeadlines/get",e)}),1e3)},computed:{filteredHeadlines:function(){return this.$store.getters["newsHeadlines/getBySource"](this.filters.source)},isHeadlinesLoading:function(){return this.$store.state.newsHeadlines.isLoading},sources:function(){return this.$store.state.sources.data}},watch:{search:function(e){this.searchHeadlines(e)}}},A=P,I=a("c6a6"),E=a("62ad"),B=a("a523"),M=a("169a"),N=a("ce7e"),q=a("4bd4"),R=a("490a"),U=a("0fd9"),F=a("2db4"),J=a("2fa4"),K=a("8654"),z=Object(c["a"])(A,w,y,!1,null,null,null),G=z.exports;u()(z,{VAutocomplete:I["a"],VBtn:S["a"],VCard:C["a"],VCardActions:D["a"],VCardText:D["c"],VCardTitle:D["d"],VCol:E["a"],VContainer:B["a"],VDialog:M["a"],VDivider:N["a"],VForm:q["a"],VProgressCircular:R["a"],VRow:U["a"],VSnackbar:F["a"],VSpacer:J["a"],VTextField:K["a"]}),n["a"].use(b["a"]);var Q=[{path:"/",name:"Home",component:G},{path:"/new/:slug",name:"Detail",component:function(){return a.e("chunk-2d0c5358").then(a.bind(null,"3db3"))}}],W=new b["a"]({mode:"history",base:"/news-headlines/",routes:Q}),X=W,Y=a("2f62"),Z=a("5530"),ee=(a("99af"),a("d81d"),a("4de4"),a("07ac"),a("bc3a")),te=a.n(ee),ae=a("5e23"),ne="https://newsapi.org/v2",ie="8e65aa620da6494a871c772336c67ebb",re=(a("ac1f"),a("5319"),a("fb6a"),function(e){return encodeURI(e.toLowerCase().slice(0,20).replace(/\s/g,"-"))}),se={namespaced:!0,state:function(){return{isLoading:!1,isSuccess:!1,data:{}}},mutations:{fetching:function(e){e.isLoading=!0,e.isSuccess=!1},fetchSuccess:function(e,t){e.isLoading=!1,e.data=t.data,e.isSuccess=!0},updateTitle:function(e,t){e.data[t.slug].title=t.title}},actions:{get:function(e){var t=e.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise((function(e,n){t("fetching");var i=a?"q=".concat(encodeURI(a)):"country=us";te.a.get("".concat(ne,"/top-headlines?").concat(i,"&apiKey=").concat(ie)).then((function(a){var n=a.data,i=n.articles.map((function(e){return Object(Z["a"])(Object(Z["a"])({},e),{},{slug:re(e.title)})})),r=new ae["b"].Entity("newsHeadlines",void 0,{idAttribute:"slug"}),s=Object(ae["a"])(i,[r]).entities.newsHeadlines;t("fetchSuccess",{data:s}),e(s)})).catch((function(e){n(e)}))}))},updateTitle:function(e,t){var a=e.commit;return a("updateTitle",t)}},getters:{getBySource:function(e){return function(t){return t?Object.values(e.data).filter((function(e){return e.source.id===t})):e.data}}}},oe=se,ce={namespaced:!0,state:function(){return{isLoading:!1,isSuccess:!1,data:{}}},mutations:{fetching:function(e){e.isLoading=!0,e.isSuccess=!1},fetchSuccess:function(e,t){e.isLoading=!1,e.data=t.data,e.isSuccess=!0}},actions:{get:function(e){var t=e.commit;t("fetching"),te.a.get("".concat(ne,"/sources?apiKey=").concat(ie)).then((function(e){var a=e.data;t("fetchSuccess",{data:a.sources})}))}}},le=ce,ue={namespaced:!0,state:function(){return{data:[]}},mutations:{add:function(e,t){e.data.push(t)}},actions:{add:function(e,t){var a=e.commit;return a("add",t)}}},de=ue;n["a"].use(Y["a"]);var fe=new Y["a"].Store({modules:{newsHeadlines:oe,sources:le,visitedHeadlines:de}}),pe=a("f309");n["a"].use(pe["a"]);var ve=new pe["a"];n["a"].config.productionTip=!1,new n["a"]({router:X,store:fe,vuetify:ve,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.5e9c9de4.js.map