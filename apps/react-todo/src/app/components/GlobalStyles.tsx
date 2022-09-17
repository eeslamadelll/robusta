import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    // colors
    --gradient-start: rgb(212, 192, 219);
    --gradient-end: rgba(131, 190, 241, 1);
    --color-primary: #2698F7;
    --color-white: #fff;
    --color-check-empty: #ECEFF1;
    --color-placeholder: #8F9CA3;
    // sizes
    --container-width: 70%;
    margin: 0;
    padding: 20px 0;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: ;
    background: linear-gradient(
      90deg,
      var(--gradient-start) 0%,
      var(--gradient-end) 100%
    );
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
`;
