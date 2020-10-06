import {request,requestPayment} from "../../request/request.js"
Page({
  data:{
    newcart:[],
    address:{},
    allnum:0,
    allprice:0
  },
  // onLoad(){
  //   console.log(11111)
  // },
  onShow(){
  const address=wx.getStorageSync('address')
  let cart=wx.getStorageSync('cart')
  let newcart=cart.filter(v=>v.checked==true)
  let allnum=0
  let allprice=0
  newcart.forEach(v=>{
    allnum+=v.num
    allprice+=v.goods_price*v.num
  })
  this.setData({
    allnum,allprice,address,newcart
  })
  },
  async paymoney(){
    try{
      const token=wx.getStorageSync('token')
      if(!token){
        wx.navigateTo({
          url: '/pages/auth/auth',
        })
        return
      }
      const header={Authorization:token}
      let order_price=this.data.allprice
      let consignee_addr=this.data.address.all
      const newcart=this.data.newcart
      let goods=[]
      newcart.forEach(v=>goods.push({
        goods_id:v.goods_id,
        goods_number:v.num,
        goods_price:v.goods_price
      }))
      const params={order_price,consignee_addr,goods}
      // 获取订单编号
      const {order_number}=await request({url:'/my/orders/create',data:params,header,method:"POST"})
      // 发起预支付(要企业账号做，没有权限)
      // const {pay}=await request({url:'/my/orders/req_unifiedorder',data:order_number,header,method:"POST"})
      //调起微信支付(要企业账号做，没有权限)
      //  await requestPayment(pay)
      //  查询订单支付状态(要企业账号做，没有权限)
      // const res=await request({url:'/my/orders/chkOrder',data:order_number,header,method:"POST"})
      wx.showToast({
        title: '支付成功',
      })
      wx.getStorageSync('cart')
      const cart=cart.filter(v=>v.checked==false)
      wx.setStorageSync('cart', cart)
      wx.navigateTo({
        url: '/pages/order/order',
      })
    }catch(err){
    wx.showToast({
      title: '支付失败',
      icon:"none"
    })
    }

   
  }
})