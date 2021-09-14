import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #1b1b1b;
    overflow-x: hidden;
    text-decoration: none;
  }
  button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: transparent;
    color: yellow;
    border: 3px solid #416cd5;
    transition: all 0.5s ease-in-out;
    &:hover{
      color: white;
      background: yellowgreen;
    }
  }
  h2{
    font-weight: lighter;
    font-size: 4rem;
  }
  h3{
    color: white;
  }
  h4{
    font-weight: bold;
    font-size: 1.2rem;
    color: lightgray;
  }
  a{
    font-size: 1.1rem;
  }
  span{
    font-weight: lighter;
    color: #416cd5;
  }
  p{
    padding: 1rem 1rem;
    line-height: 150%;
    font-size: 1.4rem;
    color: #ccc;
  }
`

export default GlobalStyle
