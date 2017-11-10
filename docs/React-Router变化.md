# The Router
 - history
 - 没有集中路由，任何地方都可以使用<Route>
 
```
//V3
<Router history={browserHistory}>
  <Route path='/' component={App}>
    // ...
  </Route>
</Router>

//V4 ,<BrowserRouter> ,<HashRouter>,<MemoryRouter>
<BrowserRouter>
  <div>
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
</BrowserRouter>
```
- <BrowserRouter> 路由底下只能配置一个路由，如果要配置多个，用容器包装起来，如：<div>
```
// yes
<BrowserRouter>
  <div>
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
</BrowserRouter>

// no
<BrowserRouter>
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</BrowserRouter>
```

# Routes
 - Routes is a Components
 ```
 //V3 
     /// in v3 the element
    <Route path='contact' component={Contact} />
    // was equivalent to
    {
    path: 'contact',
    component: Contact
    }

// V4
// When the <Route>'s path matches the current location, it will use its rendering prop (component, render, or children) to render. When the <Route>'s path does not match, it will render null.
<Route path='contact' component={Contact} >
    <div></div>
</Route>
 ```

- Nesting Routes

```
//V3 子节点传递给父节点，作为父节点的 props.children 显示
  <Route path='parent' component={Parent}>
    <Route path='child' component={Child} />
    <Route path='other' component={Other} />
  </Route>

//V4 只是在parent中渲染
<Route path='parent' component={Parent} />
const Parent = () => (
  <div>
    <Route path='child' component={Child} />
    <Route path='other' component={Other} />
  </div>
)
```
- `on*` properties
    //V3
    React Router v3 provides `onEnter`, `onUpdate`, and `onLeave` methods
    //V4
    use the lifecycle methods of the component rendered by a `<Route>`
    - onEnter `componentDidMount` or `componentWillMount`
    - onUpdate `componentDidUpdate` or `componentWillUpdate`
    - onLeave `componentWillUnmount`

- `<Switch>`
```
// v3
<Route path='/' component={App}>
  <IndexRoute component={Home} />
  <Route path='about' component={About} />
  <Route path='contact' component={Contact} />
</Route>
```
```
// v4
const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Switch>
)
```

- `<Redirect>`
```
// v3
<Route path="/" component={App}>
  <IndexRedirect to="/welcome" />
</Route>
```
```
// v4
<Route exact path="/" render={() => <Redirect to="/welcome" component={App} />} />

<Switch  >
  <Route exact path="/" component={App} />
  <Route path="/login" component={Login} />
  <Redirect path="*" to="/" />
</Switch>
```
