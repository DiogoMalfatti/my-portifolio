import React from 'react'
import { CurriculoStyle } from './style'
import { SubTitleStyle } from '../../subtitleStyle/style'
import { TextStyle } from '../../text/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'

const CurriculoSection = () => {
  return (
    <CurriculoStyle>
      <SubTitleStyle>
        <FontAwesomeIcon icon={faIdCard} size="2x" />
        <h2>Curriculo</h2>
      </SubTitleStyle>
      <TextStyle>
        <p>
          A seção currículo é meu CV escrito no estilo do tema do meu
          portifólio, mas tem um botão para você alterar para o modelo
          tradicional.
        </p>
        <br />
        <p>
          Também tem os meus certificados mais importantes com conteúdo
          programático.
        </p>
        <br />
      </TextStyle>
    </CurriculoStyle>
  )
}

export default CurriculoSection
