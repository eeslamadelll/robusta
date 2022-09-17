import styled from 'styled-components';
import { ListTodos } from '@/app/components/ListTodos';
import { Heading } from '@/app/components/atoms/Heading';
import { Button } from '@/app/components/atoms/Button';

const StyledApp = styled.div`
  margin: 20px auto;
  width: var(--container-width);
  background: var(--color-white);
  height: calc(100vh - 40px);
  padding: 0px 20px;
  position: relative;
  overflow: auto;
`;

export function App() {
  return (
    <StyledApp>
      <Heading as="h1">Tasks</Heading>
      <ListTodos />
      <Button />
    </StyledApp>
  );
}

export default App;
