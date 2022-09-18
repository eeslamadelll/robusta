import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTodos } from '@/app/context/todos-context';

const useFormHook = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const [todoValue, setTodoValue] = useState<string | undefined>('');
  const { dispatch } = useTodos();

  const handleInputChange = () => {
    setTodoValue(ref.current?.value);
  };

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (!todoValue) {
      alert('Please enter a task');
      return;
    }
    dispatch({ type: 'add_todo', title: String(todoValue) });
    navigate('/');
  };

  return {
    navigate,
    ref,
    todoValue,
    dispatch,
    handleInputChange,
    handleAddTodo,
  };
};

export default useFormHook;
