const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    //lintOnSave:false,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9527',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 正确配置，去掉 /api 前缀
        },
        onProxyReq: (proxyReq, req, res) => {
          console.log('原始请求路径:',req.url);
          console.log('代理请求路径:',proxyReq.path);
        }
      },
      // '/websocket': {
      //   target: 'ws://localhost:9999/birthday/websocket/',
      //   changeOrigin: true,
      //   ws:true,
      //   pathRewrite: {
      //     '^/websocket': '',
      //   },
      // },
    }
  },
})
