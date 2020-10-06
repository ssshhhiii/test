// pages/search/search.js
import {request} from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    arr:[],
  },
  time:-1,
  handlesss(e){
    // console.log(e)
    const {value}=e.detail 
    if(!value.trim()){
      this.data.arr=[]
      this.setData({arr})
      return
    }
    clearTimeout(this.time)
    this.time=setTimeout(()=>{
      this.getsearch(value)
    },1000)
  },
  async getsearch(query){
    const res=await request({url:'/goods/search',data:query})
    console.log(res)
    this.setData({arr:res.goods})
  },
  quxiao(){
    const arr=[]
    let value=""
    this.setData({arr,value})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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