(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f770f62"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}},"26f2":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",["input"===t.formInfo.type?e("div",[e("a-input",{attrs:{placeholder:t.formInfo.tips,maxLength:t.formInfo.maxLength,disabled:t.formInfo.disabled},model:{value:t.formInfo.value,callback:function(e){t.$set(t.formInfo,"value",e)},expression:"formInfo.value"}},[e("div",{staticClass:"font-color-black-25",attrs:{slot:"suffix"},slot:"suffix"},[t._v(t._s(t.formInfo.value.length)+"/"+t._s(t.formInfo.maxLength))])])],1):t._e(),"img"===t.formInfo.type?e("div",[e("div",{staticClass:"undate",class:t.imgurl?"":"empty"},[t.imgurl?t._e():e("a-icon",{staticClass:"plus",attrs:{type:"plus"}}),t.imgurl?e("img",{staticClass:"update-img",attrs:{src:t.imgurl}}):t._e(),t.imgurl?e("div",{staticClass:"cover"},[e("span",{staticClass:"add-btn flex-row align-center"},[e("a-icon",{attrs:{type:"plus"}}),t._v(" 更换图片 ")],1)]):t._e(),e("a-input",{attrs:{type:"file",accept:t.formInfo.accept},on:{input:t.getFile}})],1),t.formInfo.tips?e("p",{staticClass:"upload-prompt"},[t._v("("+t._s(t.formInfo.tips)+")")]):t._e()]):t._e(),"imgList"===t.formInfo.type?e("div",[e("a-upload",{attrs:{"list-type":"picture-card","file-list":t.formInfo.value,accept:t.formInfo.accept||t.accept,customRequest:t.customRequest},on:{preview:t.handlePreview,change:t.handleChange}},[t.formInfo.value.length<t.formInfo.maxLength?e("div",[e("a-icon",{attrs:{type:"plus"}}),e("div",{staticClass:"ant-upload-text"},[t._v(" 点击上传图片 ")])],1):t._e()])],1):t._e(),"textarea"===t.formInfo.type?e("div",{staticClass:"textarea-wrap"},[e("a-textarea",{attrs:{placeholder:t.formInfo.tips,maxLength:t.formInfo.maxLength,autoSize:{minRows:4,maxRows:4},"allow-clear":"",disabled:t.formInfo.disabled},model:{value:t.formInfo.value,callback:function(e){t.$set(t.formInfo,"value",e)},expression:"formInfo.value"}}),e("p",{staticClass:"statistics font-color-black-25"},[t._v(t._s(t.formInfo.value.length)+"/"+t._s(t.formInfo.maxLength))])],1):t._e(),"switch"===t.formInfo.type?e("ul",t._l(t.formInfo.list,(function(n,r){return e("li",{key:r,staticClass:"switch-list"},[e("a-switch",{staticClass:"switch",attrs:{size:"small"},model:{value:n.isChecked,callback:function(e){t.$set(n,"isChecked",e)},expression:"item.isChecked"}}),e("div",[e("p",[t._v(t._s(n.tips))]),n.subTips?e("p",{staticClass:"aks-tips"},[t._v(t._s(n.subTips))]):t._e()]),n.tooltip?e("a-tooltip",{attrs:{title:n.tooltip}},[e("a-icon",{attrs:{type:"question-circle"}})],1):t._e(),n.list&&n.isChecked?e("div",{staticClass:"change-radio"},[e("a-radio-group",{model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}},t._l(n.list,(function(n){return e("a-radio",{key:n.label,attrs:{value:n.label}},[t._v(" "+t._s(n.text)+" "),e("span",{class:n.label})])})),1)],1):t._e()],1)})),0):t._e(),"radio"===t.formInfo.type?e("div",[e("a-radio-group",{model:{value:t.formInfo.value,callback:function(e){t.$set(t.formInfo,"value",e)},expression:"formInfo.value"}},t._l(t.formInfo.list,(function(n,r){return e("a-radio",{key:r,attrs:{value:n.label}},[t._v(" "+t._s(n.title)+" ")])})),1)],1):t._e(),"select"===t.formInfo.type?e("div",[t.formInfo.subtitle?e("div",{staticClass:"select-subtitle-box"},[t._v(" "+t._s(t.formInfo.subtitle)+" "),t.formInfo.subtitleTooltip?e("a-tooltip",{attrs:{title:t.formInfo.subtitleTooltip}},[e("a-icon",{attrs:{type:"question-circle"}})],1):t._e(),e("a-switch",{attrs:{size:"small"},model:{value:t.formInfo.subtitleValue,callback:function(e){t.$set(t.formInfo,"subtitleValue",e)},expression:"formInfo.subtitleValue"}})],1):t._e(),e("ul",{staticClass:"select-list-wrap"},t._l(t.formInfo.list,(function(n,r){return e("li",{key:r},[e("div",{staticClass:"select"},[t.formInfo.isUpdateImg?e("UpdateImg",{staticClass:"select-update",attrs:{formInfo:n},model:{value:n.baseImg,callback:function(e){t.$set(n,"baseImg",e)},expression:"item.baseImg"}}):t._e(),e("a-input",{attrs:{maxLength:t.formInfo.maxLength,placeholder:t.formInfo.tips},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"item.value"}}),e("div",{staticClass:"list-but"},[e("a-icon",{attrs:{type:"minus-circle"},on:{click:function(e){return t.deleteSelect(r)}}}),e("a-icon",{attrs:{type:"plus-circle"},on:{click:t.addSelect}})],1)],1),t.formInfo.subtitleValue?e("div",{staticClass:"add-tag"},[e("a-button",{staticClass:"add-but",on:{click:function(e){return t.addTags(n)}}},[e("a-icon",{attrs:{type:"plus"}}),t._v("添加标签")],1),t._l(n.selectTagList,(function(n){return e("a-tag",{key:n.tagId,staticClass:"tag",attrs:{closable:""},on:{close:function(e){return t.closeTag(n.tagId)}}},[t._v(" "+t._s(n.tagName)+" ")])}))],2):t._e()])})),0)]):t._e(),e("a-modal",{attrs:{footer:null,centered:"",destroyOnClose:""},model:{value:t.visibleTag,callback:function(e){t.visibleTag=e},expression:"visibleTag"}},[e("SelectTags",{attrs:{selectTagList:t.selectItem.selectTagList},on:{cancle:function(e){t.visibleTag=!1},serviceOk:t.serviceOk}})],1),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:function(e){t.previewVisible=!1}}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.previewImage}})])],1)},i=[],o=n("5530"),a=n("c7eb"),s=n("1da1"),c=(n("fb6a"),n("d81d"),n("d3b7"),n("a434"),n("0481"),n("4069"),n("4de4"),n("c740"),n("ca00")),l=n("c844"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"undate"},[t.imgurl?t._e():e("a-icon",{staticClass:"plus",attrs:{type:"plus"}}),t.imgurl?e("img",{staticClass:"update-img",attrs:{src:t.imgurl}}):t._e(),t.imgurl?e("div",{staticClass:"cover"},[e("span",{staticClass:"add-btn flex-row align-center"},[e("a-icon",{attrs:{type:"delete"}})],1)]):t._e(),e("a-input",{attrs:{type:"file",accept:t.accept},on:{input:t.getFile}})],1)},f=[],p={name:"UpdateImg",components:{},props:{formInfo:{type:Object,default:function(){return{}}},value:{type:String,default:""}},watch:{value:{handler:function(){this.imgurl=this.value.compress},immediate:!0}},data:function(){return{imgurl:"",accept:".bmp,.jpg,.jpeg,.png,.tif,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw,.WMF,.webp"}},created:function(){},methods:{getFile:function(t){var e=this;Object(c["g"])(t).then((function(n){var r;e.imgurl=n[0],e.$emit("input",{file:null===t||void 0===t||null===(r=t.target)||void 0===r?void 0:r.files[0],compress:n[0],master:n[1]})}))}}},m=p,d=(n("a8e5"),n("2877")),h=Object(d["a"])(m,u,f,!1,null,"fcac3b82",null),v=h.exports,g={name:"FormList",components:{SelectTags:l["a"],UpdateImg:v},props:{formInfo:{type:Object,default:function(){return{}}}},watch:{formInfo:{handler:function(){"img"===this.formInfo.type&&(this.imgurl=this.formInfo.value.compress),this.formInfo.value&&this.$emit("input",this.formInfo.value)},deep:!0,immediate:!0}},data:function(){return{imgurl:"",accept:".bmp,.jpg,.jpeg,.png,.tif,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw,.WMF,.webp",visibleTag:!1,selectItem:{selectTagList:[]},previewVisible:!1,previewImage:""}},methods:{customRequest:function(t){t.onSuccess()},handlePreview:function(t){var e=this;return Object(s["a"])(Object(a["a"])().mark((function n(){return Object(a["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.url||t.preview){n.next=4;break}return n.next=3,e.getBase64(t.originFileObj);case 3:t.preview=n.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return n.stop()}}),n)})))()},handleChange:function(t){var e=this,n=t.fileList;if(this.formInfo.maxNum&&n.length>this.formInfo.maxNum)this.$message.warning("不能超过".concat(this.formInfo.maxNum,"张"));else{var r=n.slice(-this.formInfo.maxLength);setTimeout((function(){e.formInfo.value=r.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{status:"done"})}))}),0)}},getBase64:function(t){return new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return n(t)}}))},getFile:function(t){var e,n=this;if(this.formInfo.maxLength>=2048e3&&(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.files[0].size)>=this.formInfo.maxLength)return void this.$message.warning("上传图片大小不能超过".concat(Object(c["b"])(this.formInfo.maxLength)));Object(c["g"])(t).then((function(e){var r;n.imgurl=e[0],n.formInfo.value={file:null===t||void 0===t||null===(r=t.target)||void 0===r?void 0:r.files[0],compress:e[0],master:e[1]}}))},deleteSelect:function(t){1!==this.formInfo.list.length&&this.formInfo.list.splice(t,1)},addSelect:function(){this.formInfo.list.push(this.formInfo.defaultItem)},serviceOk:function(t){this.selectItem.selectTagList=t.filter((function(t){return t.selectTagList.length>0})).map((function(t){return t.selectTagList})).flat(),this.visibleTag=!1},addTags:function(t){this.selectItem=t,this.visibleTag=!0},closeTag:function(t){var e=this.selectItem.selectTagList.findIndex((function(e){return e.tagId===t}));this.selectItem.selectTagList.splice(e,1)}}},b=g,y=(n("c83c"),Object(d["a"])(b,r,i,!1,null,"b210c790",null));e["a"]=y.exports},"4e7e":function(t,e,n){},"6b29":function(t,e,n){},a8e5:function(t,e,n){"use strict";n("4e7e")},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("53ca");function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(E){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),s=new O(r||[]);return o(a,"_invoke",{value:_(t,n,s)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=f;var m={};function d(){}function h(){}function v(){}var g={};u(g,s,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(T([])));y&&y!==e&&n.call(y,s)&&(g=y);var I=v.prototype=d.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(o,a,s,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==Object(r["a"])(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,s,c)}),(function(t){i("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function _(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=v,o(I,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(I),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(f(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(I),u(I,l,"Generator"),u(I,s,(function(){return this})),u(I,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},t}},c83c:function(t,e,n){"use strict";n("6b29")}}]);