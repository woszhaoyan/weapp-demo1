// pages/detail/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail_active: 0,
    item_detail: { 
      "main_img": "http://q6v0uxmjt.bkt.clouddn.com/detail9.jpg", 
      "details": [
        "http://q6v0uxmjt.bkt.clouddn.com/detail1.jpg", 
        "http://q6v0uxmjt.bkt.clouddn.com/detail2.jpg", 
        "http://q6v0uxmjt.bkt.clouddn.com/detail3.jpg", 
        "http://q6v0uxmjt.bkt.clouddn.com/detail4.jpg", 
        "http://q6v0uxmjt.bkt.clouddn.com/detail5.jpg",
        ], 
      },
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

  },
  onClickIcon() {
    consule.log('点击图标');
  },

  onClickButton() {
    console.log('点击按钮');
  },
  detailOnChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none'
    // });
  },

  onBuys: function(){
    wx.navigateTo({
      url: '../../pages/shortlist/index',
      success:function(res){
        console.log("zhaoyan success")
      },
      fail: function(res){
        
        console.log(res)
      }
    })
  }

})