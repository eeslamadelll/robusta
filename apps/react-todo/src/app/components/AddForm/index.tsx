import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { TextInput } from '@/app/components/atoms/TextInput';
import { Heading } from '@/app/components/atoms/Heading';
import * as Styled from './styles';
import { Button } from '@/app/components/atoms/Button';
import { useTodos } from '@/app/context/todos-context';

type FormProps = {};

export const AddForm = ({}: FormProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [todoValue, setTodoValue] = useState<string | undefined>('');
  const { dispatch } = useTodos();

  return (
    <Styled.FormContainer>
      <Styled.FormContent>
        <Heading as="h1">Create New Task</Heading>
        <TextInput
          ref={ref}
          onChange={(val) => {
            setTodoValue(ref.current?.value);
          }}
        />
        <Button
          action="✓"
          location=""
          onClick={(e: any) => {
            e.preventDefault();
            if (!todoValue) {
              alert('Please enter a task');
              return;
            }
            dispatch({ type: 'add_todo', title: String(todoValue) });
            navigate('/');
          }}
        />
      </Styled.FormContent>
    </Styled.FormContainer>
  );
};
