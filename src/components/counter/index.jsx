import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

class Counter extends Component {
	render() {
		return (
			<div className={style.view_main} >
				<div className={style.view_content} >
					<p>Value</p>
					<p>{this.props.value}</p>
				</div>
			</div>
		);
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
};

Counter.contextTypes = {
  store: PropTypes.object,
};

export default Counter;
