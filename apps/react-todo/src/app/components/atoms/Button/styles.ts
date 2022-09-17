import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--color-primary);
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 0px;
  height: 0px;
  padding: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: var(--color-white);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 2rem;
`;
