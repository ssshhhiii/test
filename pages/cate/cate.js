// pages/cate/cate.js
Page({
  data: {
    address:{},
    cart:[],
    allchecked:false,
    allprice:0,
    allnum:0
  },
  async chooseAddress(){
   let address=await wx.chooseAddress()
   address.all=address.provinceName+address.cityName+address.countyName+address.detailInfo
   wx.setStorageSync('address', address)
   this.setData({
    address
   })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const address=wx.getStorageSync('address')
    const cart=wx.getStorageSync('cart')||[]
    this.setcart(cart)
    this.setData({
      address
    })
  },
  handlechange(e){
    // console.log(e)
    const goods_id=e.currentTarget.dataset.id
    const {cart}=this.data
    let index=cart.findIndex(v=>v.goods_id==goods_id)
    cart[index].checked=!cart[index].checked
    
    this.setcart(cart)
  },
  // 计算全选，合计，结算封装
  setcart(cart){
    let allprice=0
    let allnum=0
    let allchecked=true
    cart.forEach(v=>{
      if(v.checked==true){
        allprice+=v.num*v.goods_price
        allnum+=v.num
      }else{
        allchecked=false
      }
    })
    allchecked=cart.length>0?allchecked:false
    this.setData({
      cart,
      allchecked,
      allprice,
      allnum,
    })
    wx.setStorageSync('cart', cart)
  },
  handlequxnxuan(){
    let {allchecked,cart}=this.data
    allchecked=!allchecked
    cart.forEach(v=>v.checked=allchecked)
    this.setcart(cart)
  },
  handleadd(e){
    const {id,opertion}=e.currentTarget.dataset
    const {cart}=this.data
    let index=cart.findIndex(v=>v.goods_id==id)
    if(cart[index].num==1&&opertion==-1){
     wx.showModal({
      title:'提示',
      content: '您是否要删除?',
      success:res=>{
        if(res.confirm){
          cart.splice(index,1);
          this.setcart(cart);
        }else if(res.cancel){
          console.log("您已取消操作");
        }
      }
     })
    }else{
      cart[index].num+=opertion
      this.setcart(cart)
    }
  },
  handlrpay(){
    if(!this.data.address.userName){
      wx.showToast({
        title: '您还未选择收货地址',
        icon:'none'
      })
      return
    }
    if(this.data.allnum==0){
      wx.showToast({
        title: '那你还未选择任何商品',
        icon:'none'
      })
      return
    }
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
})