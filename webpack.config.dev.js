const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const WebpackCmCfg = require('./webpack.config.cm');

const extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  },
  output: {
    filename: '[name]-[chunkhash:8].bundle.js',
		path: `${__dirname}/dist`,
		publicPath: './',
		chunkFilename: '[name].bundle.js',
    // sourceMapFilename: '[name]-[chunkhash:8].bundle.map',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
				],
      },
      { test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048, // 20K
              fallback: 'file-loader', // default
              name: '[name]-[hash:8].[ext]',
              // publicPath: 'assets/',
              outputPath: './imgs/',
              useRelativePath: false, // true : outputPath 失效
            },
          }],
      },
    ],
  },

  plugins: [
		new NyanProgressPlugin(),
    new webpack.DefinePlugin({
			 __DEV__: true,
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/index_dev.html',
      title: 'react-boilerplate-dev',
      // chunks: ['app'], //指定要加入的entry实例,
      inject: 'body',
    }),
    extractCSS,
  ],
};

module.exports = Object.assign(WebpackCmCfg,config);
