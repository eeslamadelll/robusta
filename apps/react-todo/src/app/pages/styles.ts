import styled from 'styled-components';

export const StyledApp = styled.div`
  margin: auto;
  width: var(--container-width);
  background: var(--color-white);
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  padding: 20px;
  position: relative;
  overflow: auto;
  @media (max-width: 500px) {
    min-height: 75vh;
    max-height: 75vh;
  }
`;
