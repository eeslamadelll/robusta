import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TodosProvider } from './app/context/todos-context';

import { GlobalStyle } from '@/app/components/GlobalStyles';

import NotFound from '@/app/pages/NotFound';
import AddTodo from '@/app/pages/AddTodo';
import AllTodos from '@/app/pages/AllTodos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllTodos />,
    errorElement: <NotFound />,
  },
  {
    path: '/add-todo',
    element: <AddTodo />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <TodosProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </TodosProvider>
  </StrictMode>
);
