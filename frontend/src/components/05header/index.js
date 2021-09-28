import React from 'react'
import styled from 'styled-components'
import Nav from './navbar'

const Header = () => {
  return (
    <HeaderStyle>
      <Nav />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  z-index: 100;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 1rem 0 1rem;
  background-color: var(--color-bar);
  box-shadow: 0 0 10px var(--color-blue);
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

export default Header
