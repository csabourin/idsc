(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{230:function(t,n,e){var content=e(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("36873827",content,!0,{sourceMap:!1})},438:function(t,n,e){"use strict";var l=e(230);e.n(l).a},439:function(t,n,e){(t.exports=e(41)(!1)).push([t.i,"details li>a{color:#26a69a!important}[dir=ltr] .listItem{padding-left:0}[dir=rtl] .listItem{padding-right:0}.listItem{list-style-type:none;padding-bottom:.25em;font-size:small}.menuItem{padding:2em;text-align:left}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#3f2a56;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}summary>h3,summary>h4{display:contents}",""])},447:function(t,n,e){"use strict";e.r(n);var menu=e(88),l={data:function(){return{menu:menu.a,SupportCentre:{en:"Learning Support Centre",fr:"Centre de soutien à l'apprentissage"},forID:{en:"at the Canada School of Public Service",fr:"à l'École de la fonction publique du Canada"}}},computed:{lang:function(){return this.$store.state.lang}}},o=(e(438),e(38)),component=Object(o.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.SupportCentre[t.lang])+"\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n      "+t._s(t.forID[t.lang])+"\n    ")]),t._v(" "),e("div",{staticClass:"row nomargin"},t._l(t.menu,function(n,l){return e("div",{key:l,staticClass:"menuItem col-md-4",attrs:{visible:"",role:"tabpanel"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+l,expression:"'accordion-' + index"}],staticClass:"col-md-12",attrs:{variant:"light"}},[t._v("\n          "+t._s(n.name[t.lang])+"\n        ")]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-"+l,accordion:"my-accordion",role:"tabpanel"}},[e("ul",t._l(n.links,function(sub,n){return e("li",{key:n,staticClass:"listItem list-unstyled"},[e("nuxt-link",{attrs:{to:sub.link+"-"+t.lang}},[t._v("\n                "+t._s(sub.description[t.lang])+"\n              ")])],1)}),0)])],1)}),0)])])},[],!1,null,null,null);n.default=component.exports}}]);