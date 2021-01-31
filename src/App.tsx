import AddTodo from 'components/AddTodo';
import TodoFilter from 'components/TodoFilter';
import TodoList from 'components/TodoList';

const App = () => {
  return (
    <div>
      <h4>Todo App</h4>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </div>
  );
};

export default App;
