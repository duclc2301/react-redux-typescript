import type { Filter } from 'slices/filter';
import { setFilter } from 'slices/filter';
import { useTypedDispatch, useTypedSelector } from 'store';

const filters: Record<string, Filter> = {
  All: 'SHOW_ALL',
  Active: 'SHOW_ACTIVE',
  Completed: 'SHOW_COMPLETED',
};

const TodoFilter = () => {
  const dispatch = useTypedDispatch();
  const filter = useTypedSelector((state) => state.filter);

  const handleFilterTodo = (filter: Filter) => () => {
    console.log(filter);
    dispatch(setFilter({ filter }));
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
