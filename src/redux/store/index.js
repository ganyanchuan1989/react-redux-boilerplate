import { createStore, combineReducers,applyMiddleware } from 'redux';
import { createHashHistory as createHistory } from 'history'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from '../reducers';

console.log(">>>>>>>>>>>",{...reducers})

const hashHistory = createHistory();

const store = createStore(
	combineReducers({
			...reducers,
			routing: routerReducer 
	}),
	__DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__():null,
	applyMiddleware(routerMiddleware(hashHistory)),
);

const history = syncHistoryWithStore(hashHistory, store)

export default store;
export {history};
