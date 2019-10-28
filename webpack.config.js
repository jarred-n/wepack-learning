const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: {
    main: './src/index.js',
  },
  devServer: {
      contentBase: path.join(__dirname, 'dist')
  },
  module: {
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
      }
    ]
  },  
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
  }), new CleanWebpackPlugin()],
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
