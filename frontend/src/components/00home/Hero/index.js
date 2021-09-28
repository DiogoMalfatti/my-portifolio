import React from 'react'
import styled from 'styled-components'

import SectionReverse from '../../Layout/SectionReverse'
import SectionLeft from '../../Layout/Section/SectionLeft'
import SectionRight from '../../Layout/Section/SectionRight'

import BusinessCard from '../../businessCard'

const HeroSection = () => {
  return (
    <HeroStyle>
      <SectionReverse>
        <SectionLeft>
          <img src="./image/hero-lg.svg" alt="" />
        </SectionLeft>
        <SectionRight>
          <HeroRightStyle>
            <BusinessCard />
            {/* <WelcomeCard> */}
            <h4>
              <span>Olá pessoAll !!</span> <br />
              <span>Meu nome é</span> Diogo Malfatti <br />
              <span>eu sou</span> Desenvolvedor Web <br />
              <span>Sejam bem vindos ao meu</span> <br />
              Portifólio .
            </h4>
            {/* </WelcomeCard> */}
          </HeroRightStyle>
        </SectionRight>
      </SectionReverse>
    </HeroStyle>
  )
}

const HeroStyle = styled.section`
  margin-top: calc(var(--height-top) + 2rem);
`

const HeroRightStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* só uma div */
`

export const WelcomeCard = styled.div`
  /* h3 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1rem;
    color: var(--color-blue);
  } */
  /* span {
    font: 400 1rem 'Work Sans', sans-serif;
    font-size: 1rem;
    color: var(--color-white);
  } */
`

export default HeroSection
