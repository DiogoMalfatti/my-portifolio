import React from 'react'
import { BusinessCardStyle } from './style'
import LogoMD from '../logoMD'
import { IconsList } from '../06footer/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const BusinessCard = () => {
  return (
    <BusinessCardStyle>
      <LogoMD />
      <IconsList>
        <a href="/https://www.linkedin.com/in/diogomalfatti/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/DiogoMalfatti"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="http://localhost:3000" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGlobe} size="lg" />
        </a>
      </IconsList>
    </BusinessCardStyle>
  )
}

export default BusinessCard
