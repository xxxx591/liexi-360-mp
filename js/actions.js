import { api } from './api.js';
function getRequestUrl(params) {
  let urlStr = ''; // String
  let serviceType = URL[CONFIG.serviceType];
  let urlData = params || {};
  let name = 'baseUrl';
  if (urlData.hasOwnProperty('urlName')) {
      name = urlData.urlName;
  }
  urlStr = serviceType[name] + urlData.url;
  return urlStr;
}
const actions = { 
  // 获取json地址 
  getJson({ commit }, params) {
      let url =  params.JsonUrl
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      // return Http.request(url, params, { method: 'GET' }).then(rep => {
      //     const data = rep.data;
      //     return rep;
      // }, error => {
      //     return error;
      // });
      qh.request({
        url: url, // 仅为示例，并非真实的接口地址
        method: 'GET',
        dataType: 'json',
        data: params ,
        header: {
            'content-type': 'application/json' // 默认值
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
  submit({ commit }, params) {
      let url = getRequestUrl({
          url: api.submit
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      return Http.request(url, params, { method: 'POST' }).then(rep => {
          const data = rep.data;
          return rep;
      }, error => {
          return error;
      });
  },
  // 注册
  register({ commit }, params) {
      let url = getRequestUrl({
          url: api.register
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      return Http.request(url, params, { method: 'POST' }).then(rep => {
          const data = rep.data;
          return rep;
      }, error => {
          return error;
      });
  },
  userInfo({ commit }, params) {
      let url = getRequestUrl({
          url: api.userInfo
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      return Http.request(url, params, { method: 'GET' }).then(rep => {
          const data = rep.data;
          return rep;
      }, error => {
          return error;
      });
  },
  orderList({ commit }, params) {
      let url = getRequestUrl({
          url: api.orderList
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      return Http.request(url, params, { method: 'GET' }).then(rep => {
          const data = rep.data;
          return rep;
      }, error => {
          return error;
      });
  },
  orderDetails({ commit }, params) {
      let url = getRequestUrl({
          url: api.orderDetails
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      return Http.request(url, params, { method: 'GET' }).then(rep => {
          const data = rep.data;
          return rep;
      }, error => {
          return error;
      });
  },
  login({ commit }, params) {
      let url = getRequestUrl({
          url: api.login
      });
      //let url = 'http://ihrsit.midea.com/train/app/course/employee/game/gameRecord';
      // return Http.request(url, params, { method: 'POST_FORM_URLENCODED' }).then(rep => {
      //     const data = rep.data;
      //     return rep;
      // }, error => {
      //     return error;
      // });
      qh.request({
        url: url, // 仅为示例，并非真实的接口地址
        method: 'POST_FORM_URLENCODED',
        dataType: 'json',
        data: params ,
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
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

export default actions;