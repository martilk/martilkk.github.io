(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("edc7600e",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";var r=n(196);n.n(r).a},203:function(t,e,n){(e=n(37)(!1)).push([t.i,".container{display:flex;flex-direction:column;margin-bottom:1vh}.container h1{margin:3vh 5vw 1vh}#search-bar input{width:90vw;margin:5vw 5vw 3vw;height:7vh;padding:0 5vw;border-radius:3px;border:1px solid #d3d3d3}.card-container{max-width:100vw;width:90vw;margin:0 5vw;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.card-container .card a{text-decoration:none;color:#000}.card-container .card{width:43.2vw;margin:1vh 0;border-width:1px;border-radius:5px;background-color:#fff}.card-container .card img{width:100%;height:230px;border-radius:5px 5px 0 0}.card-img{-o-object-fit:cover;object-fit:cover}.product-type{margin:165px 3vw 0}.bedeakning,.product-type{position:absolute;border-radius:4px;padding:.8vh 3vw;background-color:#111d35}.bedeakning{margin:195px 3vw 0}.bedeakning p,.product-type p{color:#fff;font-size:.8em;font-weight:600}.card-info{padding:1vh 3vw;border-radius:0 0 5px 5px;height:15vh;display:flex;flex-direction:column;justify-content:space-between}.card-info h3{font-weight:300;padding-bottom:1.5vh}.card-info h2,.card-info h3{font-size:1em;text-align:left}.card-info h2{font-weight:500;padding-bottom:1vh}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}@media screen and (min-width:426px){.container h1{display:block;margin:5vh 5.25vw 2vh}.card-container .card{width:28vw}.bedeakning,.product-type{margin-left:1.2vw}.card-info{padding:1.2vw}#search-bar input{padding:0 2vw;margin:0 5vw 1vh}}@media screen and (min-width:769px){.katalog-header{display:flex;justify-content:space-between}#search-bar input{height:3.5vh;width:22vw;float:right}#search-bar input,.container h1{margin:2.5vh 5vw 2vh}.card-container .card{width:22vw}.bedeakning,.product-type{margin-left:1vw}}@media screen and (min-width:1025px){.card-container .card{width:17vw}.bedeakning,.product-type{margin-left:.8vw;padding:.8vh 1vw}.card-info{height:10vh}}@media screen and (min-width:1441px){.card-container .card{width:14vw}.bedeakning,.product-type{margin-left:.5vw;padding:.3vh .8vw}.card-info{height:6vh;padding:.8vw}}",""]),t.exports=e},214:function(t,e,n){"use strict";n.r(e);n(128),n(24),n(127);var r={asyncData:function(t){return t.$axios.get("https://sheetdb.io/api/v1/tqe5a6p40zqh4").then((function(t){return console.log(t),{users:t.data}}))},data:function(){return{users:[],search:""}},computed:{filterdUsers:function(){var t=this;return this.users.filter((function(e){return e.name.toLowerCase().match(t.search.toLowerCase())}))}}},o=(n(202),n(14)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"katalog-header"},[n("h1",[t._v("Hingste Katalog")]),t._v(" "),n("div",{attrs:{id:"search-bar"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Søg"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),t._v(" "),n("section",{staticClass:"card-container"},t._l(t.filterdUsers,(function(e){return n("div",{key:e.id,staticClass:"card"},[n("router-link",{attrs:{to:"/catalog/"+e.id}},[n("div",{staticClass:"product-type"},[n("p",[t._v("Type")])]),t._v(" "),n("div",{staticClass:"bedeakning"},[n("p",[t._v("Bedækning")])]),t._v(" "),n("div",{staticClass:"img-info"},[n("img",{staticClass:"card-img",attrs:{src:e.image_1,alt:""}})]),t._v(" "),n("div",{staticClass:"card-info"},[n("h3",[t._v(t._s(e.name)+" fra "+t._s(e.country))]),t._v(" "),n("h2",[t._v("DKK "+t._s(e.price))])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);