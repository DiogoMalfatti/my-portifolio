import React from 'react'
import { HeroStyle } from '../../hero/style'
import HeroImage from '../../hero/heroImage'
import { HeroDiv } from './style'
import BusinessCard from '../../businessCard'

const HeroSection = () => {
  return (
    <HeroStyle>
      <HeroImage />
      <BusinessCard />
      <HeroDiv>
        <h2>
          <span>Olá pessoAll !!</span> <br />
          <span>Meu nome é</span> Diogo Malfatti <br />
          <span>eu sou</span> Desenvolvedor Web <br />
          <span>Sejam bem vindos ao meu</span> <br />
          Portifólio .
        </h2>
      </HeroDiv>
    </HeroStyle>
  )
}

export default HeroSection
