import type { Filter } from 'actions';
import { setTodoFilter } from 'actions';
import { useEffect, useState } from 'react';
import type { RootState } from 'reducers';
import store from 'store';

const filters: Record<string, Filter> = {
  All: 'SHOW_ALL',
  Active: 'SHOW_ACTIVE',
  Completed: 'SHOW_COMPLETED',
};

const TodoFilter = () => {
  const [filter, setFilter] = useState<RootState['filter']>('SHOW_ALL');

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { filter } = store.getState();
      setFilter(filter);
    });
    return unsubscribe;
  }, []);

  const handleFilterTodo = (filter: Filter) => () => {
    store.dispatch(setTodoFilter({ filter }));
  };

  return (
    <div>
      {Object.keys(filters).map((item) => (
        <button
          key={item}
          disabled={filters[item] === filter}
          onClick={handleFilterTodo(filters[item])}
          style={{ marginRight: '5px' }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
