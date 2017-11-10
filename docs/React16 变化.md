# Composition vs Inheritance
> So What About Inheritance?
At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

# Functional Components

```
function MyFunctionalComponent() {
  return <input />;
}

class Parent extends React.Component {
  render() {
    return (
      <MyFunctionalComponent/>
    );
  }
}
```

# refs
不要使用`this.refs`的方式,这个方式将弃用。
```
focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
 }
render(){
    <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
}
```
>Legacy API: String Refs
If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, <b style="color:red"> are considered legacy, and are likely to be removed in one of the future releases</b>. If you’re currently using this.refs.textInput to access refs, we recommend the callback pattern instead.

# Optimizing Performance
https://reactjs.org/docs/optimizing-performance.html


# React.PropTypes has moved 
>Note:
React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead to define contextTypes.
We provide a codemod script to automate the conversion.


# Portals

# Error Boundaries
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```
