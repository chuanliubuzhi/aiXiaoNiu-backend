webpackJsonp([34],{VvXS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("6wjU"),s={name:"articleClassifyEdit",components:{},data:function(){return{form:{name:"",id:"",parentid:"",parents:[],site_id:1},lists:[]}},created:function(){var t=this;if(0==this.$route.params.pid)return this.form.id=this.$route.params.id||"",void(this.form.name=this.$route.params.name||"");Object(r.c)().then(function(e){t.lists=e.data.data;!function t(e){for(var a=0;a<e.length;a++)e[a].label=e[a].name,e[a].value=e[a].id,""!=e[a].children?t(e[a].children):delete e[a].children}(t.lists)}),void 0!==this.$route.params.id&&(this.form.id=this.$route.params.id,this.form.name=this.$route.params.name),Object(r.d)({id:this.$route.params.pid}).then(function(e){e.data.data.reverse().map(function(e){t.form.parents.push(e.id)})})},methods:{create:function(){var t=this;""==this.form.id&&delete this.form.id,this.form.parentid=this.form.parents.slice(-1)[0]||"0",Object(r.a)(this.form).then(function(e){0==e.data.code?(t.$message.success(e.data.message),t.$router.push("/content/articleClassify")):(t.$set(t.form,"id",""),t.$message.error(e.data.message))})},edit:function(){var t=this;this.form.parentid=this.form.parents.slice(-1)[0]||0,Object(r.e)(this.form).then(function(e){0==e.data.code?(t.$message.success(e.data.message),t.$router.push("/content/articleClassify")):t.$message.error(e.data.message)})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{"min-width":"1100px"}},[""==this.form.id?a("h3",[t._v("新增文章分类")]):a("h3",[t._v("编辑文章分类")]),t._v(" "),a("el-form",{ref:"form",staticStyle:{"margin-top":"20px"},attrs:{model:t.form,"label-width":"100px"}},[0!=t.$route.params.pid?a("el-form-item",{attrs:{label:"父级分类："}},[a("el-cascader",{attrs:{options:t.lists,"change-on-select":""},model:{value:t.form.parents,callback:function(e){t.$set(t.form,"parents",e)},expression:"form.parents"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"分类名称："}},[a("el-input",{staticStyle:{width:"220px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",[""==this.form.id?a("el-button",{attrs:{type:"primary"},on:{click:t.create}},[t._v("保存")]):a("el-button",{attrs:{type:"primary"},on:{click:t.edit}},[t._v("修改")]),t._v(" "),a("el-button",{on:{click:function(e){t.$router.push("/content/articleClassify")}}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var n=a("C7Lr")(s,i,!1,function(t){a("tiSJ")},null,null);e.default=n.exports},tiSJ:function(t,e){}});
//# sourceMappingURL=34.355cad1a146decea32d0.js.map