import styled from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  // left: 0;
  z-index: 1000;
  overflow: hidden;
  margin: 20px auto;
  width: var(--container-width);
  height: calc(100vh - 80px);
`;

export const FormContent = styled.div`
  background-color: var(--color-white);
  height: 100%;
  padding: 20px;
  overflow: hidden;
`;
