(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c4adfd8"],{"1d2f":function(e,t,a){},"78ac":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"team-wrap"},[t("header",{staticClass:"header"},[t("div",{staticClass:"header-but"},[t("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:e.form},on:{submit:e.handleSearch}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{span:7}},[t("a-form-item",{attrs:{label:"name"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!1,message:"Input something!"}]}],expression:"[\n                    `name`,\n                    {\n                      rules: [\n                        {\n                          required: false,\n                          message: 'Input something!',\n                        },\n                      ],\n                    },\n                  ]"}],attrs:{placeholder:"Place Input name"}})],1)],1),t("a-col",{attrs:{span:6}},[t("a-form-item",{attrs:{label:"status"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["isDefault",{rules:[{required:!1,message:"Input something!"}]}],expression:"[\n                    `isDefault`,\n                    {\n                      rules: [\n                        {\n                          required: false,\n                          message: 'Input something!',\n                        },\n                      ],\n                    },\n                  ]"}],staticStyle:{width:"200px"},attrs:{placeholder:"place select"}},e._l(e.statusList,(function(a){return t("a-select-option",{key:a.value,attrs:{value:a.value}},[e._v(" "+e._s(a.text)+" ")])})),1)],1)],1),t("a-col",{style:{textAlign:"right"},attrs:{span:8}},[t("a-form-item",[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" Search ")]),t("a-button",{style:{marginLeft:"8px"},on:{click:e.handleReset}},[e._v(" Clear ")])],1)],1)],1)],1),t("a-button",{attrs:{type:"primary",size:"large",disabled:e.Actions},on:{click:e.addAgent}},[e._v("Add WhatsApp")])],1)]),t("section",{staticClass:"section"},[t("a-table",{staticClass:"table",attrs:{columns:e.columns,rowKey:"id",loading:e.loading,dataSource:e.userList,pagination:e.pagination},on:{change:e.changeTab},scopedSlots:e._u([{key:"name",fn:function(a,n){return t("div",{},[t("a-button",{attrs:{type:"link"},on:{click:function(t){return e.lookDetail(n)}}},[e._v(e._s(a))])],1)}},{key:"sendStatus",fn:function(a){return t("div",{},[e._v(" "+e._s(e.getRoleText(a))+" ")])}},{key:"Edit",fn:function(a,n){return t("div",{},[t("a-button",{attrs:{type:"link",disabled:e.Actions},on:{click:function(t){return e.editPage(n)}}},[e._v("Edit")]),e._v("  "),t("a-button",{attrs:{type:"link",disabled:e.Actions},on:{click:function(t){return e.deletePage(n)}}},[e._v("Delete")]),e._v("  ")],1)}}])})],1),t("a-modal",{staticClass:"model-wrap",attrs:{width:"600px",title:e.title,confirmLoading:e.confirmLoading,centered:"",destroyOnClose:""},on:{cancel:function(t){e.visibleSearch=!1},ok:e.submitKeyword},model:{value:e.visibleSearch,callback:function(t){e.visibleSearch=t},expression:"visibleSearch"}},[t("a-form-model",e._b({ref:"ruleForm",attrs:{rules:e.rules,model:e.modalForm}},"a-form-model",e.layout,!1),[t("a-form-model-item",{attrs:{label:"Name",prop:"name"}},[t("a-input",{attrs:{placeholder:"place input",maxLength:20},model:{value:e.modalForm.name,callback:function(t){e.$set(e.modalForm,"name",t)},expression:"modalForm.name"}})],1),t("a-form-model-item",{attrs:{label:"phone",prop:"fromPhoneNumber"}},[t("a-input",{attrs:{placeholder:"place input",maxLength:20},model:{value:e.modalForm.fromPhoneNumber,callback:function(t){e.$set(e.modalForm,"fromPhoneNumber",t)},expression:"modalForm.fromPhoneNumber"}})],1),t("a-form-model-item",{attrs:{label:"accessKey",prop:"accessKey"}},[t("a-input",{attrs:{placeholder:"place input",maxLength:600},model:{value:e.modalForm.accessKey,callback:function(t){e.$set(e.modalForm,"accessKey",t)},expression:"modalForm.accessKey"}})],1),t("a-form-model-item",{attrs:{label:"wabaId",prop:"wabaId"}},[t("a-input",{attrs:{placeholder:"place input",maxLength:20},model:{value:e.modalForm.wabaId,callback:function(t){e.$set(e.modalForm,"wabaId",t)},expression:"modalForm.wabaId"}})],1),t("a-form-model-item",{attrs:{label:"is use",prop:"isDefault"}},[t("a-radio-group",{attrs:{options:e.plainOptions,"default-value":0},model:{value:e.modalForm.isDefault,callback:function(t){e.$set(e.modalForm,"isDefault",t)},expression:"modalForm.isDefault"}})],1)],1)],1)],1)},i=[],s=a("5530"),r=(a("7db0"),a("d3b7"),a("4de4"),a("caad"),a("2532"),a("d81d"),a("a15b"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("b775")),o={pageList:"/whatsapp/page",pageCreate:"/whatsapp/add",pageDetele:"/whatsapp/removes",pageUpdate:"/whatsapp/edit",listContactsByLabelAndArea:"/messageGroup/listContactsByLabelAndArea",messageDetail:"/messageGroup/details",pageSendContacts:"/messageGroup/pageSendContacts",retry:"/messageGroup/retry",pause:"/messageGroup/pause"};function c(e){return Object(r["b"])({url:o.pageList,method:"post",data:e})}function l(e){return Object(r["b"])({url:o.pageCreate,method:"post",data:e})}function u(e){return Object(r["b"])({url:o.pageDetele,method:"post",data:e})}function d(e){return Object(r["b"])({url:o.pageUpdate,method:"post",data:e})}function m(e){return Object(r["b"])({url:o.messageDetail,method:"post",data:e})}function h(e){return Object(r["b"])({url:o.pageSendContacts,method:"post",data:e})}function p(e){return Object(r["b"])({url:o.retry,method:"post",data:e})}function f(e){return Object(r["b"])({url:o.pause,method:"post",data:e})}var g={name:"SetWhatsApp",components:{},data:function(){return{pageSizeOptions:["40","60","80","100","200"],userLoading:!1,visibleUser:!1,plainOptions:[{label:"nonuse",value:0},{label:"use",value:1}],form:this.$form.createForm(this,{name:"advanced_search"}),userList:[],detailList:[],visibleSearch:!1,editData:{},statusList:[{text:"nonuse",value:0},{text:"use",value:1}],columns:[{title:"name",dataIndex:"name"},{title:"accessKey",width:"300px",dataIndex:"accessKey"},{title:"wabaId",dataIndex:"wabaId"},{title:"phone",dataIndex:"fromPhoneNumber"},{title:"status",dataIndex:"isDefault",scopedSlots:{customRender:"sendStatus"}},{title:"Actions",dataIndex:"Edit",scopedSlots:{customRender:"Edit"}}],layout:{labelCol:{span:6},wrapperCol:{span:18}},loading:!1,pagination:{current:1,pageSize:10,total:0},detailPagination:{current:1,pageSize:10,total:0,showTotal:function(e){return"Total ".concat(e," items")}},title:"Group messaging",modalForm:{name:void 0,isDefault:1,fromPhoneNumber:void 0,wabaId:void 0,accessKey:void 0},id:"",confirmLoading:!1,rules:{name:[{required:!0,message:"Please input Message Name"}],templateName:[{required:!0,message:"Please select Template Name"}],areaList:[{required:!0,message:"Please select country"}],labelList:[{required:!0,message:"Please select tag"}]},pageTree:[],searchData:{keyword:void 0,hitTotal:void 0},countryList:[],dataDetail:{},visibleNew:!1,personList:[],visibleModel:!1,clientData:[],getInputList:[],detailLoading:!1,userPagination:{current:1,pageSize:60,total:0}}},created:function(){this.getList()},computed:{Actions:function(){return!this.$route.meta.Actions},componentObj:function(){var e=this,t=this.clientData.find((function(t){return t.name===e.modalForm.templateName}));return(null===t||void 0===t?void 0:t.componentObj)||{}},personCount:function(){if(this.personList.length>0){var e=this.personList.filter((function(e){return e.check}));return e.length}return 0},countryName:function(){var e,t=this;if(null!==(e=this.dataDetail)&&void 0!==e&&e.areaList){var a,n=this.countryList.filter((function(e){var a,n;return null===(a=t.dataDetail)||void 0===a||null===(n=a.areaList)||void 0===n?void 0:n.includes(e.id)}));return null===n||void 0===n||null===(a=n.map((function(e){return e.areaName})))||void 0===a?void 0:a.join("、")}return""},tagInfo:function(){var e,t=this;if(null!==(e=this.dataDetail)&&void 0!==e&&e.labelList){var a=this.dataDetail.labelList.map((function(e){return t.getTagData(t.pageTree,e)}));return null===a||void 0===a?void 0:a.join(";")}return""}},watch:{componentObj:function(){var e;if(null!==(e=this.componentObj)&&void 0!==e&&e.text){var t=0,a=new RegExp("}}","g"),n=this.componentObj.text.match(a);t=n?n.length:0;for(var i=[],s=0;s<t;s++)i.push({text:"Custom field{{"+(s+1)+"}}",value:""});this.getInputList=i}}},methods:{getPageList:function(){for(var e=(this.userPagination.current-1)*this.userPagination.pageSize,t=this.userPagination.current*this.userPagination.pageSize,a=[],n=e;n<t;n++){var i=this.personList[n];i&&a.push(i)}return a||[]},onShowSizeChange:function(e,t){this.userPagination.pageSize=t},getTagData:function(e,t){for(var a="",n=0;n<e.length;n++){var i=e[n];if(i.key==t)return a=i.title,a;if(i.children&&(a=this.getTagData(i.children,t),a))return i.title+">"+a}return null},filterOption:function(e,t){return t.data.props.title.indexOf(e)>-1},filterPeople:function(e,t){return t.key.indexOf(e)>-1},handleSearch:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){t.searchData=a,t.searchList()}))},handleReset:function(){this.form.resetFields(),this.searchData={},this.searchList()},changePerson:function(){this.personList=[]},submitKeyword:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var a=Object(s["a"])({},e.modalForm);e.confirmLoading=!0,e.editData.id?e.editKeywordFn(a):e.addKeywordFn(a)}))},addKeywordFn:function(e){var t=this;l(e).then((function(e){t.visibleSearch=!1,t.$message.success("success"),t.searchList()})).catch((function(e){t.$message.error(e)})).finally((function(){t.confirmLoading=!1}))},editKeywordFn:function(e){var t=this;e.id=this.editData.id,d(e).then((function(e){t.visibleSearch=!1,t.$message.success("success"),t.searchList()})).catch((function(e){t.$message.error(e)})).finally((function(){t.confirmLoading=!1}))},getRoleText:function(e){var t=this.statusList.find((function(t){return t.value==e}));return t.text},editPage:function(e){this.title="Edit WhatsApp",this.visibleSearch=!0,this.editData=e,this.modalForm={name:e.name,isDefault:e.isDefault,fromPhoneNumber:e.fromPhoneNumber,wabaId:e.wabaId,accessKey:e.accessKey}},addAgent:function(){this.title="Add WhatsApp",this.visibleSearch=!0,this.editData={},this.modalForm={name:void 0,isDefault:1,fromPhoneNumber:void 0,wabaId:void 0,accessKey:void 0}},serviceOk:function(){this.pagination.current=1,this.visibleSearch=!1,this.$message.success("success"),this.$emit("editSuccess")},deletePage:function(e){var t=this;this.$confirm({title:"tip",icon:"",cancelText:"cancel",okText:"delete",content:"Please check if you want to delete the tags, all the tags that have been tagged will be deleted after deletion。",onOk:function(){t.contactsDeleteFun(e.id)}})},contactsDeleteFun:function(e){var t=this,a=[{id:e}];u(a).then((function(e){t.$message.success("delete success"),t.getList()})).catch((function(e){t.$message.error(e)}))},changeTab:function(e){var t=e.current;this.pagination.current=t,this.getList()},searchList:function(){this.pagination.current=1,this.getList()},getList:function(){var e=this,t=Object(s["a"])({currentPage:this.pagination.current,pageSize:this.pagination.pageSize},this.searchData);this.loading=!0,c(t).then((function(t){e.userList=t.data.records,e.pagination.total=t.data.total})).catch((function(t){e.$message.error(t)})).finally((function(){e.loading=!1}))},lookDetail:function(e){var t=this;this.visibleNew=!0,this.id=e.id,m({id:e.id}).then((function(e){e.data&&(t.dataDetail=e.data)})).catch((function(e){t.$message.error(e)})),this.pageSendContactsFn()},range:function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a},disabledDate:function(e){return e<this.$moment().startOf("day")},disabledRangeTime:function(e){var t=this,a=this.$moment(e).format("HH-mm-ss"),n=parseInt(this.$moment(e).format("YYYY-MM-DD").split("-")[2]),i=parseInt(a.split("-")[0]),s=parseInt(a.split("-")[1]),r=this.$moment().format("HH-mm-ss"),o=parseInt(this.$moment().format("YYYY-MM-DD").split("-")[2]),c=parseInt(r.split("-")[0]),l=parseInt(r.split("-")[1]),u=parseInt(r.split("-")[2]);return{disabledHours:function(){return t.rangeHours(0,24,c,n,o)},disabledMinutes:function(){return t.rangeMinutes(0,60,l,n,o,i,c)},disabledSeconds:function(){return t.rangeSeconds(0,60,u,n,o,i,c,s,l)}}},rangeHours:function(e,t,a,n,i){var s=[];if(n===i)for(var r=e;r<t;r++)r<a&&s.push(r);return s},rangeMinutes:function(e,t,a,n,i,s,r){var o=[];if(n===i&&s===r)for(var c=e;c<t;c++)c<a&&o.push(c);return o},rangeSeconds:function(e,t,a,n,i,s,r,o,c){var l=[];if(n===i&&s===r&&o===c)for(var u=e;u<t;u++)u<a&&l.push(u);return l},changeDetailTab:function(e){var t=e.current;this.detailPagination.current=t,this.pageSendContactsFn()},pageSendContactsFn:function(){var e=this;this.detailLoading=!0;var t={id:this.id,currentPage:this.detailPagination.current,pageSize:this.detailPagination.pageSize};h(t).then((function(t){t.data&&(e.detailList=t.data.records,e.detailPagination.total=t.data.total)})).catch((function(t){e.$message.error(t)})).finally((function(){e.detailLoading=!1}))},retryFn:function(e){var t=this;p({id:e.id}).then((function(e){t.$message.success("success"),t.getList()})).catch((function(e){t.$message.error(e)}))},suspendedFn:function(e){var t=this;f({id:e.id}).then((function(e){t.$message.success("success"),t.getList()})).catch((function(e){t.$message.error(e)}))}}},v=g,b=(a("7990"),a("2877")),y=Object(b["a"])(v,n,i,!1,null,"5680e96a",null);t["default"]=y.exports},7990:function(e,t,a){"use strict";a("1d2f")}}]);