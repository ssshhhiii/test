// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:1,
        name:"全部",
        show:true
      },
      {
        id:2,
        name:"待付款",
        show:false
      },
      {
        id:3,
        name:"待发货",
        show:false
      },
      {
        id:4,
        name:"退货/退款",
        show:false
      },
    ],
  },
  handlesos(e){
    let {index}=e.detail
    const {tabs}=this.data
    tabs.forEach((v,i)=>i==index?v.show=true:v.show=false)
    this.setData({
      tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const {type}=options
    const {tabs}=this.data
    tabs.forEach((v,i)=>i==type-1?v.show=true:v.show=false)
    this.setData({tabs})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})