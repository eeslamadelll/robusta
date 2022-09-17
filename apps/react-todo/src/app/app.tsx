import styled from 'styled-components';
import { ListTodos } from '@/app/components/ListTodos';
import { Heading } from '@/app/components/atoms/Heading';

const StyledApp = styled.div`
  margin: auto;
  width: var(--container-width);
  background: var(--color-white);
  height: calc(100vh - 80px);
  padding: 20px;
  position: relative;
  overflow: auto;
`;

export function App() {
  return (
    <StyledApp>
      <Heading as="h1">Tasks</Heading>
      <ListTodos />
    </StyledApp>
  );
}

export default App;
