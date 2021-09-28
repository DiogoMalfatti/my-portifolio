import React from 'react'
import styled from 'styled-components'
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

const MenuStyle = styled.div`
  display: flex;
  align-items: center;
`
const MenuNav = styled.div`
  /* ul , li */
  &.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  &.show {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;
    opacity: 1;
    visibility: visible;
    background: var(--color-bar);
    ul,
    li {
      margin: 0.5rem 0 0.5rem 0;
      padding: 0 1rem 0 1rem;
      margin: 4rem 0 4rem 0;
      text-align: center;
    }
    li {
      padding: 1rem 1rem 1rem 1rem;
      border: 1px solid var(--color-blue);
      border-radius: 0.25rem;
      background: var(--color-body);
      box-shadow: 0 0 20px var(--color-blue);
    }
    a {
      color: var(--color-white);
    }
  }
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    &.hidden {
      display: flex;
      visibility: visible;
      opacity: 1;
    }
    &.show {
      display: flex;
      visibility: visible;
      opacity: 1;
    }
    ul,
    li {
      display: flex;
      text-align: center;
      margin-left: 3rem;
    }
    li {
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-blue);
      border-radius: 0.25rem;
      background: var(--color-body);
      box-shadow: 0 0 20px var(--color-blue);
    }
    a {
      color: var(--color-white);
    }
    a {
      position: relative;
      transition: color 0.2s;
    }
    a:hover {
      color: var(--color-blue);
    }
    a::after {
      position: absolute;
      left: 0;
      bottom: -1.5rem;
      content: '';
      width: 0%;
      height: 2px;
      background: var(--color-blue);
      transition: width 0.2s;
    }
    a:hover::after {
      width: 100%;
    }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`
const MenuButton = styled.button`
  /* button */
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--color-blue);
  background: var(--color-body);
  border-radius: 0.25rem;
  color: #fff;
  box-shadow: 0 0 20px var(--color-blue);
  z-index: 100;
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default Menu
