import rootReducer from 'reducers';
import type { Middleware } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
