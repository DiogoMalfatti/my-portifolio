import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
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
            <FontAwesomeIcon icon={faGlobe} size="1x" />
          </a>
          <a href={project.linkGithub} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a href={project.linkYoutube} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </a>
        </CardInfoIconLink>
      </CardInfos>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 0.5rem;
  border: 0.25px solid var(--color-blue);
  border-radius: 0.25rem;
  box-shadow: 0 0 10px var(--color-blue);
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

const CardImage = styled.div`
  width: 9.375rem;
  height: 6.25rem;
  margin-bottom: 0.5rem;
  img {
    width: 9.375rem;
    height: 6.25rem;
    border-radius: 0.25rem;
  }
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    width: 14rem;
    height: 9.375rem;
    img {
      width: 14rem;
      height: 9.375rem;
    }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    width: 18.75rem;
    height: 12.5rem;
    img {
      width: 18.75rem;
      height: 12.5rem;
    }
  }
`

const CardInfos = styled.div`
  color: var(--color-white);
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  width: 9.375rem;
  min-height: 9.375rem;
  padding: 1rem;
  border-radius: 0.5rem;
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    width: 14rem;
    min-height: 14rem;
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    width: 18.75rem;
    min-height: 18.75rem;
  }
`

const CardInfoTitle = styled.div`
  h4 {
    font-size: 0.75rem;
  }
  h5 {
    font-size: 0.5rem;
  }
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.75rem;
    }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
  }
`

const CardInfoDescription = styled.div`
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 0.75rem;
  }
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    p {
    font-size: 1rem;
  }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
    p {
    font-size: 1.25rem;
  }
`

const CardInfoIconLink = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: var(--color-white);
  }
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default Card
