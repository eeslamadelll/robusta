import styled from 'styled-components';

export const StyledApp = styled.div`
  margin: auto;
  width: var(--container-width);
  background: var(--color-white);
  max-height: calc(100vh - 40px);
  min-height: calc(100vh - 40px);
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow: auto;
  @media (max-width: 500px) {
    margin: auto;
    max-height: 100vh;
    min-height: 100vh;
    width: 100vw;
  }
`;
