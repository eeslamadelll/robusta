import { useTodos } from '@/app/context/todos-context';
import React from 'react';

const useCheckboxHook = ({ id }: { id: string }) => {
  const markLength = 15.749618530273438;
  const { dispatch } = useTodos();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'complete_todo',
      id,
      completed: e.target.checked,
    });
  };

  return { markLength, handleCheckboxChange };
};

export default useCheckboxHook;
