(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-221caf2e"],{"3d9c":function(t,e,n){},"7f0d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("ChannelList")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"channel-list"},[e("a-row",{staticClass:"search-hurdle",attrs:{type:"flex",justify:"space-between"}},[e("a-col",[e("a-space",{attrs:{size:12}},[e("a-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.$router.push({name:"addLabelGroup"})}}},[t._v("创建群邀请")])],1)],1),e("a-col",[e("a-space",{attrs:{size:18}},[e("a-input-search",{attrs:{allowClear:"",placeholder:"搜索任务名称"},on:{search:t.searchName},model:{value:t.codeName,callback:function(e){t.codeName=e},expression:"codeName"}})],1)],1)],1),e("a-table",{staticClass:"background-white",attrs:{"data-source":t.channelList,columns:t.columns,loading:t.loading,pagination:t.pagination},on:{change:t.change},scopedSlots:t._u([{key:"groupName",fn:function(n){return e("div",{},t._l(n,(function(n,a){return e("p",{key:a},[t._v(t._s(n))])})),0)}},{key:"tagNameList",fn:function(n){return e("div",{staticClass:"tag-name-list"},[n.length>0&&Array.isArray(n)?e("div",{class:[{mheight:n.length>=4}]},t._l(n,(function(n){return e("a-tag",{key:n.id,staticClass:"max-wd"},[t._v(" "+t._s(n.staffName)+" ")])})),1):e("div",[t._v("-")]),n.length>=4&&Array.isArray(n)?e("div",{staticClass:"clickable",on:{click:function(e){return t.openMore(e)}}},[e("span",[t._v("展开")])]):t._e()])}},{key:"operation",fn:function(n){return e("div",{},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.remindGruoup(n.tagPullId,n.noSendNum)}}},[t._v("提醒发送")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.$router.push({name:"labelGroupDetail",query:{tagPullId:n.tagPullId,state:"edit"}})}}},[t._v(" 详情 ")]),e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.deleteGruoup(n.tagPullId)}}},[t._v("删除")])],1)}}])}),e("a-modal",{attrs:{visible:t.visibleCodeTetail,footer:null,width:"600px",centered:""},on:{cancel:function(e){t.visibleCodeTetail=!1}}})],1)},u=[],o=n("5530"),c=(n("a9e3"),n("d3b7"),n("d81d"),n("b52b")),s={data:function(){return{codeName:"",columns:[{title:"任务名称",dataIndex:"taskName",key:"taskName",width:"160px",customRender:function(t){return t||"-"}},{title:"群名称",dataIndex:"groupName",key:"groupName",width:"140px",scopedSlots:{customRender:"groupName"}},{title:"发送邀请成员",dataIndex:"tagNameList",key:"tagNameList",width:"140px",scopedSlots:{customRender:"tagNameList"}},{title:"创建时间",dataIndex:"createTime",key:"createTime",scopedSlots:{customRender:"createTime"},customRender:function(t){return t||"-"}},{title:"已邀请客户",dataIndex:"inviteNum",key:"inviteNum"},{title:"已入群客户",dataIndex:"inGroupNum",key:"inGroupNum"},{title:"未发送成员",dataIndex:"noSendNum",key:"noSendNum"},{title:"未邀请客户",dataIndex:"noInviteNum",key:"noInviteNum"},{title:"操作",dataIndex:"operation",align:"right",key:"operation",scopedSlots:{customRender:"operation"}}],channelList:[],loading:!1,pagination:{current:1,pageSize:10,total:0},isOpen:!1,selectData:"",visibleCodeTetail:!1}},created:function(){this.getPageList()},methods:{deleteGruoup:function(t){var e=this;this.$confirm({title:"提示",icon:"",okText:"删除",content:"删除后将无法查看本次群发数据，是否确认删除？",onOk:function(){e.delGroupInfinte(t)}})},delGroupInfinte:function(t){var e=this;Object(c["f"])({tagPullId:t}).then((function(){var t;e.$message.success("删除成功"),1===(null===(t=e.channelList)||void 0===t?void 0:t.length)&&(e.pagination.current=e.pagination.current-1||1),e.getPageList()})).catch((function(t){e.$message.warning(t)}))},remindGruoup:function(t,e){var n=this;if(e<=0)this.$message.warning("无未发送成员");else{var a=Number(t);Object(c["i"])({tagPullId:a}).then((function(t){n.$message.success(t.data)})).catch((function(t){n.$message.warning(t)}))}},change:function(t){var e=t.current;this.pagination.current=e,this.getPageList()},getPageList:function(){var t=this,e={currentPage:this.pagination.current,pageSize:this.pagination.pageSize,keywords:this.codeName};this.loading=!0,Object(c["g"])(e).then((function(e){e.data&&(t.channelList=e.data.list.map((function(t){null!==t&&void 0!==t&&t.staffList?t.tagNameList=t.staffList:t.tagNameList=[];var e=Object(o["a"])(Object(o["a"])({},t),{},{key:t.tagPullId});return e.operation=e,e})),t.pagination.total=e.data.total)})).catch((function(e){t.$message.warning(e)})).finally((function(){return t.loading=!1}))},searchName:function(){this.getPageList()},openCodeDetail:function(t){this.selectData=t,this.visibleCodeTetail=!0},openMore:function(t){var e=t.currentTarget.previousElementSibling;e.className.indexOf("mheight")>-1?(t.currentTarget.firstElementChild.innerText="收起",e.classList.remove("mheight")):(t.currentTarget.firstElementChild.innerText="展开",e.classList.add("mheight"))}},components:{}},l=s,d=(n("e7c4"),n("2877")),g=Object(d["a"])(l,r,u,!1,null,"5c68c166",null),p=g.exports,m={components:{ChannelList:p}},f=m,h=Object(d["a"])(f,a,i,!1,null,"77cf40e0",null);e["default"]=h.exports},b52b:function(t,e,n){"use strict";n.d(e,"j",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o})),n.d(e,"i",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return p})),n.d(e,"f",(function(){return m}));var a=n("b775"),i={labelGroupList:"/client_group/tagBuildGroup/page",labelGroupAdd:"/client_group/tagBuildGroup/add",labelGroupDel:"/client_group/tagBuildGroup/delGroupTagPull",getChat:"/client_group/tagBuildGroup/getChat",getStatistics:"/client_group/tagBuildGroup/getStatistics",queryCustomers:"/client_group/tagBuildGroup/customer/get",customersDetail:"/client_group/tagBuildGroup/staff/get",remind:"/client_group/tagBuildGroup/remind",calculateNum:"/client_group/tagBuildGroup/calculateNum",updateDate:"/client_group/tagBuildGroup/getNewData"};function r(t){return Object(a["b"])({url:i.updateDate,method:"get",params:t})}function u(t){return Object(a["b"])({url:i.getChat,method:"get",params:t})}function o(t){return Object(a["b"])({url:i.calculateNum,method:"post",data:t})}function c(t){return Object(a["b"])({url:i.remind,method:"post",data:t})}function s(t){return Object(a["b"])({url:i.labelGroupList,method:"get",params:t})}function l(t){return Object(a["b"])({url:i.labelGroupAdd,method:"post",data:t})}function d(t){return Object(a["b"])({url:i.queryCustomers,method:"post",data:t})}function g(t){return Object(a["b"])({url:i.customersDetail,method:"post",data:t})}function p(t){return Object(a["b"])({url:i.getStatistics,method:"get",params:t})}function m(t){return Object(a["b"])({url:i.labelGroupDel,method:"post",params:t})}},e7c4:function(t,e,n){"use strict";n("3d9c")}}]);