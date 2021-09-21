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
        <a href="/https://www.linkedin.com/in/diogomalfatti/">
          <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
        </a>
        <a href="https://github.com/DiogoMalfatti">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="http://localhost:3000">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </IconsList>
    </BusinessCardStyle>
  )
}

export default BusinessCard
