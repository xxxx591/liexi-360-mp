/**
 * 调用方式:
 * uppercase(str)  //小写转大写
 * lowercase(str)  //大写转小写
 *  @static
 *  @returns {str}
 * @memberof UtilService
 */
// 转换大写
const Rxports = {
	uppercase(string) {
		return this.isString(string) ? string.toUpperCase() : string;
	},
	// 转换小写
	lowercase(string) {
		return this.isString(string) ? string.toLowerCase() : string;
	},
	/**
	 * @description:jsonp url拼接参数
	 * @param
	 * @returns {*}
	 */
	paramJsonp(data) {
		let url = '';

		for (var k in data) {
			let value = data[k] !== undefined ? data[k] : '';

			url += '&' + k + '=' + encodeURIComponent(value);
		}
		return url ? url.substring(1) : '';
	},
	/**
	 * 是否字符串
	 * @static
	 * @param {*} value
	 * @returns {boolean}
	 *
	 * @memberof UtilService
	 */
	isString(value) {
		return typeof value === 'string';
	},
	// 获取cookie
	getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return (arr[2]);
		else
			return null;
	},
	// 设置cookie
	setCookie(c_name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
	},
	// 删除cookie
	delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	},
	// 计算字符串长度
	strLength(s) {
		var len = 0;
		for (let i = 0; i < s.length; i++) {
			if (s.charCodeAt(i) > 256) {
				len += 1;
			} else {
				len += 0.5;
			}
		}
		return parseInt(len);
	}
}
export default Rxports