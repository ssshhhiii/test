// pages/goods_detail/goods_detail.js
import {request} from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail:{},
    yeyeye:""
  },
  arr:{},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const {goods_id}=options
    this.getGoodsDetail(goods_id)
  },
  onShow(){
   
  },
  // 获取数据
  async getGoodsDetail(goods_id){
    const res= await request({url:'/goods/detail',data:{goods_id}})
    this.arr=res

    let shoucang=wx.getStorageSync('shoucang')||[]
    let yeyeye=shoucang.some(v=>v.goods_id===this.arr.goods_id);
    
    
    this.setData({
      goodsDetail:{
        goods_introduce:res.goods_introduce.replace(/\.webp/g,'.jpg'),
        goods_name:res.goods_name,
        pics:res.pics,
        goods_price:res.goods_price
      },
      yeyeye
    })
  },
  // 点击预览大图
  handleChange(e){
    console.log(e)
    const current=e.currentTarget.dataset.url
    const url=this.arr.pics.map(v=>v.pics_big_url)
    wx.previewImage({
      urls: url,
      current:current
    })
  },
  // 加入购物车
  handlecartadd(){
    let cart=wx.getStorageSync('cart')||[];
    let index=cart.findIndex(v=>v.goods_id===this.arr.goods_id);
    if(index===-1){
      this.arr.num=1;
      this.arr.checked=true
      cart.push(this.arr);
    }else{
      cart[index].num++;
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入成功',
    })
  },
  // 收藏
  hanlechange(){
    let yeyeye=false
    let shoucang=wx.getStorageSync('shoucang')||[];
    let index=shoucang.findIndex(v=>v.goods_id===this.arr.goods_id);
    if(index==-1){
      yeyeye=true
      shoucang.push(this.arr);
      wx.showToast({
        title: '收藏成功',
      })
    }else{
      shoucang.splice(index,1)
      yeyeye=false
      wx.showToast({
        title: '您已取消收藏',
        icon:"none"
      })
    }
    this.setData({yeyeye})
    wx.setStorageSync('shoucang', shoucang)
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
