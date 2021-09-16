import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: auto;
  }
  /* VARIABLES */
  :root {
    --color-body: #000000;
    --color-white: #ffffff;
    --color-blue: #00ffff;
    --color-pink: #ff00ff;
    --color-yellow: #ffff00;
    --color-bar: rgba(255, 255, 255, 0.1);
  }

  /* BASE */
  body {
    -webkit-font-smoothing: antialiased; 
    font: 400 1rem 'Work Sans', sans-serif;
    background-color: var(--color-body);
  }
  h1 {
    -webkit-font-smoothing: auto;
    font: 700 1.5rem 'Space Mono', monospace;
  }h2 {
    -webkit-font-smoothing: auto;
    font: 700 1rem 'Space Mono', monospace;
  }

`

export default GlobalStyle
