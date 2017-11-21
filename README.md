# react-redux-boileplate
这个项目主要是快速搭建一个含`react16`，`react-router4`和`redux3`的应用程序。

目前应该是整个中国来讲最完整的开源的架构项目。网上有很多人写的快速搭建使用的模板，往往不是太老，就是没考虑周全。因此我自己搭建一个，希望有喜欢的人点个 `star`

个人撰写的详细的技术文档，欢迎继续点赞。[react-docs](https://github.com/ganxunzou/react-docs)

# react 架构需要考虑的点
- React hot-loader(支持css)
- CSS-Modules
- Code Splitting
- SourceMap

具体每个细节，请看我的另外一篇文章。[react-docs](https://github.com/ganxunzou/react-docs)


# 目录结构
- 开发环境目录结构
```JS
├─src
│  ├─assets           // 资源
│  ├─components       // 组件
│  │  ├─counter
│  │  └─todo    
│  ├─redux            // reudx
│  │  ├─actions
│  │  ├─reducers
│  │  └─store
│  ├─routers          // routers
│  └─utils            //工具库，已经在webpack中注册alias
└─template            //模板文件

```

- 生产环境目录结构
```
├─dist
  └─imgs            // 资源路径：图片，字体等
```
dist根目录下就是静态资源。

# 样式写法调整
工程提供了两种样式写法，全局样式和本地样式。全局样式不参与编译构建。本地样式参与`css-modules`构建。
```
<div className="global-css" styleName="local-css"></div>
```
详细用法见：[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)


# 使用
 ```
 git clone git@github.com:ganxunzou/react-redux-boilerplate.git
 cd react-redux-boilerplate
 npm i
 ```
 - 本地开发
 ```
 npm run dev
 ```

- 生产编译
 ```
 npm run build
 ```


 # 待完善
  `react-router-redux 2.x`的版本不支持`react-router 4`。如果`react-router 4`的环境想用`react-router-redux`要等等咯。 目前针对`react-router 4`的`react-router-redux 5.0` 的版本已经合并到 `react-router` 统一维护，不过还没发布正式版本。
