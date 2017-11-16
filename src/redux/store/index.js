import { createStore, combineReducers,applyMiddleware } from 'redux';
import { createRootReducer } from 'REDUCERS';
import { createHashHistory as createHistory } from 'history'

// 坐等 react-router-redux 5的出现吧，太不靠谱
// import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'



const history = createHistory();

const store = createStore(
	createRootReducer(),
	__DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__():null,
	// applyMiddleware(routerMiddleware(hashHistory)),
);

// const history = syncHistoryWithStore(hashHistory, store)

export default store;
export {history};
