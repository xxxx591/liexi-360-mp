const api = { 
  submit:'/blade-paper-testing/papertesting/submit',//论文提交接口 
  login:'/blade-auth/oauth/token',  //用户登陆接口
  register:'/blade-outapi/register/addUser',  //用户注册接口
  userInfo:'/blade-user/getUserInfo',  //获取当前用户信息
  orderList:'/blade-paper-testing/papertesting/list',  //list论文表格
  orderDetails:'/blade-api-paper/apipaper/detail',  //返回论文报告
}
module.exports = {
  api
};