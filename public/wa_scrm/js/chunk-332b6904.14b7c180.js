(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-332b6904"],{"209c":function(e,t,i){},2207:function(e,t,i){"use strict";i("209c")},e82e:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrap"},[e._m(0),t("a-form-model",e._b({ref:"ruleForm",staticClass:"form-wrap",attrs:{rules:e.rules,model:e.modalForm}},"a-form-model",e.layout,!1),[t("a-form-model-item",{attrs:{label:"Set no reply time",prop:"noReplyTime"}},[t("a-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"place input",min:0,precision:0},model:{value:e.modalForm.noReplyTime,callback:function(t){e.$set(e.modalForm,"noReplyTime",t)},expression:"modalForm.noReplyTime"}}),t("span",{staticStyle:{padding:"0 10px"}},[e._v("H")]),t("a-tooltip",{attrs:{title:"After setting, the system will send a reminder to the corresponding person if the user's message is not answered after a certain period of time"}},[t("a-icon",{attrs:{type:"question-circle"}})],1)],1),t("a-form-model-item",{attrs:{label:"Notified by",prop:"isUser"}},[t("a-checkbox-group",{attrs:{name:"radioGroup"},model:{value:e.modalForm.list,callback:function(t){e.$set(e.modalForm,"list",t)},expression:"modalForm.list"}},[t("a-checkbox",{attrs:{value:"isAdmin"}},[e._v(" Customer Service ")]),t("a-checkbox",{attrs:{value:"isUser"}},[e._v(" Customer Service Leaders ")])],1)],1),t("a-form-model-item",{attrs:{label:""}},[t("a-button",{staticClass:"save",attrs:{type:"primary",loading:e.submitLoading,disabled:e.Actions},on:{click:e.submit}},[e._v("save")])],1)],1)],1)},a=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"header"},[t("h2",[e._v("Timeout reminder settings")])])}],o=(i("caad"),i("2532"),i("d3b7"),i("9b7b")),r={name:"reminderSettings",components:{},data:function(){return{submitLoading:!1,layout:{labelCol:{span:4},wrapperCol:{span:18}},modalForm:{list:[],isUser:void 0,isAdmin:void 0,noReplyTime:void 0},rules:{noReplyTime:[{required:!0,message:"Please input Set no reply time"}]},clientData:{}}},created:function(){this.init()},computed:{Actions:function(){return!this.$route.meta.Actions}},methods:{init:function(){var e=this;Object(o["b"])().then((function(t){var i=[];t.data&&(t.data.isAdmin&&i.push("isAdmin"),t.data.isUser&&i.push("isUser"),e.modalForm={isAdmin:t.data.isAdmin,isUser:t.data.isUser,noReplyTime:t.data.hour,list:i})})).catch((function(t){e.$message.error(t)}))},submit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.submitLoading=!0;var i={hour:e.modalForm.noReplyTime,isAdmin:e.modalForm.list.includes("isAdmin")?1:0,isUser:e.modalForm.list.includes("isUser")?1:0};Object(o["d"])(i).then((function(t){e.$message.success("Set success")})).catch((function(t){e.$message.error(t)})).finally((function(){e.submitLoading=!1}))}))}}},n=r,l=(i("2207"),i("2877")),m=Object(l["a"])(n,s,a,!1,null,"4ddb292f",null);t["default"]=m.exports}}]);