var util = require('../../utils/util.js')

Page({
  data: {
    shareMsg: "外部数据，通过properties内定义的属性传递",
    shareMsg2:""
  },
  onLoad: function () {
    var that = this
    that.setData({
      shareMsg: util.formatTime(new Date())
    })
  },
  changePageMsg: function (e, option) {
    var that = this
    that.setData({
      shareMsg2: e.detail.msg
    })
  },
  changeCompMsg:function(){
    var that = this
    that.setData({
      shareMsg: util.formatTime(new Date())
    })
  }
})
