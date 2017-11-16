import { asyncComponent } from 'UTILS';

export const AsyncCounter = asyncComponent(
	() => import('../components/counter/index'/* webpackChunkName:Counter */),
	[{Counter:import("REDUCERS/counter")}]
);


