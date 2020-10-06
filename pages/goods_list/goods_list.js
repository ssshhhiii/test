// pages/goods_list/goods_list.js
import {request}  from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:1,
        name:"综合",
        show:true
      },
      {
        id:2,
        name:"销量",
        show:false
      },
      {
        id:3,
        name:"排行",
        show:false
      },
    ],
    goodsList:[]
  },
  queryInfo:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },
  pageAll:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options)
      this.queryInfo.cid=options.id
      this.getGoodsList()
  },
  async getGoodsList(){
    const res=await request({url:'/goods/search',data:this.queryInfo})
    const {total}=res
    this.pageAll=Math.ceil(total/this.queryInfo.pagesize)
     this.setData({
      goodsList:[...this.data.goodsList,...res.goods]
     })
  },
  handlesos(e){
  let {index}=e.detail
  const {tabs}=this.data
  tabs.forEach((v,i)=>i==index?v.show=true:v.show=false)
  this.setData({
    tabs
  })
  },
  onReachBottom: function () {
    if(this.queryInfo.pagenum>=this.pageAll){
      wx.showToast({
        title: '没有了',
      })
    }else{
      this.queryInfo.pagenum++
      this.getGoodsList()
    }
  },
  onPullDownRefresh(){
    this.setData({
      goodsList:[]
    })
    this.queryInfo.pagenum=1
    this.getGoodsList()
    wx.stopPullDownRefresh()
  }
})