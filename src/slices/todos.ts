import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, nanoid } from '@reduxjs/toolkit';

type State = Todo[];

type AddTodoAction = {
  task: string;
};

type ToggleTodoAction = {
  id: string;
};

const initialState: State = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodoAction>) {
      const { task } = action.payload;
      const todo = { id: nanoid(), task, completed: false };
      state.push(todo);
    },
    toggleTodo(state, action: PayloadAction<ToggleTodoAction>) {
      const { id } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
