// this will be coming from some kind of storage
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
const todos: Todo[] = [
  { id: '1', title: 'Todo 1', completed: false },
  { id: '2', title: 'Todo 2', completed: true },
  { id: '3', title: 'Todo 3', completed: false },
  { id: '4', title: 'Todo 4', completed: true },
  { id: '5', title: 'Todo 5', completed: false },
  { id: '6', title: 'Todo 6', completed: true },
  { id: '7', title: 'Todo 7', completed: false },
  { id: '8', title: 'Todo 8', completed: true },
  { id: '9', title: 'Todo 9', completed: false },
  { id: '10', title: 'Todo 10', completed: false },
  { id: '11', title: 'Todo 11', completed: false },
  { id: '12', title: 'Todo 12', completed: false },
  { id: '13', title: 'Todo 13', completed: false },
  { id: '14', title: 'Todo 14', completed: false },
  { id: '15', title: 'Todo 15', completed: false },
  { id: '16', title: 'Todo 16', completed: false },
  { id: '17', title: 'Todo 17', completed: false },
];

export const useTodoList = () => {
  return { todos };
};
