import styled from 'styled-components';

export const ListWrapper = styled.ul`
  padding: 0;
  height: 80%;
  overflow: scroll;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
`;
