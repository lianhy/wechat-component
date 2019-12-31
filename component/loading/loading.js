Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:false
  },

  observers: {
    'loading': function (newVal) {
      var that = this
      if (newVal !=null){
        that.setData({
          flag: newVal
        })
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
