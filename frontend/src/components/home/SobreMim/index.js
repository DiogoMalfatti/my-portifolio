import React from 'react'
import { SobreMimStyle } from './style'
import { SubTitleStyle } from '../../subtitleSection/style'
import { TextStyle } from '../../textSection/style'
import { ButtonStyle } from '../../buttonSection/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const SobreMimSection = () => {
  return (
    <SobreMimStyle>
      <SubTitleStyle>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <h2>Sobre Mim</h2>
      </SubTitleStyle>
      <TextStyle>
        <p>
          Na seção Sobre mim eu escrevi sobre minhas hard skills, o que eu estou
          fazendo e onde estou, o que pretendo fazer e para onde vou.
        </p>
        <br />
        <p>
          Falo um pouco sobre soft skills, minha missão, visão e valores como
          profissional.
        </p>
        <br />
        <p>E claro um pouquinho de mim sem uniforme.</p>
        <br />
      </TextStyle>
      <ButtonStyle>
        <a href="/sobremim">Sobre Mim</a>
      </ButtonStyle>
    </SobreMimStyle>
  )
}

export default SobreMimSection
