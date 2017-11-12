import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './index.css';

class ToDoView extends Component {
	render() {
		const nodes = this.props.todolist.map((todo, index) => {
			const classname = classnames(style.todo, { [style.complete]: todo.completed });
			console.log('render', todo.completed, classname);
			return (
				<li key={`${index}_`} className={classname} onDoubleClick={() => { this.props.onChangeStatus(todo); }} data-index={index}>
					<span>{todo.text}</span>
					<button className={style.delIcon} onClick={() => { this.props.onDelete(todo); }} />
				</li>
			);
		});
		return (
			<div className={style.view_main}>
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
