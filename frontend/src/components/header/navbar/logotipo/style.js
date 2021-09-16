import styled from 'styled-components'

export const LogotipoStyle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5px;
    box-shadow: 0 0 20px var(--color-blue);
  }
  h1 {
    text-transform: uppercase;
    color: var(--color-white);
    text-shadow: 0 0 30px var(--color-blue), 0 0 30px var(--color-blue),
      0 0 30px var(--color-blue);
  }
`
