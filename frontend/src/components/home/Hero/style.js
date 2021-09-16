import styled from 'styled-components'

export const HeroStyle = styled.section`
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 0.3rem;
    margin-bottom: 0.5rem;
  }
  div {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
  }
  h2 {
    text-align: left;
    font-size: 1rem;
    color: var(--color-blue);
    text-shadow: 0 0 20px var(--color-white);
  }
  span {
    font: 400 1rem 'Work Sans', sans-serif;
    font-size: 1rem;
    color: var(--color-white);
    text-shadow: 0 0 20px var(--color-blue);
  }
`
