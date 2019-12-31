// component/countdown/countdown.js
var common = require('../../utils/commonUtils.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    countTimeSeconds:String,
    countSeconds:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    time:'',
    timer:null

  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      var that = this
      clearInterval(that.data.timer)
    },
  },
  observers: {
    'countTimeSeconds': function (newVal) {
      var that = this
      if (common.notEmpty(newVal)) {
        that.countDown()
      }
    },
    'countSeconds': function (newVal) {
      var that = this
      if (newVal!=null) {
        that.countSeconds()
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countDown:function(){
      var that=this
      let endTime = new Date(that.properties.countTimeSeconds.replace(/-/g, '/')).getTime()
      that.setData({
        timer: setInterval(function () {
          let newTime = new Date().getTime()
          if (endTime > newTime) {
            let time = (endTime - newTime) / 1000
            var day = Math.floor(time / (60 * 60 * 24))
            // var hour = Math.floor(time % (60 * 60 * 24) / 3600)
            var hour = Math.floor(time / (60 * 60))
            var minute = Math.floor(time % (60 * 60 * 24) % 3600 / 60)
            var second = Math.floor(time % (60 * 60 * 24) % 3600 % 60)
            // if (day <= 9) day = '0' + day
            if (hour <= 9) hour = '0' + hour
            if (minute <= 9) minute = '0' + minute
            if (second <= 9) second = '0' + second
            var str = hour + ':' + minute + ':' + second
            that.setData({
              time: str
            })
          } else {
            clearInterval(that.data.timer)
          }

        }, 1000)
      })
    },
    countSeconds:function(){
      var that = this
      let endTime = that.properties.countSeconds
      that.setData({
        timer: setInterval(function () {
          if (endTime > 0) {
            endTime--
            that.setData({
              time: endTime
            })
          } else {
            clearInterval(that.data.timer)
          }
        }, 1000)
      })
    }
  }
})
