// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:1,
        name:"商品收藏",
        show:true
      },
      {
        id:2,
        name:"品牌收藏",
        show:false
      },
      {
        id:3,
        name:"店铺收藏",
        show:false
      },
      {
        id:4,
        name:"浏览足迹",
        show:false
      },
    ],
    shoucang:[]
  },
  handlesos(e){
    let {index}=e.detail
    const {tabs}=this.data
    tabs.forEach((v,i)=>i==index?v.show=true:v.show=false)
    this.setData({
      tabs
    })
  },
  onShow: function () {
    const shoucang=wx.getStorageSync('shoucang')
    this.setData({shoucang})
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