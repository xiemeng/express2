(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5045d1e9"],{"0395":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aks-person",on:{click:function(e){return t.$emit("open")}}},[e("ul",{staticClass:"a-line-omit"},[t._l(t.usePersionList,(function(n){return e("li",{key:n.key,staticClass:"a-line-omit"},[e("a-tag",[t._v(t._s(n.tagName))])],1)})),t.usePersionList.length<1?e("p",{staticClass:"font-color-black-25"},[t._v(t._s(t.placeHolder))]):t._e()],2),t.usePersionList.length>2?e("span",{staticClass:"omit"},[t._v("等"+t._s(t.usePersionList.length)+"个账号")]):t._e(),e("a-icon",{attrs:{type:"caret-down"}})],1)},i=[],a={name:"SelectInput",props:{usePersionList:{type:[Array],default:function(){return[]}},placeHolder:{type:[String],default:""}}},o=a,s=(n("af8f"),n("2877")),u=Object(s["a"])(o,r,i,!1,null,"7ad15fc6",null);e["a"]=u.exports},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,u,"next",t)}function u(t){r(o,i,a,s,u,"throw",t)}s(void 0)}))}}},"2d24":function(t,e,n){},"329a":function(t,e,n){"use strict";n("fb6a");var r=function(){var t=this,e=t._self._c;return e("div",[e("a-button",{staticClass:"add-tag-button",attrs:{disabled:!t.examine},on:{click:t.showInput}},[e("a-icon",{attrs:{type:"plus"}}),t._v(t._s(t.title))],1),t.inputVisible?e("a-input",{ref:"input",style:{width:"120px"},attrs:{type:"text",inputVisible:"false",value:t.inputValue},on:{change:t.handleInputChange,blur:t.cancle,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}}}):t._e(),t.examine?[t._l(t.tagslist,(function(n,r){return[n.tagName.length>20?e("a-tooltip",{key:r},[e("a-tag",{key:n.tagName,attrs:{closable:""},on:{close:function(e){return t.close(r)}}},[t._v(" "+t._s("".concat(n.tagName.slice(0,20),"..."))+" ")])],1):e("a-tag",{key:r,attrs:{closable:""},on:{close:function(e){return t.close(r)}}},[t._v(" "+t._s(n.tagName)+" ")])]}))]:[t._l(t.tagslist,(function(n,r){return[n.tagName.length>20?e("a-tooltip",{key:r},[e("a-tag",{key:n.tagName},[t._v(" "+t._s("".concat(n.tagName.slice(0,20),"..."))+" ")])],1):e("a-tag",{key:r},[t._v(" "+t._s(n.tagName)+" ")])]}))]],2)},i=[],a=(n("a434"),{name:"addTag",data:function(){return{inputVisible:!1,inputValue:"",index:""}},props:{title:{type:[String],default:"添加"},tagslist:{type:[Array],default:function(){return[]}},examine:{type:[Boolean],default:!0}},methods:{showInput:function(){this.inputVisible=!0,this.$nextTick((function(){this.$refs.input.focus()}))},handleInputChange:function(t){this.inputValue=t.target.value},cancle:function(){this.inputValue="",this.inputVisible=!1},close:function(t){this.tagslist.splice(t,1)},handleInputConfirm:function(){if(""!=this.inputValue){var t=this.inputValue;this.tagslist.push({tagName:t}),this.cancle()}else this.cancle()}}}),o=a,s=(n("e476"),n("2877")),u=Object(s["a"])(o,r,i,!1,null,"2e16dd79",null);e["a"]=u.exports},"7af2":function(t,e,n){},"7ba4":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"h",(function(){return h}));var r=n("b775"),i={autoTaggingQueryList:"/client_transformation/autoTagging/autoTaggingQueryList",openRule:"/client_transformation/autoTagging/openRule",delRule:"/client_transformation/autoTagging/delRule",createAutoTaggingKeyWord:"/client_transformation/autoTagging/createAutoTaggingKeyWord",createAutoTaggingGrp:"/client_transformation/autoTagging/createAutoTaggingGrp",createAutoTaggingTime:"/client_transformation/autoTagging/createAutoTaggingTime",ruleDetail:"/client_transformation/autoTagging/ruleDetail",statistics:"/client_transformation/autoTaggingStatistics/statistics",customerList:"/client_transformation/autoTaggingStatistics/customerList",remindList:"/client_manager/customerdelremind/remindList"};function a(t){return Object(r["b"])({url:i.autoTaggingQueryList,method:"post",data:t})}function o(t){return Object(r["b"])({url:i.openRule,method:"post",data:t})}function s(t){return Object(r["b"])({url:i.delRule,method:"post",data:t})}function u(t){return Object(r["b"])({url:i.createAutoTaggingKeyWord,method:"post",data:t})}function c(t){return Object(r["b"])({url:i.createAutoTaggingGrp,method:"post",data:t})}function l(t){return Object(r["b"])({url:i.createAutoTaggingTime,method:"post",data:t})}function f(t){return Object(r["b"])({url:i.ruleDetail,method:"post",data:t})}function d(t){return Object(r["b"])({url:i.statistics,method:"post",data:t})}function p(t){return Object(r["b"])({url:i.customerList,method:"post",data:t})}function h(t){return Object(r["b"])({url:i.remindList,method:"post",data:t})}},"841f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("a-page-header",{staticClass:"page-header background-white",attrs:{title:"创建规则"},on:{back:function(e){return t.$router.go(-1)}}}),e("a-spin",{attrs:{spinning:t.spinning}},[e("section",{staticClass:"section background-white"},[e("a-form-model",{ref:"ruleForm",attrs:{"label-col":{span:2},"wrapper-col":{span:12},rules:t.rules,model:t.form}},[e("p",{staticClass:"base-info"},[t._v("创建自动打标签规则")]),e("a-form-model-item",{attrs:{label:"打标签方式"}},[e("p",{staticClass:"title"},[t._v("关键词打标签")]),e("span",[t._v("根据客户聊天行为，设定客户在聊天过程中提到的关键词，自动将提到关键词的客户打标签")])]),e("a-form-model-item",{attrs:{label:"规则名称",prop:"ruleName"}},[e("a-input",{attrs:{placeholder:"请填写规则名称，仅内部可用",maxLength:15},model:{value:t.form.ruleName,callback:function(e){t.$set(t.form,"ruleName",e)},expression:"form.ruleName"}})],1),e("a-form-model-item",{attrs:{label:"生效员工",required:""}},[e("div",{staticClass:"use-person"},[e("ul",{staticClass:"a-line-omit",on:{click:function(e){t.visibleUsePerson=!0}}},t._l(t.usePersionList,(function(n){return e("li",{key:n.key,staticClass:"a-line-omit"},[n.icon?e("a-icon",{staticClass:"icon",attrs:{type:n.icon}}):e("a-avatar",{attrs:{size:23,src:n.source.thumbAvatar}}),e("span",[t._v(" "+t._s(n.title)+" ")])],1)})),0),t.usePersionList.length>3?e("span",{staticClass:"omit"},[t._v("等"+t._s(t.usePersionList.length)+"个账号")]):t._e(),e("a-icon",{attrs:{type:"caret-down"}})],1),t._v(" 仅针对开通了消息存档的员工生效 ")]),e("p",{staticClass:"base-info"},[t._v("设置关键词")]),e("a-form-model-item",{attrs:{label:"模糊匹配"}},[e("addTag",{attrs:{title:"添加关键词",tagslist:t.form.obscureKws}})],1),e("a-form-model-item",{attrs:{label:"精确匹配"}},[e("addTag",{attrs:{title:"添加关键词",tagslist:t.form.preciseKws}})],1),e("p",{staticClass:"base-info"},[t._v("自动打标签")]),e("a-form-model-item",{attrs:{label:"选择标签",prop:"selectTagList"}},[e("SelectInput",{attrs:{placeHolder:"请选择标签",usePersionList:t.form.selectTagList},on:{open:function(e){t.visibleTag=!0}}}),e("p",[t._v("满足以上条件的客户将会被打上标签，保存规则后，客户未来只要满足了条件就会被自动打上标签")])],1),e("a-form-model-item",{attrs:{"wrapper-col":{span:12,offset:2}}},[e("a-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v(" 创建规则 ")])],1)],1)],1)]),e("a-modal",{attrs:{footer:null,width:"680px",centered:""},model:{value:t.visibleUsePerson,callback:function(e){t.visibleUsePerson=e},expression:"visibleUsePerson"}},[e("AddTransfer",{attrs:{type:"deptId",selectList:t.selectList,selectRoleIdList:t.selectRoleIdList},on:{serviceOk:t.serviceOk,cancle:function(e){t.visibleUsePerson=!1}}})],1),e("a-modal",{attrs:{footer:null,width:"600px",centered:""},model:{value:t.visibleTag,callback:function(e){t.visibleTag=e},expression:"visibleTag"}},[e("SelectTags",{attrs:{selectTagList:t.form.selectTagList},on:{cancle:function(e){t.visibleTag=!1},serviceOk:t.serviceTagOk}})],1)],1)},i=[],a=n("c7eb"),o=n("1da1"),s=(n("a15b"),n("d81d"),n("d3b7"),n("0481"),n("4069"),n("4de4"),n("1eb1")),u=n("329a"),c=n("0395"),l=n("c844"),f=n("7ba4"),d={name:"AddKeywordRules",components:{AddTransfer:s["a"],addTag:u["a"],SelectInput:c["a"],SelectTags:l["a"]},data:function(){return{selectList:[],tagList:[],spinning:!1,selectRoleIdList:[],visibleUsePerson:!1,visibleTag:!1,usePersionList:[{title:"全部账号",icon:"user",default:!0}],defaultUsePerson:function(){return{title:"全部账号",icon:"user",default:!0}},form:{ruleName:"",staffIds:"",obscureKws:[],preciseKws:[],bitMaps:"",selectTagList:[]},rules:{ruleName:[{required:!0,message:"请填写规则名称"}],selectTagList:[{required:!0,message:"请选择标签"}]}}},computed:{staffIds:function(){var t="";return 1===this.usePersionList.length&&this.usePersionList[0].default||(t=this.usePersionList.map((function(t){return t.source.userid})).join(",")),t}},activated:function(){this.selectList=[],this.tagList=[],this.spinning=!1,this.selectRoleIdList=[],this.visibleUsePerson=!1,this.visibleTag=!1,this.form={ruleName:"",staffIds:"",obscureKws:[],preciseKws:[],bitMaps:"",selectTagList:[]}},methods:{submitForm:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(o["a"])(Object(a["a"])().mark((function e(n){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,t.validSubmit();case 3:t.createAutoTaggingKeyWord(),e.next=7;break;case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},validSubmit:function(){var t=this;return new Promise((function(e,n){t.form.obscureKws.length<1&&t.form.preciseKws.length<1&&(t.$message.warning("最少设置一个关键词"),n()),e()}))},createAutoTaggingKeyWord:function(){var t=this,e={ruleName:this.form.ruleName,staffIds:this.staffIds,obscureKws:this.form.obscureKws.map((function(t){return t.tagName})).join(","),preciseKws:this.form.preciseKws.map((function(t){return t.tagName})).join(","),bitMaps:this.form.selectTagList.map((function(t){return t.bitmap})).join(",")};this.spinning=!0,Object(f["c"])(e).then((function(){t.$message.success("创建规则成功"),t.$router.go(-1)})).catch((function(e){t.$message.error(e)})).finally((function(){t.spinning=!1}))},serviceTagOk:function(t){this.form.selectTagList=t.filter((function(t){return t.selectTagList.length>0})).map((function(t){return t.selectTagList})).flat(),this.visibleTag=!1},serviceOk:function(t){t.length<1?this.usePersionList=this.defaultUsePerson:this.usePersionList=t,this.visibleUsePerson=!1}}},p=d,h=(n("c4dd"),n("2877")),g=Object(h["a"])(p,r,i,!1,null,"0c071a69",null);e["default"]=g.exports},a01b:function(t,e,n){},af8f:function(t,e,n){"use strict";n("7af2")},c4dd:function(t,e,n){"use strict";n("a01b")},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("53ca");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(E){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),s=new j(r||[]);return a(o,"_invoke",{value:T(t,n,s)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=f;var p={};function h(){}function g(){}function m(){}var v={};l(v,s,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(P([])));y&&y!==e&&n.call(y,s)&&(v=y);var w=m.prototype=h.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function i(a,o,s,u){var c=d(t[a],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==Object(r["a"])(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,u)}),(function(t){i("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,u)}))}u(c.arg)}var o;a(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function T(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=k(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=d(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return g.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:g,configurable:!0}),g.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new _(f(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(w),l(w,c,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}},e476:function(t,e,n){"use strict";n("2d24")}}]);