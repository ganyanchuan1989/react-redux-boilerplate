const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.dev.js');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
  },
  hot: true,
}));

// 模拟服务器，返回json格式的报文。
app.use("/mock",express.static('mock'));


app.listen(config.devServer.port, () => {
  console.log('start app listening on port 3000!\n');
});
