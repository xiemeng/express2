(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9abdbbe"],{"131d":function(t,e,a){"use strict";a("4f49")},"1c9c":function(t,e,a){"use strict";a.d(e,"s",(function(){return s})),a.d(e,"e",(function(){return r})),a.d(e,"t",(function(){return o})),a.d(e,"j",(function(){return l})),a.d(e,"n",(function(){return c})),a.d(e,"y",(function(){return u})),a.d(e,"w",(function(){return d})),a.d(e,"g",(function(){return f})),a.d(e,"B",(function(){return p})),a.d(e,"c",(function(){return m})),a.d(e,"h",(function(){return g})),a.d(e,"a",(function(){return h})),a.d(e,"q",(function(){return b})),a.d(e,"i",(function(){return v})),a.d(e,"v",(function(){return y})),a.d(e,"p",(function(){return C})),a.d(e,"b",(function(){return k})),a.d(e,"l",(function(){return w})),a.d(e,"m",(function(){return x})),a.d(e,"z",(function(){return _})),a.d(e,"C",(function(){return O})),a.d(e,"k",(function(){return L})),a.d(e,"A",(function(){return T})),a.d(e,"x",(function(){return S})),a.d(e,"r",(function(){return I})),a.d(e,"o",(function(){return D})),a.d(e,"d",(function(){return j})),a.d(e,"f",(function(){return R})),a.d(e,"u",(function(){return N}));var i=a("b775"),n={staff:"/enterprise/role/staff",roleList:"/enterprise/role",roleResource:"/enterprise/role/getRoleResource",syncAll:"/enterprise/staff/syncAll",getCustGrpList:"/client_group/customerGroup/getCustGrpList",changeRole:"/enterprise/role/change",departmentStaff:"/enterprise/department/staff",addStaffRole:"/enterprise/role/addStaffRole",getQuitStaff:"/client_manager/transfer/getQuitStaff",getStaff:"/enterprise/staff/get",department:"/enterprise/department",getDepartmentStaff:"/enterprise/department/getStaff",loginAdmin:"/enterprise/staff/loginAdmin",getRoleRes:"/enterprise/role/getRoleRes",changeRes:"/enterprise/role/change/res",getPermissionLog:"/enterprise/permissionLog/query",staffInfo:"/enterprise/staff/statistics/get/staffInfo",yesterdayData:"/enterprise/staff/statistics/get/yesterdayData",getDate:"/enterprise/staff/statistics/get/date",editDelConfig:"/client_manager/customerdelremind/editDelConfig",queryDelConfig:"/client_manager/customerdelremind/queryDelConfig",customStage:"/enterprise/staff/statistics/get/stage",idOrUserIdGet:"/enterprise/staff/idOrUserIdGet",staffOKR:"/enterprise/staffOKR/staffOKR",saveOKR:"/enterprise/staffOKR/save",getStaffOKRList:"/enterprise/staffOKR/getStaffOKRList",getRepeatList:"/enterprise/staffOKR/getRepeatList",checkTime:"enterprise/staffOKR/checkTime",delOkr:"/enterprise/staffOKR/del",modify:"/enterprise/staffOKR/modify"};function s(t){return Object(i["b"])({url:n.idOrUserIdGet,method:"get",params:t})}function r(t){return Object(i["b"])({url:n.customStage,method:"get",params:t})}function o(t){return Object(i["b"])({url:n.loginAdmin,method:"get",params:t})}function l(t){return Object(i["b"])({url:n.getCustGrpList,method:"post",data:t})}function c(t){return Object(i["b"])({url:n.getQuitStaff,method:"get",params:t})}function u(t){return Object(i["b"])({url:n.staff,method:"get",params:t})}function d(){return Object(i["b"])({url:n.roleList,method:"get"})}function f(){return Object(i["b"])({url:n.department,method:"get"})}function p(){return Object(i["b"])({url:n.syncAll,method:"get"})}function m(t){return Object(i["b"])({url:n.changeRole,method:"get",params:t})}function g(){return Object(i["b"])({url:n.departmentStaff,method:"get"})}function h(t){return Object(i["b"])({url:n.addStaffRole,method:"post",data:t})}function b(t){return Object(i["b"])({url:n.getStaff,method:"get",params:t})}function v(t){return Object(i["b"])({url:n.editDelConfig,method:"post",data:t})}function y(t){return Object(i["b"])({url:n.queryDelConfig,method:"post",data:t})}function C(t){return Object(i["b"])({url:n.getRoleRes,method:"get",params:t})}function k(t){return Object(i["b"])({url:n.changeRes,method:"post",data:t})}function w(t){return Object(i["b"])({url:n.getDepartmentStaff,method:"get",params:t})}function x(t){return Object(i["b"])({url:n.getPermissionLog,method:"post",data:t})}function _(t){return Object(i["b"])({url:n.staffInfo,method:"get",params:t})}function O(t){return Object(i["b"])({url:n.yesterdayData,method:"get",params:t})}function L(t){return Object(i["b"])({url:n.getDate,method:"get",params:t})}function T(t){return Object(i["b"])({url:n.staffOKR,method:"get",params:t})}function S(t){return Object(i["b"])({url:n.saveOKR,method:"post",data:t})}function I(t){return Object(i["b"])({url:n.getStaffOKRList,method:"get",params:t})}function D(t){return Object(i["b"])({url:n.getRepeatList,method:"get",params:t})}function j(t){return Object(i["b"])({url:n.checkTime,method:"get",params:t})}function R(t){return Object(i["b"])({url:n.delOkr,method:"post",data:t})}function N(t){return Object(i["b"])({url:n.modify,method:"post",data:t})}},2637:function(t,e,a){"use strict";a("b0c0"),a("498a"),a("caad"),a("2532");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-wrap"},[e("div",{staticClass:"button-name",on:{click:function(e){return e.stopPropagation(),t.selectFocusIsOpen.apply(null,arguments)},mouseenter:t.enter,mouseleave:t.leave}},[t.selectList.length<=0?e("span",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",color:"rgba(0, 0, 0, 0.25)"}},[t._v(" "+t._s(t.txt)+" ")]):t._l(t.selectList,(function(a,i){return e("span",{directives:[{name:"show",rawName:"v-show",value:i<2,expression:"index < 2"}],key:i},[e("a-avatar",{attrs:{size:28,shape:"square",src:a.thumbAvatar}}),t._v(" "+t._s(a.name)+" ")],1)})),e("span",{directives:[{name:"show",rawName:"v-show",value:t.selectList.length>2,expression:"selectList.length > 2"}]},[t._v("等"+t._s(t.selectList.length)+"个")]),e("span",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"}},[t.selectList.length<=0?e("a-icon",{attrs:{type:"down"}}):e("a-icon",{attrs:{type:"close-circle",theme:"filled"},on:{click:function(e){return e.stopPropagation(),t.iconClear.apply(null,arguments)}}})],1)],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"},{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClose,expression:"handleClose"}],staticClass:"selectBox_list"},[e("div",{staticClass:"group-owner"},[e("header",{staticClass:"header"},[t._v("全部"+t._s(t.nameTxt)+" ("+t._s(t.total)+")")]),e("div",{staticClass:"search-name"},[e("a-input-search",{attrs:{placeholder:"请输入员工后回车"},on:{search:t.onSearchName},model:{value:t.searchName,callback:function(e){t.searchName="string"===typeof e?e.trim():e},expression:"searchName"}})],1),e("ul",{staticClass:"list-wrap"},[e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getDictionaryByCode,expression:"getDictionaryByCode"}],staticClass:"demo-infinite-container",attrs:{"infinite-scroll-disabled":t.busy,"infinite-scroll-distance":10}},t._l(t.groupOwners,(function(a){return e("li",{key:a.staffId,staticClass:"title-wrap",on:{click:function(e){return e.stopPropagation(),t.selectGroupOwner(a)}}},[e("a-space",{attrs:{size:12}},[e("a-avatar",{attrs:{size:30,src:a.thumbAvatar,shape:"square"}}),e("span",[t._v(t._s(a.name))])],1),e("div",[t.defalytStaffIndex.includes(a.userid)?e("a-icon",{staticClass:"check-circle",attrs:{type:"check-circle"}}):e("div",{staticClass:"circle"})],1)],1)})),0)])])])])},n=[],s=a("2909"),r=(a("a9e3"),a("d81d"),a("c740"),a("a434"),a("d3b7"),a("99af"),a("487a")),o=a.n(r),l=a("1c9c"),c=a("e88b"),u={bind:function(t,e){function a(a){if(t.contains(a.target))return!1;e.expression&&e.value(a)}t.__vueClickOutside__=a,document.addEventListener("click",a)},update:function(){},unbind:function(t){document.removeEventListener("click",t.__vueClickOutside__),delete t.__vueClickOutside__}},d={name:"SearchForm",directives:{clickoutside:u,infiniteScroll:o.a},props:{reactflag:{type:Number,default:0},type:{type:String,default:"getStaff"},defaultSelectList:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1}},data:function(){return{selectList:[],thumbAvatar:"",defalytStaffIndex:[],busy:!0,pagination:{current:1,pageSize:10,total:0},total:0,totalNum:0,selectRoleId:"3",employeeName:"",groupOwners:[],page:1,limit:10,value:[],searchName:"",styleButton:1,owners:[],isOpen:!1,loading:!1,buttonLoding:!1,ownersID:{data:[]}}},mounted:function(){this.selectList=JSON.parse(JSON.stringify(this.defaultSelectList)),this.selectList.length>0&&(this.defalytStaffIndex=this.selectList.map((function(t){return t.userid})))},computed:{txt:function(){var t;return"getStaff"==this.type?t="请选择员工":"getAdmins"==this.type&&(t="选择接收管理员"),t},nameTxt:function(){var t;return"getStaff"==this.type?t="员工":"getAdmins"==this.type&&(t="管理员"),t}},created:function(){},methods:{enter:function(){this.styleButton=2},leave:function(){this.styleButton=1},selectGroupOwner:function(t){if(this.isMultiple)this.selectList=[],this.defalytStaffIndex=[],this.selectList.push(t),this.defalytStaffIndex=[t.userid],this.isOpen=!1,this.$emit("selectCustom",this.selectList);else{var e=this.selectList.findIndex((function(e){if(e.userid===t.userid)return e}));e>=0?this.selectList.splice(e,1):this.selectList.push(t),this.defalytStaffIndex=this.selectList.map((function(t){return t.userid})),this.$emit("selectCustom",this.selectList)}},iconClear:function(){this.selectList=[],this.defalytStaffIndex=[],this.isOpen=!0,this.$emit("selectCustom",this.selectList)},handleClose:function(){this.isOpen=!1},selectFocusIsOpen:function(){this.isOpen=!this.isOpen},handleInfiniteOnLoad:function(){this.pagination.current++,this.loading&&this.getDictionaryByCode()},getDictionaryByCode:function(){var t={currentPage:this.page,pageSize:this.limit,name:this.searchName||""};this.buttonLoding||(this.buttonLoding=!0,this.loading=!0,"0"!=this.total&&this.groupOwners.length>=this.total?this.busy=!0:"getStaff"==this.type?this.getStaff(t):"getAdmins"==this.type&&this.getAdmins(t))},getStaff:function(t){var e=this;Object(l["q"])(t).then((function(t){var a=t.data.list;e.total=t.data.total,e.page>1?e.groupOwners=[].concat(Object(s["a"])(e.groupOwners),Object(s["a"])(a)):e.groupOwners=Object(s["a"])(a),e.groupOwners.length>=e.total?e.busy=!0:(e.page=e.page+1,e.loading=!1)})).catch((function(t){e.$message.error(t||t.message)})).finally((function(){e.buttonLoding=!1}))},getAdmins:function(t){var e=this;Object(c["a"])(t).then((function(t){var a=t.data.list;e.total=t.data.total,e.page>1?e.groupOwners=[].concat(Object(s["a"])(e.groupOwners),Object(s["a"])(a)):e.groupOwners=Object(s["a"])(a),e.groupOwners.length>=e.total?e.busy=!0:(e.page=e.page+1,e.loading=!1)})).catch((function(t){e.$message.error(t||t.message)})).finally((function(){e.buttonLoding=!1}))},onSearchName:function(){this.groupOwners=[],this.page=1,this.getDictionaryByCode()}},watch:{defaultSelectList:{handler:function(t,e){this.selectList=JSON.parse(JSON.stringify(this.defaultSelectList)),this.selectList.length>0?this.defalytStaffIndex=this.selectList.map((function(t){return t.userid})):this.defalytStaffIndex=[]}},reactflag:{handler:function(t,e){this.selectList=[],this.defalytStaffIndex=[],this.isOpen=!1,this.$emit("selectCustom",this.selectList)}}}},f=d,p=(a("48fc"),a("2877")),m=Object(p["a"])(f,i,n,!1,null,"158f2cd4",null);e["a"]=m.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||s(t)||Object(r["a"])(t)||o()}},"2bb3":function(t,e,a){"use strict";a("eb1c")},"3c43":function(t,e,a){t.exports=a.p+"assets/avatar-room-default.de3b5fcd.svg"},"487a":function(t,e,a){(function(e,a){t.exports=a()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var a,i,n,s,r,o=function(){t.apply(s,r),i=a};return function(){if(s=this,r=arguments,a=Date.now(),n&&(clearTimeout(n),n=null),i){var t=e-(a-i);t<0?o():n=setTimeout((function(){o()}),t)}else o()}},a=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},i=document.defaultView.getComputedStyle,n=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var a=i(e).overflowY;if("scroll"===a||"auto"===a)return e;e=e.parentNode}return window},s=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},r=function(t){return t===window?a(window):t.getBoundingClientRect().top+a(window)},o=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},l=function(){if(!this.binded){this.binded=!0;var t=this,a=t.el,i=a.getAttribute("infinite-scroll-throttle-delay"),s=200;i&&(s=Number(t.vm[i]||i),(isNaN(s)||s<0)&&(s=200)),t.throttleDelay=s,t.scrollEventTarget=n(a),t.scrollListener=e(c.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var r=a.getAttribute("infinite-scroll-disabled"),o=!1;r&&(this.vm.$watch(r,(function(e){t.disabled=e,!e&&t.immediateCheck&&c.call(t)})),o=Boolean(t.vm[r])),t.disabled=o;var l=a.getAttribute("infinite-scroll-distance"),u=0;l&&(u=Number(t.vm[l]||l),isNaN(u)&&(u=0)),t.distance=u;var d=a.getAttribute("infinite-scroll-immediate-check"),f=!0;d&&(f=Boolean(t.vm[d])),t.immediateCheck=f,f&&c.call(t);var p=a.getAttribute("infinite-scroll-listen-for-event");p&&t.vm.$on(p,(function(){c.call(t)}))}},c=function(t){var e=this.scrollEventTarget,i=this.el,n=this.distance;if(!0===t||!this.disabled){var o=a(e),l=o+s(e),c=!1;if(e===i)c=e.scrollHeight-l<=n;else{var u=r(i)-r(e)+i.offsetHeight+o;c=l+n>=u}c&&this.expression&&this.expression()}},u={bind:function(e,a,i){e[t]={el:e,vm:i.context,expression:a.value};var n=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){o(e)&&l.call(e[t],n),e[t].bindTryCount=0;var a=function a(){e[t].bindTryCount>10||(e[t].bindTryCount++,o(e)?l.call(e[t],n):setTimeout(a,50))};a()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},d=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(d)),u.install=d,u}))},"48fc":function(t,e,a){"use strict";a("9195")},"4f49":function(t,e,a){},"69c4":function(t,e,a){"use strict";a.r(e);a("fb6a");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-heade",attrs:{id:"leaderboardDetails"}},[e("a-page-header",{staticClass:"page-header background-white",attrs:{title:"活动详情"},on:{back:function(e){return t.$router.go(-1)}}}),e("section",{staticClass:"staff-rank-list-detail-page page-box"},[e("div",{staticClass:"basic-info"},[e("p",{staticClass:"title bold-bold"},[t._v("基本信息")]),e("div",{staticClass:"info-content flex-row",staticStyle:{"align-items":"flex-start"}},[e("div",{staticClass:"left"},[e("div",{staticClass:"item flex-row"},[e("span",{staticClass:"label"},[t._v("活动名称：")]),e("span",{staticClass:"value"},[t._v(t._s(t.rankInfo.activeName))])]),e("div",{staticClass:"item flex-row"},[e("span",{staticClass:"label"},[t._v("排行指标：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.rankInfo.rankingTxt))])]),e("div",{staticClass:"item flex-row"},[e("span",{staticClass:"label"},[t._v("新增客户去重：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.rankInfo.distinctTxt))])]),e("div",{staticClass:"item flex-row"},[e("span",{staticClass:"label"},[t._v("活动时间：")]),t._v(" "),e("span",{staticClass:"value"},[t._v(t._s(t.rankInfo.startTime)+" ～ "+t._s(t.rankInfo.endTime))])]),e("div",{staticClass:"item flex-row staff-item",staticStyle:{"align-items":"flex-start"}},[e("span",{staticClass:"label"},[t._v("参与成员：")]),e("span",{staticClass:"value flex-row flex-wrap staff-group-value"},[e("div",{staticClass:"staff-tag-list flex-row flex-wrap"},t._l(t.StaffList.slice(0,3),(function(a,i){return e("div",{key:i,staticClass:"ant-tag flex-row"},[e("a-icon",{staticClass:"user",attrs:{type:"user"}}),e("span",{staticClass:"name"},[t._v(t._s(a))])],1)})),0),e("span",{staticStyle:{"margin-right":"8px"}},[t._v("等"+t._s(t.StaffList.length)+"个成员")]),e("span",{staticClass:"tips-wrap"},[e("a-popover",{attrs:{placement:"right"}},[e("template",{slot:"content"},[e("p",{staticClass:"title bold-bold"},[t._v("参与成员")]),e("div",{staticClass:"staff-list flex-row flex-wrap"},t._l(t.StaffList,(function(a,i){return e("div",{key:i,staticClass:"staff-box"},[e("a-icon",{staticClass:"user",attrs:{type:"user"}}),t._v(t._s(a))],1)})),0)]),e("span",{staticClass:"text-blue clickable look-exm"},[t._v("查看")])],2)],1)])]),e("div",{staticClass:"item flex-row staff-item",staticStyle:{"align-items":"flex-start"}},[e("span",{staticClass:"label"},[t._v("生效群聊：")]),t.GroupList.length>0?e("span",{staticClass:"value flex-row flex-wrap staff-group-value"},[e("span",{staticClass:"group-str"},t._l(t.GroupList,(function(a,i){return e("em",{key:i,staticStyle:{"font-style":"normal"}},[t._v("【"+t._s(a)+"】 ")])})),0),e("span",{staticStyle:{"margin-right":"8px"}},[t._v("等"+t._s(t.GroupList.length)+"个群聊")]),e("span",{staticClass:"tips-wrap"},[e("a-popover",{attrs:{placement:"right"}},[e("template",{slot:"content"},[e("p",{staticClass:"title bold-bold"},[t._v("群聊")]),e("div",{staticClass:"group-list flex-row flex-wrap"},t._l(t.GroupList,(function(i,n){return e("div",{key:n,staticClass:"group-box flex-row"},[e("img",{staticClass:"group-img",attrs:{src:a("3c43"),alt:""}}),t._v(" "),e("div",{staticClass:"name-count"},[e("p",{staticClass:"name",attrs:{title:"test"}},[t._v(t._s(i))])])])})),0)]),e("span",{staticClass:"text-blue clickable look-exm"},[t._v("查看")])],2)],1)]):e("span",[t._v("-")])]),e("div",{staticClass:"item flex-row"},[e("span",{staticClass:"label"},[t._v("上榜名次：")]),e("span",{staticClass:"value"},[t._v(t._s(t.rankInfo.orderNumber)+"名")])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"item flex-row",staticStyle:{"align-items":"flex-start"}},[e("span",{staticClass:"label"},[t._v("活动说明：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rankInfo.describe,expression:"rankInfo.describe"}],attrs:{disabled:"",readonly:""},domProps:{value:t.rankInfo.describe},on:{input:function(e){e.target.composing||t.$set(t.rankInfo,"describe",e.target.value)}}})])])])]),e("ChartBox",{attrs:{dataList:t.dataList,customerTotal:t.customerTotal}}),e("DetailTable",{attrs:{rankingType:t.rankingType,idx:t.idx}})],1)],1)},n=[],s=(a("d81d"),a("a355")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-chart-wrap"},[e("p",{staticClass:"title bold-bold"},[t._v("排行榜TOP10")]),e("div",{staticClass:"total-renew-box flex-row"},[e("span",{staticClass:"total"},[t._v("TOP10邀请客户数统计 客户总计："+t._s(t.customerTotal))]),t._m(0),e("span",{staticClass:"renew"},[t._v(" 数据每小时更新一次 ")]),e("span",{staticClass:"update-time"},[t._v("更新于："+t._s(t.nowDate)+" "+t._s(t.time))])]),e("div",{staticClass:"charts",attrs:{id:"charts"}})])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"divider",staticStyle:{"padding-top":"0px","padding-bottom":"0px",height:"px"}},[e("span",{staticClass:"ant-divider ant-divider-vertical"})])}],l=a("ade3"),c=(a("a9e3"),a("ac1f"),a("5319"),a("b0c0"),a("313e")),u=a("4cb5"),d=a("9394"),f=a("2da7"),p=a("4b2a"),m=a("f95e");c["b"]([d["a"],f["a"],p["a"],u["a"],m["a"]]);var g={props:{dataList:{type:Array,default:function(){return[]}},customerTotal:{type:Number,default:0}},data:function(){return{myChart:"",time:""}},created:function(){var t=new Date,e=t.toLocaleTimeString().replace(/^\D*/,""),a=e.indexOf(":");this.nowDate=this.$moment().format("YYYY-MM-DD"),this.time=e.substring(0,a)+":00:00"},mounted:function(){this.myChart=c["a"](document.getElementById("charts"))},methods:{renderContainer:function(){var t;this.myChart.setOption((t={tooltip:{},xAxis:{type:"category",data:this.dataList.map((function(t){return t.name}))}},Object(l["a"])(t,"tooltip",{trigger:"axis"}),Object(l["a"])(t,"yAxis",{name:"邀请客户数",minInterval:1}),Object(l["a"])(t,"grid",{left:"30px",right:"5%"}),Object(l["a"])(t,"series",[{name:"邀请客户数",type:"bar",barWidth:60,data:this.dataList.map((function(t){return t.inviteUserNum}))}]),t))}},watch:{dataList:function(){this.renderContainer()}}},h=g,b=(a("87b3"),a("2877")),v=Object(b["a"])(h,r,o,!1,null,"fafe3bde",null),y=v.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-table-wrap"},[e("div",{staticClass:"left-swith-box flex-row"},[e("a-radio-group",{staticClass:"changeRadio",attrs:{size:"default","button-style":"solid"},on:{change:t.changeTabPosition},model:{value:t.tabPosition,callback:function(e){t.tabPosition=e},expression:"tabPosition"}},[e("a-radio-button",{attrs:{value:"staff"}},[t._v("根据成员查看")]),e("a-radio-button",{attrs:{value:"date"}},[t._v("根据日期查看")]),e("a-radio-button",{attrs:{value:"group"}},[t._v("根据"+t._s("1"==t.rankingType?"客户":"群聊")+"查看")])],1)],1),e("section",{staticClass:"staff-rank-list-group-chat-table"},[e("div",{staticClass:"count-export-box flex-row align-side"},[e("div",{staticClass:"count-update-box flex-row"},[e("span",{staticClass:"renew-btn"},[t._v(" 数据每小时更新一次 ")]),e("span",{staticClass:"update-time"},[t._v("更新于："+t._s(t.nowDate)+" "+t._s(t.time))])])]),e("div",{staticClass:"filter-box flex-row"},[e("div",{staticClass:"filter-item flex-row"},[e("span",{staticClass:"label"},[t._v("选择员工：")]),e("AllEmployees",{attrs:{reactflag:t.reactflag,type:"getStaff"},on:{selectCustom:t.selectCustom}})],1),e("div",{staticClass:"filter-item flex-row"},[e("span",{staticClass:"label"},[t._v("选择时间：")]),e("a-range-picker",{staticStyle:{width:"350px"},attrs:{value:t.showAddDateTime},on:{change:t.changeAddDate}})],1)]),e("div",{staticClass:"table-box"},["staff"==t.tabPosition?e("a-table",{attrs:{columns:t.memberColumns,"data-source":t.memberList,pagination:t.pagination,loading:t.tableLoading},on:{change:t.memberchange},scopedSlots:t._u([{key:"user",fn:function(a){return e("div",{staticClass:"name-list"},[e("a-avatar",{staticClass:"portrait",attrs:{shape:"square",size:"default",src:a.avatar}}),e("div",[e("p",[t._v(t._s(a.userName))])])],1)}}],null,!1,585779164)},[e("div",{attrs:{slot:"standbyMemberTitle"},slot:"standbyMemberTitle"},[t._v(" 邀请客户数 "),e("a-tooltip",{attrs:{title:"活动时间内进入客户群的客户数量，包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"withdrawMemberTitle"},slot:"withdrawMemberTitle"},[t._v(" 流失客户数 "),e("a-tooltip",{attrs:{title:"活动时间内将成员删除的客户数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"growthMemberTitle"},slot:"growthMemberTitle"},[t._v(" 净增客户数 "),e("a-tooltip",{attrs:{title:"活动时间内成员新添加的客户数量，不包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)]):t._e(),"date"==t.tabPosition?e("a-table",{attrs:{columns:t.dateColumns,"data-source":t.dateList,pagination:t.paginationTwo,loading:t.tableLoading},on:{change:t.memberchangeTwo}},[e("div",{attrs:{slot:"totalMemberTitle"},slot:"totalMemberTitle"},[t._v(" 客户总数 "),e("a-tooltip",{attrs:{title:"成员的全部客户数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"allMemberTitle"},slot:"allMemberTitle"},[t._v(" 邀请客户数 "),e("a-tooltip",{attrs:{title:"活动时间内成员新添加的客户数量，包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"standbyMemberTitle"},slot:"standbyMemberTitle"},[t._v(" 流失客户数 "),e("a-tooltip",{attrs:{title:"活动时间内将成员删除的客户数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"withdrawMemberTitle"},slot:"withdrawMemberTitle"},[t._v(" 净增客户数 "),e("a-tooltip",{attrs:{title:"活动时间内成员新添加的客户数量，不包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)]):t._e(),"group"==t.tabPosition&&"2"==t.rankingType?e("a-table",{attrs:{columns:t.groupColumns,"data-source":t.groupList,pagination:t.pagination,loading:t.tableLoading},on:{change:t.memberchange},scopedSlots:t._u([{key:"info",fn:function(a){return e("div",{staticClass:"name-list"},[e("a-avatar",{staticClass:"portrait",attrs:{shape:"square",size:"default",src:a.avatar}}),e("div",[e("p",[t._v(t._s(a.name))])])],1)}},{key:"groupOwner",fn:function(a){return e("div",{},[e("a-tag",[e("a-icon",{attrs:{type:"user"}}),t._v(" "+t._s(a)+" ")],1)],1)}},{key:"operation",fn:function(a){return e("div",{staticStyle:{display:"flex"},attrs:{index:t.index}},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.lookDetail(a)}}},[t._v("群详情")])],1)}}],null,!1,514882825)},[e("div",{attrs:{slot:"totalMemberTitle"},slot:"totalMemberTitle"},[t._v(" 群内总人数 "),e("a-tooltip",{attrs:{title:"群内的全部成员数量，包括企业员工数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"allMemberTitle"},slot:"allMemberTitle"},[t._v(" 群内总客户数 "),e("a-tooltip",{attrs:{title:"群内的全部客户数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"standbyMemberTitle"},slot:"standbyMemberTitle"},[t._v(" 邀请客户数 "),e("a-tooltip",{attrs:{title:"活动时间内进入客户群的客户数量，包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"withdrawMemberTitle"},slot:"withdrawMemberTitle"},[t._v(" 退群客户数 "),e("a-tooltip",{attrs:{title:"活动时间内退出客户群的客户数量"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),e("div",{attrs:{slot:"growthMemberTitle"},slot:"growthMemberTitle"},[t._v(" 净增客户数 "),e("a-tooltip",{attrs:{title:"活动时间内成员新添加的客户数量，不包含流失数据"}},[e("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)]):t._e(),"group"==t.tabPosition&&"1"==t.rankingType?e("a-table",{attrs:{columns:t.customerColumns,"data-source":t.customerList,pagination:t.paginationFour,loading:t.tableLoading},on:{change:t.memberchangeFour},scopedSlots:t._u([{key:"user",fn:function(a){return e("div",{staticClass:"name-list"},[e("a-avatar",{staticClass:"portrait",attrs:{shape:"square",size:"default",src:a.avatar}}),e("div",[e("p",[t._v(t._s(a.userName))])])],1)}},{key:"userName",fn:function(a){return a?e("a-tag",{},[e("a-icon",{staticClass:"primaryColor",attrs:{type:"customer-service"}}),t._v(" "+t._s(a)+" ")],1):t._e()}},{key:"operation",fn:function(a){return e("div",{staticClass:"operation"},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.clientDetail(a)}}},[t._v("详情")])],1)}}],null,!0)}):t._e()],1)])])},k=[],w=(a("d3b7"),a("a15b"),a("2637")),x={props:{idx:{type:String,default:""},rankingType:{type:String,default:""}},data:function(){return{time:"",showAddDateTime:null,reactflag:0,userIds:void 0,tableLoading:!1,startDate:void 0,endDate:void 0,memberList:[],dateList:[],groupList:[],customerList:[],memberColumns:[{title:"排名",dataIndex:"rankNo",key:"rankNo"},{title:"成员",dataIndex:"user",key:"user",scopedSlots:{customRender:"user"}},{title:"所在部门",dataIndex:"departmentList",key:"departmentList",scopedSlots:{customRender:"departmentList"}},{slots:{title:"standbyMemberTitle"},dataIndex:"inviteCount",key:"inviteCount"},{slots:{title:"withdrawMemberTitle"},dataIndex:"lossCount",key:"lossCount"},{slots:{title:"growthMemberTitle"},dataIndex:"netCount",key:"netCount"}],dateColumns:[{title:"日期",dataIndex:"dateTime",key:"dateTime",customRender:function(t,e,a){return t||"-"}},{slots:{title:"totalMemberTitle"},dataIndex:"totalCount",key:"totalCount"},{slots:{title:"allMemberTitle"},dataIndex:"inviteCount",key:"inviteCount"},{slots:{title:"standbyMemberTitle"},dataIndex:"lossCount",key:"lossCount"},{slots:{title:"withdrawMemberTitle"},dataIndex:"netCount",key:"netCount"}],groupColumns:[{title:"群名称",dataIndex:"info",key:"info",scopedSlots:{customRender:"info"}},{title:"群主",dataIndex:"groupOwner",key:"groupOwner",scopedSlots:{customRender:"groupOwner"}},{slots:{title:"totalMemberTitle"},dataIndex:"groupTotalCount",key:"groupTotalCount"},{slots:{title:"standbyMemberTitle"},dataIndex:"inviteCount",key:"inviteCount"},{slots:{title:"withdrawMemberTitle"},dataIndex:"lossCount",key:"lossCount"},{slots:{title:"growthMemberTitle"},dataIndex:"netCount",key:"netCount"},{title:"操作",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"}}],customerColumns:[{title:"客户",dataIndex:"user",key:"user",scopedSlots:{customRender:"user"}},{title:"所属成员",dataIndex:"userName",scopedSlots:{customRender:"userName"},key:"userName"},{title:"邀请时间",dataIndex:"createTime",key:"createTime"},{title:"操作",dataIndex:"operation",align:"right",key:"operation",scopedSlots:{customRender:"operation"}}],tabPosition:"staff",pagination:{current:1,pageSize:10,total:0},paginationTwo:{current:1,pageSize:10,total:0},paginationThree:{current:1,pageSize:10,total:0},paginationFour:{current:1,pageSize:10,total:0}}},created:function(){var t=new Date,e=t.toLocaleTimeString().replace(/^\D*/,""),a=e.indexOf(":");this.nowDate=this.$moment().format("YYYY-MM-DD"),this.time=e.substring(0,a)+":00:00",this.getmemberList(),this.getDateList(),"1"==this.rankingType?this.getCustomerList():this.getGroupList()},methods:{lookDetail:function(t){this.$router.push({name:"groupDetailsName",query:{chatId:t.groupId}})},changeTabPosition:function(){this.showAddDateTime=null,this.reactflag=(new Date).getTime()},clientDetail:function(t){this.$router.push({name:"CustomerDetail",query:{customerId:t.customerId,staffId:t.userId}})},changeAddDate:function(t,e){this.showAddDateTime=t,e[0]?(this.startDate=e[0],this.endDate=e[1]):(this.startDate=void 0,this.endDate=void 0),"staff"==this.tabPosition?(this.pagination.current=1,this.getmemberList()):"date"==this.tabPosition?(this.paginationTwo.current=1,this.getDateList()):"group"==this.tabPosition&&("1"==this.rankingType?(this.paginationFour.current=1,this.getCustomerList()):(this.paginationThree.current=1,this.getGroupList()))},getmemberList:function(){var t=this;this.tableLoading=!0;var e={activeId:this.idx,rankingType:this.rankingType,userIds:this.userIds,startDate:this.startDate,endDate:this.endDate,page:this.pagination.current,limit:this.pagination.pageSize};Object(s["b"])(e).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.list&&(t.pagination.total=e.data.totalCount,t.disposeClientList(e.data.list))})).finally((function(){t.tableLoading=!1}))},getDateList:function(){var t=this,e={activeId:this.idx,rankingType:this.rankingType,userIds:this.userIds,startDate:this.startDate,endDate:this.endDate,page:this.paginationTwo.current,limit:this.paginationTwo.pageSize};Object(s["d"])(e).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.list&&(t.paginationTwo.total=e.data.totalCount,t.dateList=e.data.list)})).finally((function(){t.tableLoading=!1}))},getCustomerList:function(){var t=this,e={activeId:this.idx,rankingType:this.rankingType,userIds:this.userIds,startDate:this.startDate,endDate:this.endDate,page:this.paginationFour.current,limit:this.paginationFour.pageSize};Object(s["c"])(e).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.list&&(t.paginationFour.total=e.data.totalCount,t.disposeCustomerList(e.data.list))})).finally((function(){t.tableLoading=!1}))},getGroupList:function(){var t=this,e={activeId:this.idx,rankingType:this.rankingType,userIds:this.userIds,startDate:this.startDate,endDate:this.endDate,page:this.paginationThree.current,limit:this.paginationThree.pageSize};Object(s["e"])(e).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.list&&(t.paginationThree.total=e.data.totalCount,t.disposeGroupList(e.data.list))})).finally((function(){t.tableLoading=!1}))},disposeGroupList:function(t){this.groupList=t.map((function(t,e){return t.info={name:t.groupName,groupId:t.groupId,avatar:"/icons/groupChat.png"},t.key=e,t.operation=t,Object.assign({},t)}))},disposeCustomerList:function(t){this.customerList=t.map((function(t){return t.user={avatar:t.customerAvatar,userName:t.customerName},t.key=t.userId,Object.assign({operation:t},t)}))},disposeClientList:function(t){this.memberList=t.map((function(t,e){return t.user={avatar:t.avatar,userName:t.userName},t.key=e,Object.assign({operation:t},t)}))},memberchange:function(t){var e=t.current;this.pagination.current=e,this.getmemberList()},memberchangeTwo:function(t){var e=t.current;this.paginationTwo.current=e,this.getDateList()},memberchangeFour:function(t){var e=t.current;this.paginationFour.current=e,this.getCustomerList()},selectCustom:function(t){var e=t.map((function(t){return t.userid}));e.length<=0?e=void 0:this.userIds=e.join(","),"staff"==this.tabPosition?(this.pagination.current=1,this.getmemberList()):"date"==this.tabPosition?(this.paginationTwo.current=1,this.getDateList()):"group"==this.tabPosition&&("1"==this.rankingType?(this.paginationFour.current=1,this.getCustomerList()):(this.paginationThree.current=1,this.getGroupList()))}},components:{AllEmployees:w["a"]}},_=x,O=(a("2bb3"),Object(b["a"])(_,C,k,!1,null,"5a4d43ac",null)),L=O.exports,T={components:{ChartBox:y,DetailTable:L},data:function(){return{rankInfo:{},dataList:[],StaffList:[],GroupList:[],customerTotal:0}},created:function(){var t=this.$route.query.idx;this.idx=t,this.rankingType=this.$route.query.rankingType,t&&this.getstaffRankInfo(t)},methods:{activitymemberrank:function(t,e){var a=this,i={rankingType:e,activeId:t};Object(s["a"])(i).then((function(t){a.dataList=t.data,t.data.map((function(t){a.customerTotal+=t.inviteUserNum}))})).catch((function(t){a.$message.error(t)}))},getstaffRankInfo:function(t,e){var a=this;Object(s["g"])(t).then((function(e){if(e.data){a.rankInfo=e.data||{};var i=e.data.rankingType;a.activitymemberrank(t,i),"1"==e.data.rankingType?a.rankInfo.rankingTxt="邀请客户成为企微客户":a.rankInfo.rankingTxt="邀请客户加入群聊",e.data.joinStaffName&&(a.StaffList=e.data.joinStaffName.split(",")),e.data.groupName&&(a.GroupList=e.data.groupName.split(",")),"0"==e.data.customerDistinct?a.rankInfo.distinctTxt="不去重":a.rankInfo.distinctTxt="去重"}})).catch((function(t){a.$message.error(t)}))}}},S=T,I=(a("131d"),Object(b["a"])(S,i,n,!1,null,"65af9cce",null));e["default"]=I.exports},"87b3":function(t,e,a){"use strict";a("b1d8")},9195:function(t,e,a){},a355:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"i",(function(){return f})),a.d(e,"f",(function(){return p}));var i=a("b775"),n={staffRankSave:"/marketing/rankingactivity/save",staffRankDelete:"/marketing/rankingactivity/delete",staffRankUpdate:"/marketing/rankingactivity/update",staffRankInfo:"/marketing/rankingactivity/info/",staffRankList:"/marketing/rankingactivity/list",getactivitymemberrank:"/marketing/rankingactivitymember/getactivitymemberrank",getuserids:"/marketing/rankingactivitymember/rankingByStaff",rankingByDate:"/marketing/rankingactivitymember/rankingByDate",rankingByCustomer:"/marketing/rankingactivitymember/rankingByCustomer",rankingByGroup:"/marketing/rankingactivitymember/rankingByGroup"};function s(t){return Object(i["b"])({url:n.rankingByCustomer,method:"post",data:t})}function r(t){return Object(i["b"])({url:n.rankingByGroup,method:"post",data:t})}function o(t){return Object(i["b"])({url:n.rankingByDate,method:"post",data:t})}function l(t){return Object(i["b"])({url:n.getuserids,method:"post",data:t})}function c(t){return Object(i["b"])({url:n.getactivitymemberrank,method:"post",data:t})}function u(t){return Object(i["b"])({url:n.staffRankList,method:"post",data:t})}function d(t){return Object(i["b"])({url:n.staffRankInfo+t,method:"get"})}function f(t){return Object(i["b"])({url:n.staffRankSave,method:"post",data:t})}function p(t){return Object(i["b"])({url:n.staffRankDelete,method:"post",data:t})}},b1d8:function(t,e,a){},e88b:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"f",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"e",(function(){return f}));var i=a("b775"),n={getCustomerList:"/client_manager/client/getCustomerList",setCustomerStage:"/client_manager/client/setCustomerStage",save:"/client_transformation/customerstage/save",update:"/client_transformation/customerstage/update",list:"/client_transformation/customerstage/list",delete:"/client_transformation/customerstage/delete",order:"/client_transformation/customerstage/change/order",getAdmins:"/enterprise/staff/getAdmins"};function s(t){return Object(i["b"])({url:n.getAdmins,method:"get",params:t})}function r(t){return Object(i["b"])({url:n.getCustomerList,method:"get",params:t})}function o(t){return Object(i["b"])({url:n.setCustomerStage,method:"post",data:t})}function l(t){return Object(i["b"])({url:n.save,method:"post",data:t})}function c(t){return Object(i["b"])({url:n.update,method:"post",data:t})}function u(t){return Object(i["b"])({url:n.list,method:"post",data:t})}function d(t){return Object(i["b"])({url:n.delete,method:"post",data:t})}function f(t){return Object(i["b"])({url:n.order,method:"post",params:t})}},eb1c:function(t,e,a){}}]);