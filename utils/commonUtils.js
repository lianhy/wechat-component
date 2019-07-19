//验证手机号
function mobile(value) {
  if (value.trim() !== '') {
    var regex = /^1[345789]\d{9}$/;
    return regex.test(value.trim());
  } else {
    return true;
  }
}
//验证非空
function notEmpty(value){
  return value != null && typeof(value)!=undefined && value.trim().length>0;
}
//获取当前页面
function getCurrentPageUrl() {
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  return url
}
module.exports = {
  phone: phone,
  notEmpty: notEmpty,
  getCurrentPageUrl: getCurrentPageUrl
}