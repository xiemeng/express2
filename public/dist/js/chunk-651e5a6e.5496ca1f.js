(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-651e5a6e"],{3532:function(t,e,n){"use strict";n("522a")},"522a":function(t,e,n){},"6bd9":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"use-person"},[e("ul",{staticClass:"a-line-omit",on:{click:function(e){t.visibleUsePerson=!0}}},[t._l(t.usePersionList,(function(n){return e("li",{key:n.key,staticClass:"a-line-omit"},[e("a-tooltip",{attrs:{title:n.title}},[n.icon?e("a-icon",{staticClass:"icon",attrs:{type:n.icon}}):e("a-avatar",{staticClass:"imgs",attrs:{size:23,src:n.source.thumbAvatar||t.defaultThumbAvatar}}),e("span",{staticClass:"title"},[t._v(" "+t._s(n.title)+" ")])],1)],1)})),t.usePersionList.length<1?e("p",{staticClass:"font-color-black-25"},[t._v(t._s(t.placeHolder))]):t._e()],2),t.usePersionList.length>2?e("span",{staticClass:"omit"},[t._v("等"+t._s(t.usePersionList.length)+"个账号")]):t._e(),e("a-icon",{attrs:{type:"caret-down"}})],1),e("a-modal",{attrs:{footer:null,width:"680px",centered:""},model:{value:t.visibleUsePerson,callback:function(e){t.visibleUsePerson=e},expression:"visibleUsePerson"}},[e("AddTransfer",t._b({attrs:{type:t.type,title:t.title,selectList:t.usePersionList,selectRoleIdList:t.selectRoleIdList},on:{serviceOk:t.serviceOk,cancle:function(e){t.visibleUsePerson=!1}}},"AddTransfer",t.source,!1))],1)],1)},a=[],i=(n("d81d"),n("1eb1")),o={name:"UsePerson",props:{defaultUsePerson:{type:[Array],default:function(){return[]}},placeHolder:{type:[String],default:""},type:{type:[String],default:""},title:{type:[String],default:"选择成员"},value:{type:[Array],default:function(){return[]}},needControlReturn:{type:Boolean,default:!1},source:{type:Object,default:function(){return{}}}},components:{AddTransfer:i["a"]},data:function(){return{defaultThumbAvatar:n("b5c3"),visibleUsePerson:!1,selectRoleIdList:[],usePersionList:this.value}},watch:{value:function(){this.usePersionList=this.value}},methods:{serviceOk:function(t){var e=this;t.length<1?this.usePersionList=this.defaultUsePerson:this.usePersionList=t,this.usePersionList.map((function(t){t.value=100})),this.needControlReturn||(this.visibleUsePerson=!1),this.$emit("input",this.usePersionList),this.$emit("usePersionInfo",this.usePersionList,(function(){e.visibleUsePerson=!1}))}}},s=o,c=(n("f0b2"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"de146f5e",null);e["a"]=u.exports},"90a8":function(t,e,n){"use strict";n.d(e,"q",(function(){return i})),n.d(e,"p",(function(){return o})),n.d(e,"x",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"A",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"v",(function(){return f})),n.d(e,"w",(function(){return p})),n.d(e,"z",(function(){return g})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return h})),n.d(e,"o",(function(){return v})),n.d(e,"u",(function(){return y})),n.d(e,"m",(function(){return _})),n.d(e,"f",(function(){return T})),n.d(e,"k",(function(){return C})),n.d(e,"l",(function(){return L})),n.d(e,"y",(function(){return O})),n.d(e,"g",(function(){return x})),n.d(e,"d",(function(){return P})),n.d(e,"c",(function(){return j})),n.d(e,"s",(function(){return k})),n.d(e,"r",(function(){return E})),n.d(e,"t",(function(){return S})),n.d(e,"n",(function(){return I}));var r=n("b775"),a={customerList:"/client_manager/client/getCustomerList",dictionaryByCode:"/client_manager/client/getDictionaryByCode",distinctNum:"/client_manager/client/getDistinctNum",syncCustomerData:"/client_manager/client/syncCustomerData",tagGroup:"/client_manager/CustomerTag/getTagGroup ",customerLoss:"/client_manager/customerLoss/page",batchTagging:"/client_manager/CustomerTag/batchTagging",batchTaggingFront:"/client_manager/CustomerTag/batchTaggingFront",batchDelTagFront:"/client_manager/CustomerTag/batchDelTagFront",findByCustomerGroup:"/client_manager/client/findByCustomerGroup",findByCustomerEvent:"/client_manager/client/findByCustomerEvent",findEventByCustomerWxid:"/client_manager/client/findEventByCustomerWxid",findByCustomField:"/client_manager/client/findByCustomField",exportDown:"/client_manager/customerLoss/export",getCustomerListExport:"/client_manager/client/getCustomerListExport",findByCustomFieldExport:"/client_manager/client/findByCustomFieldExport",customerScoreExport:"/client_manager/customerScore/customerScoreExport",customerScore:"/client_manager/customerScore/customerScore",updateScore:"/client_manager/customerScore/updateScore",historyList:"/client_manager/customerScore/list",getTemplateList:"/client_manager/customerEvent/getTemplateList",addTemplateEvent:"/client_manager/customerEvent/addTemplateEvent",addTemplate:"/client_manager/customerEvent/addTemplate",updateTemplate:"/client_manager/customerEvent/updateTemplate",delTemplate:"/client_manager/customerEvent/delTemplate",findByCustomIntegral:"/client_manager/customerIntegral/findByCustomIntegral",findByCustomIntegralExport:"/client_manager/customerIntegral/findByCustomIntegralExport",channelList:"/client_manager/customerIntegral/channelList",integralList:"/client_manager/customerIntegral/integralList"};function i(t){return Object(r["b"])({url:a.findByCustomIntegralExport,method:"post",data:t,responseType:"blob"})}function o(t){return Object(r["b"])({url:a.findByCustomIntegral,method:"post",data:t})}function s(t){return Object(r["b"])({url:a.integralList,method:"post",data:t})}function c(t){return Object(r["b"])({url:a.channelList,method:"get",params:t})}function u(t){return Object(r["b"])({url:a.delTemplate,method:"get",params:t})}function l(t){return Object(r["b"])({url:a.updateTemplate,method:"get",params:t})}function d(t){return Object(r["b"])({url:a.addTemplate,method:"get",params:t})}function m(t){return Object(r["b"])({url:a.addTemplateEvent,method:"get",params:t})}function f(t){return Object(r["b"])({url:a.getTemplateList,method:"get",params:t})}function p(t){return Object(r["b"])({url:a.historyList,method:"get",params:t})}function g(t){return Object(r["b"])({url:a.updateScore,method:"post",data:t})}function b(t){return Object(r["b"])({url:a.customerScore,method:"post",data:t})}function h(t){return Object(r["b"])({url:a.customerScoreExport,method:"post",data:t,responseType:"blob"})}function v(t){return Object(r["b"])({url:a.findByCustomFieldExport,method:"post",data:t,responseType:"blob"})}function y(t){return Object(r["b"])({url:a.getCustomerListExport,method:"get",params:t,responseType:"blob"})}function _(t){return Object(r["b"])({url:a.exportDown,method:"post",data:t,responseType:"blob"})}function T(t){return Object(r["b"])({url:a.customerList,method:"get",params:t})}function C(t){return Object(r["b"])({url:a.dictionaryByCode,method:"get",params:t})}function L(t){return Object(r["b"])({url:a.distinctNum,method:"get",params:t})}function O(){return Object(r["b"])({url:a.tagGroup,method:"post",data:{}})}function x(t){return Object(r["b"])({url:a.customerLoss,method:"post",data:t})}function P(t){return Object(r["b"])({url:a.batchTaggingFront,method:"post",data:t})}function j(t){return Object(r["b"])({url:a.batchDelTagFront,method:"post",data:t})}function k(t){return Object(r["b"])({url:a.findByCustomerGroup,method:"post",data:t})}function E(t){return Object(r["b"])({url:a.findByCustomerEvent,method:"post",data:t})}function S(t){return Object(r["b"])({url:a.findEventByCustomerWxid,method:"post",data:t})}function I(t){return Object(r["b"])({url:a.findByCustomField,method:"post",data:t})}},b4f0:function(t,e,n){},b5c3:function(t,e,n){t.exports=n.p+"assets/default.c42b7ede.svg"},d834:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-wrap page-box"},[e("footer",{staticClass:"background-white foot-wrap"},[e("ul",{staticClass:"flex-box form-wrap"},[e("li",[e("span",[t._v("选择类型：")]),e("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择功能类型",allowClear:""},on:{change:t.getPermissionLog},model:{value:t.featureName,callback:function(e){t.featureName=e},expression:"featureName"}},t._l(t.logType,(function(n){return e("a-select-option",{key:n.id,attrs:{value:n.extra1}},[t._v(" "+t._s(n.name)+" ")])})),1)],1),e("li",[e("span",[t._v("选择时段：")]),e("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择时段",allowClear:""},on:{change:t.changePeriodTime},model:{value:t.timeSpace,callback:function(e){t.timeSpace=e},expression:"timeSpace"}},t._l(t.periodTime,(function(n){return e("a-select-option",{key:n.id,attrs:{value:n.id}},[t._v(" "+t._s(n.text)+" ")])})),1)],1),e("li",[e("span",[t._v("自定义：")]),e("a-range-picker",{staticStyle:{width:"220px"},on:{change:t.changeDate},model:{value:t.startOrEndTime,callback:function(e){t.startOrEndTime=e},expression:"startOrEndTime"}},[e("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),e("li",[e("span",[t._v("选择员工：")]),e("UsePerson",{attrs:{type:"deptId",placeHolder:"请选择员工"},on:{usePersionInfo:t.usePersionInfo},model:{value:t.form.staffList,callback:function(e){t.$set(t.form,"staffList",e)},expression:"form.staffList"}})],1)]),e("a-button",{staticClass:"reset",on:{click:t.reset}},[t._v("重置")])],1),e("section",{staticClass:"background-white"},[e("a-table",{attrs:{columns:t.columns,"data-source":t.pageList,loading:t.loading,pagination:t.pagination},on:{change:t.changePage},scopedSlots:t._u([{key:"featureName",fn:function(n){return e("div",{},[t._v(" "+t._s(t.getName(n))+" ")])}},{key:"description",fn:function(n){return e("div",{staticClass:"description",domProps:{innerHTML:t._s(t.getDescription(n))}})}},{key:"creatorName",fn:function(n){return e("div",{},[e("a-tag",[e("a-icon",{attrs:{type:"user"}}),t._v(" "+t._s(n)+" ")],1)],1)}},{key:"operation",fn:function(n){return e("div",{},[e("a-button",{attrs:{type:"link"}},[e("router-link",{attrs:{to:{name:n.targetContent}}},[t._v("详情")])],1)],1)}}])})],1)])},a=[],i=n("5530"),o=(n("7db0"),n("d3b7"),n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("a15b"),n("6bd9")),s=n("1c9c"),c=n("90a8"),u={name:"LogOperation",components:{UsePerson:o["a"]},data:function(){return{loading:!1,pagination:{current:1,pageSize:10,total:0},logType:[],periodTime:[{text:"昨日",id:1},{text:"近三日",id:3},{text:"近一周",id:7},{text:"近一个月",id:30}],startOrEndTime:void 0,timeSpace:void 0,form:{staffList:[]},staffId:"",featureName:void 0,pageList:[],columns:[{title:"功能类型",dataIndex:"featureName",key:"featureName",scopedSlots:{customRender:"featureName"}},{title:"具体操作行为",dataIndex:"description",key:"description",scopedSlots:{customRender:"description"}},{title:"操作员工",dataIndex:"creatorName",key:"creatorName",scopedSlots:{customRender:"creatorName"}},{title:"操作时间",dataIndex:"createTime",key:"createTime"},{title:"操作",dataIndex:"operation",align:"right",key:"operation",scopedSlots:{customRender:"operation"}}]}},created:function(){this.initPage()},methods:{initPage:function(){this.getDictionaryByCode()},getName:function(t){return this.logType.find((function(e){return e.extra1===t})).name},getDescription:function(t){return t.description?'<img src="'.concat(t.createrAvatar,'" /><strong class="name">').concat(t.creatorName,"</strong> ").concat(t.description):'<img src="'.concat(t.createrAvatar,'" /><strong class="name">').concat(t.creatorName,'</strong> 修改 <img src="').concat(t.relateAvatar,'" /><strong class="name">').concat(t.relateName,"</strong>的角色权限为").concat(t.relateRoleType)},getDictionaryByCode:function(){var t=this;Object(c["k"])({code:"PERMISSION_LOG"}).then((function(e){t.logType=e.data,t.getPermissionLog()})).catch((function(e){t.$message.error(e)}))},getPermissionLog:function(){var t,e,n,r,a=this;this.loading=!0;var o={featureName:this.featureName,currentPage:this.pagination.current,pageSize:this.pagination.pageSize,staffId:this.staffId,dateFrom:null===(t=this.startOrEndTime)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.format("YYYY-MM-DD"),dateTo:null===(n=this.startOrEndTime)||void 0===n||null===(r=n[1])||void 0===r?void 0:r.format("YYYY-MM-DD")};Object(s["m"])(o).then((function(t){null!==t&&void 0!==t&&t.data&&(a.pagination.total=t.data.total,a.pageList=t.data.list.map((function(t){var e=Object(i["a"])(Object(i["a"])({},t),{},{key:t.id});return Object(i["a"])(Object(i["a"])({},e),{},{description:e,operation:e})})))})).catch((function(t){a.$message.error(t)})).finally((function(){a.loading=!1}))},reset:function(){this.clearData(),this.getPermissionLog()},clearData:function(){this.staffId="",this.featureName=void 0,this.form.staffList=[],this.startOrEndTime=void 0,this.timeSpace=void 0,this.pagination.current=1},usePersionInfo:function(t){this.staffId=null===t||void 0===t?void 0:t.map((function(t){return t.source.staffId})).join(","),this.pagination.current=1,this.getPermissionLog()},changePeriodTime:function(t){this.startOrEndTime=t?1===t?[this.$moment().subtract(t,"days"),this.$moment().subtract(t,"days")]:[this.$moment().subtract(t-1,"days"),this.$moment()]:void 0,this.pagination.current=1,this.getPermissionLog()},changeDate:function(){this.pagination.current=1,this.getPermissionLog()},changePage:function(t){var e=t.current;this.pagination.current=e,this.initPage()}}},l=u,d=(n("3532"),n("2877")),m=Object(d["a"])(l,r,a,!1,null,"3ade5ac0",null);e["default"]=m.exports},f0b2:function(t,e,n){"use strict";n("b4f0")}}]);