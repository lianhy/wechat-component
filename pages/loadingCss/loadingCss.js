// pages/loadingCss/loadingCss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numEnum:1
  },
  addNum: function () {
    var that = this
    var num = that.data.numEnum + 1
    that.setData({
      numEnum: num
    })
  },
  reduceNum: function () {
    var that = this
    if (that.data.numEnum == 1) {
      wx.showToast({
        title: '不能少于1',
        icon: 'none',
        duration: 1500
      })
    } else {
      var num = that.data.numEnum - 1
      that.setData({
        numEnum: num
      })
    }
  },
})