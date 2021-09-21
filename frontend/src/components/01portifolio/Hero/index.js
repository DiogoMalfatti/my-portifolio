import React from 'react'
import { HeroStyle } from '../../hero/style'
import HeroImage from '../../hero/heroImage'
import BusinessCard from '../../businessCard'

const HeroSection = () => {
  return (
    <HeroStyle>
      <HeroImage />
      <BusinessCard />
    </HeroStyle>
  )
}

export default HeroSection
