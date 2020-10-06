// pages/category/category.js
import {request}  from "../../request/request.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryLeft:[],
    categoryRight:[],
    current:0,
    scrollTop:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    this.getCategory()
  },
  async getCategory(){
    const res=await request({url:'/categories'})
    let categoryLeft=res.map(v=>v.cat_name)
    let categoryRight=res[0].children
    this.setData({
      categoryLeft,
      categoryRight,
    })
  },
  async handledian(e){
      const {index}=e.currentTarget.dataset
      const res=await request({url:'/categories'})
      let categoryRight=res[index].children
      this.setData({
        current:index,
        categoryRight,
        scrollTop:0
      })
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