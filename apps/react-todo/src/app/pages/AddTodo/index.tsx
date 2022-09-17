import styled from 'styled-components';
import { AddForm } from '@/app/components/AddForm';

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

export function AddTodo() {
  return (
    <StyledApp>
      <AddForm />
    </StyledApp>
  );
}

export default AddTodo;
