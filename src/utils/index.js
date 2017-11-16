import { injectAsyncReducer } from './createReducer';
import asyncComponentFactory from './asyncComponentFactory';


const asyncComponent = asyncComponentFactory(injectAsyncReducer);

export { asyncComponent };
