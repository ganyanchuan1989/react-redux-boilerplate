# React开发环境热更新
React开发环境一般会有两种：采用 `Webpack-dev-server` 方式 和 采用`Express + webpack-dev-middleware` 的方式。两种方式的热更新配置略微有些区别。一般情况下我们更加建议采用第二种，因为自定义服务器，可以有更多的处理，例如：一般把需要mock的json数据放到`/mock/`目录下，表单提交的目录放到`/api/form'`等，都需要依托服务器的支持。下面对两种模式热更新配置分别做了说明。

PS:这两种热更新的模式，实现原理是一样的，依靠：webpack 提供的文件热更新 + react-hot-loader 提供的react热更新

## Webpack-dev-server
这种方式的配置比较简单。
- `webpack.config.dev.js`
```
entry: [
    'react-hot-loader/patch', //关键点：启动react-hot-loader的热更新
    './src/index.jsx',
    
  ],
devServer: {
    contentBase: './dist',
    hot: true,         //关键点，启动webpack-dev-server的热更新
    port:3000,
},
plugins:[
    new webpack.HotModuleReplacementPlugin(), //关键点
]
```

- `.babelrc`
```
{
  "presets": [
    "react",
    ["es2015",{ "modules": false }] // 关键点：modules:false
  ],
  "plugins": ["react-hot-loader/babel"] //关键点
}
```

通过上面的配置已经完成了热更新配置，接下来运行：`webpack-dev-server --config webpack.config.dev.js` 启动即可。


## Express + Webpack-dev-middleware
采用这种方式需要依赖另外一个插件：`webpack-hot-middleware`。详细配置如下。
- `webpack.config.dev.js`
```
entry: [
    'webpack-hot-middleware/client?reload=true',//关键点
    'react-hot-loader/patch',//关键点
    'webpack/hot/only-dev-server',//关键点
    './src/index.jsx',
    
  ],
devServer: {
    contentBase: './dist',
    hot: true,//关键点
    port:3000,
},
plugins:[
    new webpack.HotModuleReplacementPlugin(), //关键点
]
```

- `.babelrc`
```
{
  "presets": [
    "react",
    ["es2015",{ "modules": false }] // 关键点：modules:false
  ],
  "plugins": ["react-hot-loader/babel"] //关键点
}
```

- `server.js`
```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true
  },
  hot:true
}));

app.use(webpackHotMiddleware(compiler));


app.listen(config.devServer.port, function () {
  console.log('start app listening on port 3000!\n');
});
```

这样简单的`Express+webpack-dev-middleware` 实现热更新就实现了。