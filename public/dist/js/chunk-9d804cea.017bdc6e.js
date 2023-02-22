(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d804cea"],{"110b":function(t,e,a){"use strict";a.r(e);a("fb6a");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"staffRank"},[e("a-tabs",{attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:"拉新排行榜"}},[e("div",{staticStyle:{padding:"0px 15px"}},[e("a-button",{staticClass:"create-btn",attrs:{type:"primary"},on:{click:t.createRank}},[t._v("创建排行榜活动")]),e("div",{staticClass:"staff-table-content"},[e("header",{staticClass:"filter-header flex-row"},[e("div",{staticClass:"filter-box flex-row flex-wrap"},[e("div",{staticClass:"filter-item flex-row"},[e("label",[t._v("搜索活动：")]),e("a-input-search",{staticStyle:{width:"200px"},attrs:{allowClear:"",placeholder:"请输入活动名称"},on:{search:t.activeNameChange,pressEnter:t.activeNameChange},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}})],1),e("div",{staticClass:"filter-item flex-row"},[e("label",[t._v("指标类型：")]),e("a-select",{staticStyle:{width:"190px"},attrs:{placeholder:"请选择指标类型",allowClear:""},on:{change:t.handleChange},model:{value:t.rankingType,callback:function(e){t.rankingType=e},expression:"rankingType"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("邀请客户成为企微客户")]),e("a-select-option",{attrs:{value:"2"}},[t._v("邀请客户加入群聊")])],1)],1),e("div",{staticClass:"filter-item flex-row"},[e("label",[t._v("状态筛选：")]),e("a-select",{staticStyle:{width:"190px"},attrs:{placeholder:"请选择状态",allowClear:""},on:{change:t.statusChange},model:{value:t.dateType,callback:function(e){t.dateType=e},expression:"dateType"}},[e("a-select-option",{attrs:{value:"2"}},[t._v("进行中")]),e("a-select-option",{attrs:{value:"1"}},[t._v("未开始")]),e("a-select-option",{attrs:{value:"3"}},[t._v("已结束")])],1)],1)]),e("div",{staticClass:"reset-btn flex-row",staticStyle:{"justify-content":"flex-end"}},[e("a-button",{on:{click:t.reast}},[t._v("重置")])],1)]),e("div",{staticClass:"staff-table-box"},[e("a-table",{staticClass:"table",attrs:{columns:t.columns,pagination:t.pagination,"data-source":t.clientList,loading:t.tableLoading},on:{change:t.change},scopedSlots:t._u([{key:"time",fn:function(a){return e("div",{},[t._v(t._s(a.startTime)+"至"+t._s(a.endTime))])}},{key:"StaffList",fn:function(a){return e("div",{staticStyle:{display:"flex"}},[t._l(a.slice(0,1),(function(a,n){return e("a-tag",{key:n},[e("a-icon",{staticStyle:{color:"#7da3d1"},attrs:{type:"user"}}),t._v(" "+t._s(a)+" ")],1)})),t._v(" 共"+t._s(a.length)+"个成员 ")],2)}},{key:"operation",fn:function(a){return e("div",{},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$router.push({name:"leaderboardDetails",query:{idx:a.id,rankingType:a.rankingType}})}}},[t._v("详情")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.deletRank(a)}}},[t._v("删除")])],1)}}])})],1)])],1)])],1)],1)},i=[],r=(a("d3b7"),a("d81d"),a("a355")),s={name:"StaffRank",data:function(){return{rankingType:void 0,tableLoading:!1,dateType:void 0,activeName:void 0,pagination:{current:1,pageSize:10,total:0},clientList:[],columns:[{title:"活动名称",dataIndex:"activeName",key:"activeName"},{title:"排行指标",dataIndex:"rankingTxt",key:"rankingTxt"},{title:"参与员工/部门",dataIndex:"StaffList",key:"StaffList",scopedSlots:{customRender:"StaffList"}},{title:"状态",dataIndex:"stateTxt",key:"stateTxt"},{title:"活动时间",dataIndex:"time",key:"time",scopedSlots:{customRender:"time"}},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"操作",align:"right",dataIndex:"operation",key:"operation",scopedSlots:{customRender:"operation"}}]}},created:function(){this.getList()},methods:{deletRank:function(t){var e=this;this.$confirm({title:"提示",icon:"",okText:"确认",content:"删除后活动将自动结束，确定删除此排行榜活动吗？",onOk:function(){e.changeRank(t.id)}})},changeRank:function(t){var e=this;Object(r["f"])([t]).then((function(t){e.$message.success("删除成功"),e.pagination.current=1,e.getList()})).catch((function(t){e.$message.error(t)}))},createRank:function(){(new Date).valueOf();this.$router.push({name:"createLeaderboard",query:{state:"add"}})},activeNameChange:function(){this.pagination.current=1,this.getList()},handleChange:function(t){this.rankingType=t,this.pagination.current=1,this.getList()},statusChange:function(t){this.dateType=t,this.pagination.current=1,this.getList()},reast:function(){this.activeName=void 0,this.rankingType=void 0,this.dateType=void 0,this.pagination.current=1,this.getList()},getList:function(){var t=this;this.tableLoading=!0;var e,a={rankingType:this.rankingType,activeName:this.activeName,dateType:this.dateType};this.rankingType||delete a.rankingType,this.activeName||delete a.activeName,this.dateType||delete a.dateType,e="{}"==JSON.stringify(a)?void 0:JSON.stringify(a);var n={searchCtx:e,page:this.pagination.current,limit:this.pagination.pageSize};"1"==this.pagination.current&&(this.clientList=[]),Object(r["h"])(n).then((function(e){var a;null!==e&&void 0!==e&&null!==(a=e.data)&&void 0!==a&&a.list&&(t.pagination.total=e.data.totalCount,t.disposeClientList(e.data.list))})).catch((function(e){t.$message.error(e)})).finally((function(){t.tableLoading=!1}))},disposeClientList:function(t){var e=this;this.clientList=t.map((function(t){return t.time={startTime:t.startTime,endTime:t.endTime},t.joinStaffName&&(t.StaffList=t.joinStaffName.split(",")),"1"==t.rankingType?t.rankingTxt="邀请客户成为企微客户":t.rankingTxt="邀请客户加入群聊",e.$moment().isBefore(t.startTime)?t.stateTxt="未开始":e.$moment().isBefore(t.endTime)?t.stateTxt="进行中":t.stateTxt="已结束",t.key=t.id,Object.assign({operation:t},t)}))},change:function(t){var e=t.current;this.pagination.current=e,this.getList()}}},o=s,c=(a("1411"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"e788057e",null);e["default"]=l.exports},1411:function(t,e,a){"use strict";a("9298")},9298:function(t,e,a){},a355:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"i",(function(){return f})),a.d(e,"f",(function(){return g}));var n=a("b775"),i={staffRankSave:"/marketing/rankingactivity/save",staffRankDelete:"/marketing/rankingactivity/delete",staffRankUpdate:"/marketing/rankingactivity/update",staffRankInfo:"/marketing/rankingactivity/info/",staffRankList:"/marketing/rankingactivity/list",getactivitymemberrank:"/marketing/rankingactivitymember/getactivitymemberrank",getuserids:"/marketing/rankingactivitymember/rankingByStaff",rankingByDate:"/marketing/rankingactivitymember/rankingByDate",rankingByCustomer:"/marketing/rankingactivitymember/rankingByCustomer",rankingByGroup:"/marketing/rankingactivitymember/rankingByGroup"};function r(t){return Object(n["b"])({url:i.rankingByCustomer,method:"post",data:t})}function s(t){return Object(n["b"])({url:i.rankingByGroup,method:"post",data:t})}function o(t){return Object(n["b"])({url:i.rankingByDate,method:"post",data:t})}function c(t){return Object(n["b"])({url:i.getuserids,method:"post",data:t})}function l(t){return Object(n["b"])({url:i.getactivitymemberrank,method:"post",data:t})}function u(t){return Object(n["b"])({url:i.staffRankList,method:"post",data:t})}function d(t){return Object(n["b"])({url:i.staffRankInfo+t,method:"get"})}function f(t){return Object(n["b"])({url:i.staffRankSave,method:"post",data:t})}function g(t){return Object(n["b"])({url:i.staffRankDelete,method:"post",data:t})}}}]);