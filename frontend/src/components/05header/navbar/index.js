import React from 'react'
import styled from 'styled-components'
import LogoMD from '../../logoMD'
import Menu from '../navbar/menu'

const Nav = () => {
  return (
    <NavStyle>
      <LogoMD />
      <Menu />
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default Nav
