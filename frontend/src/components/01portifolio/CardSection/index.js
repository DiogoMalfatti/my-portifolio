import React from 'react'
import {
  CardSectionStyle,
  CardListStyle,
  CardStyle,
  CardImage,
  CardInfo,
} from './style'

const CardSection = () => {
  return (
    <CardSectionStyle>
      {/* <CardListStyle> */}
      <CardStyle>
        <CardImage>
          <img src="./card07.png" alt="" />
        </CardImage>
        <CardInfo>
          <h3>Projeto BikCraft</h3>
          <h4>Junho de 2021</h4>
          <p>HTML, CSS</p>
        </CardInfo>
      </CardStyle>
      <CardStyle>
        <CardImage>
          <img src="./card02.jpg" alt="" />
        </CardImage>
        <CardInfo>
          <h3>Title</h3>
          <h4>Date</h4>
          <p>pequena descrição</p>
        </CardInfo>
      </CardStyle>
      <CardStyle>
        <CardImage>
          <img src="./card03.jpg" alt="" />
        </CardImage>
        <CardInfo>
          <h3>Title</h3>
          <h4>Date</h4>
          <p>pequena descrição</p>
        </CardInfo>
      </CardStyle>
      <CardStyle>
        <CardImage>
          <img src="./card04.jpg" alt="" />
        </CardImage>
        <CardInfo>
          <h3>Title</h3>
          <h4>Date</h4>
          <p>pequena descrição</p>
        </CardInfo>
      </CardStyle>
      <CardStyle>
        <CardImage>
          <img src="./card05.webp" alt="" />
        </CardImage>
        <CardInfo>
          <h3>Title</h3>
          <h4>Date</h4>
          <p>pequena descrição</p>
        </CardInfo>
      </CardStyle>
      {/* </CardListStyle> */}
    </CardSectionStyle>
  )
}

export default CardSection
