import { combineReducers } from 'redux';
import asyncComponentFactory from './asyncComponentFactory';

let reducersList = {};

// reducerList 是你当前的 reducer 列表
function createReducer(asyncReducers) {
	asyncReducers
	&& !reducersList[Object.keys(asyncReducers)[0]]
	&& (reducersList = Object.assign({}, reducersList, asyncReducers));
	return combineReducers(reducersList);
}


function injectAsyncReducer(name, asyncReducer) {
	store.replaceReducer(createReducer({ [name]: asyncReducer }));
}


const asyncComponent =  asyncComponentFactory(injectAsyncReducer);

export default { asyncComponent };
