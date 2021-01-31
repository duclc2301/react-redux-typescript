import type { AddTodoAction, ToggleTodoAction } from 'actions';
import { ADD_TODO, TOGGLE_TODO } from 'actions/constants';

type State = Todo[];
type Action = AddTodoAction | ToggleTodoAction;

const initialState: State = [];

const todosReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
