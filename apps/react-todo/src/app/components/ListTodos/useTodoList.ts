import { useContext } from 'react';
import { TodosContext } from '@/app/context/todos-context';

export const useTodoList = () => {
  const todos = useContext(TodosContext);
  return { todos };
};
