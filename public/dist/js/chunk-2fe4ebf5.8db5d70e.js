(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe4ebf5"],{1302:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-box"},[e("header",{staticClass:"header"},[e("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.$router.push({name:"GroupSopRule",query:{state:"add"}})}}},[t._v(" 创建规则 ")]),e("a-input-search",{staticClass:"search-name",attrs:{allowClear:"",placeholder:"请输入要搜索的规则名称"},on:{search:t.onSearchName},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),e("a-table",{staticClass:"background-white",attrs:{columns:t.columns,"data-source":t.fSend,pagination:t.pagination,loading:t.loading},on:{change:t.changePage},scopedSlots:t._u([{key:"creatorName",fn:function(n){return e("div",{},[e("a-tag",[e("a-icon",{staticClass:"primaryColor",attrs:{type:"user"}}),t._v(" "+t._s(n)+" ")],1)],1)}},{key:"isActiveObj",fn:function(n){var r=n.isActiveBoolean,o=n.sopId;return e("div",{},[e("a-switch",{attrs:{defaultChecked:r},on:{change:function(e){return t.changeActive(o,e)}}})],1)}},{key:"operation",fn:function(n){return e("div",{},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.addService(n)}}},[t._v("添加群聊")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$router.push({name:"GroupDetail",query:{state:"look",sopId:n}})}}},[t._v(" 详情 ")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$router.push({name:"GroupSopRule",query:{state:"edit",sopId:n}})}}},[t._v(" 修改 ")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.deleteRule(n)}}},[t._v("删除")])],1)}}])}),e("a-modal",{attrs:{footer:null,centered:"",width:"600px",destroyOnClose:""},model:{value:t.visibleTree,callback:function(e){t.visibleTree=e},expression:"visibleTree"}},[e("SelectGroupChat",{on:{serviceOk:t.serviceOk,cancle:function(e){t.visibleTree=!1}}})],1)],1)},o=[],i=n("5530"),a=(n("d3b7"),n("d81d"),n("b918")),u=n("4f1a"),s={name:"PersonSOP",components:{SelectGroupChat:u["a"]},data:function(){return{fSend:[],visibleTree:!1,loading:!1,sopId:"",keywords:"",pagination:{current:1,pageSize:10,total:0},columns:[{title:"规则名称",key:"name",dataIndex:"name"},{title:"创建人",key:"creatorName",dataIndex:"creatorName",scopedSlots:{customRender:"creatorName"}},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"开关",key:"isActiveObj",dataIndex:"isActiveObj",scopedSlots:{customRender:"isActiveObj"}},{title:"操作",key:"sopId",align:"right",dataIndex:"sopId",scopedSlots:{customRender:"operation"}}]}},activated:function(){this.getPagePersonSop()},methods:{serviceOk:function(t){var e=this,n=Object(i["a"])({sopId:this.sopId},t);Object(a["a"])(n).then((function(t){e.visibleTree=!1,e.$message.success("添加群聊成功")})).catch((function(t){e.$message.error(t)}))},addService:function(t){this.sopId=t,this.visibleTree=!0},onSearchName:function(){this.getPagePersonSop()},changeActive:function(t,e){var n=this,r=e?"开启":"关闭",o={sopId:t,isActive:e?1:0};Object(a["h"])(o).then((function(){n.$message.success("开关已".concat(r))})).catch((function(t){n.$message.error(t)}))},changePage:function(t){var e=t.current;this.pagination.current=e,this.getPagePersonSop()},deleteRule:function(t){var e=this;this.$confirm({title:"提示",icon:"",okText:"删除",content:"确定要删除此群SOP吗？",onOk:function(){e.delGroupSop(t)}})},delGroupSop:function(t){var e=this;this.loading=!0,Object(a["d"])({sopId:t}).then((function(t){var n;1===(null===(n=e.fSend)||void 0===n?void 0:n.length)&&(e.pagination.current=e.pagination.current-1||1),e.getPagePersonSop(),e.$message.success("删除成功")})).catch((function(t){e.$message.error(t)})).finally((function(){return e.loading=!1}))},getPagePersonSop:function(){var t=this,e={currentPage:this.pagination.current,pageSize:this.pagination.pageSize,keywords:this.keywords};this.loading=!0,Object(a["f"])(e).then((function(e){null!==e&&void 0!==e&&e.data&&(t.pagination.total=e.data.total,t.fSend=e.data.list.map((function(t){return t.key=t.sopId,t.isActiveObj={isActiveBoolean:1===t.isActive,sopId:t.sopId,isActive:t.isActive},t})))})).catch((function(e){t.$message.error(e)})).finally((function(){return t.loading=!1}))}}},c=s,l=(n("9178"),n("2877")),p=Object(l["a"])(c,r,o,!1,null,"229569ae",null);e["default"]=p.exports},"1f3e":function(t,e,n){"use strict";n("49c9")},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("6b75");function o(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=n("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||i(t)||Object(a["a"])(t)||u()}},3426:function(t,e,n){},"487a":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var n,r,o,i,a,u=function(){t.apply(i,a),r=n};return function(){if(i=this,a=arguments,n=Date.now(),o&&(clearTimeout(o),o=null),r){var t=e-(n-r);t<0?u():o=setTimeout((function(){u()}),t)}else u()}},n=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},r=document.defaultView.getComputedStyle,o=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var n=r(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},i=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},a=function(t){return t===window?n(window):t.getBoundingClientRect().top+n(window)},u=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},s=function(){if(!this.binded){this.binded=!0;var t=this,n=t.el,r=n.getAttribute("infinite-scroll-throttle-delay"),i=200;r&&(i=Number(t.vm[r]||r),(isNaN(i)||i<0)&&(i=200)),t.throttleDelay=i,t.scrollEventTarget=o(n),t.scrollListener=e(c.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var a=n.getAttribute("infinite-scroll-disabled"),u=!1;a&&(this.vm.$watch(a,(function(e){t.disabled=e,!e&&t.immediateCheck&&c.call(t)})),u=Boolean(t.vm[a])),t.disabled=u;var s=n.getAttribute("infinite-scroll-distance"),l=0;s&&(l=Number(t.vm[s]||s),isNaN(l)&&(l=0)),t.distance=l;var p=n.getAttribute("infinite-scroll-immediate-check"),d=!0;p&&(d=Boolean(t.vm[p])),t.immediateCheck=d,d&&c.call(t);var f=n.getAttribute("infinite-scroll-listen-for-event");f&&t.vm.$on(f,(function(){c.call(t)}))}},c=function(t){var e=this.scrollEventTarget,r=this.el,o=this.distance;if(!0===t||!this.disabled){var u=n(e),s=u+i(e),c=!1;if(e===r)c=e.scrollHeight-s<=o;else{var l=a(r)-a(e)+r.offsetHeight+u;c=s+o>=l}c&&this.expression&&this.expression()}},l={bind:function(e,n,r){e[t]={el:e,vm:r.context,expression:n.value};var o=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){u(e)&&s.call(e[t],o),e[t].bindTryCount=0;var n=function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,u(e)?s.call(e[t],o):setTimeout(n,50))};n()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},p=function(t){t.directive("InfiniteScroll",l)};return window.Vue&&(window.infiniteScroll=l,Vue.use(p)),l.install=p,l}))},"49c9":function(t,e,n){},"4f1a":function(t,e,n){"use strict";n("d3b7"),n("ddb0"),n("caad"),n("2532");var r=function(){var t=this,e=t._self._c;return e("div",[e("h6",{staticClass:"dialog-title"},[t._v("选择群聊")]),e("section",[e("a-input-search",{attrs:{allowClear:"",placeholder:"请输入群名称"},on:{search:t.onSearchName},model:{value:t.searchNmae,callback:function(e){t.searchNmae=e},expression:"searchNmae"}}),e("div",{staticClass:"tree"},[e("p",{staticClass:"tree-head"},[t._v(" 全部群聊("+t._s(t.pagination.total)+") "),e("a-checkbox",{on:{change:t.changeAllCheckbox},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}},[t._v(" 全选 ")])],1),e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.handleInfiniteOnLoad,expression:"handleInfiniteOnLoad"}],staticClass:"scroll-list",attrs:{"infinite-scroll-disabled":t.busy,"infinite-scroll-distance":10}},[t._l(t.groupList,(function(n,r){return e("li",{key:n.groupId,staticClass:"title-wrap"},[e("div",{staticClass:"title-chilred"},[e("a-avatar",{attrs:{size:40,src:"/icons/groupChat.svg",shape:"square"}}),e("div",{staticClass:"info-wrap"},[e("p",[t._v(t._s(n.chatName)+" "),e("a-tag",{attrs:{color:"blue"}},[t._v("外部")])],1),t.isShowNumber?e("p",{staticClass:"aks-tips"},[t._v(t._s(n.count)+"/200")]):e("p",{staticClass:"aks-tips"},[t._v(" 群主："+t._s(n.chatOwnerName))])])],1),e("div",[0!==n[t.keys]&&t.isSetRule?e("p",{staticClass:"aks-tips"},[t._v(t._s(t.tipText))]):e("a-checkbox",{attrs:{disabled:t.selectGroupIdIdList.includes(n.groupId)},on:{change:function(e){return t.changeChilren(r,e)}},model:{value:n.isSelect,callback:function(e){t.$set(n,"isSelect",e)},expression:"item.isSelect"}})],1)])})),t.loading?e("div",{staticClass:"loading-container"},[e("a-spin",{attrs:{tip:"正在加载中..."}})],1):t._e()],2)])],1),e("div",{staticClass:"foot-button"},[e("a-space",{attrs:{size:12}},[e("a-button",{on:{click:function(e){return t.$emit("cancle")}}},[t._v("取消")]),e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$emit("serviceOk",t.addGruoupChat)}}},[t._v("确定")])],1)],1)])},o=[],i=n("2909"),a=(n("d81d"),n("4de4"),n("159b"),n("ccdf")),u=n("487a"),s=n.n(u),c={name:"SelectGroupChat",directives:{infiniteScroll:s.a},props:{selectGroupList:{type:[Array],default:function(){return[]}},selectedList:{type:[Array],default:function(){return[]}},isSetRule:{type:Boolean,default:function(){return!0}},isShowNumber:{type:Boolean,default:function(){return!1}},notifyType:{type:String,default:function(){return"groupSop"}}},data:function(){return{searchNmae:"",busy:!1,loading:!1,groupList:[],isSelectAll:!1,pagination:{current:1,pageSize:10,total:0},tipText:"",keys:"",isEnter:!1,isOtherAll:!1}},computed:{selectGroupIdIdList:function(){return this.selectedList.map((function(t){return t.groupId}))},addGruoupChat:function(){var t={};return this.isOtherAll?t.excludeIdList=this.groupList.filter((function(t){return!t.isSelect})).map((function(t){return t.groupId})):t.groupChatIdList=this.groupList.filter((function(t){return t.isSelect})).map((function(t){return t.groupId})),t.groupList=this.groupList.filter((function(t){return t.isSelect})),t}},created:function(){this.getInfo()},methods:{getInfo:function(){switch(this.notifyType){case"groupSop":this.tipText="该群聊已设置规则",this.keys="sopStatus";break;case"groupCalendar":this.tipText="该群聊已设置日历",this.keys="calendarStatus";break;default:break}},changeChilren:function(t,e){if(this.groupList[t].isSelect=e.target.checked,e.target.checked){var n=this.groupList.filter((function(t){return!t.isSelect}));n.length<1&&(this.isSelectAll=!0)}else this.isSelectAll=!1},changeAllCheckbox:function(t){this.isOtherAll=t.target.checked,t.target.checked?this.groupList.forEach((function(t){t.isSelect=!0})):this.groupList.forEach((function(t){t.isSelect=!1}))},onSearchName:function(){this.pagination.current=1,this.groupList=[],this.busy=!1,this.isEnter=!0,this.queryGroupPageByGroupSop()},queryGroupPageByGroupSop:function(){var t=this,e={currentPage:this.pagination.current,pageSize:this.pagination.pageSize,keywords:this.searchNmae,notifyType:this.notifyType};this.loading=!0,Object(a["k"])(e).then((function(e){if(null!==e&&void 0!==e&&e.data){var n,r,o=t.selectGroupList.map((function(t){return t.groupId}));if(null===(n=e.data.list)||void 0===n||n.forEach((function(t){o.includes(t.groupId)?t.isSelect=!0:t.isSelect=!1})),(r=t.groupList).push.apply(r,Object(i["a"])(e.data.list)),t.pagination.current++,t.pagination.total=e.data.total,e.data.list.length<t.pagination.pageSize)return t.busy=!0,void(t.loading=!1);t.$nextTick((function(){t.isEnter=!1}))}})).catch((function(e){t.$message.error(e),t.loading=!1}))},handleInfiniteOnLoad:function(){!this.busy&&!this.isEnter&&this.queryGroupPageByGroupSop()}}},l=c,p=(n("1f3e"),n("2877")),d=Object(p["a"])(l,r,o,!1,null,"94e9cec6",null);e["a"]=d.exports},9178:function(t,e,n){"use strict";n("3426")},b918:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return d}));var r=n("b775"),o={addSersonSop:"/client_group/groupSop/add",delGroupSop:"/client_group/groupSop/delGroupSop",detailPersonSop:"/client_group/groupSop/detail",pagePersonSop:"/client_group/groupSop/page",addGroupChat:"/client_group/groupSop/addGroupChat",delGroupChat:"/client_group/groupSop/delGroupChat",updatePersonSop:"/client_group/groupSop/update",updateStatus:"/client_group/groupSop/updateStatus"};function i(t){return Object(r["b"])({url:o.addSersonSop,method:"post",data:t})}function a(t){return Object(r["b"])({url:o.delGroupSop,method:"post",params:t})}function u(t){return Object(r["b"])({url:o.detailPersonSop,method:"get",params:t})}function s(t){return Object(r["b"])({url:o.pagePersonSop,method:"get",params:t})}function c(t){return Object(r["b"])({url:o.addGroupChat,method:"post",data:t})}function l(t){return Object(r["b"])({url:o.delGroupChat,method:"post",data:t})}function p(t){return Object(r["b"])({url:o.updatePersonSop,method:"post",data:t})}function d(t){return Object(r["b"])({url:o.updateStatus,method:"post",params:t})}},ccdf:function(t,e,n){"use strict";n.d(e,"g",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"k",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"l",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"m",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"n",(function(){return g})),n.d(e,"o",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return v})),n.d(e,"e",(function(){return y}));var r=n("b775"),o={queryGroupPageByGroupSop:"/client_group/customerGroup/queryGroupPageByGroupSop",getCustGrpOwner:"/client_group/customerGroup/getCustGrpOwner",queryGroupTag:"/client_group/groupTagController/queryGroupTag",getCustGrpList:"/client_group/customerGroup/getCustGrpList",syncCustomerGroup:"/client_group/customerGroup/syncCustomerGroup",batchGroupTagging:"/client_group/customerGroup/batchGroupTagging",getCustGrpListExport:"/client_group/customerGroup/getCustGrpListExport",customerGroupDetail:"/client_group/customerGroup/detail",syncCustomerGroupByChatId:"/client_group/customerGroup/syncCustomerGroupByChatId",updateNotice:"/client_group/customerGroup/updateNotice",dailyStatistics:"/client_group/customerGroup/dailyStatistics",dailyStatisticsExport:"/client_group/customerGroup/dailyStatisticsExport",memberList:"/client_group/customerGroup/memberList",memberListExport:"/client_group/customerGroup/memberListExport",batchCustomerTagging:"/client_group/customerGroup/batchCustomerTagging"};function i(t){return Object(r["b"])({url:o.getCustGrpListExport,method:"post",data:t,responseType:"blob"})}function a(t){return Object(r["b"])({url:o.batchCustomerTagging,method:"post",data:t})}function u(t){return Object(r["b"])({url:o.queryGroupPageByGroupSop,method:"get",params:t})}function s(t){return Object(r["b"])({url:o.getCustGrpOwner,method:"post",data:t})}function c(t){return Object(r["b"])({url:o.queryGroupTag,method:"post",data:t})}function l(t){return Object(r["b"])({url:o.getCustGrpList,method:"post",data:t})}function p(t){return Object(r["b"])({url:o.syncCustomerGroup,method:"post",data:t})}function d(t){return Object(r["b"])({url:o.batchGroupTagging,method:"post",data:t})}function f(t){return Object(r["b"])({url:o.customerGroupDetail,method:"get",params:t})}function g(t){return Object(r["b"])({url:o.syncCustomerGroupByChatId,method:"post",data:t})}function h(t){return Object(r["b"])({url:o.updateNotice,method:"post",data:t})}function m(t){return Object(r["b"])({url:o.dailyStatistics,method:"post",data:t})}function b(t){return Object(r["b"])({url:o.memberList,method:"get",params:t})}function v(t){return Object(r["b"])({url:o.memberListExport,method:"get",params:t,responseType:"blob"})}function y(t){return Object(r["b"])({url:o.dailyStatisticsExport,method:"post",data:t,responseType:"blob"})}}}]);