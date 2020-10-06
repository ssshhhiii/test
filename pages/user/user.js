// pages/user/user.js
Page({
  data: {
    userInfo:{},
    number:0
  },
  onShow: function () {
    const userInfo=wx.getStorageSync('userInfo')
    let shoucang=wx.getStorageSync('shoucang')
    let number=shoucang.length
    this.setData({
      userInfo,
      number
    })
  },
  handless(e){
    console.log(e)
    const {userInfo}=e.detail
    wx.setStorageSync('userInfo', userInfo)
    wx.reLaunch({
      url: '/pages/user/user',
    })
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