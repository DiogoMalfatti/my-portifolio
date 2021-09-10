import React from 'react'
import styled from 'styled-components'

const HomeSection = () => {
  return (
    <div>
      <Title>Diogo Malfatti</Title>
      <Title>Desenvolvedor Web JS</Title>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        nesciunt amet reiciendis molestias illo. Modi vel quas recusandae
        assumenda repellendus laboriosam officiis, dolor esse distinctio, error
        facere accusantium suscipit quos.
      </p>
      <button>contact me</button>
      <img src="http://lorempixel.com/g/600/600/" alt="" />
    </div>
  )
}

const Title = styled.h2`
  color: red;
`
export default HomeSection
