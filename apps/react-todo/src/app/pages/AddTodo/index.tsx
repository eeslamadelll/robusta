import styled from 'styled-components';
import { AddForm } from '@/app/components/AddForm';
import { Button } from '@/app/components/atoms/Button';

const StyledApp = styled.div`
  margin: auto;
  width: var(--container-width);
  background: var(--color-white);
  height: calc(100vh - 80px);
  padding: 20px;
  position: relative;
  overflow: auto;
`;

export function AddTodo() {
  return (
    <StyledApp>
      <AddForm />
      <Button action="✓" location="/" />
    </StyledApp>
  );
}

export default AddTodo;
