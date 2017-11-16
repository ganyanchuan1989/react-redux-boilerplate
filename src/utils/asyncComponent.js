import React, { Component } from 'react';

export default function asyncComponent(importComponent, reducers = [], sagas = []) {

		class AsyncComponent extends Component {
				constructor(props) {
						super(props);

						this.state = {
								component: null
						};
				}

				async componentDidMount() {
						const { default: component } = await importComponent();

						console.log("componentDidMount");
						//, this.processSaga(sagas)
						Promise.all([this.processReducer(reducers)]).then(() => {
							console.log("Promise.all");
								this.setState({
										component
								});
						});
				}

				processReducer(reducer) {
						if (Array.isArray(reducer)) {
								return Promise.all(reducer.map(r => this.processReducer(r)));
						} else if (typeof reducer === 'object') {
								const key = Object.keys(reducer)[0];
								return reducer[key]().then(x => {
										injectAsyncReducer(key, x.default);
								});
						}
				}

				processSaga(saga) {
						if (Array.isArray(saga)) {
								return Promise.all(saga.map(s => this.processSaga(s)));
						}
						if (typeof saga === 'function') {
								return saga().then(s => {
										injectAsyncSaga(s.default);
								});
						}
				}

				render() {
						const C = this.state.component;
						console.log("asyncComponent.C",C);
						return C ? <C {...this.props} /> : null;
				}
		}
		
		return AsyncComponent;
	}
