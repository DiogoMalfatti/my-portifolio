import React from 'react'

import Paragraphs from '../../Texts/Paragraphs'

import { PortifolioStyle } from './style'
import { SubTitleStyle } from '../../subtitleSection/style'
// import { TextStyle } from '../../textSection/style'
import { ButtonStyle } from '../../buttonSection/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const PortifolioSection = () => {
  return (
    <PortifolioStyle>
      <SubTitleStyle>
        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
        <h2>Portifólio</h2>
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
          Em alguns deles pode existir também um ícone de youtube onde eu tenho
          um vídeo comentando sobre o projeto.
        </p>
        <br />
      </Paragraphs>
      <ButtonStyle>
        <a href="/portifolio">Portifólio</a>
      </ButtonStyle>
    </PortifolioStyle>
  )
}

export default PortifolioSection
