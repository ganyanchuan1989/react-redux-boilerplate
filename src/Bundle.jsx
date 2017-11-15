import React, { Component } from 'react'

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
			console.log(mod.default);
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
		if(this.state.mod){
			console.log(this.props.children(this.state.mod))
			return <div>b</div>;	
		}
		
    return <div>a{this.prop.children()}</div>;
  }
}

export default Bundle
