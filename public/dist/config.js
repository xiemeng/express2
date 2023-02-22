//  生产配置地址
const PRD_VUE_APP_API_BASE_URL = 'https://scrm.kolify.cn/way'
// 本地测试地址
const DEV_VUE_APP_API_BASE_URL = '/api/way'

const ENTERPRICE_NAME = '阿卡索'
const redirect_uri = 'https://scrm.kolify.cn/way/authority/install/config/back' // 第三方授权用

const LOGIN_info = {
  LOGIN_CALLBACK_URL: 'https://scrm.kolify.cn/way/authority/provider/getCondition',
  APPID: 'wwe6b6d99818805c9b', // 浏览器扫码登录
  APPIDWeChat: 'ww7fa66e2548495cb5', // 企业微信自动登录
  AGENTID: '1000005'
}

const COURSE_INFO = {
  url: 'https://scrm.kolify.cn/way/qw_callback/qw/callback',
  token: 'cpySQHQq7Ka6C23r5tLGnN1IxQpja',
  encodingAESKey: 'dFLtlWb17SOvyQGNHOA5TNf3bmLh07oMttG8ItOUzQb',
  domain: 'scrm.kolify.cn',
}