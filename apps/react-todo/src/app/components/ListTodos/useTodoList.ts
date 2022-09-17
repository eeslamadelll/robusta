import { useTodos } from '@/app/context/todos-context';

export const useTodoList = () => {
  const { state: todos } = useTodos();
  const isEmpty = todos.length === 0;
  return { todos, isEmpty };
};
