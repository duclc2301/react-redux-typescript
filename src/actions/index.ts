import { ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters } from './constants';

export type Filter = keyof typeof Filters;

export type AddTodoAction = {
  type: typeof ADD_TODO;
  id: string;
  task: string;
};

export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO;
  id: string;
};

export type TodoFilterAction = {
  type: typeof SET_FILTER;
  filter: Filter;
};

const addTodo = (payload: { id: string; task: string }): AddTodoAction => {
  const { id, task } = payload;
  return { type: ADD_TODO, id, task };
};

const toggleTodo = (payload: { id: string }): ToggleTodoAction => {
  const { id } = payload;
  return { type: TOGGLE_TODO, id };
};

const setTodoFilter = (payload: { filter: Filter }): TodoFilterAction => {
  const { filter } = payload;
  return { type: SET_FILTER, filter };
};

export { addTodo, toggleTodo, setTodoFilter };
