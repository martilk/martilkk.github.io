(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(e,t,o){var content=o(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(38).default)("0a2007cb",content,!0,{sourceMap:!1})},206:function(e,t,o){"use strict";var r=o(198);o.n(r).a},207:function(e,t,o){(t=o(37)(!1)).push([e.i,".login{margin-top:50px;width:100%}.login,form{display:flex;justify-content:center;align-items:center;flex-direction:column}input{width:200px;padding:30px;font-size:21px}form button{widows:200px;height:75px;font-size:100%}.error{color:red}",""]),e.exports=t},215:function(e,t,o){"use strict";o.r(t);var r=o(23),n=(o(84),{components:{},data:function(){return{email:"",password:"",error:""}},methods:{pressed:function(){var e=this;r.auth().signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log(data),e.$router.push("/catalog")})).catch((function(t){return e.error=t}))}}}),l=(o(206),o(14)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("h3",[e._v("Log ind")]),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.pressed(t)}}},[o("div",{staticClass:"login"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"password"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),o("button",[e._v("Log ind")])]),e._v(" "),e.error?o("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);