import React, { Component } from 'react';
import { combineReducers } from 'redux';

let reducersList = {};

// reducerList 是你当前的 reducer 列表



export default function asyncComponentFactory(injectAsyncReducer, injectAsyncSaga) {
    return function asyncComponent(importComponent, reducers = [], sagas = []) {
        class AsyncComponent extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    component: null
                };
            }

            async componentDidMount() {
                const { default: component } = await importComponent();

                Promise.all([this.processReducer(reducers), this.processSaga(sagas)]).then(() => {
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

                return C ? <C {...this.props} /> : null;
            }
        }

        return AsyncComponent;
    };
}
