import AddTodo from 'components/AddTodo';
import TodoFilter from 'components/TodoFilter';
import TodoList from 'components/TodoList';
import { Provider } from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <div>
      <h4>Todo App</h4>
      <Provider store={store}>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </Provider>
    </div>
  );
};

export default App;
