import styled, { css } from 'styled-components';

const textInputPlaceholderCommonStyles = css`
  color: var(--color-placeholder);
`;

export const TextInput = styled.textarea`
  width: 100%;
  padding-bottom: 300px;
  padding-top: 20px;
  border: none;
  outline: none;
  font-size: 2.2rem;
  font-family: inherit;
  color: var(--color-placeholder);
  ::placeholder,
  ::-webkit-input-placeholder {
    ${textInputPlaceholderCommonStyles};
  }
  :-ms-input-placeholder {
    ${textInputPlaceholderCommonStyles};
  }
`;
