(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012ed0e6"],{"1f6c":function(t,e,n){"use strict";n("ffa9")},"5ec4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"component-wrap"},[e("div",{staticClass:"contacts-wrap"},[e("header",{staticClass:"header"},[e("h2",[t._v("All Quick Reply")]),e("div",[e("a-button",{attrs:{type:"primary",disabled:t.Actions},on:{click:t.addNewContact}},[t._v("Add Quick Reply")])],1)]),e("section",{staticClass:"section"},[e("h3",{staticClass:"total"},[t._v(t._s(t.pagination.total)+" Quick Reply")]),e("a-table",{staticClass:"table",attrs:{columns:t.columns,"data-source":t.clientData,loading:t.loading,scroll:{y:500},pagination:t.pagination},on:{change:t.changeTab},scopedSlots:t._u([{key:"displayName",fn:function(n,i){return e("div",{},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.openDetail(i)}}},[t._v(t._s(n))])],1)}},{key:"extraInfoVoList",fn:function(n){return n?e("div",{},[e("a-tooltip",[e("ul",{attrs:{slot:"title"},slot:"title"},t._l(n,(function(n,i){return e("li",{key:i},[e("Span",[t._v(t._s(n.category)+" "+t._s(n.topic))])],1)})),0),e("a-button",{attrs:{type:"link"}},[t._v(t._s(n.length)+"+topics")])],1)],1):t._e()}},{key:"Actions",fn:function(n,i){return e("div",{},[e("a-button",{attrs:{type:"link",disabled:t.Actions},on:{click:function(e){return t.editPage(i)}}},[t._v("Edit")]),t._v("   "),e("a-button",{attrs:{type:"link",disabled:t.Actions},on:{click:function(e){return t.deletePage(i)}}},[t._v("Delete")])],1)}}],null,!0)},[e("div",{attrs:{slot:"Channels"},slot:"Channels"},[e("div",{staticClass:"message"},[e("a-icon",{attrs:{type:"message"}})],1)])])],1),e("a-modal",{attrs:{width:"600px",footer:null,title:t.title,destroyOnClose:"",centered:""},on:{cancel:function(e){t.visibleSearch=!1}},model:{value:t.visibleSearch,callback:function(e){t.visibleSearch=e},expression:"visibleSearch"}},[e("AddFast",{attrs:{editData:t.editData},on:{cancel:function(e){t.visibleSearch=!1},serviceOk:t.serviceOk}})],1)],1)])},a=[],c=n("5530"),o=(n("d3b7"),n("d81d"),function(){var t=this,e=t._self._c;return e("CommonModal",t._b({attrs:{loading:t.loading},on:{cancle:function(e){return t.$emit("cancel")},serviceOk:t.serviceOk}},"CommonModal",t.source,!1),[e("a-form-model",{ref:"ruleForm",staticClass:"form-model",attrs:{model:t.form,rules:t.rules}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{span:24}},[e("a-form-model-item",{attrs:{label:"Title",prop:"title"}},[e("a-input",{attrs:{placeholder:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-model-item",{attrs:{label:"Content",prop:"content"}},[e("a-textarea",{attrs:{placeholder:"Content",autoSize:{minRows:5,maxRows:5}},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)],1)],1)],1)}),s=[],r=(n("a434"),n("2a86")),l=n("64af"),u={name:"FastReply",components:{CommonModal:r["a"]},props:{editData:{type:Object,default:function(){return{}}}},data:function(){return{source:{title:""},loading:!1,noDelete:!0,countryList:[],form:{content:"",title:""},extraInfoVo:function(){return{category:"",topic:""}},rules:{content:[{required:!0,message:"Please input content",whitespace:!0}],title:[{required:!0,message:"Please input title",whitespace:!0}]}}},created:function(){this.init()},methods:{init:function(){this.editData.id&&(this.form={content:this.editData.content,title:this.editData.title})},contactsCreateFun:function(){var t=this;this.loading=!0;var e=this.getParams();Object(l["a"])(e).then((function(n){t.$message.success("success"),t.$emit("serviceOk",e)})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1}))},contactsUpdateFun:function(){var t=this;this.loading=!0;var e=this.getParams();e.id=this.editData.id,Object(l["b"])(e).then((function(n){t.$message.success("success"),t.$emit("serviceOk",e)})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1}))},getParams:function(){var t={content:this.form.content,title:this.form.title};return t},serviceOk:function(){var t=this;this.$refs.ruleForm.validate((function(e){if(!e)return!1;t.editData.id?t.contactsUpdateFun():t.contactsCreateFun()}))},addAttribute:function(){this.form.extraInfoVoList.push(this.extraInfoVo())},deleteExtra:function(t){this.form.extraInfoVoList.splice(t,1)}}},d=u,f=(n("f1fa"),n("2877")),p=Object(f["a"])(d,o,s,!1,null,"e3c44a10",null),m=p.exports,h={name:"FastReply",components:{AddFast:m},data:function(){return{visibleImportContact:!1,title:"Create Quick Reply",visibleSearch:!1,loading:!1,columns:[{title:"title",dataIndex:"title",key:"title",scopedSlots:{customRender:"title"}},{title:"content",dataIndex:"content",key:"content",scopedSlots:{customRender:"content"}},{title:"createTime",dataIndex:"createTime",key:"createTime",scopedSlots:{customRender:"createTime"}},{title:"Actions",dataIndex:"address",key:"address 4",ellipsis:!0,scopedSlots:{customRender:"Actions"}}],clientData:[],pagination:{current:1,pageSize:10,total:0},editData:{}}},created:function(){this.contactsPageFun()},computed:{Actions:function(){return!this.$route.meta.Actions}},methods:{openDetail:function(t){var e=t.phone||t.email,n=t;this.$emit("getChatDetail",e,n)},editPage:function(t){this.visibleSearch=!0,this.title="Edit Quick Reply",this.editData=t},addNewContact:function(){this.visibleSearch=!0,this.editData={}},changeTab:function(t){var e=t.current;this.pagination.current=e,this.contactsPageFun()},serviceOk:function(){this.visibleSearch=!1,this.contactsPageFun()},contactsPageFun:function(){var t=this;this.loading=!0;var e={currentPage:this.pagination.current,pageSize:this.pagination.pageSize};Object(l["c"])(e).then((function(e){var n;t.clientData=null===(n=e.data.records)||void 0===n?void 0:n.map((function(t){return Object(c["a"])(Object(c["a"])({},t),{},{key:t.id})})),t.pagination.total=e.data.total})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1}))},deletePage:function(t){var e=this;this.$confirm({title:"tip",icon:"",cancelText:"cancel",okText:"delete",content:"After confirming the deletion, the message will be deleted",onOk:function(){e.contactsDeleteFun(t.id)}})},contactsDeleteFun:function(t){var e=this,n={id:t};Object(l["d"])([n]).then((function(t){e.$message.success("success"),e.contactsPageFun()})).catch((function(t){e.$message.error(t)}))}}},g=h,v=(n("1f6c"),Object(f["a"])(g,i,a,!1,null,"19ee1ed3",null));e["default"]=v.exports},"64af":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return r}));var i=n("b775"),a={getQuickReplyPage:"/quickReply/getQuickReplyPage",addQuickReply:"/quickReply/addQuickReply",editQuickReply:"/quickReply/editQuickReply",removeQuickReplyById:"/quickReply/removeQuickReplyById"};function c(t){return Object(i["b"])({url:a.getQuickReplyPage,method:"post",data:t})}function o(t){return Object(i["b"])({url:a.addQuickReply,method:"post",data:t})}function s(t){return Object(i["b"])({url:a.editQuickReply,method:"post",data:t})}function r(t){return Object(i["b"])({url:a.removeQuickReplyById,method:"post",data:t})}},e7ff:function(t,e,n){},f1fa:function(t,e,n){"use strict";n("e7ff")},ffa9:function(t,e,n){}}]);