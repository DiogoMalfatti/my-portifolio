import React from 'react'
import { NavStyle } from './style'
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

export default Nav
