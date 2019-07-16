//index.js
var util=require('../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    shareMsg:"外部数据，通过properties内定义的属性传递"
  },
  onLoad: function () {
    var that=this
    that.setData({
      shareMsg: util.formatTime(new Date())
    })
  },
  changesharemsg: function (e, option){
    console.log(e)
    var that = this
    that.setData({
      shareMsg: e.detail.msg
    })
  }
})
