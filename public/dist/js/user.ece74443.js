(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"072b":function(e,t,r){},1037:function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a");var s=function(){var e=this,t=e._self._c;return t("a-result",{attrs:{isSuccess:!0,content:!1,title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"extra",fn:function(){return[t("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},a=[],i={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},o=i,n=r("2877"),c=Object(n["a"])(o,s,a,!1,null,"4a6c53ae",null);t["default"]=c.exports},1348:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main user-layout-register"},[t("h3",[t("span",[e._v(e._s(e.$t("user.register.register")))])]),t("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:e.$t("user.email.required")}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: $t('user.email.required') }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.register.email.placeholder")}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:["user-register",e.passwordLevelClass]},[e._v(e._s(e.$t(e.passwordLevelName)))]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v(e._s(e.$t("user.register.password.popover-message"))+" ")])])],1)]),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.password.placeholder")},on:{click:e.handlePasswordInputClick}})],1)],2),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.confirm-password.placeholder")}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:e.$t("user.phone-number.required"),pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: $t('user.phone-number.required'), pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:e.$t("user.login.mobile.placeholder")}},[t("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),t("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{staticClass:"gutter-row",attrs:{span:16}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),t("a-col",{staticClass:"gutter-row",attrs:{span:8}},[t("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1),t("a-form-item",[t("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v(e._s(e.$t("user.register.register"))+" ")]),t("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v(e._s(e.$t("user.register.sign-in")))])],1)],1)],1)},a=[],i=r("5530"),o=(r("498a"),r("b775")),n={Login:"/auth/login",Logout:"/auth/logout",ForgePassword:"/auth/forge-password",Register:"/auth/register",twoStepCode:"/auth/2step-code",SendSms:"/account/sms",SendSmsErr:"/account/sms_err",UserInfo:"/user/info",UserMenu:"/user/nav"};function c(e){return Object(o["b"])({url:n.SendSms,method:"post",data:e})}var l=r("705f"),u=r("ca00"),d={0:"user.password.strength.short",1:"user.password.strength.low",2:"user.password.strength.medium",3:"user.password.strength.strong"},p={0:"error",1:"error",2:"warning",3:"success"},h={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},g={name:"Register",components:{},mixins:[l["a"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,level:0,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return p[this.state.passwordLevel]},passwordLevelName:function(){return d[this.state.passwordLevel]},passwordLevelColor:function(){return h[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,r){if(""===t)return r();t.length>=6?(Object(u["l"])(t)>=30&&(this.state.level=1),Object(u["l"])(t)>=60&&(this.state.level=2),Object(u["l"])(t)>=80&&(this.state.level=3)):(this.state.level=0,r(new Error(this.$t("user.password.strength.msg")))),this.state.passwordLevel=this.state.level,this.state.percent=33*this.state.level,r()},handlePasswordCheck:function(e,t,r){var s=this.form.getFieldValue("password");void 0===t&&r(new Error(this.$t("user.password.required"))),t&&s&&t.trim()!==s.trim()&&r(new Error(this.$t("user.password.twice.msg"))),r()},handlePhoneCheck:function(e,t,r){r()},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,r=this.$router;e({force:!0},(function(e,s){e||(t.passwordLevelChecked=!1,r.push({name:"registerResult",params:Object(i["a"])({},s)}))}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state,a=this.$message,i=this.$notification;r(["mobile"],{force:!0},(function(e,r){if(!e){s.smsSendBtn=!0;var o=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(o))}),1e3),n=a.loading("验证码发送中..",0);c({mobile:r.mobile}).then((function(e){setTimeout(n,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(n,1),clearInterval(o),s.time=60,s.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},m=g,f=(r("6e68"),r("2568"),r("2877")),v=Object(f["a"])(m,s,a,!1,null,"3f0943cc",null);t["default"]=v.exports},"1f6f":function(e,t,r){},2568:function(e,t,r){"use strict";r("072b")},"6e68":function(e,t,r){"use strict";r("eda3")},ac2a:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"main"}})},a=[],i=r("5530"),o=(r("ac1f"),r("99af"),r("2f62")),n=r("ca00"),c={data:function(){return{}},computed:{redirect:function(){return this.$route.query.redirect},loginId:function(){return Object(n["f"])(this.redirect,"loginId")}},created:function(){this.loginId?this.login():this.enterpriseWeChat()},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["Login","Logout"])),{},{login:function(){var e=this,t={loginId:this.loginId};this.Login(t).then((function(t){return e.loginSuccess(t)})).catch((function(){e.enterpriseWeChat()}))},enterpriseWeChat:function(){var e=/wxwork/i.test(navigator.userAgent);e?this.wxlogin():this.weChat()},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(n["n"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})},wxlogin:function(){var e="https://open.weixin.qq.com/connect/oauth2/authorize";window.location.href="".concat(e,"?appid=").concat(LOGIN_info.APPIDWeChat,"&redirect_uri=").concat(LOGIN_info.LOGIN_CALLBACK_URL,"&state=vracleWang@acadsoc.com&scope=snsapi_privateinfo&response_type=code#wechat_redirect")},weChat:function(){var e="https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect",t="member";window.location.href="".concat(e,"?appid=").concat(LOGIN_info.APPID,"&redirect_uri=").concat(LOGIN_info.LOGIN_CALLBACK_URL,"&state=vracleWang@acadsoc.com&usertype=").concat(t)}})},l=c,u=(r("fdc9"),r("2877")),d=Object(u["a"])(l,s,a,!1,null,"22cddfd4",null);t["default"]=d.exports},eda3:function(e,t,r){},fdc9:function(e,t,r){"use strict";r("1f6f")}}]);