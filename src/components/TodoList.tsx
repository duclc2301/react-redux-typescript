import type { FunctionComponent } from 'react';
import { useMemo } from 'react';
import type { RootState } from 'store/rootReducer';
import { Filters } from 'slices/filter';
import { toggleTodo } from 'slices/todos';
import { useTypedDispatch, useTypedSelector } from 'store';
import Todo from './Todo';

type Todos = RootState['todos'];
type Filter = RootState['filter'];

const getTodos = (todos: Todos, filter: Filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case Filters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      return [];
  }
};

const TodoList: FunctionComponent<{}> = () => {
  const dispatch = useTypedDispatch();

  const todos = useTypedSelector((state) => state.todos);
  const filter = useTypedSelector((state) => state.filter);

  const filteredTodos = useMemo(() => getTodos(todos, filter), [todos, filter]);

  const handleOnToggle = (id: string) => () => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onToggle={handleOnToggle(todo.id)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
