import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from 'slices/filter';
import todosReducer from 'slices/todos';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
