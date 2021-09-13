import React from 'react'
import { HeroStyle } from './style'

const HeroSection = () => {
  return (
    <HeroStyle>
      <img src="./image/hero-sm.png" alt="" />
      <h2>
        Olá pessoall !! <br />
        Meu nome é <span>Diogo Malfatti</span> , <br />
        sou formado em Gestão de TI <br />e <span>Desenvolvedor Front End</span>
        . <br />
        Sejam bem vindos ao <br />
        meu portifólio . <br />
      </h2>
    </HeroStyle>
  )
}

export default HeroSection
