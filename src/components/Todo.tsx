import type { FunctionComponent } from 'react';

type TodoProps = {
  todo: Todo;
  onToggle: () => void;
};

const Todo: FunctionComponent<TodoProps> = ({ todo, onToggle }) => {
  const { task, completed } = todo;

  const style = {
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer',
  };

  return (
    <li style={style} onClick={onToggle}>
      {task}
    </li>
  );
};

export default Todo;
