(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50923e06"],{"02ed":function(t,e,n){"use strict";
/*!
 * Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
 * @since 2018-11-02 19:47:25
 */
var a;function i(){return void 0===a&&(a=document.queryCommandSupported("copy")?"copy":!!document.queryCommandSupported("cut")&&"cut"),a}function r(t){var e=document.createElement("input");return e.style.cssText="position: absolute; top: -9999px; left: -9999px;",document.body.appendChild(e),e.value=t,e.readOnly=!0,e.select(),e.setSelectionRange(0,t.length),e}function o(t){var e=i();if(!e)return!1;var n=r(t);try{return document.execCommand(e)}catch(a){return!1}finally{document.body.removeChild(n)}}n.d(e,"a",(function(){return o})),o.isSupported=i},"03e3":function(t,e,n){t.exports=n.p+"img/luckyBg.85b96a56.jpg"},"0ad5":function(t,e,n){"use strict";n("db9e")},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function a(t,e,n,a,i,r,o){try{var c=t[r](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(a,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function c(t){a(o,i,r,c,s,"next",t)}function s(t){a(o,i,r,c,s,"throw",t)}c(void 0)}))}}},2329:function(t,e,n){"use strict";n("88d4")},"5eae":function(t,e,n){"use strict";n("e1b3")},"7ac6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("a-tabs",{model:{value:t.defaultVal,callback:function(e){t.defaultVal=e},expression:"defaultVal"}},[e("a-tab-pane",{key:"1",attrs:{tab:"任务列表"}},[e("ChannelList")],1),e("a-tab-pane",{key:"2",attrs:{tab:"数据分析"}},[e("dataAnalysis")],1)],1)],1)},i=[],r=(n("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"lucyDraw"},[e("div",{staticClass:"algin-betten"},[e("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.$router.push({name:"createLuckyDraw",query:{state:"add"}})}}},[t._v("创建抽奖活动")]),e("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"搜索活动名称"},on:{search:t.onSearch},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),e("div",{staticClass:"channelList"},[e("div",{staticClass:"header"},[e("span",[t._v("筛选：")]),e("a-radio-group",{on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e("a-radio",{attrs:{value:3}},[t._v("全部")]),e("a-radio",{attrs:{value:1}},[t._v("进行中")]),e("a-radio",{attrs:{value:0}},[t._v("未开始")]),e("a-radio",{attrs:{value:2}},[t._v("已结束")])],1)],1),e("a-table",{attrs:{columns:t.columns,"data-source":t.clientList,pagination:t.pagination,loading:t.tableLoading},on:{change:t.change},scopedSlots:t._u([{key:"creator",fn:function(n){return n?e("a-tag",{},[e("a-icon",{staticClass:"primaryColor",attrs:{type:"user"}}),t._v(" "+t._s(n)+" ")],1):t._e()}},{key:"tagNameList",fn:function(n){return e("div",{staticClass:"tag-name-list"},[n.length>0&&Array.isArray(n)?e("div",{class:[{mheight:n.length>=4}]},t._l(n,(function(n,a){return e("a-tag",{key:a,staticStyle:{"margin-bottom":"5px"}},[t._v(" "+t._s(n)+" ")])})),1):e("div",[t._v("-")]),n.length>=4&&Array.isArray(n)?e("div",{staticClass:"clickable",on:{click:function(e){return t.openMore(e)}}},[e("span",[t._v("展开")])]):t._e()])}},{key:"activityTime",fn:function(n){return e("div",{},["1"==n.permanentValidity?e("div",[t._v("永久有效")]):e("div",[t._v(t._s(n.startTime)+"-"+t._s(n.endTime))])])}},{key:"operation",fn:function(n){return e("div",{staticClass:"flexEnd"},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$router.push({name:"luckDrawDetail",query:{id:n.id}})}}},[t._v("详情")]),e("div",{staticClass:"a-vertical"}),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.shareBtn(n)}}},[t._v("分享")]),e("div",{staticClass:"a-vertical"}),e("a-dropdown",[e("a-button",{attrs:{type:"link"}},[t._v("编辑"),e("a-icon",{attrs:{type:"down"}})],1),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{on:{click:function(e){return t.$router.push({name:"createLuckyDraw",query:{state:"edit",id:n.id}})}}},[t._v("修改")]),e("a-menu-item",{on:{click:function(e){return t.detelbtn(n)}}},[t._v("删除")])],1)],1)],1)}}],null,!0)})],1),e("a-modal",{attrs:{footer:null,width:"700px",centered:""},model:{value:t.shareBOx,callback:function(e){t.shareBOx=e},expression:"shareBOx"}},[e("div",{staticClass:"shareBOx"},[e("h2",{staticClass:"dialog-title"},[t._v("分享")]),e("div",{staticClass:"way"},[e("div",{staticClass:"item"},[e("div",{staticClass:"flex"},[e("span",{staticClass:"title bold"},[t._v("方式一：")]),e("div",{staticClass:"cont"},[e("div",{staticClass:"dv bold"},[t._v("通过「客户群发」、「客户群群发」、「欢迎语」、「渠道欢迎语」，选择发送抽奖活动链接发送至客户")]),e("div",{staticClass:"info"},[e("div",{staticClass:"txt"},[t._v(t._s(t.shareObj.activityName))]),e("div",{staticClass:"msg"},[t._v(t._s(t.shareObj.activityExplain))]),e("img",{attrs:{src:n("03e3"),alt:""}})])])])]),e("div",{staticClass:"item"},[e("div",{staticClass:"flex"},[e("span",{staticClass:"title bold"},[t._v("方式二：")]),e("div",{staticClass:"cont"},[e("div",{staticClass:"dv bold"},[t._v("下载抽奖活动二维码或复制链接")]),e("p",[t._v("可以将二维码或链接放置再海报、宣传单、朋友圈、线下等方式发送给客户")]),e("div",{staticClass:"flex-btm"},[e("div",{staticClass:"f-l"},[e("img",{staticClass:"img",attrs:{src:t.shareObj.activityQrCode,alt:""}}),e("span",{on:{click:function(e){return t.download(t.shareObj.activityQrCode)}}},[t._v("下载二维码")])]),e("div",{staticClass:"f-r"},[e("div",{staticClass:"line",attrs:{id:"copy-tip"}},[t._v(t._s(t.shareObj.activityLink))]),e("span",{on:{click:t.copyTip}},[t._v("复制链接")])])])])])])])])])],1)}),o=[],c=(n("d3b7"),n("d81d"),n("99af"),n("ca00")),s=n("02ed"),u=n("8bac"),l={data:function(){return{shareBOx:!1,shareObj:{},value:3,status:"",name:"",tableLoading:!1,pagination:{current:1,pageSize:10,total:0},clientList:[],columns:[{title:"抽奖活动名称",dataIndex:"activityName",key:"activityName"},{title:"客户标签",dataIndex:"tagNameList",scopedSlots:{customRender:"tagNameList"},width:"230px",key:"tagNameList"},{title:"创建人",dataIndex:"creator",key:"creator",scopedSlots:{customRender:"creator"}},{title:"总参与人数",dataIndex:"partInPeopleCount",key:"partInPeopleCount"},{title:"创建时间",dataIndex:"createTime",key:"createTime",customRender:function(t,e,n){return t||"-"}},{title:"活动时间",dataIndex:"activityTime",key:"activityTime",scopedSlots:{customRender:"activityTime"}},{title:"状态",dataIndex:"statusName",key:"statusName"},{title:"操作",align:"right",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"}}]}},created:function(){this.getList()},methods:{detelbtn:function(t){var e=this;this.$confirm({title:"提示",icon:"",okText:"删除",content:"抽奖活动删除后不可恢复，确定删除吗？",onOk:function(){e.delGroupAutoPull(t.id)}})},delGroupAutoPull:function(t){var e=this;Object(u["d"])([t]).then((function(){var t;e.$message.success("删除成功"),1===(null===(t=e.clientList)||void 0===t?void 0:t.length)&&(e.pagination.current=e.pagination.current-1||1),e.getList()})).catch((function(t){e.$message.error(t)}))},copyTip:function(){var t=document.getElementById("copy-tip").innerText;Object(s["a"])(t),this.$message.success("复制成功")},download:function(t){var e=this;Object(c["d"])(t).catch((function(t){e.$message.error(t)}))},shareBtn:function(t){this.shareObj={activityName:t.activityName,activityExplain:t.activityExplain,activityQrCode:t.activityQrCode,activityLink:t.activityLink},this.shareBOx=!0},getList:function(){var t=this;this.tableLoading=!0;var e={name:this.name,status:this.status,customerSource:this.customerSource,currentPage:this.pagination.current,pageSize:this.pagination.pageSize};"1"==this.pagination.current&&(this.clientList=[]),Object(u["f"])(e).then((function(e){var n;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.list&&(t.pagination.total=e.data.total,t.disposeClientList(e.data.list))})).finally((function(){t.tableLoading=!1}))},disposeClientList:function(t){this.clientList=t.map((function(t){var e=[];return(null===t||void 0===t?void 0:t.customerTagRuleList.length)>0&&(null===t||void 0===t||t.customerTagRuleList.map((function(t){var n=t.tagNameList.split(",");e=e.concat(n)}))),t.tagNameList=e,t.activityTime={permanentValidity:t.permanentValidity,startTime:t.startTime,endTime:t.endTime},"0"==t.status?t.statusName="未开始":"1"==t.status?t.statusName="进行中":"2"==t.status&&(t.statusName="已结束"),t.key=t.id,Object.assign({operation:t},t)}))},change:function(t){var e=t.current;this.pagination.current=e,this.getList()},onChange:function(t){var e=t.target.value;this.status="3"==e?"":e,this.pagination.current=1,this.getList()},onSearch:function(){this.pagination.current=1,this.getList()},openMore:function(t){var e=t.currentTarget.previousElementSibling;e.className.indexOf("mheight")>-1?(t.currentTarget.firstElementChild.innerText="收起",e.classList.remove("mheight")):(t.currentTarget.firstElementChild.innerText="展开",e.classList.add("mheight"))}}},d=l,f=(n("2329"),n("2877")),h=Object(f["a"])(d,r,o,!1,null,"0a137ac1",null),v=h.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dataAnalysis"},[e("div",{staticClass:"flex selctBox"},[e("span",[t._v("抽奖活动列表：")]),e("a-select",{staticStyle:{width:"150px"},on:{change:t.changeActive},model:{value:t.luckId,callback:function(e){t.luckId=e},expression:"luckId"}},t._l(t.LuckyDrawlist,(function(n,a){return e("a-select-option",{key:a,attrs:{value:n.id}},[t._v(t._s(n.activityName))])})),1)],1),e("customerDetails",{attrs:{source:t.type,activityId:t.luckId,prizeInfoList:t.prizeInfoList,numberObj:t.numberObj}})],1)},y=[],m=n("c7eb"),g=n("1da1"),b=(n("a9e3"),n("25cb")),L={data:function(){return{type:"analysis",LuckyDrawlist:[],luckId:null,prizeInfoList:[],numberObj:{}}},created:function(){var t=this;return Object(g["a"])(Object(m["a"])().mark((function e(){return Object(m["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getList();case 2:return e.next=4,t.getPrizeInfo();case 4:return e.next=6,t.getNumberOfPeopleInfo();case 6:case"end":return e.stop()}}),e)})))()},methods:{changeActive:function(t){this.luckId=Number(t),this.getPrizeInfo(),this.getNumberOfPeopleInfo()},getNumberOfPeopleInfo:function(){var t=this,e=this.luckId;return Object(u["g"])({activityId:e}).then((function(e){null!==e&&void 0!==e&&e.data&&(t.numberObj=e.data||{})})).finally((function(){t.tableLoading=!1}))},getPrizeInfo:function(){var t=this,e=this.luckId;return this.prizeInfoList=[],Object(u["h"])({activityId:e}).then((function(e){null!==e&&void 0!==e&&e.data&&(t.prizeInfoList=e.data||[])})).finally((function(){t.tableLoading=!1}))},getList:function(){var t=this;this.tableLoading=!0;var e={currentPage:1,pageSize:99};return Object(u["f"])(e).then((function(e){var n;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.list&&(t.LuckyDrawlist=e.data.list,t.luckId=t.LuckyDrawlist[0].id)})).finally((function(){t.tableLoading=!1}))}},components:{customerDetails:b["a"]}},x=L,w=(n("5eae"),Object(f["a"])(x,p,y,!1,null,"72bf8362",null)),k=w.exports,_={name:"LuckyDraw",components:{ChannelList:v,dataAnalysis:k},data:function(){return{defaultVal:"1"}}},C=_,O=(n("0ad5"),Object(f["a"])(C,a,i,!1,null,"0343ae32",null));e["default"]=O.exports},"88d4":function(t,e,n){},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var a=n("53ca");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function d(t,e,n,a){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),c=new j(a||[]);return r(o,"_invoke",{value:k(t,n,c)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=d;var h={};function v(){}function p(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(I([])));b&&b!==e&&n.call(b,c)&&(m=b);var L=y.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function i(r,o,c,s){var u=f(t[r],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==Object(a["a"])(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,s)}))}s(u.arg)}var o;r(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){i(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function k(t,e,n){var a="suspendedStart";return function(i,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===i)throw r;return E()}for(n.method=i,n.arg=r;;){var o=n.delegate;if(o){var c=_(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=f(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(a,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=y,r(L,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,a,i,r){void 0===r&&(r=Promise);var o=new w(d(e,n,a,i),r);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(L),l(L,u,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=I,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var i=a.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}},db9e:function(t,e,n){},e1b3:function(t,e,n){}}]);