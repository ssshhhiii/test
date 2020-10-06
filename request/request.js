let time=0
export const request=(param)=>{
  time++
  wx.showLoading({
    title: '加载中',
    mask:true
  })
  const basUrl='https://api-hmugo-web.itheima.net/api/public/v1'
  return new Promise((reslove,reject)=>{
    wx.request({
      ...param,
      url:basUrl+param.url,
      success:(res)=>{
        reslove(res.data.message)
      },
      fail:(err)=>{
        reject(err)
      },
      complete:()=>{
        time--
        if(time==0){
          wx.hideLoading()
        }
      }
    })
  })
}
// 让用户授权
export const openSetting=()=>{
  return new Promise((reslove,reject)=>{
    wx.openSetting({
      success:(res)=>{
        reslove(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
// 选择地址
export const chooseAddress=()=>{
  return new Promise((reslove,reject)=>{
    wx.chooseAddress({
      success:(res)=>{
        reslove(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
// 判断用户点了取消还是授权
export const getSetting=()=>{
  return new Promise((reslove,reject)=>{
    wx.getSetting({
      success:(res)=>{
        reslove(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
export const login=()=>{
  return new Promise((reslove,reject)=>{
    wx.login({
      success:(res)=>{
        reslove(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}
export const requestPayment=(pay)=>{
  return new Promise((reslove,reject)=>{
    wx.requestPayment({
      ...pay,
      success:(res)=>{
        reslove(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}