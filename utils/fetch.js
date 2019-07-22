/**
 * api api根地址
 * path 请求路径
 * method 请求方法
 * params 请求参数
 */
export const fetch = (api, path, method = 'Get', params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${path}`, //仅为示例，并非真实的接口地址
      data: params,
      method,
      header: {
        // 'content-type': 'application/json' // 默认值
        'content-type': 'text' // 默认值
      },
      success: resolve,
      fail: reject
    })
  });
};
