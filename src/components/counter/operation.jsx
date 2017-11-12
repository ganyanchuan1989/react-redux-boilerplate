import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

class Operation extends Component {
	render() {
		return (
		<div className={style.op_main}>
			<button className={style.op_increment} onClick={this.props.onIncrement} >+</button>
			<button className={style.op_decrement} onClick={this.props.onDecrement} >-</button>
		</div>
		);
	}
}

Operation.propTypes = {
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
};

export default Operation;
