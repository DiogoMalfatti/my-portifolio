import React from 'react'
import { SobreMimStyle } from './style'
import { SubTitleStyle } from '../../subtitle/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const SobreMimSection = () => {
  return (
    <SobreMimStyle>
      <SubTitleStyle>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <h2>SobreMim</h2>
      </SubTitleStyle>
    </SobreMimStyle>
  )
}

export default SobreMimSection
