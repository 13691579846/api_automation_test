webpackJsonp([17],{DWEf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),s=r.n(a),o=r("woOf"),i=r.n(o),n=r("P9l9"),l={data:function(){return{filters:{name:""},project:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,options:[{label:"Web",value:"Web"},{label:"App",value:"App"}],editFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},editForm:{name:"",version:"",type:"",description:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入版本号",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},addForm:{name:"",version:"",type:"",description:""}}},methods:{getProjectList:function(){this.listLoading=!0;var e=this,t={page:e.page,name:e.filters.name},r={Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(n.q)(r,t).then(function(t){e.listLoading=!1;var r=t.msg,a=t.code,s=t.data;"999999"===a?(e.total=s.total,e.project=s.data):e.$message.error({message:r,center:!0})})},handleDel:function(e,t){var r=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){r.listLoading=!0;var e=r,a={ids:[t.id]},s={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(n.i)(s,a).then(function(t){var r=t.msg,a=t.code;t.data;"999999"===a?e.$message({message:"删除成功",center:!0,type:"success"}):e.$message.error({message:r,center:!0}),e.getProjectList()})})},handleChangeStatus:function(e,t){var r=this;this.listLoading=!0;var a={project_id:t.id},s={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};t.status?Object(n.k)(s,a).then(function(e){var a=e.msg,s=e.code;e.data;r.listLoading=!1,"999999"===s?(r.$message({message:"禁用成功",center:!0,type:"success"}),t.status=!t.status):r.$message.error({message:a,center:!0})}):Object(n.m)(s,a).then(function(e){var a=e.msg,s=e.code;e.data;r.listLoading=!1,"999999"===s?(r.$message({message:"启用成功",center:!0,type:"success"}),t.status=!t.status):r.$message.error({message:a,center:!0})})},handleCurrentChange:function(e){this.page=e,this.getProjectList()},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=i()({},t)},handleAdd:function(){this.addFormVisible=!0},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate(function(r){r&&e.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var e={project_id:t.editForm.id,name:t.editForm.name,type:t.editForm.type,version:t.editForm.version,description:t.editForm.description},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(n.C)(r,e).then(function(e){var r=e.msg,a=e.code;e.data;t.editLoading=!1,"999999"===a?(t.$message({message:"修改成功",center:!0,type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.getProjectList()):t.$message.error({message:r,center:!0})})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){if(t){var r=e;e.$confirm("确认提交吗？","提示",{}).then(function(){r.addLoading=!0;var e=s()({name:r.addForm.name,type:r.addForm.type,version:r.addForm.version,description:r.addForm.description}),t={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(n.e)(t,e).then(function(e){var t=e.msg,a=e.code;e.data;r.addLoading=!1,"999999"===a?(r.$message({message:"添加成功",center:!0,type:"success"}),r.$refs.addForm.resetFields(),r.addFormVisible=!1,r.getProjectList()):"999997"===a?r.$message.error({message:t,center:!0}):(r.$message.error({message:t,center:!0}),r.$refs.addForm.resetFields(),r.addFormVisible=!1,r.getProjectList())})})}})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id});this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var r=e,a={ids:t},s={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(n.i)(s,a).then(function(e){var t=e.msg,a=e.code;e.data;"999999"===a?r.$message({message:"删除成功",center:!0,type:"success"}):r.$message.error({message:t,center:!0}),r.getProjectList()})})}},mounted:function(){this.getProjectList()}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getProjectList(t)}},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getProjectList}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.project,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"30%",sortable:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-icon",{attrs:{name:"name"}}),e._v(" "),t.row.status?a("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:"项目概况",params:{project_id:t.row.id}}}},[e._v("\n                    "+e._s(t.row.name)+"\n                ")]):e._e(),e._v("\n                "+e._s(t.row.status?"":t.row.name)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"项目版本","min-width":"12%",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"9%",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"LastUpdateTime",label:"最后修改时间","min-width":"16%",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"9%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{directives:[{name:"show",rawName:"v-show",value:t.row.status,expression:"scope.row.status"}],attrs:{src:r("LbCb")}}),e._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.row.status,expression:"!scope.row.status"}],attrs:{src:r("3mUg")}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"19%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(r){return e.handleChangeStatus(t.$index,t.row)}}},[e._v(e._s(!1===t.row.status?"启用":"禁用"))])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.type,callback:function(t){e.$set(e.editForm,"type",t)},expression:"editForm.type"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"版本号",prop:"version"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.version,callback:function(t){e.$set(e.editForm,"version",t)},expression:"editForm.version"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name","string"==typeof t?t.trim():t)},expression:"addForm.name"}})],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"版本号",prop:"version"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.version,callback:function(t){e.$set(e.addForm,"version","string"==typeof t?t.trim():t)},expression:"addForm.version"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(l,d,!1,function(e){r("aVan")},null,null);t.default=m.exports},aVan:function(e,t){}});
//# sourceMappingURL=17.8f6ac86a3b0ad6b584e4.js.map