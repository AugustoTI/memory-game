import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --color-primary: #13141f;
    --color-secondary: crimson;
    --text-white: #fff;
    --text-dark: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }
`;
