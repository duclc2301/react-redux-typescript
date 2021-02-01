import { createAction, nanoid } from '@reduxjs/toolkit';
import { ADD_TODO, Filters, SET_FILTER, TOGGLE_TODO } from './constants';

export type Filter = keyof typeof Filters;

const addTodo = createAction(ADD_TODO, (payload: { task: string }) => {
  const { task } = payload;
  return { payload: { id: nanoid(), task } };
});

const toggleTodo = createAction(TOGGLE_TODO, (payload: { id: string }) => {
  const { id } = payload;
  return { payload: { id } };
});

const setFilter = createAction(SET_FILTER, (payload: { filter: Filter }) => {
  const { filter } = payload;
  return { payload: { filter } };
});

export { addTodo, toggleTodo, setFilter };
