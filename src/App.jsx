import './App.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';
import { Todo, AsyncCounter } from 'ROUTERS';

class componentName extends Component {
	render() {
		return (
			<div styleName="app">
				HelloWorld
				<div><Link to="/todo">TODO</Link></div>
				<div><Link to="/couter">COUTER</Link></div>

				<Route path="/todo" component={Todo}/>
				<Route path="/couter" component={AsyncCounter}/>
			</div>
		);
	}
}

componentName.propTypes = {

};

export default componentName;
