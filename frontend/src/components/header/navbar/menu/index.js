import React from 'react'
import { MenuStyle, MenuNav, MenuButton } from './style'

const Menu = () => {
  return (
    <MenuStyle>
      <MenuNav>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/portifolio">Portifólio</a>
          </li>
          <li>
            <a href="/curriculo">Currículo</a>
          </li>
          <li>
            <a href="/sobremim">Sobre Mim</a>
          </li>
        </ul>
      </MenuNav>
      <MenuButton></MenuButton>
    </MenuStyle>
  )
}

export default Menu
