/**
 * 重写ajax提交
 * @author OprCalf
 */


let cookie = {
    // 设置cookie
    setCookie: function (c_name, value, exminute) {
        var cookiestr = c_name + "=" + value + ";path=/";// 这个很重要代表在那个层级下可以访问cookie
        document.cookie = cookiestr;
    },
    // 读取token
    getCookie: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    },
    // 删除cookies
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = cookie.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";path=/;expires=" + exp.toGMTString();
    }
}
export default cookie