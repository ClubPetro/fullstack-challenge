import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFF;
    --black: #000;
    --light-green: #4F9419;
    --dark-green: #006C18;
    --grey: #868686;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(---white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--grey);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  input, select, button {
    border-radius: 7px;
    border: none;
  }
`;
