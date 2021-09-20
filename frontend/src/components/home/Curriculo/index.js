import React from 'react'
import { CurriculoStyle } from './style'
import { SubTitleStyle } from '../../subtitle/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'

const CurriculoSection = () => {
  return (
    <CurriculoStyle>
      <SubTitleStyle>
        <FontAwesomeIcon icon={faIdCard} size="2x" />
        <h2>Curriculo</h2>
      </SubTitleStyle>
    </CurriculoStyle>
  )
}

export default CurriculoSection
