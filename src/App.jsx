import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import TodoView from './components/todo';
import TodoAdd from './components/todo/add';
import { addTodo, toggleTodo, delTodo } from './redux/actions/todo';


class App extends Component {
  render() {
		// dispatch,
		console.log('diadfadafdafdafda',this.props);
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
	console.log('mapStateToPrpop1s', state);
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
			console.log('delete', todo);
			dispatch(delTodo(todo));
		},
	});

export default connect(mapStateToProps, mapDispatchToProps)(App);
