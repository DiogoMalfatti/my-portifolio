import React from 'react'
import styled from 'styled-components'

import SectionReverse from '../../Layout/SectionReverse'
import SectionLeft from '../../Layout/Section/SectionLeft'
import SectionRight from '../../Layout/Section/SectionRight'
import Paragraphs from '../../Texts/Paragraphs'

import { SubTitleStyle } from '../../subtitleSection/style'
import { ButtonStyle } from '../../buttonSection/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import Carroussel from '../Portifolio/carousel'

const PortifolioSection = () => {
  return (
    <PortifolioStyle>
      <SectionReverse>
        <SectionLeft>
          <SubTitleStyle>
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            <h3>Portifólio</h3>
          </SubTitleStyle>
          <Paragraphs>
            <p>
              Na seção Portifólio você vai encontar os projetos que criei e
              trabalhos que participei bem como as linguagens, bibliotecas e
              frameworks usados.
            </p>
            <br />
            <p>
              Nos cards dos projetos vai existir um ícone do github no qual você
              pode olhar o código fonte do projeto.
            </p>
            <br />
            <p>
              Em alguns deles pode existir também um ícone de youtube onde eu
              tenho um vídeo comentando sobre o projeto.
            </p>
            <br />
          </Paragraphs>
          <ButtonStyle>
            <a href="/portifolio">Portifólio</a>
          </ButtonStyle>
        </SectionLeft>
        <SectionRight>
          <Carroussel />
        </SectionRight>
      </SectionReverse>
    </PortifolioStyle>
  )
}

const PortifolioStyle = styled.section``

export default PortifolioSection
