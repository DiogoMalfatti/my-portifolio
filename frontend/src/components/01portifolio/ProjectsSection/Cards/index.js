import React from 'react'
import { useApi } from '../../../09hooks/useApi'
import { CardsStyle } from './style'
import Card from '../Card'

const Cards = () => {
  const { data } = useApi('/portifolio')
  // const projects = data.data.data

  return (
    <CardsStyle>
      {data?.data?.map(project => {
        return <Card key={project.title} project={project} />
      })}
    </CardsStyle>
  )
}

export default Cards
