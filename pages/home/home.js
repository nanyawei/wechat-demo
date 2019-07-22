// pages/home/index.js
import { movieService } from '../../utils/douban.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "TOP 10",
    subjects: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // onlineService.getOnline('Get').then(res => console.log(res))
    movieService.tops({start: 1,count: 10}).then(res => {
      console.log(res.data.subjects)
      this.setData({
        subjects: res.data.subjects
      })
    });
  
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
  /**
   * 搜索
   */
  // search: function () {
  //   getItem(this.data.movieName)
  // },
  // setmoviename: function (e) {
  //   this.setData({
  //     movieName: e.detail.value
  //   });
  // }
})