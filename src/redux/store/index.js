import { createStore, combineReducers,applyMiddleware } from 'redux';
import { createHashHistory as createHistory } from 'history'
// 坐等 react-router-redux 5的出现吧，太不靠谱
// import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from '../reducers';

console.log(">>>>>>>>>>>",{...reducers})

const history = createHistory();

const store = createStore(
	combineReducers({
			...reducers,
			// router: routerReducer
	}),
	__DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__():null,
	// applyMiddleware(routerMiddleware(hashHistory)),
);

// const history = syncHistoryWithStore(hashHistory, store)

export default store;
export {history};
