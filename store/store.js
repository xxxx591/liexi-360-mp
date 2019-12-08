// import actions from './actions'
// import { api } from './api';
const api = {
  submit: '/blade-paper-testing/papertesting/submit',//论文提交接口 
  login: '/blade-auth/oauth/token',  //用户登陆接口
  register: '/blade-outapi/register/addUser',  //用户注册接口
  userInfo: '/blade-user/getUserInfo',  //获取当前用户信息
  orderList: '/blade-paper-testing/papertesting/list',  //list论文表格
  orderDetails: '/blade-api-paper/apipaper/detail',  //返回论文报告
}
let getRequestUrl = (params) => {
  let urlStr = ''; // String
  let serviceType = 'http://www.huntcopy.com:8715';
  let urlData = params || {};
  let name = 'baseUrl';
  if (urlData.hasOwnProperty('urlName')) {
    name = urlData.urlName;
  }
  urlStr = serviceType + urlData.url;
  return urlStr;
}
module.exports = {
  state: {
    BladeAuth: 'eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTIwMTY3MTc0NjY5MDI4OTY2NSIsInRva2VuX3R5cGUiOiJyZWZyZXNoX3Rva2VuIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE1NzYxNjg0OTIsIm5iZiI6MTU3NTU2MzY5Mn0.8gjjTd6AIQig9pc0OyAGg383ifMKGKOzy2-ZKmiJb98'

  },
  mutations: {
    changeTime(state, { time }) {
      state.time = time
    }
  },
  actions: {
    login({ commit }, params) {
      let url = getRequestUrl({
        url: api.login
      });
      qh.request({
        url: url, // 仅为示例，并非真实的接口地址
        method: 'POST',
        dataType: 'json',
        data: params,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization':'Basic c2FiZXI6c2FiZXJfc2VjcmV0'
        },
        success: function (res) {
          console.log(res.data);
          return res.data
        },
        fail: function (err) {
          return err

        }
      });
    },
  }
}