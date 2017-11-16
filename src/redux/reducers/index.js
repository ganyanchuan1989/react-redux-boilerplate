import { combineReducers } from 'redux';
import store from 'STORE';

import todo from './todo';

const syncReducerList = {
  todo
}

let asyncReducerList = {}

/**
 * @return {Function} rootReducer
 */
export function createRootReducer() {
  return combineReducers({
    ...syncReducerList,
    ...asyncReducerList
  })
}

/**
 * 注入异步reducer做一层拦截，如果reducer的key已经存在，应该报错，
 * 因为两个key一样会出现覆盖，覆盖后问题十分难以排查
 * @param {*}  
 */
function createReducer(asyncReducers) {
	if(asyncReducers)
	{
		if(asyncReducerList[Object.keys(asyncReducers)[0]])
			throw new Error(`AsyncReduer KEY:${Object.keys(asyncReducers)} is Exist`);
		else
			asyncReducerList = Object.assign({}, asyncReducerList, asyncReducers)
	}
	return createRootReducer();
}

/**
 * 注入异步reducer
 * @param {*} name 
 * @param {*} asyncReducer 
 */
export function injectAsyncReducer(name, asyncReducer) {
	store.replaceReducer(createReducer({ [name]: asyncReducer }));
}

