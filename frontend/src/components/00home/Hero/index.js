import React from 'react'
import styled from 'styled-components'
import { HeroStyle } from '../../hero/style'
import HeroImage from '../../hero/heroImage'
import BusinessCard from '../../businessCard'

const HeroSection = () => {
  return (
    <HeroStyle>
      <HeroImage />
      <HeroDiv>
        <BusinessCard />
        <WelcomeCard>
          <h2>
            <span>Olá pessoAll !!</span> <br />
            <span>Meu nome é</span> Diogo Malfatti <br />
            <span>eu sou</span> Desenvolvedor Web <br />
            <span>Sejam bem vindos ao meu</span> <br />
            Portifólio .
          </h2>
        </WelcomeCard>
      </HeroDiv>
    </HeroStyle>
  )
}

const HeroDiv = styled.div`
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export const WelcomeCard = styled.div`
  h2 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1rem;
    color: var(--color-blue);
  }
  span {
    font: 400 1rem 'Work Sans', sans-serif;
    font-size: 1rem;
    color: var(--color-white);
  }
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default HeroSection
