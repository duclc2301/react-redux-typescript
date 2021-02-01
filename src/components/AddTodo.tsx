import type { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { useState } from 'react';
import { addTodo } from 'slices/todos';
import { useTypedDispatch } from 'store';

const AddTodo: FunctionComponent<{}> = () => {
  const dispatch = useTypedDispatch();
  const [value, setValue] = useState<string>('');

  const handleAddTodo = (task: string) => {
    dispatch(addTodo({ task }));
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    handleAddTodo(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleOnChange} autoFocus />
        <button type="submit" disabled={!value} style={{ marginLeft: '5px' }}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
