import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

  }

  ul {
    list-style: none;
    padding: 0;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
