import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './App.css';
import { increment, decrement } from './actions/counter';
import Count from './components/counter';
import CountOperation from './components/counter/operation';

import TodoView from './components/todo';
import TodoAdd from './components/todo/add';
import { addTodo, toggleTodo, delTodo } from './actions/todo';

class App extends Component {
	// static bar = '123'
	getChildContext() {
		return { store: this.props.store };
	}

	incrementHandle = () => {
		this.props.store.dispatch(increment());
	}

	decrementHandle = () => {
		this.props.store.dispatch(decrement());
	}

	todoAddHandle = (text) => {
		this.props.store.dispatch(addTodo(text));
	}

	changeStatuHandle = (todo) => {
		this.props.store.dispatch(toggleTodo(todo));
	}
	deleteHandle = (todo) => {
		this.props.store.dispatch(delTodo(todo));
	}

  render() {
		const { counter, todo } = this.props.store.getState();
		const { normal, delTodo } = todo;
		console.log('<><>', delTodo, normal);
    return (
         <div className={style.main}>
					<div className={style.operation}>
						<CountOperation onIncrement={this.incrementHandle} onDecrement={this.decrementHandle} />
						<TodoAdd onAdd={this.todoAddHandle} />
					</div>
					<div className={style.view}>
						<Count value={counter} />
						<TodoView todolist={normal} onChangeStatus={this.changeStatuHandle} onDelete={this.deleteHandle} />
					</div>
         </div>
    );
  }
}
App.propTypes = {
	// name: PropTypes.string,
	store: PropTypes.object.isRequired,
};

App.childContextTypes = {
	store: PropTypes.object,
};

export default App;
