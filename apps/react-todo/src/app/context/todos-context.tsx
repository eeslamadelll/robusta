import React, { createContext, useReducer, useContext } from 'react';
import { saveToLocalStorage } from '@/app/utils';

type TodoAction =
  | { type: 'add_todo'; title: string }
  | { type: 'complete_todo'; id: string; completed: boolean };

type Dispatch = (action: TodoAction) => void;

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const TodosContext = createContext<
  { state: Todo[]; dispatch: Dispatch } | undefined
>(undefined);

type TodosProviderProps = { children: React.ReactNode };

function todosReducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case 'add_todo': {
      const updatedState = [
        ...state,
        { id: Math.random().toString(), title: action.title, completed: false },
      ];
      saveToLocalStorage('todos', updatedState);
      return updatedState;
    }
    case 'complete_todo': {
      const updatedTodos = [
        ...state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: action.completed,
            };
          } else {
            return todo;
          }
        }),
      ];
      saveToLocalStorage('todos', updatedTodos);
      return updatedTodos;
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
      // return state;
    }
  }
}

function TodosProvider({ children }: TodosProviderProps) {
  const todosfromLocalStorage = JSON.parse(localStorage.getItem('todos') || '');
  const [state, dispatch] = useReducer(
    todosReducer,
    todosfromLocalStorage || []
  );
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}

export const todos: Todo[] = [];
export { TodosProvider, useTodos };
