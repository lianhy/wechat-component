// component/share/share.js
var util=require('../../utils/util.js')
Component({
  /**
   * 组件的对外属性，是属性名到属性设置的映射表
   * 组件内部 遵循驼峰规则 引用页面外部使用"-"连接
   */
  properties: {
    shareMsg:String
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log('在组件实例进入页面节点树时执行')
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  observers: {
    'shareMsg': function (newVal) {
      console.log('节点数据发生变化时执行：' + newVal)
      var that=this
      that.setData({
        mag: newVal
      })
    }
  },
  pageLifetimes: {
    show: function () {
      // 引用页面被展示
      console.log('引用页面被展示')
    },
    hide: function () {
      // 引用页面被隐藏
      console.log('引用页面被隐藏')
    },
    resize: function (size) {
      // 引用页面尺寸变化
      console.log('引用页面尺寸变化')
    }
  },
  /**
   * 组件的内部数据，和 properties 一同用于组件的模板渲染
   */
  data: {
    msg:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //更改外部数据
    toOut:function(){
      var that=this
      var msg = util.formatTime(new Date())
      var option={
        "msg": msg
      }
      that.triggerEvent('intoout', option)
    }

  }
})
