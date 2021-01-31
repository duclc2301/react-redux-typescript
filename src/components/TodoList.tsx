import { toggleTodo } from 'actions';
import { Filters } from 'actions/constants';
import type { FunctionComponent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { RootState } from 'reducers';
import store from 'store';
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
  const [todos, setTodos] = useState<Todos>([]);
  const [filter, setFilter] = useState<Filter>(Filters.SHOW_ALL);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { todos, filter } = store.getState();
      setTodos(todos);
      setFilter(filter);
    });
    return unsubscribe;
  }, []);

  const filteredTodos = useMemo(() => getTodos(todos, filter), [todos, filter]);

  const handleOnToggle = (id: string) => () => {
    store.dispatch(toggleTodo({ id }));
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
