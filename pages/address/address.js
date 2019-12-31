var URL=require('../../config/url-config.js')
var COMMON=require('../../utils/commonUtils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData: [],//当前的地址列表
    chose: 0,//所选等级
    address: {
      prov: null,
      city: null,
      direct: null,
    },//所选地址数据
    key: '',//腾讯开放平台获取（https://lbs.qq.com/guides/startup.html）
    code:null,
    flag:false,
    loading:false,
    pcd:'',
    addressChose:null
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      addressData: that.data.prov
    })
    that.getChildren()
  },
  getChildren:function(status){
    var that = this
    var data={
      key: that.data.key
    }
    if (COMMON.notEmpty(that.data.code)){
      data.id = that.data.code
    }
    wx.request({
      url: URL.getChildren,
      data: data,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        if (res.data.status == 0){
          that.setData({
            addressData:res.data.result[0]
          })
        }
      }
    })
  },
  /**
   * 重新获取上一级数据
   */
  resetAdd: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var address = that.data.address
    var code=""
    if (index == 0) {
      address.prov = null
      address.city = null
      address.direct = null
    } else if (index == 1) {
      address.city = null
      address.direct = null
      code = address.prov.id
    } else if (index == 2) {
      address.direct = null
      code = address.city.id
    }
    that.setData({
      address: address,
      chose: index,
      code: code
    })
    that.getChildren()

  },
  /**
   * 获取下一级数据
   */
  choseAdd: function (e) {
    var that = this
    var chose = that.data.chose
    var index = e.currentTarget.dataset.index
    var address = that.data.address
    var addressData = that.data.addressData[index]
    if (chose == 0) {
      address.prov = addressData
    } else if (chose == 1) {
      address.city = addressData
    } else if (chose == 2) {
      address.direct = addressData
    }
    if (chose < 2) {
      chose++
      that.setData({
        chose: chose,
        code: addressData.id
      })
      that.getChildren()
    }else{
      that.setData({
        pcd: address.prov.fullname + " " + address.city.fullname + " " + address.direct.fullname,
        flag:false,
        addressChose: address
      })
    }
    that.setData({
      address: address
    })
  },
  hideModel:function(){
    var that=this
    that.setData({
      flag:false
    })
  },
  showModel:function(){
    var that = this
    that.setData({
      flag: true
    })
  },
  formSubmit:function(e){
    console.log(e)
    var that=this
    that.setData({
      loading:true
    })
    setTimeout(function(){
      that.setData({
        loading: false
      })
    },3000)
  }
})