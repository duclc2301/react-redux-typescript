import { combineReducers } from 'redux';
import filterReducer from './filter';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
