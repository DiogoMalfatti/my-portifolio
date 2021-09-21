import React from 'react'
import { HeroStyle } from '../../hero/style'
import HeroImage from '../../hero/heroImage'
import BusinessCard from '../../businessCard'
import { HeroDiv } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  return (
    <HeroStyle>
      <HeroImage />
      <BusinessCard />
      <HeroDiv>
        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
        <h2>Portifólio</h2>
      </HeroDiv>
    </HeroStyle>
  )
}

export default HeroSection
