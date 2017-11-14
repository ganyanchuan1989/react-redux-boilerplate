import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import App from './App';
import store from './redux/store';

const render = (Component) => {
  ReactDOM.render(
		<AppContainer>
			<Provider store={store} >
						<Component/>
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
