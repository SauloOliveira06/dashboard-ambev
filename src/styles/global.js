import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  p, ul, li, span, button {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

`;
