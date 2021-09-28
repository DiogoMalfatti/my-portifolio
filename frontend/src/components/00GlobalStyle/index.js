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
  ul,li {
    list-style: none;
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
    --color-bar: rgba(0, 0, 0, 0.9);

    --height-top: 4.5rem;
    --height-bottom: 4.5rem;

    --font-title: 'Space Mono', monospace;
    --font-text: 'Work Sans', sans-serif;
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
  h3 {
    -webkit-font-smoothing: auto;
    font: 700 1.5rem 'Space Mono', monospace; 
    color: var(---color-blue);
    margin-left: 1rem;
  }
  h4 {
    color: var(--color-blue);
    -webkit-font-smoothing: auto;
    font: 400 1rem 'Space Mono', monospace;
  }
  a {
    -webkit-font-smoothing: auto;
    font: 700 1rem 'Space Mono', monospace;
  }
  p {
    color: var(--color-white);
    -webkit-font-smoothing: auto;
    font: 400 1rem 'Work Sans', sans-serif;
  }
  span {
    color: var(--color-white);
    -webkit-font-smoothing: auto;
    font: 400 1rem 'Work Sans', sans-serif;
  }
  /* TABLET */
  @media (min-width: 767px) {
    h3 {
      font: 700 1.75rem 'Space Mono', monospace;
      margin-left: 1.25rem;
    }
    h4 {
      font: 400 1.25rem 'Space Mono', monospace;
    }
    p {
      font: 400 1.25rem 'Work Sans', sans-serif;
    }
    span {
      font: 400 1.25rem 'Work Sans', sans-serif;
    }
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    h3 {
      font: 700 2rem 'Space Mono', monospace;
      margin-left: 1.5rem;
    }
    h4 {
      font: 400 1.5rem 'Space Mono', monospace;
    }
    p {
      font: 400 1.5rem 'Work Sans', sans-serif;
    }
    span {
      font: 400 1.5rem 'Work Sans', sans-serif;
    }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    h3 {
      font: 700 2rem 'Space Mono', monospace;
      margin-left: 1.5rem;
    }
    h4 {
      font: 400 1.5rem 'Space Mono', monospace;
    }
    p {
      font: 400 1.5rem 'Work Sans', sans-serif;
    }
    span {
      font: 400 1.5rem 'Work Sans', sans-serif;
    }
  }
`

export default GlobalStyle
