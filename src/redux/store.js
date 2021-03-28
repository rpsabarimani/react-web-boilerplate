import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import * as reducers from './reducers';

// use redux dev tools in development
export function getCompose() {
	/* eslint-disable no-process-env, no-underscore-dangle */
	if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}
	/* eslint-enable no-process-env, no-underscore-dangle */

	return compose;
}

// apply enhancers with dev tools optionally enabled
export const composeEnhancers = (...args) => getCompose()(...args);

// hydrate initial state, this might be loaded via local storage or caching
export function configureStore(initialState = {}) {
	return createStore(
		combineReducers(reducers),
		initialState,
		composeEnhancers(applyMiddleware(reduxThunk), applyMiddleware(reduxPromiseMiddleware))
	);
}

export default configureStore;
