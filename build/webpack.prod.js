const merge = require('webpack-merge')
const conmonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const prodConfig = {
  mode: 'production', // 开发环境
  devtool: 'cheap-module-source-map', // cheap(行、) module 不包括其他包 eval ,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
module.exports = merge(conmonConfig, prodConfig)