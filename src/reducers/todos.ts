import type { PayloadAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addTodo, toggleTodo } from 'actions';

type State = Todo[];

const initialState: State = [];

type AddTodoAction = {
  id: string;
  task: string;
};

type ToggleTodoAction = {
  id: string;
};

const todosReducer = createReducer(initialState, {
  [addTodo.type]: (state, action: PayloadAction<AddTodoAction>) => {
    const { id, task } = action.payload;
    const todo = { id, task, completed: false };
    state.push(todo);
  },
  [toggleTodo.type]: (state, action: PayloadAction<ToggleTodoAction>) => {
    const { id } = action.payload;
    const todo = state.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
  },
});

export default todosReducer;
