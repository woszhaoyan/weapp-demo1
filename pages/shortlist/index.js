// pages/shortlist/index.js
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

  onChange(event) {
    this.setData({
      checked: event.detail
    });
  },

  onClickButton:function(){
    var that = this.data.isloading;
    this.setData({isloading : !that})
  }

})