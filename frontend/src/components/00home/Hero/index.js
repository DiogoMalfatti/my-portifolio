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
          <SectionRightStyle>
            <RightTop>
              <WelcomeCard>
                <h4>
                  <span>Olá pessoAll !!</span> <br />
                  <span>Meu nome é</span> <br />
                  Diogo Malfatti <br />
                  <span>eu sou</span> <br />
                  Dev. Front End | Instrutor <br />
                  <span>Sejam bem vindos ao meu</span> <br />
                  Portifólio <span>.</span>
                </h4>
              </WelcomeCard>
            </RightTop>
            <RightBottom>
              <BusinessCard />
            </RightBottom>
          </SectionRightStyle>
        </SectionRight>
      </SectionReverse>
    </HeroStyle>
  )
}

const HeroStyle = styled.section`
  margin-top: calc(var(--height-top) + 2rem);
`

const SectionRightStyle = styled.div`
  /* border: 1px solid green;
  color: green; */

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    height: 80%;
    margin-top: 5rem;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`
const RightTop = styled.div`
  /* border: 1px solid red;
  color: red; */

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    width: 100%;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`
const RightBottom = styled.div`
  /* border: 1px solid yellow;
  color: yellow; */

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    width: 100%;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

/* <WelcomeCard>
<h4>
  <span>Olá pessoAll !!</span> <br />
  <span>Meu nome é</span> Diogo Malfatti <br />
  <span>eu sou</span> Desenvolvedor Web <br />
  <span>Sejam bem vindos ao meu</span> <br />
  Portifólio .
</h4>
</WelcomeCard>  */

const WelcomeCard = styled.div`
  h3 {
    margin-top: 2rem;
    text-align: center;
    font-size: 1rem;
    color: var(--color-blue);
  }
  /* span {
    font: 400 1rem 'Work Sans', sans-serif;
    font-size: 1rem;
    color: var(--color-white);
  } */
`

export default HeroSection
