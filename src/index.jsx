import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
	Link,
	Switch,
} from 'react-router-dom';
import { browserHistory } from 'react-router'

import Bundle from './Bundle';
import App from './App';
import store, { history } from './redux/store';

import asyncComponent from './asyncComponent';
const AsyncCounter = asyncComponent(() => import('./components/counter/index'/* webpackChunkName:${type} */));


const render = (Component) => {
  ReactDOM.render(
		<AppContainer>
			<Provider store={store} >
				<Router history={history}>
						<div>
							<Route path="/" component={Component}/>
							<Link to="/c">Counter</Link>
							<Route path="/c" component={AsyncCounter}/>
						</div>
				</Router>
			</Provider>
		</AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}

// store.subscribe(() => {
// 	render(App);
// });
