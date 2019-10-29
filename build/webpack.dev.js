const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const conmonConfig = require('./webpack.common.js')

const devConfig = {
  mode: 'development', // 开发环境
  devtool: 'cheap-module-source-map', // cheap(行、) module 不包括其他包 eval 
  devServer: { // 开发服务器
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      port: 8080,
      hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(conmonConfig, devConfig)