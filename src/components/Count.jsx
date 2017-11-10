import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Count extends Component {
	componentWillReceiveProps(nextProps) {
		console.log("nextProps",nextProps)
	}
	render() {
		console.log(this.props)
		return (
			<div>
				Value:{this.props.Value}
				<button onClick={this.props.ADD}>ADD</button>
				<button onClick={this.props.SUB}>SUB</button>
			</div>
		);
	}
}

Count.propTypes = {
	Value: PropTypes.string,
	ADD: PropTypes.func.isRequired,
	SUB: PropTypes.func.isRequired,
};

Count.defaultProps = {
	Value: '',
};

export default Count;
