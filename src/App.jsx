import style from  './App.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {	
	render() {
		return (
			<div className={style.app}>
				HelloWorlds
			</div>
		);
	}
}

App.propTypes = {

};

export default App;
