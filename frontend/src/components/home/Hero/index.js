import React from 'react'
import { HeroStyle } from './style'

const HeroSection = () => {
  return (
    <HeroStyle>
      <img src="./image/hero-sm.png" alt="" />
      <div>
        <h2>
          <span>Olá pessoAll !!</span> <br />
          <span>meu nome é</span> Diogo Malfatti <br />
          <span>eu sou</span> Dev. Front End . <br />
          <span>Sejam bem vindos ao meu</span> <br />
          Portifólio .
        </h2>
      </div>
    </HeroStyle>
  )
}

export default HeroSection
