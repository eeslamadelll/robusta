import { TextInput } from '@/app/components/atoms/TextInput';
import { Heading } from '@/app/components/atoms/Heading';
import * as Styled from './styles';
import { Button } from '@/app/components/atoms/Button';
import useFormHook from './useFormHook';

type FormProps = {};

export const AddForm = ({}: FormProps) => {
  const { ref, handleInputChange, handleAddTodo } = useFormHook();

  return (
    <Styled.FormContainer>
      <Styled.FormContent>
        <Heading as="h1">Create New Task</Heading>
        <TextInput
          ref={ref}
          onChange={handleInputChange}
          onSubmit={handleAddTodo}
        />
        <Button action="✓" location="" onClick={handleAddTodo} />
      </Styled.FormContent>
    </Styled.FormContainer>
  );
};
