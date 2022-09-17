import styled from 'styled-components';

export const ListWrapper = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyList = styled.p`
  text-align: center;
  font-size: 2.2rem;
  color: var(--color-placeholder);
  width: 80%;
  line-height: 1.7;
`;
