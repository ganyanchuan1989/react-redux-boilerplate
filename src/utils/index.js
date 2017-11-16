import { injectAsyncReducer } from 'REDUCERS';
import asyncComponentFactory from './asyncComponentFactory';

const asyncComponent = asyncComponentFactory(injectAsyncReducer);

export { asyncComponent };
