import React from 'react'
import styled from 'styled-components'

const HeroImage = () => {
  return (
    <HeroImageStyle>
      <img src="./image/hero-lg.svg" alt="" />
    </HeroImageStyle>
  )
}

const HeroImageStyle = styled.section`
  margin-left: 0.3rem;
  margin-bottom: 0.5rem;
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    width: 37.5rem;
    height: 37.5rem;
    order: 9;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default HeroImage
