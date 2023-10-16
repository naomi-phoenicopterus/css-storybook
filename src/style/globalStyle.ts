import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  body {
    background-color: #f5f4f2;
    font-family: 'Open Sans', sans-serif;
  }
`;

export { GlobalStyle };
