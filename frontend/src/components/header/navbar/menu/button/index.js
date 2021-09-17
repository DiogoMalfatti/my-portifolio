import React from 'react'
import { ButtonMenuStyle } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const ButtonMenu = () => {
  return (
    <ButtonMenuStyle>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </ButtonMenuStyle>
  )
}

export default ButtonMenu
