import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-primary);
  position: fixed;
  bottom: 60px;
  right: calc(100% - 84%);
  width: 65px;
  height: 65px;
  border: none;
  border-radius: 50%;
  color: var(--color-white);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 2rem;
`;
