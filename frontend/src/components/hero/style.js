import styled from 'styled-components'

export const HeroStyle = styled.section`
  width: 100%;
  height: 100%;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 1rem 0 1rem;
  margin-top: calc(var(--height-top) + 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    margin: 0.5rem 0 0.5rem 0;
    padding: 0 3rem 0 3rem;
    flex-direction: row;
    justify-content: space-between;
    margin-top: var(--height-top);
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`
