webpackJsonp([38],{"7nex":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("+KWZ"),i={name:"articleClassify",data:function(){return{lists:[],form:{name:"",parentid:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(a.c)().then(function(e){t.lists=e.data.data;!function t(e){for(var n=0;n<e.length;n++)e[n].label=e[n].name,e[n].value=e[n].id,""!=e[n].children?t(e[n].children):delete e[n].children}(t.lists)})},append:function(t){this.$router.push({name:"articleClassifyEdit",params:{pid:t.id}})},update:function(t){this.$router.push({name:"articleClassifyEdit",params:{id:t.id,pid:t.parentid,name:t.name}})},remove:function(t){var e=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.b)({id:t.id}).then(function(t){0==t.data.code?(e.$message.success(t.data.message),e.fetchData()):e.$message.error(t.data.message)})}).catch(function(){})},renderContent:function(t,e){var n=this,a=e.node,i=e.data;e.store;return t("span",{style:"flex: 1; display: flex; align-items: center; justify-content: flex-start; font-size: 14px;"},[t("span",[t("span",[a.label])]),t("span",{style:"padding-top: 3px; margin-left: 10px;"},[t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return n.append(i)}}},["新增"]),t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return n.update(i)}}},["修改"]),t("el-button",{style:"font-size: 12px;",attrs:{type:"text"},on:{click:function(){return n.remove(i)}}},["删除"])])])}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h3",[t._v("分类列表")]),t._v(" "),n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.$router.push({name:"articleClassifyEdit",params:{pid:0}})}}},[t._v("新增根分类")]),t._v(" "),n("el-tree",{staticStyle:{"margin-top":"10px"},attrs:{data:t.lists,"node-key":"id","expand-on-click-node":!1,"render-content":t.renderContent,"default-expand-all":""}})],1)])},staticRenderFns:[]};var r=n("C7Lr")(i,s,!1,function(t){n("gkin")},null,null);e.default=r.exports},gkin:function(t,e){}});
//# sourceMappingURL=38.623dde78a7c99a2e0a2c.js.map