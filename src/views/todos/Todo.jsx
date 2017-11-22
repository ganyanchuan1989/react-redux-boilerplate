import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Todo.css';
import TodoView from 'COMPONENTS/todo';
import TodoAdd from 'COMPONENTS/todo/add';
import { addTodo, toggleTodo, delTodo } from 'ACTIONS/todo';


class Todo extends Component {
  render() {
		// dispatch,
		const { todolist, onAdd, onDelete, onChangeStatus } = this.props;
    return (
         <div styleName="main">
					<TodoAdd onAdd={(text) => { onAdd(text); }} />
					<TodoView todolist={todolist}
							onChangeStatus={todo => onChangeStatus(todo)}
							onDelete={todo => onDelete(todo)}
					/>
         </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { todolist: state.todo };
};


const mapDispatchToProps = dispatch => ({
		onAdd: (text) => {
			dispatch(addTodo(text));
		},
		onChangeStatus: (todo) => {
			dispatch(toggleTodo(todo));
		},
		onDelete: (todo) => {
			dispatch(delTodo(todo));
		},
	});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
