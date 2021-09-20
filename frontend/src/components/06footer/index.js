import React from 'react'
import {
  FooterStyle,
  FooterLogo,
  LinksLists,
  LinksList,
  IconsList,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faIdCard, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode, faDownload } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <FooterStyle>
      <FooterLogo>
        <img src="./image/Group 1.svg" alt="" />
        <h1>Diogo Malfatti</h1>
      </FooterLogo>
      <LinksLists>
        <LinksList>
          <p>Portifólio</p>
          <IconsList>
            <a href="/portifolio">
              <FontAwesomeIcon icon={faLaptopCode} />
            </a>
            <a href="https://github.com/DiogoMalfatti">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </IconsList>
        </LinksList>
        <LinksList>
          <p>Curriculo</p>
          <IconsList>
            <a href="/curriculo">
              <FontAwesomeIcon icon={faIdCard} />
            </a>
            <a href="/curriculo">
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </IconsList>
        </LinksList>
        <LinksList>
          <p>Sobre Mim</p>
          <IconsList>
            <a href="/sobremim">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="/https://www.linkedin.com/in/diogomalfatti/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </IconsList>
        </LinksList>
      </LinksLists>
    </FooterStyle>
  )
}

export default Footer
