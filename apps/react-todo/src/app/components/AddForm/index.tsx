import { TextInput } from '@/app/components/atoms/TextInput';
import { Heading } from '@/app/components/atoms/Heading';
import * as Styled from './styles';

type FormProps = {};

export const AddForm = ({}: FormProps) => {
  return (
    <Styled.FormContainer>
      <Styled.FormContent>
        <Heading as="h1">Create New Task</Heading>
        <TextInput />
      </Styled.FormContent>
    </Styled.FormContainer>
  );
};
