import React from 'react'
import styled from 'styled-components'

import Section from '../../Layout/Section'
import SectionLeft from '../../Layout/Section/SectionLeft'
import SectionRight from '../../Layout/Section/SectionRight'
import Paragraphs from '../../Texts/Paragraphs'

import { SubTitleStyle } from '../../subtitleSection/style'
import { ButtonStyle } from '../../buttonSection/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faIdCard } from '@fortawesome/free-regular-svg-icons'
import {
  faCloudDownloadAlt,
  faDownload,
  faGraduationCap,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const CurriculoSection = () => {
  return (
    <CurriculoStyle>
      <Section>
        <SectionLeft>
          <SubTitleStyle>
            <FontAwesomeIcon icon={faIdCard} size="2x" />
            <h3>Curriculo</h3>
          </SubTitleStyle>
          <Paragraphs>
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
          </Paragraphs>
          <ButtonStyle>
            <a href="/curriculo">Curriculo</a>
          </ButtonStyle>
        </SectionLeft>
        <SectionRight>
          <Container>
            <img src="./tecladoCV.jpg" alt="" />
          </Container>
        </SectionRight>
      </Section>
    </CurriculoStyle>
  )
}

const CurriculoStyle = styled.section``

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 0.5rem;
    border: 2px solid white;
    box-shadow: 0 0 20px var(--color-blue);
    width: 500px;
    height: 400px;
  }
`

export default CurriculoSection
