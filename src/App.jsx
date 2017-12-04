import './App.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {	
	render() {
		return (
			<div styleName="app">
				HelloWorlds
				<div styleName="box">
					As
					<div>B</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {

};

export default App;
