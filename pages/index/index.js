Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["http://q6v0uxmjt.bkt.clouddn.com/slide1.png", 
              "http://q6v0uxmjt.bkt.clouddn.com/slide2.png",
              "http://q6v0uxmjt.bkt.clouddn.com/slide3.png"],
    newCommoditys: [{ "id": 1, "image":"http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg","title":"三大火力科技,品质升级,让烹饪更美好","model":"JZ(Y/T/R)-9B32", "price": 500,"sold":50},
      { "id": 2, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9G38", "price": 500, "sold": 50 },
      { "id": 3, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9B32", "price": 500, "sold": 50 },
      { "id": 1, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9B32", "price": 500, "sold": 50 },
      { "id": 2, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9G38", "price": 500, "sold": 50 },
      { "id": 3, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9B32", "price": 500, "sold": 50 },
      { "id": 3, "image": "http://q6v0uxmjt.bkt.clouddn.com/1560244061502LMwSERt6.jpg", "title": "三大火力科技,品质升级,让烹饪更美好", "model": "JZ(Y/T/R)-9B32", "price": 500, "sold": 50 }],
  },

  toDetail :function(){

    wx.navigateTo({
      url: '../../pages/detail/index',
      success:function(res){
        console.log("zhaoyan success")
      },
      fail:function(res){
        console.log(res)
      }
    })

  }

})