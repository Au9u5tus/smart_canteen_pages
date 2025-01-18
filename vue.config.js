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
        target: 'http://localhost:9999/birthday/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/websocket': {
        target: 'ws://localhost:9999/birthday/websocket/',
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/websocket': '',
        },
      },
    }
  },
})
