import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

`;
