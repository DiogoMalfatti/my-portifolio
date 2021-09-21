import styled from 'styled-components'

export const LogoMDStyle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid var(--color-blue);
    box-shadow: 0 0 20px var(--color-blue);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    line-height: 1.25;
    text-transform: uppercase;
    color: var(--color-white);
    text-shadow: 0 0 20px var(--color-blue), 0 0 20px var(--color-blue);
  }
  h2 {
    font-size: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    color: var(--color-blue);
  }
`
