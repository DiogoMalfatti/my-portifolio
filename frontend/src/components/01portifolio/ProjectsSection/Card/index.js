import React from 'react'
import {
  CardStyle,
  CardImage,
  CardInfos,
  CardInfoTitle,
  CardInfoDescription,
  CardInfoIconLink,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Card = ({ project }) => {
  return (
    <CardStyle>
      <CardImage>
        <img src="./card07.png" alt="" />
      </CardImage>
      <CardInfos>
        <CardInfoTitle>
          <h4>{project.title}</h4>
          <h5>{project.createdAt}</h5>
        </CardInfoTitle>
        <CardInfoDescription>
          <p>{project.description}</p>
        </CardInfoDescription>
        <CardInfoIconLink>
          <a href="/https://www.linkedin.com/in/diogomalfatti/" target="_blank">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
          <a href="/https://www.linkedin.com/in/diogomalfatti/" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="/https://www.linkedin.com/in/diogomalfatti/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </CardInfoIconLink>
      </CardInfos>
    </CardStyle>
  )
}

export default Card
