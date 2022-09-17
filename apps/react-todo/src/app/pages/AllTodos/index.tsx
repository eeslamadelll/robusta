import { StyledApp } from '../styles';
import { ListTodos } from '@/app/components/ListTodos';
import { Heading } from '@/app/components/atoms/Heading';
import { Button } from '@/app/components/atoms/Button';

export function AllTodos() {
  return (
    <StyledApp>
      <Heading as="h1">Tasks</Heading>
      <ListTodos />
      <Button action="+" location="/add-todo" />
    </StyledApp>
  );
}

export default AllTodos;
