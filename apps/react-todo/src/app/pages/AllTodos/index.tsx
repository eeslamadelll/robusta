import styled from 'styled-components';
import { ListTodos } from '@/app/components/ListTodos';
import { Heading } from '@/app/components/atoms/Heading';
import { Button } from '@/app/components/atoms/Button';

const StyledApp = styled.div`
  margin: auto;
  width: var(--container-width);
  background: var(--color-white);
  min-height: calc(100vh - 80px);
  padding: 20px;
  position: relative;
  overflow: auto;
  @media (max-width: 500px) {
    height: calc(75vh);
  }
`;

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
