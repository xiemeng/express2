(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7990808"],{2733:function(t,e,i){"use strict";i("28b6")},"28b6":function(t,e,i){},"2e02":function(t,e,i){},"38b8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-box"},[e("div",{staticClass:"customer-info-setting-page"},[e("div",{staticClass:"left-content"},[e("a-spin",{attrs:{spinning:t.loading}},[e("BaseInfo",{attrs:{pageData:t.pageData},on:{refresh:t.refresh}}),e("CustomFields",{attrs:{pageData:t.pageData},on:{refresh:t.refresh}})],1)],1),t._m(0)])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-content"},[e("p",[t._v("侧边栏展示预览")]),e("div",{staticClass:"preview-box"},[e("img",{staticClass:"full-w",attrs:{src:"https://assets.weibanzhushou.com/web/we-work-webapp/customer-manage_customer-preview.d26c95605e28.jpg"}})])])}],n=(i("d3b7"),i("159b"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"baseInfo"},[e("div",{staticClass:"header"},[e("h3",[t._v("基本信息 ")]),e("span",{staticClass:"text-blue clickable",on:{click:function(e){t.visibleBox=!0}}},[e("a-icon",{staticClass:"icon",attrs:{type:"form"}}),t._v("修改")],1)]),e("p",{staticClass:"title-item"},[t._v("显示的基本信息")]),e("ul",{staticClass:"base-info-list"},t._l(t.showBase,(function(i){return e("li",{key:i.fieldId,staticClass:"no-hover base-info-item"},[e("a-icon",{staticClass:"icon",attrs:{type:"check-circle"}}),t._v(" "+t._s(i.fieldName)+" ")],1)})),0),e("p",{staticClass:"title-item"},[t._v("不显示的基本信息")]),t.noShowBase&&t.noShowBase.length>0?e("ul",{staticClass:"base-info-list"},t._l(t.noShowBase,(function(i){return e("li",{key:i.fieldId,staticClass:"no-hover base-info-item"},[t._v(" "+t._s(i.fieldName)+" ")])})),0):e("ul",{staticClass:"base-info-list"},[t._v("暂无")]),e("div",{staticClass:"line"}),e("a-modal",{staticClass:"noBottomBorder",attrs:{"confirm-loading":t.confirmLoading,centered:t.centered},on:{ok:t.handleOk,cancel:function(e){t.visibleBox=!1}},model:{value:t.visibleBox,callback:function(e){t.visibleBox=e},expression:"visibleBox"}},[e("div",{staticClass:"box"},[e("h2",{staticClass:"dialog-title"},[t._v("基本信息设置")]),e("a-row",{staticClass:"row"},[e("a-col",{staticClass:"col-l",attrs:{span:3}},[t._v("说明：")]),e("a-col",{staticClass:"col-r",attrs:{span:21}},[e("div",[e("a-checkbox",{staticClass:"sp1",attrs:{checked:""}}),t._v("为显示")],1),e("div",{staticClass:"d-v"},[e("span",{staticClass:"sp2"}),t._v("为不显示")])])],1),e("ul",{staticClass:"base-info-list"},t._l(t.pageData.fieldBaseRuleList,(function(i){return e("li",{key:i.fieldId,staticClass:"base-info-item disabled"},[e("a-checkbox",{staticClass:"sp1",attrs:{disabled:!Boolean(i.setDetailVisible)},model:{value:i.detailVisibleBoolean,callback:function(e){t.$set(i,"detailVisibleBoolean",e)},expression:"item.detailVisibleBoolean"}},[t._v(" "+t._s(i.fieldName)+" ")])],1)})),0)],1)])],1)}),o=[],l=(i("4de4"),i("d81d"),i("a9e3"),i("7485")),d={props:{pageData:{type:Object,default:function(){return{fieldBaseRuleList:[],fieldCustomRuleList:[]}}}},computed:{showBase:function(){var t;return null===(t=this.pageData.fieldBaseRuleList)||void 0===t?void 0:t.filter((function(t){return Boolean(t.detailVisible)}))},noShowBase:function(){var t;return(null===(t=this.pageData.fieldBaseRuleList)||void 0===t?void 0:t.filter((function(t){return!Boolean(t.detailVisible)})))||[]}},data:function(){return{hideInfoList:[],centered:!0,visibleBox:!1,defaultChecked:!0,confirmLoading:!1}},methods:{handleOk:function(){var t,e=this;this.confirmLoading=!0;var i=null===(t=this.pageData.fieldBaseRuleList)||void 0===t?void 0:t.filter((function(t){return Boolean(t.setDetailVisible)})).map((function(t){return{fieldId:t.fieldId,detailVisible:Number(t.detailVisibleBoolean)}}));Object(l["f"])(i).then((function(t){e.$message.success("修改成功"),e.visibleBox=!1,e.$emit("refresh")})).catch((function(t){e.$message.error(t)})).finally((function(){e.confirmLoading=!1}))}}},c=d,r=(i("2733"),i("2877")),u=Object(r["a"])(c,n,o,!1,null,"215af9fc",null),f=u.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CustomFields"},[e("h3",[t._v("自定义字段")]),e("a-button",{staticClass:"add-customize-btn",attrs:{type:"primary"},on:{click:t.addmshow}},[e("a-icon",{staticClass:"aks-border-but",attrs:{type:"plus"}}),t._v("添加")],1),t.pageData.fieldCustomRuleList&&t.pageData.fieldCustomRuleList.length>0?e("ul",{staticClass:"customize-info-list"},t._l(t.pageData.fieldCustomRuleList,(function(i,a){return e("li",{key:a,staticClass:"customize-item"},[e("div",{staticClass:"tool-item"},[e("div",{staticClass:"tu"},[e("a-icon",{staticClass:"icon",attrs:{type:"check-circle"}}),t._v(" "+t._s(i.fieldName)+" ")],1)]),e("div",{staticClass:"tool-menu"},[e("span",{staticClass:"clickable",on:{click:function(e){return t.modifyBoxshow(i,a)}}},[e("a-icon",{staticClass:"rt",attrs:{type:"edit"}}),t._v("修改 ")],1),e("span",{staticClass:"clickable",on:{click:function(e){return t.deleteBoxshow(i)}}},[e("a-icon",{staticClass:"rt",attrs:{type:"delete"}}),t._v("删除 ")],1),e("span",{class:[{disabled:0==a},"clickable"],on:{click:function(e){return t.handleClickBySortUp(i,a)}}},[e("a-icon",{attrs:{type:"arrow-up"}}),t._v("上移 ")],1),e("span",{class:[{disabled:a==t.pageData.fieldCustomRuleList.length-1},"clickable"],on:{click:function(e){return t.handleClickBySortDown(i,a)}}},[e("a-icon",{attrs:{type:"arrow-down"}}),t._v("下移 ")],1)])])})),0):e("ul",{staticClass:"customize-info-list"},[t._v("暂无")]),e("a-modal",{staticClass:"noBottomBorder",attrs:{"confirm-loading":t.confirmLoading,centered:t.centered,width:416},on:{ok:t.deleteBoxOk,cancel:t.deleteBoxCancel},model:{value:t.deleteBox,callback:function(e){t.deleteBox=e},expression:"deleteBox"}},[e("span",{staticClass:"deleteBox-title"},[t._v("提示")]),e("div",{staticClass:"deleteBox-content"},[t._v(" 确认删除【"+t._s(t.deleteItem.fieldName)+"】？ ")])]),e("AddModal",{attrs:{modifyData:t.modifyData,showother:t.addmodalshow},on:{closegoodsTip:t.changeshow}})],1)},p=[],m=(i("a434"),i("c740"),function(){var t=this,e=t._self._c;return e("div",[e("a-modal",{staticClass:"noBottomBorder",attrs:{centered:t.centered,width:474},on:{ok:t.addhandleOk,cancel:t.addhandleCancel},model:{value:t.addshow,callback:function(e){t.addshow=e},expression:"addshow"}},[e("div",{staticClass:"box"},[e("h2",{staticClass:"dialog-title"},[t._v(" "+t._s(t.modifyData.fieldName?"修改":"增加")+"字段 ")]),e("div",{staticClass:"center-center"},[e("a-row",{staticClass:"row"},[e("a-col",{staticClass:"col-l",attrs:{span:4}},[t._v("字段名称:")]),e("a-col",{staticClass:"col-r",attrs:{span:18}},[e("a-input",{attrs:{placeholder:"请输入名称，不超过5个字",maxLength:5},model:{value:t.fieldName,callback:function(e){t.fieldName=e},expression:"fieldName"}})],1)],1),e("a-row",{staticClass:"row"},[e("a-col",{staticClass:"col-l",attrs:{span:4}},[t._v("字段类型:")]),e("a-col",{staticClass:"col-r",attrs:{span:18}},[e("a-radio-group",{staticClass:"radioGroup",attrs:{name:"radioGroup"},on:{change:t.onChange},model:{value:t.fieldType,callback:function(e){t.fieldType=e},expression:"fieldType"}},[e("a-tooltip",{attrs:{title:t.modifyData.fieldName&&1!==t.fieldType?"不能修改自定义字段的类型":""}},[e("a-radio",{attrs:{value:1,disabled:t.modifyData.fieldName&&1!==t.fieldType}},[t._v("文本 ")])],1),e("a-tooltip",{attrs:{title:t.modifyData.fieldName&&3!==t.fieldType?"不能修改自定义字段的类型":""}},[e("a-radio",{attrs:{disabled:t.modifyData.fieldName&&3!==t.fieldType,value:3}},[t._v("选择")])],1),e("a-tooltip",{attrs:{title:t.modifyData.fieldName&&2!==t.fieldType?"不能修改自定义字段的类型":""}},[e("a-radio",{attrs:{disabled:t.modifyData.fieldName&&2!==t.fieldType,value:2}},[t._v("时间")])],1)],1)],1)],1),e("a-row",{directives:[{name:"show",rawName:"v-show",value:3===t.fieldType,expression:"fieldType === 3"}],staticClass:"row"},[e("a-col",{staticClass:"col-l",attrs:{span:4}}),e("a-col",{staticClass:"col-r",attrs:{span:19}},[t._l(t.inputList,(function(i,a){return e("div",{key:a,staticClass:"input-box"},[e("a-input",{attrs:{placeholder:"选项".concat(a+1),maxLength:15},model:{value:i.optionValue,callback:function(e){t.$set(i,"optionValue",e)},expression:"item.optionValue"}}),e("a-icon",{class:[t.inputList.length>1?"":"vishiddren","clickable delete"],attrs:{type:"minus-circle"},on:{click:function(e){return t.deleteInput(a)}}})],1)})),e("div",{staticClass:"add clickable",on:{click:t.addInputList}},[e("a-icon",{staticClass:"icon",attrs:{type:"plus-circle"}}),t._v("添加选项 ")],1)],2)],1)],1)])])],1)}),v=[],b=i("5530"),g=(i("99af"),{props:{showother:{type:Boolean,default:!1},modifyData:{type:Object,default:function(){return{}}}},data:function(){return{labelCol:{span:4},wrapperCol:{span:14},centered:!0,addshow:this.showother,inputList:[{index:0,optionValue:""}],fieldName:"",fieldType:1}},watch:{showother:{handler:function(t,e){this.addshow=t}},modifyData:{handler:function(){var t;this.fieldName=this.modifyData.fieldName,this.fieldType=this.modifyData.fieldType||1,this.inputList=(null===(t=this.modifyData.optionList)||void 0===t?void 0:t.map((function(t){return Object(b["a"])({},t)})))||this.inputList},deep:!0,immediate:!0}},methods:{onChange:function(t){t.target.value},addInputList:function(){var t=this.inputList.length+1,e={index:t,optionValue:""};this.inputList=this.inputList.concat(e)},deleteInput:function(t){this.inputList.splice(t,1)},addhandleCancel:function(){this.$emit("closegoodsTip",{flg:"1"})},addhandleOk:function(){var t,e=this;if(this.verify()){var i=this.getParams(),a=null!==(t=this.modifyData)&&void 0!==t&&t.fieldId?this.update:this.save;a(i).then((function(t){e.$message.success("".concat(e.modifyData.fieldName?"修改":"增加","成功")),e.$emit("closegoodsTip",{flg:"0"})})).catch((function(t){e.$message.error(t)})).finally((function(){e.loading=!1}))}},update:function(t){return Object(l["e"])(t)},save:function(t){return Object(l["d"])(t)},verify:function(){if(!this.fieldName)return this.$message.warning("请输入字段名称"),!1;if(3===this.fieldType)for(var t=0;t<this.inputList.length;t++){var e=this.inputList[t];if(!e.optionValue)return this.$message.warning("请填写选项".concat(t+1)),!1;for(var i=t+1;i<this.inputList.length;i++)if(e.optionValue===this.inputList[i].optionValue)return this.$message.warning("第".concat(t+1,"个和第").concat(i+1,"个选项重复")),!1}return!0},getParams:function(){var t;return{fieldName:this.fieldName,fieldType:this.fieldType,fieldId:this.modifyData.fieldId,optionList:3===this.fieldType?null===(t=this.inputList)||void 0===t?void 0:t.map((function(t){var e={optionValue:t.optionValue};return t.optionId&&(e.optionId=t.optionId),e})):[]}}}}),C=g,y=(i("4ca6"),Object(r["a"])(C,m,v,!1,null,"8fb54f34",null)),w=y.exports,B={props:{pageData:{type:Object,default:function(){return{fieldBaseRuleList:[],fieldCustomRuleList:[]}}}},data:function(){return{addmodalshow:!1,confirmLoading:!1,centered:!0,deleteBox:!1,modifyData:{},deleteItem:{},modifyIndex:0}},methods:{handleClickBySortUp:function(t,e){var i=this,a={fieldId:t.fieldId,exchangeFieldId:this.getBrotherFieldId("up",t.fieldId)};this.move(a).then((function(t){i.pageData.fieldCustomRuleList.splice(e-1,0,i.pageData.fieldCustomRuleList[e]),i.pageData.fieldCustomRuleList.splice(e+1,1)}))},move:function(t){var e=this;return new Promise((function(i,a){Object(l["c"])(t).then((function(t){i(t)})).catch((function(t){e.$message.error(t),a(t)}))}))},handleClickBySortDown:function(t,e){var i=this,a={fieldId:t.fieldId,exchangeFieldId:this.getBrotherFieldId("down",t.fieldId)};this.move(a).then((function(t){i.pageData.fieldCustomRuleList.splice(e+2,0,i.pageData.fieldCustomRuleList[e]),i.pageData.fieldCustomRuleList.splice(e,1)}))},getBrotherFieldId:function(t,e){var i=this.pageData.fieldCustomRuleList,a=i.findIndex((function(t){return t.fieldId===e}));return"up"===t?i[a-1].fieldId:i[a+1].fieldId},addmshow:function(){this.modifyData={},this.addmodalshow=!0},changeshow:function(t){var e=t.flg;"0"===e&&this.$emit("refresh"),this.addmodalshow=!1},modifyBoxshow:function(t,e){this.addmodalshow=!0,this.modifyIndex=e,this.modifyData=t},modifychangeshow:function(t){if(this.addmodalshow=!1,"0"==t.flg){var e=t.val;this.$set(this.pageData.fieldCustomRuleList[this.modifyIndex],"fieldName",e)}},deleteBoxshow:function(t){this.deleteItem=t,this.deleteBox=!0},deleteBoxOk:function(){var t=this;this.confirmLoading=!0;var e={fieldId:this.deleteItem.fieldId};Object(l["a"])(e).then((function(e){t.$message.success("删除成功"),t.$emit("refresh"),t.visibleBox=!1,t.deleteBox=!1})).catch((function(e){t.$message.error(e)})).finally((function(){t.confirmLoading=!1}))},deleteBoxCancel:function(){this.deleteBox=!1}},components:{AddModal:w}},_=B,x=(i("5d34"),Object(r["a"])(_,h,p,!1,null,"566ddb99",null)),k=x.exports,L={name:"Setting",components:{BaseInfo:f,CustomFields:k},data:function(){return{loading:!1,pageData:{}}},created:function(){this.getInfo()},methods:{refresh:function(){this.getInfo()},getInfo:function(){var t=this;this.loading=!0,Object(l["b"])().then((function(e){var i;null===(i=e.data)||void 0===i||i.fieldBaseRuleList.forEach((function(t){t.detailVisibleBoolean=Boolean(t.detailVisible)})),t.pageData=e.data})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1}))}}},D=L,I=(i("42b9"),Object(r["a"])(D,a,s,!1,null,"5571074f",null));e["default"]=I.exports},"42b9":function(t,e,i){"use strict";i("83e9")},"4ca6":function(t,e,i){"use strict";i("5ca9")},"5ca9":function(t,e,i){},"5d34":function(t,e,i){"use strict";i("2e02")},7485:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"f",(function(){return o})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"c",(function(){return c})),i.d(e,"e",(function(){return r}));var a=i("b775"),s={info:"/client_manager/fieldCustomRule/info",updateBase:"/client_manager/fieldCustomRule/updateBase",save:"/client_manager/fieldCustomRule/save",update:"/client_manager/fieldCustomRule/update",deleteRule:"/client_manager/fieldCustomRule/delete",move:"/client_manager/fieldCustomRule/move"};function n(t){return Object(a["b"])({url:s.info,method:"get",get:t})}function o(t){return Object(a["b"])({url:s.updateBase,method:"post",data:t})}function l(t){return Object(a["b"])({url:s.save,method:"post",data:t})}function d(t){return Object(a["b"])({url:s.deleteRule,method:"post",params:t})}function c(t){return Object(a["b"])({url:s.move,method:"post",params:t})}function r(t){return Object(a["b"])({url:s.update,method:"post",data:t})}},"83e9":function(t,e,i){}}]);