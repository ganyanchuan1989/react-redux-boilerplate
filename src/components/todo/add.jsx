import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';


class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}
	textChangeHandle =(e) => {
		this.setState({ value: e.target.value });
	}
	addHandle =() => {
		this.props.onAdd(this.state.value);
	}
	render() {
		return (
			<div className="add_main">
				<input type="text" value={this.state.value} onChange={this.textChangeHandle} />
				<button onClick={this.addHandle}>ADD</button>
			</div>
		);
	}
}

Add.propTypes = {
	onAdd: PropTypes.func.isRequired,
};

export default Add;
