import styled from 'styled-components'

const Layout = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 1rem 0 1rem;
  /* TABLET */
  @media (min-width: 767px) {
    padding: 0 2.5rem 0 2.5rem;
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    padding: 0 4rem 0 4rem;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    padding: 0 6rem 0 6rem;
  }
`

export default Layout
