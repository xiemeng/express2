(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6437de19"],{"6e19":function(t,a,e){},"75b0":function(t,a,e){"use strict";e("6e19")},c27c:function(t,a,e){"use strict";e.r(a);e("9911");var i=function(){var t=this,a=t._self._c;return a("div",[a("a-page-header",{staticClass:"page-header background-white",attrs:{title:"雷达".concat(t.radarDetails,"详情")},on:{back:function(a){return t.$router.go(-1)}}}),a("div",{staticClass:"top"},[a("div",{staticClass:"data-header"},[t._v("雷达链接信息")]),a("a-form",{attrs:{"label-col":{span:2}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"雷达标题"}},[a("span",[t._v(t._s(t.formData.radarName||"-"))])]),a("a-form-item",{attrs:{label:"原链接"}},[a("span",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.formData.link||"-"))])]),a("a-form-item",{attrs:{label:"创建时间"}},[a("span",[t._v(t._s(t.formData.createTime||"-"))])])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"创建人"}},[a("span",[a("a-tag",{staticStyle:{padding:"3px 8px","border-radius":"4px"}},[a("a-icon",{staticClass:"user",attrs:{type:"user"}}),t._v(t._s(t.formData.creatorName))],1)],1)]),a("a-form-item",{attrs:{label:"行为通知"}},[a("span",[t._v(t._s(1===t.formData.behaviorNotify?"已开启":"已关闭"))])]),a("a-form-item",{attrs:{label:"动态通知"}},[a("span",[t._v(t._s(1===t.formData.activityNotify?"已开启":"已关闭"))])])],1)],1)],1)],1),a("div",{staticClass:"top"},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"data-header"},[t._v("客户标签")]),"link"===t.$route.query.type?a("div",{staticStyle:{background:"#fbfbfb",border:"1px solid #eee",padding:"16px",height:"160px","overflow-y":"auto"}},[Array.isArray(t.formData.tagRulesList)&&t.formData.tagRulesList.length>0?a("span",t._l(t.formData.tagRulesList,(function(e,i){return a("a-tag",{key:i,staticStyle:{padding:"6px 14px","border-radius":"4px",background:"#fff"}},[t._v(t._s(e.tagName))])})),1):a("span",[a("a-empty")],1)]):a("div",{staticStyle:{background:"#fbfbfb",border:"1px solid #eee",padding:"16px","font-size":"14px",height:"160px","overflow-y":"auto"}},[Array.isArray(t.formData.tagRulesList)&&t.formData.tagRulesList.length>0?a("span",t._l(t.formData.tagRulesList,(function(e,i){return a("div",{key:i,staticStyle:{"margin-bottom":"16px"}},[a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-divider",{staticStyle:{background:"#1890ff",width:"3px"},attrs:{type:"vertical"}}),a("span",{staticStyle:{"font-size":"15px",color:"#343434","line-height":"21px","font-weight":"600"}},[t._v("规则"+t._s(i+1)+":")]),t._v(" "+t._s(e.ruleStr)+" ")],1),a("div",[t._v(t._s(e.ruleContent)+" "),Array.isArray(e.customerTags)&&e.customerTags.length>0?a("span",[t._v(" ,并打上 "),t._l(e.customerTags,(function(e,i){return a("a-tag",{key:i,staticStyle:{padding:"6px 14px","border-radius":"4px",background:"#fff"}},[t._v(t._s(e.tagName))])})),t._v("标签 ")],2):t._e()])])})),0):a("span",[a("a-empty")],1)])]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"data-header"},[t._v("客户评分")]),a("div",{staticStyle:{background:"#fbfbfb",border:"1px solid #eee",padding:"16px","font-size":"14px",height:"160px","overflow-y":"auto"}},[Array.isArray(t.formData.scoreRules)&&t.formData.scoreRules.length>0?a("span",t._l(t.formData.scoreRules,(function(e,i){return a("div",{key:i,staticStyle:{"margin-bottom":"16px"}},[a("div",{staticStyle:{"margin-bottom":"8px"}},[a("a-divider",{staticStyle:{background:"#1890ff",width:"3px"},attrs:{type:"vertical"}}),a("span",{staticStyle:{"font-size":"15px",color:"#343434","line-height":"21px","font-weight":"600"}},[t._v("规则"+t._s(i+1)+":")]),t._v(" "+t._s(e.ruleStr)+" ")],1),a("div",[t._v(t._s(e.ruleContent)+" "),Array.isArray(e.customerTags)&&e.customerTags.length>0?a("span",[t._v(" ,并打上 "),t._l(e.customerTags,(function(e,i){return a("a-tag",{key:i,staticStyle:{padding:"6px 14px","border-radius":"4px",background:"#fff"}},[t._v(t._s(e.tagName))])})),t._v("标签 ")],2):t._e()])])})),0):a("span",[a("a-empty")],1)])])],1)],1),a("div",{staticClass:"top"},[a("div",{staticClass:"data-header"},[t._v("数据总览")]),a("div",{staticStyle:{border:"1px solid #daedff",background:"#fbfdff",height:"119px"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:6}},[a("div",{staticClass:"data-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.dataScreening.totalClickPerson))]),a("span",[t._v("总点击人数")])])]),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"data-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.dataScreening.totalClickTime||0))]),a("span",[t._v("总点击次数")])])]),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"data-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.dataScreening.todayClickPerson||0))]),a("span",[t._v("今日点击人数")])])]),a("a-col",{attrs:{span:6}},[a("div",{staticClass:"data-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.dataScreening.todayClickTime||0))]),a("span",[t._v("今日点击次数")])])])],1)],1)]),a("div",{staticClass:"top"},[a("div",{staticClass:"data-header"},[t._v("数据详情")]),a("a-form",{attrs:{"label-col":{span:1}}},[a("a-form-item",{attrs:{label:"筛选"}},[a("a-radio-group",{attrs:{name:"radioGroup","default-value":1},on:{change:t.onChange}},[a("a-radio",{attrs:{value:1}},[t._v(" 全部渠道 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 固定渠道 "),a("a-tooltip",{attrs:{title:"渠道活码、欢迎语、客户群发等通过阿卡索功能发送雷达链接的渠道"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),a("a-radio",{attrs:{value:3}},[t._v(" 自建渠道 "),a("a-tooltip",{attrs:{title:"客户在 互动雷达/操作/分享 中生成的自定义渠道，可根据不同投放渠道生成渠道链接"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)],1)],1),a("a-form-item",{attrs:{label:"时间筛选"}},[a("a-range-picker",{staticStyle:{width:"230px"},attrs:{"disabled-date":t.disabledDate,value:t.showAddDateTime},on:{change:t.changeAddDate}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),a("EchartsData",{attrs:{xAxisList:t.xAxisList,seriesList:t.seriesList,peopleTop:t.peopleTopList}})],1),a("div",{staticClass:"top"},[a("a-tabs",{on:{change:t.dataSwitching},model:{value:t.switching,callback:function(a){t.switching=a},expression:"switching"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户数据"}},[a("div",[a("a-form",{attrs:{"label-col":{span:1}}},[a("a-form-item",{attrs:{label:"筛选"}},[a("a-radio-group",{attrs:{name:"radioGroup"},on:{change:t.radioOnChange},model:{value:t.radioOnChangevalue,callback:function(a){t.radioOnChangevalue=a},expression:"radioOnChangevalue"}},[a("a-radio",{attrs:{value:1}},[t._v(" 全部渠道 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 固定渠道 "),a("a-tooltip",{attrs:{title:"渠道活码、欢迎语、客户群发等通过阿卡索功能发送雷达链接的渠道"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),a("a-radio",{attrs:{value:3}},[t._v(" 自建渠道 "),a("a-tooltip",{attrs:{title:"客户在 互动雷达/操作/分享 中生成的自定义渠道，可根据不同投放渠道生成渠道链接"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("span",{staticStyle:{"font-size":"14px","font-weight":"600",color:"rgba(18,18,22,.85)","line-height":"22px"}},[t._v("打开链接的客户（"+t._s(t.pagination.total)+"）")]),a("a-divider",{attrs:{type:"vertical"}}),a("span",{staticStyle:{cursor:"pointer"},on:{click:t.getCustomerLog}},[a("a-icon",{attrs:{type:"sync"}}),t._v(" 更新数据 ")],1)],1),a("div",{staticStyle:{"margin-top":"16px",display:"flex","justify-content":"space-between"}},[a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[a("span",{staticClass:"input-box"},[t._v(" 搜索客户： "),a("a-input",{staticStyle:{width:"200px"},attrs:{allowClear:"",placeholder:"请输入要搜索的客户"},on:{pressEnter:t.funcSearchCustomInfo,change:t.changeCustomInfo},model:{value:t.customerSearchVal,callback:function(a){t.customerSearchVal=a},expression:"customerSearchVal"}})],1),a("span",{staticClass:"input-box",staticStyle:{display:"flex",height:"32px","align-items":"center"}},[t._v(" 点击渠道： "),a("a-select",{staticStyle:{width:"120px"},style:{width:"200px"},attrs:{allowClear:"",placeholder:"请选择渠道"},on:{change:t.handleFinishChange},model:{value:t.clickChannelData,callback:function(a){t.clickChannelData=a},expression:"clickChannelData"}},t._l(t.XlistData,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e.id}},[t._v(" "+t._s(e.channelNameCn)+" ")])})),1)],1),a("span",{staticClass:"input-box"},[t._v(" 时间筛选："),a("a-range-picker",{staticStyle:{width:"220px"},on:{change:t.detailsChangeAddDate},model:{value:t.startOrEndTime,callback:function(a){t.startOrEndTime=a},expression:"startOrEndTime"}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1),a("span",{staticClass:"input-box",staticStyle:{display:"flex",height:"32px","align-items":"center"}},[t._v(" 所属客服："),a("SelectMultiple",{ref:"mychild",attrs:{reactflag:t.reactflag},on:{selectCustom:t.selectCustom}})],1)]),a("a-button",{attrs:{type:t.isReset?"primary":""},on:{click:t.resetCustomerSearch}},[t._v("重置")])],1),a("div",{staticStyle:{"margin-top":"18px"}},[a("a-table",{attrs:{columns:t.columnsCustomer,"data-source":t.customerData,pagination:t.pagination,loading:t.loadingTable},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"customerName",fn:function(e,i){return a("span",{},[a("a-avatar",{attrs:{size:32,shape:"square",src:i.customerAvatar}}),t._v(" "+t._s(e)),1===i.customerType?a("span",{staticStyle:{color:"#5ec75d"}},[t._v("@微信")]):t._e()],1)}},{key:"staffName",fn:function(e,i){return a("span",{},[a("a-tag",{staticStyle:{"font-size":"13px","margin-right":"5px","margin-bottom":"5px"}},[a("span",{staticStyle:{color:"#7da3d1"}},[a("a-icon",{attrs:{type:"user"}})],1),t._v(" "+t._s(e)+" ")]),a("a-tooltip",{attrs:{title:i.remark}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)}},{key:"operation",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(a){return t.showCustomerDetail(i)}}},[t._v("点击详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return t.lookDetail(i)}}},[t._v("客户详情")])],1)}}])})],1)],1)]),a("a-tab-pane",{key:"2",attrs:{tab:"渠道数据"}},[a("div",[a("a-form",{attrs:{"label-col":{span:1}}},[a("a-form-item",{attrs:{label:"筛选"}},[a("a-radio-group",{attrs:{name:"radioGroup"},on:{change:t.radioOnChange},model:{value:t.radioOnChangevalue,callback:function(a){t.radioOnChangevalue=a},expression:"radioOnChangevalue"}},[a("a-radio",{attrs:{value:1}},[t._v(" 全部渠道 ")]),a("a-radio",{attrs:{value:2}},[t._v(" 固定渠道 "),a("a-tooltip",{attrs:{title:"渠道活码、欢迎语、客户群发等通过阿卡索功能发送雷达链接的渠道"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1),a("a-radio",{attrs:{value:3}},[t._v(" 自建渠道 "),a("a-tooltip",{attrs:{title:"客户在 互动雷达/操作/分享 中生成的自定义渠道，可根据不同投放渠道生成渠道链接"}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)],1)],1),a("a-form-item",{attrs:{label:"时间筛选"}},[a("a-range-picker",{staticStyle:{width:"230px"},attrs:{"disabled-date":t.disabledDate,value:t.showAddDateTime},on:{change:t.detailsChangeAddDate}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"calendar"},slot:"suffixIcon"})],1)],1)],1),a("div",{staticStyle:{"margin-top":"18px"}},[a("a-table",{attrs:{columns:t.columnsCustomerTwo,"data-source":t.customerDataTwo,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(a){return t.channelDataViewDetails(i)}}},[t._v("查看详情")])])}}])})],1)],1)])],1)],1),a("a-modal",{attrs:{visible:t.visible,footer:null,width:"599px",destroyOnClose:"",zIndex:9999},on:{cancel:function(a){t.visible=!1}}},[a("h2",{staticStyle:{"align-items":"center","justify-content":"center",display:"flex","font-size":"17px","font-weight":"600"}},[t._v(" 点击详情 ")]),a("section",{staticStyle:{"max-height":"510px",overflow:"auto"}},[t.formDataDetails.length>0?a("div",t._l(t.formDataDetails,(function(e,i){return a("div",{key:i,staticStyle:{"padding-right":"16px"}},[a("div",{staticStyle:{"margin-bottom":"12px"}},[a("a-icon",{attrs:{type:"pushpin",theme:"filled"}}),a("span",[t._v(" "+t._s(e.recentlyClickTime)+"（第"+t._s(t.formDataDetails.length-i)+"次打开）")])],1),a("div",{staticStyle:{"padding-left":"14px","padding-bottom":"18px","border-left":"1px dashed #d8dfe4"}},[a("div",{staticStyle:{background:"#f7fbff","border-radius":"1px",border:"1px solid #b4cbf8","font-size":"14px",padding:"10px"}},[a("a-avatar",{attrs:{size:20,shape:"square",src:e.customerAvatar}}),a("span",[t._v(" "+t._s(e.customerName)+" 客户 打开了")]),a("a-avatar",{attrs:{size:20,shape:"square",src:e.staffAvatar}}),a("span",[t._v(" "+t._s(e.staffName)+" 员工 在「 "+t._s(e.recentlyClickChannelNameCN)+"} 」里发送的雷达链接 「"+t._s(t.formData.radarName)+"」 ")])],1)])])})),0):a("div",[a("a-empty")],1)])]),a("a-modal",{attrs:{visible:t.channelDataPopUp,footer:null,width:"899px",destroyOnClose:""},on:{cancel:function(a){t.channelDataPopUp=!1}}},[a("h2",{staticStyle:{"align-items":"center","justify-content":"center",display:"flex","font-size":"17px","font-weight":"600"}},[t._v(" 点击详情 ")]),a("section",{staticStyle:{"max-height":"510px",overflow:"auto"}},[a("div",{staticStyle:{"margin-top":"18px"}},[a("a-table",{attrs:{columns:t.columnsCustomer,"data-source":t.customerData,pagination:t.pagination,loading:t.loadingTable},scopedSlots:t._u([{key:"customerName",fn:function(e,i){return a("span",{},[a("a-avatar",{attrs:{size:32,shape:"square",src:i.customerAvatar}}),t._v(" "+t._s(e)),1===i.customerType?a("span",{staticStyle:{color:"#5ec75d"}},[t._v("@微信")]):t._e()],1)}},{key:"staffName",fn:function(e,i){return a("span",{},[a("a-tag",{staticStyle:{"font-size":"13px","margin-right":"5px","margin-bottom":"5px"}},[a("span",{staticStyle:{color:"#7da3d1"}},[a("a-icon",{attrs:{type:"user"}})],1),t._v(" "+t._s(e)+" ")]),a("a-tooltip",{attrs:{title:i.remark}},[a("a-icon",{staticStyle:{"margin-left":"4px"},attrs:{type:"question-circle"}})],1)],1)}},{key:"operation",fn:function(e,i){return a("span",{},[a("a",{on:{click:function(a){return t.showCustomerDetail(i)}}},[t._v("点击详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return t.lookDetail(i)}}},[t._v("客户详情")])],1)}}])})],1)])])],1)},n=[],s=e("ade3"),o=(e("d3b7"),e("d81d"),e("0481"),e("4069"),e("99af"),e("eb82")),r=e("869e"),l=e("d885"),c={data:function(){return{radioOnChangevalue:1,switching:"1",loadingTable:!1,formDataDetails:[],visible:!1,channelDataPopUp:!1,DataDetails:{channelType:void 0,customerName:"",channelId:"",startDate:"",endDate:"",staffWxId:""},customerSearchVal:"",clickChannelData:void 0,XlistData:[],pagination:{current:1,pageSize:20,total:0},peopleTopList:[],xAxisList:[],seriesList:[],formData:{},dataScreening:{},tOP10:{},columnsCustomerTwo:[{title:"渠道来源",dataIndex:"channelNameCn"},{title:"点击次数",dataIndex:"clickTime"},{title:"点击人数",dataIndex:"clickPeopleCount"},Object(s["a"])({title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"},"align","right")],customerDataTwo:[],columnsCustomer:[{title:"客户",dataIndex:"customerName",scopedSlots:{customRender:"customerName"}},{title:"所属成员",dataIndex:"staffName",scopedSlots:{customRender:"staffName"}},{title:"最近点击时间",dataIndex:"recentlyClickTime"},{title:"最近点击渠道",dataIndex:"recentlyClickChannelNameCN"},{title:"客户点击总次数",dataIndex:"customerClickCount"},Object(s["a"])({title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},align:"center"},"align","right")],customerData:[],showAddDateTime:null,reactflag:!1,startOrEndTime:null,customerFinish:null,customerLoseState:null}},components:{SelectMultiple:o["a"],EchartsData:r["a"]},computed:{isReset:function(){return!1},radarDetails:function(){var t="";switch(this.$route.query.type){case"link":t="链接";break;default:t="PDF";break}return t}},watch:{DataDetails:{handler:function(){"1"===this.switching?this.getCustomerLog():this.getChannelLog()},deep:!0}},created:function(){this.getinteractiveRadarInfo(),this.getstatisticOverview(),this.getstatisticDetail(),this.getinteractradarList(),this.getCustomerLog()},methods:{handleTableChange:function(t){this.pagination.current=null===t||void 0===t?void 0:t.current,this.getCustomerLog()},channelDataViewDetails:function(t){this.channelDataPopUp=!0,this.getCustomerLog()},dataSwitching:function(t){this.pagination.current=1,this.radioOnChangevalue=1,this.DataDetails={channelType:void 0,customerName:"",channelId:"",startDate:"",endDate:"",staffWxId:""},this.switching=t},lookDetail:function(t){this.$router.push({name:"CustomerDetail",query:{customerId:t.customerWxId,staffId:t.staffWxId}})},showCustomerDetail:function(t){var a=this;this.visible=!0;var e={radarId:t.customerId,unionId:t.customerWxId};Object(l["e"])(e).then((function(t){a.formDataDetails=null===t||void 0===t?void 0:t.data})).catch((function(t){a.$message.warning(t)}))},funcSearchCustomInfo:function(){this.DataDetails.customerName=this.customerSearchVal},changeCustomInfo:function(t){t.target.value||(this.DataDetails.customerName=this.customerSearchVal)},radioOnChange:function(t){var a=t.target.value;1===a?this.DataDetails.channelType=null:2===a?this.DataDetails.channelType=1:3===a&&(this.DataDetails.channelType=2)},getinteractradarList:function(){var t=this;Object(l["l"])({channelType:this.DataDetails.channelType}).then((function(a){t.XlistData=(null===a||void 0===a?void 0:a.data)||[]})).catch((function(a){t.$message.warning(a)}))},getChannelLog:function(){var t=this,a={radarId:this.$route.query.id,channelType:this.DataDetails.channelType,startDate:this.DataDetails.startDate,endDate:this.DataDetails.endDate};Object(l["b"])(a).then((function(a){var e,i;t.customerDataTwo=null===a||void 0===a||null===(e=a.data)||void 0===e||null===(i=e.channelStatistics)||void 0===i?void 0:i.map((function(t,a){return t.key=a,t}))})).catch((function(a){t.$message.warning(a)})).finally((function(){t.loadingTable=!1}))},getCustomerLog:function(){var t=this,a={radarId:this.$route.query.id,customerName:this.DataDetails.customerName,channelId:this.DataDetails.channelId,channelType:this.DataDetails.channelType,startDate:this.DataDetails.startDate,endDate:this.DataDetails.endDate,staffWxId:this.DataDetails.staffWxId,currentPage:this.pagination.current,pageSize:this.pagination.pageSize};this.loadingTable=!0,Object(l["c"])(a).then((function(a){var e,i,n;t.customerData=null===a||void 0===a||null===(e=a.data)||void 0===e||null===(i=e.list)||void 0===i?void 0:i.map((function(t,a){return t.key=a,t})),t.pagination.total=null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.total})).catch((function(a){t.$message.warning(a)})).finally((function(){t.loadingTable=!1}))},getinteractiveRadarInfo:function(){var t=this;Object(l["h"])(this.$route.query.id).then((function(a){var e,i,n,s,o,r;(t.formData=null===a||void 0===a?void 0:a.data,"link"===t.$route.query.type)?t.formData.tagRulesList=null===a||void 0===a||null===(n=a.data)||void 0===n||null===(s=n.tagRules)||void 0===s?void 0:s.map((function(t){return t.customerTags})).flat(1/0):t.formData.tagRulesList=null===a||void 0===a||null===(o=a.data)||void 0===o||null===(r=o.tagRules)||void 0===r?void 0:r.map((function(t){var a="",e="";return 0===t.ruleKind?(a="每打开一次",e="用户可评".concat(t.score,"分")):1===t.ruleKind?(a="按点击次数计算",e="为第".concat(t.count,"次点击雷达文章的用户")):2===t.ruleKind?(a="按转发次数计算",e="为转发次数超过".concat(t.count,"次的用户")):3===t.ruleKind?(a="按阅读时长计算",e="为单次阅读时长超过".concat(t.count,"分钟的用户")):4===t.ruleKind&&(a="单次阅读时长",e="用户可评".concat(t.count,"分")),t.ruleStr=a,t.ruleContent=e,t}));t.formData.scoreRules=null===a||void 0===a||null===(e=a.data)||void 0===e||null===(i=e.scoreRules)||void 0===i?void 0:i.map((function(t){var a="",e="";return 0===t.ruleKind?(a="每打开一次",e="用户可评".concat(t.score,"分")):1===t.ruleKind?(a="累计打开次数",e="达到".concat(t.count,"次的用户，可评").concat(t.score,"分")):2===t.ruleKind?(a="按转发次数",e="用户可评".concat(t.score,"分")):3===t.ruleKind?(a="按阅读时长",e="用户可评".concat(t.score,"分")):4===t.ruleKind&&(a="单次阅读时长",e="用户可评".concat(t.score,"分")),t.ruleStr=a,t.ruleContent=e,t}))})).catch((function(a){t.$message.warning(a)}))},getstatisticOverview:function(){var t=this,a={radarId:this.$route.query.id};Object(l["o"])(a).then((function(a){t.dataScreening=null===a||void 0===a?void 0:a.data})).catch((function(a){t.$message.warning(a)}))},onChange:function(t){this.ClickTimeTop10=t.target.value,this.TOP10Func()},TOP10Func:function(){var t,a,e,i,n,s=[],o=[];if(1!==this.ClickTimeTop10&&this.ClickTimeTop10){if(2===this.ClickTimeTop10){var r,l,c,d,u;null===(r=this.tOP10)||void 0===r||null===(l=r.data)||void 0===l||null===(c=l.fixedChannelClickTimeTop10)||void 0===c||c.map((function(t){s.push(t.channelNameCn),o.push(t.clickTime)})),this.peopleTopList=null===(d=this.tOP10)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.fixedChannelClickPeopleTop10}else if(3===this.ClickTimeTop10){var p,h,m,f,v;null===(p=this.tOP10)||void 0===p||null===(h=p.data)||void 0===h||null===(m=h.selfCreateChannelClickTimeTop10)||void 0===m||m.map((function(t){s.push(t.channelNameCn),o.push(t.clickTime)})),this.peopleTopList=null===(f=this.tOP10)||void 0===f||null===(v=f.data)||void 0===v?void 0:v.selfCreateChannelClickPeopleTop10}}else null===(t=this.tOP10)||void 0===t||null===(a=t.data)||void 0===a||null===(e=a.allChannelClickTimeTop10)||void 0===e||e.map((function(t){s.push(t.channelNameCn),o.push(t.clickTime)})),this.peopleTopList=null===(i=this.tOP10)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.allChannelClickPeopleTop10;this.xAxisList=s,this.seriesList=o},getstatisticDetail:function(){var t=this,a={radarId:this.$route.query.id,startDate:this.startTime,endDate:this.endTime};Object(l["n"])(a).then((function(a){t.tOP10=a,t.TOP10Func()})).catch((function(a){t.$message.warning(a)}))},resetCustomerSearch:function(){this.customerSearchVal="",this.clickChannelData=void 0,this.startOrEndTime=null,this.reactflag=!0,this.DataDetails={channelType:void 0,customerName:"",channelId:"",startDate:"",endDate:"",staffWxId:""}},handleFinishChange:function(t){this.DataDetails.channelId=t},selectCustom:function(t){"1"==t.empty?this.staffUserid=void 0:(this.reactflag=!1,this.staffUserid=t.userid),this.DataDetails.staffWxId=this.staffUserid},changeAddDate:function(t,a){this.showAddDateTime=t,a[0]?(this.startTime=a[0]+" 00:00:00",this.endTime=a[1]+" 23:59:59.999"):(this.startTime=void 0,this.endTime=void 0),this.getstatisticDetail()},detailsChangeAddDate:function(t,a){this.showAddDateTime=t,a[0]?(this.startTime=a[0]+" 00:00:00",this.endTime=a[1]+" 23:59:59.999"):(this.startTime=void 0,this.endTime=void 0),this.DataDetails.startDate=this.startTime,this.DataDetails.endDate=this.endTime},disabledDate:function(t){return t&&t>Date.now()}}},d=c,u=(e("75b0"),e("2877")),p=Object(u["a"])(d,i,n,!1,null,"7a34d568",null);a["default"]=p.exports}}]);