/**
 * api api根地址
 * path 请求路径
 * method 请求方法
 * params 请求参数
 */
export const fetch = (api, path, method = 'Get', params) => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `${api}/${path}`, //仅为示例，并非真实的接口地址
      data: params,
      method,
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'text' // 默认值
      },
      success: (res) => {
        console.log(res)
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          showToast("发生未知错误！");
        }
      },
      fail: (err) => {
        showToast("数据获取失败！");
        reject(err)
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  });
};
