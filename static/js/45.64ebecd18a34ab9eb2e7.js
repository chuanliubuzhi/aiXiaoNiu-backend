webpackJsonp([45],{HV5W:function(e,t){},vrUg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("M9A7"),o=r("TIfe"),a={name:"signup",data:function(){var e=this;return{form:{mobile:"",password:"",code:"",agreement:!0},time:"",timer:null,disabled:!1,rules:{mobile:[{validator:function(t,r,s){""===r?s(new Error("手机号不能为空")):/^1[0-9]{10}$/.test(e.form.mobile)?s():s(new Error("手机号格式不正确"))},trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}],password:[{validator:function(e,t,r){""===t?r(new Error("密码不能为空")):t.length<6?r(new Error("密码不能少于 6 位")):r()},trigger:"blur"}]}}},methods:{run:function(){var e=this;e.time=60;var t=setInterval(function(){if(e.disabled=!0,0==e.time--)return clearInterval(t),e.time=60,e.disabled=!1,e.time},1e3)},sendMessage:function(){var e=this;/^1[0-9]{10}$/.test(this.form.mobile)?(this.run(),Object(s.c)(this.form.mobile).then(function(t){0==t.data.code?e.$message.success(t.data.message):e.$message.error(t.data.message)})):this.$message.error("手机号格式不正确")},register:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;var r={mobile:e.form.mobile.toString(),password:e.form.password,code:e.form.code};Object(s.f)(r).then(function(t){0==t.data.code?(Object(o.g)(t.data.data.access_token),Object(o.f)(t.data.data.site[0].site_id),e.$router.push("/")):e.$message.error(t.data.message)})})},toSignin:function(){this.$router.push("/login/signin")}},computed:{text:function(){return 60==this.time?"获取验证码":this.time>0?this.time+"s后重新获取":"获取验证码"}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"signup-container"},[r("h2",[e._v("用户注册")]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"status-icon":""}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",e._n("string"==typeof t?t.trim():t))},expression:"form.mobile"}},[r("template",{slot:"prepend"},[e._v("+86")])],2)],1),e._v(" "),r("el-form-item",{attrs:{prop:"code"}},[r("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}},[r("el-button",{ref:"diji",staticStyle:{color:"#409EFF"},attrs:{slot:"append",disabled:e.disabled},on:{click:e.sendMessage},slot:"append"},[e._v(e._s(e.text))])],1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{staticClass:"agreement",attrs:{prop:"agreement"}},[r("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),e._v(" "),r("a",[e._v("《用户协议》")])],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"btn",staticStyle:{width:"100%","border-radius":"2em"},attrs:{type:"primary",disabled:!e.form.agreement},on:{click:e.register}},[e._v("注 册")])],1)],1),e._v(" "),r("div",{staticClass:"footer"},[r("a",{on:{click:e.toSignin}},[e._v("点击登录")]),e._v(" "),r("span",[e._v("已有账号？")])])],1)},staticRenderFns:[]};var n=r("C7Lr")(a,i,!1,function(e){r("HV5W")},null,null);t.default=n.exports}});
//# sourceMappingURL=45.64ebecd18a34ab9eb2e7.js.map