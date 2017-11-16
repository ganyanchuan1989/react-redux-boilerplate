import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {increment,decrement} from 'ACTIONS/counter';
import './index.css';
class Counter extends Component {
	render() {
		const {onIncrement,onDecrement,value} = this.props;
		return (
			<div>
					<div>
						<button styleName="btn" onClick={()=>{onIncrement()}}>+</button>
						<button styleName="btn" onClick={()=>{onDecrement()}}>-</button>
					</div>
					<div>
						value:{value}
					</div>
			</div>
		);
	}
}

Counter.propTypes = {
	onIncrement:PropTypes.func.isRequired,
	onDecrement:PropTypes.func.isRequired,
	value:PropTypes.string.isRequired,
};


const mapStateToProps=(state)=>{
	return {
		value:state.Counter
	};
}
const mapDispatchToProps=(dispatch)=>{
	return {
		onIncrement:()=>{dispatch(increment())},
		onDecrement:()=>{dispatch(decrement())}
	};
}

export default  connect(mapStateToProps, mapDispatchToProps)(Counter);
