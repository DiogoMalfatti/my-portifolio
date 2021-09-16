import React from 'react'
import { NavStyle } from './style'
import Logotipo from '../navbar/logotipo'
import Menu from '../navbar/menu'

const Nav = () => {
  return (
    <NavStyle>
      <Logotipo />
      <Menu />
    </NavStyle>
  )
}

export default Nav
