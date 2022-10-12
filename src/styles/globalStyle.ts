import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


`;
export default GlobalStyle;
