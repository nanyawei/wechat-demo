// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: ''
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

  picture: function () {
    const that = this;
    wx.scanCode({
      success: (res) => {
        const url = res.result;
        console.log(url)
        const codeUrl = decodeURIComponent(url);
        console.log(codeUrl)


        const page = getQueryString(codeUrl, 'id');
        console.log(page)


        that.setData({
          info: url
        });
        // 跳转暂未写
        // if (!url) {
        //   return wx.showToast({
        //     title: "未识别出二维码中地址，跳转失败！"
        //   });
        // }
        // wx.navigateTo({
        //   url: page,
        //   success: function(res){
        //     // success
        //     console.log('res', res)
        //   },
        //   fail: function() {
        //     // fail
        //     console.log('fail', fail)
        //   },
        //   complete: function() {
        //     // complete
        //     console.log('complete', complete)
        //   }
        // })
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: "扫描失败，请重新扫描！"
        });
      }
    });
  }
});

// let getQueryString = function (url, name) {
//   console.log("url = " + url)
//   console.log("name = " + name)
//   var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
//   var r = url.substr(1).match(reg)
//   if (r != null) {
//     console.log("r = " + r)
//     console.log("r[2] = " + r[2])
//     return r[2]
//   }
//   return null;
// }
