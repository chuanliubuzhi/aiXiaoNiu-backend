webpackJsonp([49],{UgJq:function(t,e){},Wzsq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("qsHl"),s={name:"groupIndex",created:function(){this.fetchData()},data:function(){return{shop:{category_name:"",parentid:null,sort_order:null,is_show:null},shopCategory:[]}},methods:{fetchData:function(){var t=this;Object(o.j)().then(function(e){t.shopCategory=e.data.data})},deleteSite:function(t,e){var a={id:e.id},s=this;s.$confirm("将永久删除该商品分组, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.d)(a).then(function(t){0==t.data.code?s.$message({type:"success",message:"删除成功!"}):s.$message({type:"info",message:"删除失败!"})})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container newcon"},[a("div",{staticClass:"goods-list container"},[a("div",{staticClass:"clearfix ui-box",staticStyle:{position:"relative"}},[a("div",{staticClass:"pull-left"},[a("router-link",{attrs:{to:{name:"addGroup"}}},[t._v("\n\t\t\t\t\t新建商品分组\n\t\t\t\t")])],1),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-input",{attrs:{placeholder:"请输入内容"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)]),t._v(" "),a("div",{staticClass:"ui-box"},[a("el-table",{ref:"",staticStyle:{width:"100%"},attrs:{border:"",data:t.shopCategory,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"分组名称",prop:"category_name",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"排序",prop:"sort_order",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.row.sort_order,callback:function(a){t.$set(e.row,"sort_order",a)},expression:"scope.row.sort_order"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品数",prop:"is_show",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{name:"addGroup",params:{pid:e.row.id}}}},[t._v("\n\t\t\t    \t\t\t添加子栏目\n\t\t\t    \t\t")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(t){}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.deleteSite(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"ui-box clearfix"},[a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)])])])},staticRenderFns:[]};var i=a("C7Lr")(s,n,!1,function(t){a("UgJq")},null,null);e.default=i.exports}});
//# sourceMappingURL=49.e268d594773fd92bf734.js.map