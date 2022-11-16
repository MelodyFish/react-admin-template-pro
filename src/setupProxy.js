const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'your address',
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      pathRewrite: {'/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    createProxyMiddleware('/user', {  
      target: 'your address',
      changeOrigin: true,
    })
  )
}