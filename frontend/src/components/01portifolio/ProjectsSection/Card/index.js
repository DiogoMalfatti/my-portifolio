import React from 'react'
import moment from 'moment'
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
        <img src={project.image} alt="" />
      </CardImage>
      <CardInfos>
        <CardInfoTitle>
          <h4>{project.title}</h4>
          <h5>{moment(project.createdAt).format('MMM YYYY')}</h5>
        </CardInfoTitle>
        <CardInfoDescription>
          <p>{project.description}</p>
        </CardInfoDescription>
        <CardInfoIconLink>
          <a href={project.linkGlobe} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
          <a href={project.linkGithub} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={project.linkYoutube} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </CardInfoIconLink>
      </CardInfos>
    </CardStyle>
  )
}

export default Card
