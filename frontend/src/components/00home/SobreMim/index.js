import React from 'react'
import styled from 'styled-components'

import SectionReverse from '../../Layout/SectionReverse'
import SectionLeft from '../../Layout/Section/SectionLeft'
import SectionRight from '../../Layout/Section/SectionRight'
import Paragraphs from '../../Texts/Paragraphs'

import { SubTitleStyle } from '../../subtitleSection/style'
import { ButtonStyle } from '../../buttonSection/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSmile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import {
  faDailymotion,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const SobreMimSection = () => {
  return (
    <SobreMimStyle>
      <SectionReverse>
        <SectionLeft>
          <SubTitleStyle>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <h3>Sobre Mim</h3>
          </SubTitleStyle>
          <Paragraphs>
            <p>
              Na seção Sobre mim eu escrevi sobre minhas hard skills, o que eu
              estou fazendo e onde estou, o que pretendo fazer e para onde vou.
            </p>
            <br />
            <p>
              Falo um pouco sobre soft skills, minha missão, visão e valores
              como profissional.
            </p>
            <br />
            <p>E claro um pouquinho de mim sem uniforme.</p>
            <br />
          </Paragraphs>
          <ButtonStyle>
            <a href="/sobremim">Sobre Mim</a>
          </ButtonStyle>
        </SectionLeft>
        <SectionRight></SectionRight>
      </SectionReverse>
    </SobreMimStyle>
  )
}

const SobreMimStyle = styled.section`
  margin-bottom: var(--height-bottom);
`

export default SobreMimSection
