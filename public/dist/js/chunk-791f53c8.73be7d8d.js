(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-791f53c8"],{7942:function(t,s,i){"use strict";i("c469")},c469:function(t,s,i){},da05c:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page-wrap background-white page-box"},[t._m(0),s("section",{staticClass:"section"},[s("div",{staticClass:"aks-tips"},[t._v(" 更新于："+t._s(t.timeString)+" "),s("a-divider",{attrs:{type:"vertical"}}),s("span",{staticClass:"font-color-black-25 refresh",on:{click:t.refresh}},[s("a-icon",{attrs:{type:"sync"}}),t._v(" 更新数据")],1)],1),s("a-spin",{attrs:{spinning:t.spinning}},[s("ul",{staticClass:"section-list"},[s("li",{staticClass:"add-chat",on:{click:t.addWeChat}},[s("div",[s("a-icon",{attrs:{type:"plus-circle",theme:"filled"}})],1),s("p",[t._v("添加公众号")])]),t._l(t.dataList,(function(i){return s("li",{key:i},[s("div",{staticClass:"list-header"},[s("a-avatar",{attrs:{size:66,shape:"square",src:i.headImg}}),s("div",{staticClass:"list-header-right"},[s("strong",[t._v(t._s(i.nickName))]),s("a-tag",{attrs:{color:"green"}},[t._v(t._s(t.serviceTypeList[i.serviceTypeInfo]))])],1)],1),s("div",{staticClass:"list-footer"},[s("span",[t._v(t._s(-1===i.verifyTypeInfo?"未认证":"已认证"))]),s("span",[t._v(t._s(0===i.isDeleted?"已绑定微信开放平台":"未绑定微信开放平台"))])])])}))],2)])],1)])},n=[function(){var t=this,s=t._self._c;return s("header",[s("p",{staticClass:"title"},[t._v(" 公众号授权(1) "),s("span",[t._v("1、请授权认证订阅号、服务号 ")]),s("span",[t._v("2、请将公众号绑定在企业的微信开放平台，")])]),s("div",{staticClass:"notifier"},[s("p",{staticClass:"text-1"},[t._v("为什么要进行公众号授权？")]),s("p",{staticClass:"text-2"},[s("span",{staticClass:"bold"},[t._v("1、获取客户信息：")]),t._v(" 可通过公众号获取参加企微任务宝、抽奖活动等活动的客户基本信息，记录客户的活动数据。 ")]),s("p",{staticClass:"text-2"},[s("span",{staticClass:"bold"},[t._v("2、获取公众号文章素材：")]),t._v(" 在【素材库-文章】和【互动雷达】中，公众号授权后可同步公众号文章素材至素材库和雷达链接。 ")]),s("p",{staticClass:"text-2"},[s("span",{staticClass:"bold"},[t._v("3、公众号裂变：")]),t._v(" 在【企微任务宝-企微+公众号裂变】中，可引导客户关注公众号，帮助公众号获得更多的粉丝和流量。 ")])])])}],e=(i("d3b7"),i("9c0a")),c={name:"AuthorizationManagement",components:{},data:function(){return{timeString:this.$moment().format("YYYY-MM-DD hh:mm"),dataList:[],verifyTypeList:{"-1":"未认证",0:" 微信认证",1:"新浪微博认证",2:"腾讯微博认证",3:"已资质认证通过但还未通过名称认证",4:""},serviceTypeList:{0:"订阅号",1:"订阅号",2:"服务号"},spinning:!1}},created:function(){this.init()},methods:{addWeChat:function(){this.$router.push({name:"PublicAuth"})},init:function(){var t=this;this.spinning=!0,Object(e["g"])().then((function(s){t.dataList=s.data})).catch((function(s){t.$message.error(s)})).finally((function(){t.spinning=!1}))},refresh:function(){var t=this;this.spinning=!0,Object(e["h"])().then((function(s){t.$message.success("更新成功")})).catch((function(s){t.$message.error(s)})).finally((function(){t.spinning=!1}))}}},r=c,o=(i("7942"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"d75a33ac",null);s["default"]=l.exports}}]);