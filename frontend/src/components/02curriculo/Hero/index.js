import React from 'react'
import styled from 'styled-components'
import { ButtonStyle } from '../../buttonSection/style'

const HeroSection = () => {
  return (
    <HeroSectionStyle>
      <ButtonStyle>
        <a href="./CV_Front_DiogoMalfatti_0621.pdf" download>
          download
        </a>
      </ButtonStyle>
      <ButtonStyle>
        <a href="./CV_Front_DiogoMalfatti_0621.pdf" target="_blank">
          visualizar
        </a>
      </ButtonStyle>
    </HeroSectionStyle>
  )
}

const HeroSectionStyle = styled.div`
  margin-top: 8rem;
  margin-right: 20rem;
`

export default HeroSection
