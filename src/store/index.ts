import { createSelectorHook, useDispatch } from 'react-redux';
import type { RootState } from 'reducers';
import rootReducer from 'reducers';
import type { Middleware } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;
export const useTypedSelector = createSelectorHook<RootState>();
export const useTypedDispatch = () => useDispatch<AppDispatch>();

export default store;
