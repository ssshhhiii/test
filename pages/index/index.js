import {request}  from "../../request/request.js"
Page({
  data:{
    rotationChart:[],
    navigation:[] ,
    floor:[]
  },
  onLoad: function (options){
    this.getRotationChart()
    this.getNavigation()
    this.getFloor()
  },
  // 获取轮播图数据
async getRotationChart(){
    const res=await request({url: '/home/swiperdata'})
          this.setData({
            rotationChart:res
          })
  },
  // 获取导航数据
async getNavigation(){
  const res=await request({url: '/home/catitems'})
          this.setData({
            navigation:res
          })
  },
   // 获取楼层数据
async  getFloor(){
  const res=await  request({url: '/home/floordata'})
          this.setData({
            floor:res
          })
  }
})
