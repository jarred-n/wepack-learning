const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    //入口文件
    main: './src/4rd_index.js'
  },
  module: { // 文件类型模块如何打包规则
    rules: [
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // placeholders 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 20480
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
    }), 
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
      dangerouslyAllowCleanPatternsOutsideProject: path.resolve(__dirname, '../')
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',  // initial、 async
      minSize: 30000,
      maxSize: 0,
      minChunks: 1, // 引入使用次数
      maxAsyncRequests: 5, //整个项目文件分割
      maxInitialRequests: 3, // 入口文件分割
      automaticNameDelimiter: '~', // 文件中间连接符
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: { // 打包完分析，相同模块的可存放为一组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
  }
}
