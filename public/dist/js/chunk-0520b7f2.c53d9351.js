(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0520b7f2"],{b25d:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return p}));var i=n("b775"),a={productinfoList:"/custservice/productinfo/list",productinfoInfo:"/custservice/productinfo/info",productinfoSave:"/custservice/productinfo/save",productinfoUpdate:"/custservice/productinfo/update",productinfoDelete:"/custservice/productinfo/delete",productinfoSyncProduct:"/custservice/productinfo/syncProduct",uploadAttachment:"/client_group/upload/uploadAttachment"};function r(t){return Object(i["b"])({url:a.productinfoList,method:"post",data:t})}function c(t){return Object(i["b"])({url:a.productinfoInfo,method:"get",params:t})}function o(t){return Object(i["b"])({url:a.productinfoSave,method:"post",data:t})}function u(t){return Object(i["b"])({url:a.productinfoUpdate,method:"post",data:t})}function d(t){return Object(i["b"])({url:a.productinfoDelete,method:"post",data:t})}function s(t){return Object(i["b"])({url:a.productinfoSyncProduct,method:"post",data:t})}function p(t){return Object(i["b"])({url:a.uploadAttachment,method:"post",data:t})}},ed9b:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a"),n("b680"),n("a9e3");var i=function(){var t=this,e=t._self._c;return e("div",[e("a-page-header",{staticClass:"page-header background-white",attrs:{title:"".concat(t.isAddText,"商品")},on:{back:function(e){return t.$router.go(-1)}}}),e("section",{staticClass:"section background-white"},[e("a-form",{attrs:{"label-col":{span:2},"wrapper-col":{span:8}},on:{submit:t.handleSubmit}},[e("p",{staticClass:"base-info"},[t._v("基础信息")]),e("a-form-item",{attrs:{label:"商品名称",required:""}},[e("a-input",{attrs:{placeholder:"请输入商品名称",maxLength:300},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),e("a-form-item",{attrs:{label:"商品价格(元)",required:""}},[e("a-input-number",{staticStyle:{width:"200px"},attrs:{min:0,placeholder:"请输入价格",formatter:function(t){return Number(t).toFixed(2)}},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),e("a-form-item",{attrs:{label:"商品编码"}},[e("a-input",{attrs:{maxLength:128,onkeyup:"value=value.replace(/[^\\w\\.\\/]/ig,'')",placeholder:"请输入商品编码"},model:{value:t.product_sn,callback:function(e){t.product_sn=e},expression:"product_sn"}})],1),e("a-form-item",{attrs:{label:"商品图片",required:""}},[e("FormList",{staticClass:"input",attrs:{formInfo:t.attachObj}}),e("p",{staticStyle:{color:"red"}},[t._v("图片最多不能超过9张")])],1),e("a-form-item",{attrs:{"wrapper-col":{span:12,offset:2}}},[e("a-button",{attrs:{type:"primary","html-type":"submit",loading:t.loading}},[t._v(" 确定 ")])],1)],1)],1)],1)},a=[],r=n("c7eb"),c=n("1da1"),o=n("5530"),u=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("26f2")),d=n("b25d"),s={name:"AddGood",components:{FormList:u["a"]},data:function(){return{isAddText:"添加",loading:!1,attachObj:{title:"图片",prop:"pic_url",type:"imgList",tips:"",fileList:[],accept:".jpg,.png",maxNum:9,maxLength:2097152,value:[]},price:"",product_sn:"",description:""}},created:function(){},computed:{status:function(){return this.$route.query.status},id:function(){return this.$route.query.id}},watch:{status:{handler:function(){"edit"===this.status&&this.productinfoInfoFun(this.id)},immediate:!0}},methods:{changeNum:function(){this.price=Number(this.price).toFixed(2),this.$forceUpdate()},handleSubmit:function(t){var e=this;t.preventDefault(),this.validateFields().then((function(){e.productinfoSaveFun()})).catch((function(t){e.$message.warning(t)}))},productinfoInfoFun:function(t){var e=this;Object(d["b"])({id:t}).then((function(t){null!==t&&void 0!==t&&t.data&&(e.price=t.data.price/100,e.product_sn=t.data.product_sn,e.description=t.data.description,e.attachObj.value=t.data.attachments.map((function(t,e){return Object(o["a"])(Object(o["a"])({},t),{},{uid:e,name:"image.png",status:"done",img_path:t.image.img_path,media_id:t.image.media_id,url:t.image.img_path})})))})).catch((function(t){e.$message.error(t)}))},productinfoSaveFun:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var n,i;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.uploadFile();case 3:n=t.getParams(),i="edit"===t.status?d["f"]:d["d"],i(n).then((function(e){t.$message.success("".concat("edit"===t.status?"编辑":"新增","商品成功")),t.$router.go(-1)})).catch((function(e){t.$message.error(e)})).finally((function(){t.loading=!1}));case 6:case"end":return e.stop()}}),e)})))()},validateFields:function(){var t=this;return new Promise((function(e,n){t.description||n("商品名称不能为空"),t.price||n("商品价格不能为空"),t.price&&t.price>5e4&&n("商品价格不能超过5w"),t.attachObj.value<1&&n("商品图片最少上传一张"),e()}))},getParams:function(){var t={id:this.id,description:this.description,price:100*this.price,product_sn:this.product_sn,attachments:this.attachObj.value.map((function(t){return{type:"image",image:{img_path:t.img_path,media_id:t.media_id}}}))};return t},uploadFile:function(){var t=this;return new Promise((function(e,n){var i=t.attachObj.value.map((function(t){return new Promise((function(e,n){var i=new FormData;i.append("file",t.originFileObj),i.append("dir","product"),i.append("mediaType","image"),i.append("attachmentType",2),t.url?e():Object(d["g"])(i).then((function(n){t.img_path=n.data.fileUrl,t.media_id=n.data.mediaId,e(n)})).catch((function(t){n(t)}))}))}));Promise.all(i).then((function(t){e()})).catch((function(e){t.$message.error(e||e.message),t.loading=!1,n(e)}))}))}}},p=s,f=(n("fa6c"),n("2877")),l=Object(f["a"])(p,i,a,!1,null,"4345e8b2",null);e["default"]=l.exports},fa6c:function(t,e,n){"use strict";n("fc86")},fc86:function(t,e,n){}}]);