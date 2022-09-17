import { CheckBox } from '@/app/components/atoms/CheckBox';
import { useTodoList } from './useTodoList';
import * as Styled from './styles';

export const ListTodos = () => {
  const { todos, isEmpty } = useTodoList();

  if (isEmpty) {
    return (
      <Styled.EmptyListContainer>
        <Styled.EmptyList>
          No tasks yet try the plus button below and add some.
        </Styled.EmptyList>
      </Styled.EmptyListContainer>
    );
  }
  return (
    <Styled.ListWrapper>
      {todos.map((todo) => {
        return (
          <Styled.ListItem key={todo.id}>
            <CheckBox {...todo} />
          </Styled.ListItem>
        );
      })}
    </Styled.ListWrapper>
  );
};

export default ListTodos;
