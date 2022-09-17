import { CheckBox } from '@/app/components/atoms/CheckBox';
import { useTodoList } from './useTodoList';
import * as Styled from './styles';

export const ListTodos = () => {
  const { todos } = useTodoList();
  return (
    <Styled.ListWrapper>
      {todos.map((todo) => {
        return (
          <Styled.ListItem>
            <CheckBox {...todo} />
          </Styled.ListItem>
        );
      })}
    </Styled.ListWrapper>
  );
};

export default ListTodos;
