import React from 'react'
import { MenuStyle, MenuNav, MenuButton } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleClick = () => setOpenMenu(!openMenu)

  return (
    <MenuStyle>
      <MenuNav className={openMenu !== true ? 'hidden' : 'show'}>
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
      <MenuButton onClick={handleClick}>
        {openMenu !== true ? (
          <FontAwesomeIcon icon={faBars} size="1x" />
        ) : (
          <FontAwesomeIcon icon={faTimes} size="1x" />
        )}
      </MenuButton>
    </MenuStyle>
  )
}

export default Menu
