(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ba299b0"],{"14d7":function(t,e,i){},"32ef":function(t,e,i){t.exports=i.p+"assets/upload-file.a5a8ceeb.svg"},"568b":function(t,e,i){"use strict";i("14d7")},6178:function(t,e,i){"use strict";i("735a")},"735a":function(t,e,i){},b9cd:function(t,e,i){"use strict";i.d(e,"l",(function(){return a})),i.d(e,"j",(function(){return o})),i.d(e,"o",(function(){return n})),i.d(e,"n",(function(){return l})),i.d(e,"b",(function(){return s})),i.d(e,"g",(function(){return r})),i.d(e,"d",(function(){return d})),i.d(e,"a",(function(){return c})),i.d(e,"f",(function(){return u})),i.d(e,"k",(function(){return f})),i.d(e,"i",(function(){return p})),i.d(e,"e",(function(){return v})),i.d(e,"p",(function(){return m})),i.d(e,"c",(function(){return g})),i.d(e,"h",(function(){return b})),i.d(e,"q",(function(){return h})),i.d(e,"m",(function(){return x}));var a="LOSS_STATUS",o="GROUP_STATUS",n="ORDER_WAY",l="ORDER_CONDITION",s="ADD_WAY",r="GENDER",d="CUSTOMER_STATUS",c={0:"待分配",1:"待添加",2:"待通过",3:"已添加",4:"导入中"},u={1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六",7:"周日"},f=[{text:"未发送",color:"#ffc2c2",id:0},{text:"已发送",color:"",id:1},{text:"已不是好友",color:"#ffd4b6",id:2},{text:"客户接收达上限",color:"#fbe8ae",id:3},{text:"本月消息已经达到上限",color:"",id:4}],p=[{text:"未发送",color:"#ffc2c2",id:0},{text:"已发送",color:"",id:2},{text:"没有群发任务",color:"",id:4}],v={1:"微信",2:"企业微信"},m=[{id:"immediately",value:"立即发送"},{id:"timing",value:"定时发送"}],g={0:"渠道码",1:"区域扫码",2:"自动拉群",3:"一客一码",4:"加好友",5:"通过群码拉群"},b={0:{text:"拉人中",color:"green"},1:{text:"未开始",color:""},2:{text:"已达上限",color:"orange"},3:{text:"已停用",color:"red"}},h={0:{text:"创建失败",color:"green",id:0},1:{text:"待发送",color:"rgba(34,34,34,.85)",id:1},2:{text:"已发送",color:"rgba(34,34,34,.85)",id:2},3:{text:"已取消",color:"rgba(34,34,34,.85)",id:3},4:{text:"提醒发送",color:"#1890ff",id:4}},x=[{text:"文章",id:"0",format:""},{text:"链接",id:"1"},{text:"海报",id:"2",max:2,format:".bmp,.jpg,.jpeg,.png,.tif,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw,.WMF,.webp",tips:"请上传png、jpg格式不超过2M的文件"},{text:"视频",id:"7",max:2e5,format:".MP4",tips:"请上传格式为MP4的视频文件"},{text:"PDF",id:"3",max:20,format:".pdf",icon:"/icons/pdf.png",tips:"请上传PDF格式不超过20M的文件"},{text:"PPT",id:"4",max:20,format:".pptx,.ppt,.pps",icon:"/icons/ppt.svg",tips:"请上传PPT格式不超过20M的文件"},{text:"表格",id:"5",max:20,format:".xlsx,.xls,.csv",icon:"/icons/excel.svg",tips:"请上传csv、xlsx格式不超过20M的文件"},{text:"文档",id:"6",max:20,format:".txt,.doc,.docx",icon:"/icons/word.svg",tips:"请上传doc、txt.docx格式不超过20M的文件"}]},de6b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("a-page-header",{staticClass:"page-header background-white",attrs:{title:"新建雷达PDF"},on:{back:function(e){return t.$router.go(-1)}}}),e("div",{staticStyle:{padding:"16px"}},[e("div",{staticClass:"page-content"},[e("h2",{staticStyle:{"font-size":"15px"}},[t._v("基本信息")]),e("a-divider",{staticStyle:{margin:"12px 0"}}),e("div",{staticClass:"yellow-tips"},[e("a-icon",{staticStyle:{color:"#faad14","margin-right":"6px"},attrs:{type:"bell"}}),e("span",[t._v("提示：上传PDF后将自动转化为网页链接，员工发送给客户后可记录客户的阅读时长和分享数据")])],1),e("a-form-model",{attrs:{"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[e("a-form-model-item",{attrs:{label:"雷达标题",required:""}},[e("a-input",{staticStyle:{width:"450px"},attrs:{maxLength:15,disabled:t.isSuccet,placeholder:"名称不会展示给用户，用于企业记录渠道名称或使用场景"},model:{value:t.activityTitle,callback:function(e){t.activityTitle=e},expression:"activityTitle"}})],1),e("a-form-model-item",{attrs:{label:"雷达PDF",required:""}},[e("div",[e("Upload",{attrs:{selectMaterial:t.selectMaterial,uploadFileDict:t.uploadFileDict,url:t.imageUrl},on:{input:t.uploadFile}})],1)]),e("a-form-model-item",{attrs:{label:"成员名片"}},[e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{display:"flex"}},[e("div",[e("a-switch",{attrs:{size:"small"},model:{value:t.businessCard,callback:function(e){t.businessCard=e},expression:"businessCard"}})],1),e("div",{staticStyle:{"margin-left":"8px",width:"50px"}},[t._v("已开启")])]),e("div",{staticStyle:{width:"590px",color:"rgba(0,0,0,.45)","font-size":"13px","margin-left":"8px","line-height":"18px","margin-top":"10px"}},[t._v(" 开启后，将会在雷达PDF页面展示发送成员的名片（适用于在渠道活码、欢迎语、侧边栏、客户群发、客户群群发、企业朋友圈、群日历、群sop、锁客二维码发送的雷达PDF） ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.businessCard,expression:"businessCard"}],staticStyle:{display:"flex"}},[e("div",[e("p",{staticStyle:{color:"#262626","margin-bottom":"16px","font-weight":"600"}},[t._v("PDF顶部展示：")]),e("img",{staticStyle:{height:"496px"},attrs:{src:"/imgs/interactive-article.png",alt:""}})]),e("div",[e("p",{staticStyle:{color:"#262626","margin-bottom":"16px","font-weight":"600"}},[t._v("成员企业微信展示：")]),e("img",{staticStyle:{height:"496px"},attrs:{src:"/imgs/interactive-qrcode.png",alt:""}}),e("p",{staticStyle:{color:"rgba(0,0,0,.45)","font-size":"12px"}},[t._v("* 此二维码只是样式预览效果，请勿直接使用")])])])])],1),e("h2",{staticStyle:{"font-size":"15px"}},[t._v("PDF追踪设置")]),e("a-divider",{staticStyle:{margin:"12px 0"}}),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("a-checkbox",{model:{value:t.actionNotice,callback:function(e){t.actionNotice=e},expression:"actionNotice"}},[t._v(" 行为通知 "),e("span",{staticStyle:{color:"#909090"}},[t._v(" （当客户点击雷达PDF时，发送雷达PDF的员工将会收到消息提醒） ")])])],1),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("a-checkbox",{model:{value:t.dynamicNotification,callback:function(e){t.dynamicNotification=e},expression:"dynamicNotification"}},[t._v(" 动态通知 "),e("span",{staticStyle:{color:"#909090"}},[t._v(" （当客户点击雷达PDF时，会将客户的打开行为、阅读时长和阅读完成率记录在客户动态里） ")])])],1),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("a-checkbox",{model:{value:t.customerLabel,callback:function(e){t.customerLabel=e},expression:"customerLabel"}},[t._v(" 客户标签 "),e("span",{staticStyle:{color:"#909090"}},[t._v(" （给点击雷达PDF的客户打上对应规则的标签） ")])])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.customerLabel,expression:"customerLabel"}],staticStyle:{"margin-bottom":"15px"}},[e("TableAddpdf",{attrs:{dataSourceList:t.TableAddpdfDataSource},on:{funcData:t.dataSourceListDataAddpdf}})],1),e("div",{staticStyle:{"margin-bottom":"15px"}},[e("a-checkbox",{model:{value:t.setCustomerRatings,callback:function(e){t.setCustomerRatings=e},expression:"setCustomerRatings"}},[t._v(" 设置客户评分 ")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.setCustomerRatings,expression:"setCustomerRatings"}],staticStyle:{"margin-bottom":"15px"}},[e("TableAddpdfTwo",{attrs:{dataSourceList:t.TableAddpdfDataSourceTwo},on:{funcData:t.dataSourceTwo}})],1),e("a-button",{attrs:{type:"primary",size:"large",loading:t.activityLoading},on:{click:t.addData}},[t._v(" "+t._s(t.buttonData)+" ")])],1)])],1)},o=[],n=i("c7eb"),l=i("53ca"),s=i("1da1"),r=(i("d81d"),i("7db0"),i("d3b7"),i("a15b"),i("b64b"),i("c844")),d=i("69e4"),c=i("fe6f"),u=(i("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"upload-wrap"},[t.fileList.length<1?e("div",{staticClass:"upload-file"},[e("div",[e("img",{staticClass:"upload-icon",attrs:{src:i("32ef"),alt:"上传"}}),e("p",{staticClass:"tips"},[t._v(t._s(t.formatType.tips))]),e("a-upload",{attrs:{"list-type":"picture",accept:t.accept,fileList:t.fileList,showUploadList:!1,"before-upload":t.beforeUpload,customRequest:t.customRequest},on:{change:t.handleChange}},[e("a-button",{attrs:{type:"primary"}},[t._v("选择文件")])],1)],1)]):e("div",{staticClass:"preview"},[e("div",{staticClass:"preview-detail"},["2"===t.selectMaterial?e("div",{staticClass:"uploadImg-wrap"},[e("img",{staticClass:"uploadImg",attrs:{src:t.uploadImg}})]):e("div",{staticClass:"document"},[e("div",{staticClass:"document-left"},[e("a-tooltip",{attrs:{title:t.uploadFile.name}},[e("p",[t._v(t._s(t.uploadFile.name))])]),e("span",[t._v(t._s(t._f("getUnits")(t.uploadFile.size)))])],1),e("img",{staticClass:"icon-img",attrs:{src:t.formatType.icon}})]),e("a-upload",{attrs:{"list-type":"picture",accept:t.accept,fileList:t.fileList,showUploadList:!1,"before-upload":t.beforeUpload,customRequest:t.customRequest},on:{change:t.handleChange}},[e("a-button",{attrs:{type:"link",icon:"sync"}},[t._v(" 重新上传 ")])],1)],1)])])}),f=[],p=i("ca00"),v=i("b9cd"),m={name:"Upload",props:{value:{type:String,default:""},selectMaterial:{type:String,default:""},title:{type:String,default:""},loading:{type:Boolean,default:!1},url:{type:String,default:""},uploadFileDict:{type:Object,default:function(){}}},data:function(){return{visibleUpload:!1,accept:"",visibleTags:!1,uploadImg:"",checked:!1,uploadFile:"",fileList:[]}},filters:{getUnits:function(t){return Object(p["b"])(t)}},computed:{formatType:function(){var t=this;return v["m"].find((function(e){return e.id==t.selectMaterial}))}},created:function(){this.accept=this.formatType.format},watch:{value:function(){this.visibleUpload=this.value},uploadFileDict:{handler:function(){this.uploadFile={name:this.uploadFileDict.name||"2.0版本.pdf",size:this.uploadFileDict.size||0}},deep:!0},url:function(){this.url&&(this.fileList=[{uid:"-1",name:"image.png",status:"done",url:this.url}],this.uploadImg=this.url)}},methods:{customRequest:function(t){this.uploadFile=t.file,t.onSuccess()},beforeUpload:function(t){var e=t.size/1024/1024<this.formatType.max;return e||this.$message.error("文件不能大于".concat(this.formatType.max,"MB!")),e},handleChange:function(t){var e,i,a=this;2==this.selectMaterial&&Object(p["g"])(null===t||void 0===t||null===(e=t.file)||void 0===e?void 0:e.originFileObj).then((function(t){a.uploadImg=t[1]})),"uploading"===t.file.status&&(this.fileList=[t.fileList[t.fileList.length-1]],this.fileList[0].status="done"),this.$emit("input",null===t||void 0===t||null===(i=t.fileList[t.fileList.length-1])||void 0===i?void 0:i.originFileObj)}}},g=m,b=(i("568b"),i("2877")),h=Object(b["a"])(g,u,f,!1,null,"4fc73be0",null),x=h.exports,y=i("d885"),w={data:function(){return{paramDict:{},buttonData:"",TableAddpdfDataSource:[],TableAddpdfDataSourceTwo:[],uploadFileDict:{},imageUrl:"",formData:{},activityLoading:!1,selectMaterial:"3",businessCard:!0,visibleTag:!1,actionNotice:!0,dynamicNotification:!0,customerLabel:!1,setCustomerRatings:!1,isSuccet:!1,activityTitle:"",activityUrl:"",linkTitle:"",linkSummary:"",labelCol:{span:2},wrapperCol:{span:12}}},components:{SelectTags:r["a"],TableAddpdf:d["a"],Upload:x,TableAddpdfTwo:c["a"]},created:function(){this.init()},methods:{init:function(){"add"===this.$route.query.state?this.buttonData="创建雷达链接":"edit"===this.$route.query.state&&(this.editFunc(),this.isSuccet=!0,this.buttonData="保存")},editFunc:function(){var t=this;Object(y["h"])(this.$route.query.id).then((function(e){var i,a,o,n,l,s,r,d,c,u,f,p,v,m,g,b,h;t.paramDict=null===e||void 0===e?void 0:e.data,t.activityTitle=null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.radarName,t.imageUrl=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.fileUrl,t.uploadFileDict={name:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.fileName,size:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.fileSize},t.actionNotice=1===(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.behaviorNotify),t.dynamicNotification=1===(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.activityNotify),t.customerLabel=(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(d=r.tagRules)||void 0===d?void 0:d.length)>0,t.setCustomerRatings=(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(u=c.scoreRules)||void 0===u?void 0:u.length)>0,t.businessCard=1===(null===e||void 0===e||null===(f=e.data)||void 0===f?void 0:f.businessCard),t.TableAddpdfDataSource=null===e||void 0===e||null===(p=e.data)||void 0===p||null===(v=p.tagRules)||void 0===v?void 0:v.map((function(t){var e;return{id:t.id,defaultValue:{1:"1",3:"2",2:"3"}[t.ruleKind],grade:null===t||void 0===t?void 0:t.count,fraction:null===t||void 0===t?void 0:t.score,switchData:(null===t||void 0===t||null===(e=t.customerTags)||void 0===e?void 0:e.length)>0,selectTagList:(null===t||void 0===t?void 0:t.customerTags)||[]}}));var x=null===e||void 0===e||null===(m=e.data)||void 0===m||null===(g=m.scoreRules)||void 0===g?void 0:g.find((function(t){return 0===t.ruleKind}));t.TableAddpdfDataSourceTwo=null===e||void 0===e||null===(b=e.data)||void 0===b||null===(h=b.scoreRules)||void 0===h?void 0:h.map((function(t){var e;return{id:t.id,defaultValue:{0:"1",1:"2",4:"3"}[t.ruleKind],grade:null===t||void 0===t?void 0:t.count,fraction:null===t||void 0===t?void 0:t.score,switchData:(null===t||void 0===t||null===(e=t.customerTags)||void 0===e?void 0:e.length)>0,selectTagList:(null===t||void 0===t?void 0:t.customerTags)||[],disabledData:!!x}}))})).catch((function(e){t.$message.warning(e)}))},uploadFile:function(t){this.formData.NewCustomerFile=t},dataSourceListDataAddpdf:function(t){this.formData.dataSource=t},dataSourceTwo:function(t){this.formData.dataSourceTwo=t},addData:function(){var t=this;return Object(s["a"])(Object(n["a"])().mark((function e(){var i,a,o,s,r,d,c,u,f,p,v,m,g;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.activityTitle){e.next=3;break}return t.$message.warning("请填写雷达名称"),e.abrupt("return");case 3:if("add"!==t.$route.query.state){e.next=7;break}if(t.formData.NewCustomerFile){e.next=7;break}return t.$message.warning("请上传PDF"),e.abrupt("return");case 7:if(o=null===(i=t.formData)||void 0===i?void 0:i.dataSource,!t.customerLabel){e.next=15;break}if(o){e.next=12;break}return t.$message.warning("请填写次数"),e.abrupt("return",!1);case 12:if(s=null===o||void 0===o?void 0:o.every((function(e,i){if("1"===e.defaultValue){var a;if(!e.grade)return t.$message.warning("请填写次数"),!1;if((null===(a=e.selectTagList)||void 0===a?void 0:a.length)<1)return t.$message.warning("请选择标签"),!1}else if("2"===e.defaultValue){var o;if(!e.grade)return t.$message.warning("请填写分钟数"),!1;if((null===(o=e.selectTagList)||void 0===o?void 0:o.length)<1)return t.$message.warning("请选择标签"),!1}else if("3"===e.defaultValue){var n;if(!e.grade)return t.$message.warning(" 请填写人数"),!1;if((null===(n=e.selectTagList)||void 0===n?void 0:n.length)<1)return t.$message.warning("请选择标签"),!1}return!0})),s){e.next=15;break}return e.abrupt("return");case 15:if(r=null===o||void 0===o?void 0:o.map((function(t){var e,i=null===t||void 0===t||null===(e=t.selectTagList)||void 0===e?void 0:e.map((function(t){return t.bitmap||t.tagBitmap})).join(",");return{id:t.id,type:1,count:t.grade||void 0,ruleKind:{1:1,2:3,3:2}[t.defaultValue],autoMarkTagBitmaps:i||""}})),d=null===(a=t.formData)||void 0===a?void 0:a.dataSourceTwo,!t.setCustomerRatings){e.next=24;break}if(d){e.next=21;break}return t.$message.warning("请填写评分"),e.abrupt("return",!1);case 21:if(s=null===d||void 0===d?void 0:d.every((function(e,i){if("1"===e.defaultValue){if(!e.fraction)return t.$message.warning("请填写评分"),!1}else if("2"===e.defaultValue){if(!e.grade)return t.$message.warning("次数不可小于0"),!1;if(!e.fraction)return t.$message.warning("请填写评分"),!1}else if("3"===e.defaultValue){if(!e.grade)return t.$message.warning("时长不可小于0"),!1;if(!e.fraction)return t.$message.warning("请填写评分"),!1}var a;if(e.switchData&&(null===(a=e.selectTagList)||void 0===a?void 0:a.length)<1)return t.$message.warning("请选择标签"),!1;return!0})),s){e.next=24;break}return e.abrupt("return");case 24:c=null===d||void 0===d?void 0:d.map((function(e){var i,a=null===e||void 0===e||null===(i=e.selectTagList)||void 0===i?void 0:i.map((function(t){return t.bitmap||t.tagBitmap})).join(",");return{id:e.id,type:2,count:e.grade||void 0,ruleKind:{1:0,2:1,3:4}[e.defaultValue],score:e.fraction,hasTag:e.switchData?1:0,autoMarkTagBitmaps:t.setCustomerRatings?a:""}})),u={radarName:t.activityTitle,type:"2",businessCard:t.businessCard||void 0===t.businessCard?1:0,author:"",content:"",channelId:"",isRadar:"",title:t.linkTitle,desc:t.linkSummary,link:t.activityUrl,behaviorNotify:void 0===t.actionNotice||t.actionNotice?1:0,activityNotify:void 0===t.dynamicNotification||t.dynamicNotification?1:0,hasCustomerTag:t.customerLabel?1:0,tagRule:t.customerLabel?r:[],scoreRule:t.setCustomerRatings?c:[]},f=new FormData,p=Object.keys(u),t.formData.NewCustomerFile&&f.append("file",t.formData.NewCustomerFile),null===p||void 0===p||p.map((function(t){"object"===Object(l["a"])(u[t])?f.append(t,JSON.stringify(u[t])):f.append(t,u[t])})),t.activityLoading=!0,"add"===t.$route.query.state?Object(y["f"])(f).then((function(e){0===(null===e||void 0===e?void 0:e.statusCode)?(t.$message.success("雷达创建成功"),t.$router.go(-1)):t.$message.warning(null===e||void 0===e?void 0:e.msg)})).catch((function(e){t.$message.warning(e)})).finally((function(){t.activityLoading=!1})):"edit"===t.$route.query.state&&(u=Object.assign(t.paramDict,u),v=new FormData,m=Object.keys(u),g=["createTime","creatorName","creatorId","scoreRules","tagRules","autoMarkTagNames","errMsg","isShowSenderInfo","fileId","fileName","fileSize","fileType","fileUrl"],null===m||void 0===m||m.map((function(t){-1!==g.indexOf(t)||("object"===Object(l["a"])(u[t])?v.append(t,JSON.stringify(u[t])):v.append(t,u[t]))})),Object(y["k"])(v).then((function(e){0===(null===e||void 0===e?void 0:e.statusCode)?(t.$message.success("雷达修改成功"),t.$router.go(-1)):t.$message.warning(null===e||void 0===e?void 0:e.msg)})).catch((function(e){t.$message.warning(e)})).finally((function(){t.activityLoading=!1})));case 32:case"end":return e.stop()}}),e)})))()}}},S=w,T=(i("6178"),Object(b["a"])(S,a,o,!1,null,"4e08806e",null));e["default"]=T.exports}}]);