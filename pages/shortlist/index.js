// pages/shortlist/index.js
import Dialog from '../../dist/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{ "image":"../../images/mt.jpg", "title":"我在测试一下前端", "number":1, "price":5000},
      {"image": "../../images/mt.jpg", "title": "我在测试一下前端", "number": 1, "price": 5000},
      {"image": "../../images/mt.jpg", "title": "我在测试一下前端", "number": 1, "price": 5000}],
    isloading:false,
    checked: false
  },

  onLoad: function () {
    wx.setNavigationBarTitle(
      {
        title: "购物车",
        success: function (res) {
          console.log("success")
        }
      }
    )
  },

  onReady: function () {
    wx.hideNavigationBarLoading();
  },

  onChange(event) {
    this.setData({
      checked: event.detail
    });
  },

  onClickButton:function(){
    var that = this.data.isloading;
    this.setData({isloading : !that})
  },

  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？'
        }).then(() => {
          instance.close();
        });
        break;
    }
  }

})