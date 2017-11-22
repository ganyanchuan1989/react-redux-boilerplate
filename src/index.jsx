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

import store, { history } from './redux/store';
import App from './App';
import { Todo, AsyncCounter } from 'ROUTERS';

const render = (Component) => {
  ReactDOM.render(
		<AppContainer>
			<Provider store={store} >
				<Router history={history}>
					<Route path="/" component={App}></Route>
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
