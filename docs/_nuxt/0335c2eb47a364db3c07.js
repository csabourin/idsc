(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{205:function(e,t,n){var content=n(292);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("2fd419a3",content,!0,{sourceMap:!1})},291:function(e,t,n){"use strict";var r=n(205);n.n(r).a},292:function(e,t,n){(e.exports=n(41)(!1)).push([e.i,"ul.SideNav[data-v-488d16c9]{padding:0;margin:0;border-right:.99px solid #bebebe;position:relative}.SideNav li[data-v-488d16c9]{width:100%;position:relative;padding-top:.5em;padding-bottom:.5em;border-right:1px solid #bebebe;vertical-align:middle;border-color:#bebebe #fff #bebebe #bebebe;border-style:solid;border-width:1px 5px 1px 0}.SideNav li[data-v-488d16c9]:not(.active):hover{background-color:#bebebe;border-right:5px solid #01535e;padding-right:0}.SideNav li a[data-v-488d16c9]{color:#01535e;text-decoration:none;vertical-align:middle;display:inline-block;width:100%;padding:.25em 0 .25em .25em}",""])},472:function(e,t,n){"use strict";n.r(t);n(14),n(19);var menu=n(88),r={data:function(){return{menu:menu.a,homepage:{en:"Home page",fr:"Page d'accueil"}}},computed:{lang:function(){return this.$store.state.lang},currentName:function(){return this.$route.path.split("/")[1]},routeIndex:function(){for(var e,t=this.$router.options.routes,i=0;i<t.length;i++)if(t[i].name===this.$route.name){e=i;break}return e}},watch:{lang:function(){var e=this.$route.path.length-2,t=this.$route.path.substr(0,e);this.$router.push(t+this.$store.state.lang)}},methods:{isVisible:function(e){return this.$route.matched[0].name===e}}},o=(n(291),n(38)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("\n      "+e._s(e.homepage[e.lang])+"\n    ")]),e._v(" "),n("br"),e._v(" "),e._l(e.menu,function(t,r){return n("div",{key:r,attrs:{visible:"",role:"tabpanel"}},[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r,expression:"'accordion-' + index"}],attrs:{href:"#",item:t}},[e._v("\n        "+e._s(t.name[e.lang])+"\n      ")]),e._v(" "),n("b-collapse",{attrs:{id:"accordion-"+r,accordion:"my-accordion",visible:e.isVisible(t.group),role:"tabpanel"}},[n("ul",e._l(t.links,function(sub,t){return n("li",{key:t,staticClass:"listItem list-unstyled"},[n("nuxt-link",{attrs:{to:sub.link+"-"+e.lang}},[e._v("\n              "+e._s(sub.description[e.lang])+"\n            ")])],1)}),0)])],1)}),e._v(" "),n("br")],2),e._v(" "),n("div",{staticClass:"col-md-9"},[n("nuxt-child")],1)])},[],!1,null,"488d16c9",null);t.default=component.exports}}]);