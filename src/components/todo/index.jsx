import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.css';

class ToDoView extends Component {
	render() {
		const { onChangeStatus, onDelete } = this.props;
		const nodes = this.props.todolist.map((todo, index) => {
			const classname = classnames('todo', { complete: todo.completed });
			console.log('render', todo.completed, classname);
			return (
				<li key={`${index}_`} styleName={classname} onDoubleClick={() => { onChangeStatus(todo); }} data-index={index}>
					<span>{todo.text}</span>
					<button styleName="delIcon" onClick={() => { onDelete(todo); }} />
				</li>
			);
		});
		return (
			<div styleName="view_main">
				<h1>TODO List</h1>
				<ul>{nodes}</ul>
			</div>
		);
	}
}

ToDoView.propTypes = {
	todolist: PropTypes.array.isRequired,
	onChangeStatus: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ToDoView;
