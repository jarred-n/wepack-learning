const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config); //返回编译器

const app = express();
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3001, ()=> {
    console.log('sever is running on 3001')
})