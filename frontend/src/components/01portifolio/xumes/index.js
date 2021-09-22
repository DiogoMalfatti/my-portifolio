import React from 'react'
import {
  CardSectionStyle,
  CardListStyle,
  CardStyle,
  Content,
  CardImage,
  CardInfo,
} from './style'

const Xumes = () => {
  return (
    <CardSectionStyle>
      <CardListStyle>
        <CardStyle>
          <Content>
            <CardImage>
              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </CardImage>
            <CardInfo>
              <h3>Title</h3>
              <h4>Date</h4>
              <p>
                {/* pequena descriçãopequena descriçãopequena descriçãopequena
                descriçãopequena descriçãopequena descriçãopequena
                descriçãopequena descriçãopequena descriçãopequena
                descriçãopequena descriçãovpequena descriçãopequena
                descriçãopequena descriçãovpequena descriçãopequena
                descriçãopequena descriçãopequena descriçãopequena
                descriçãopequena descriçãopequena descriçãopequena
                descriçãopequena descriçãopequena descriçãopequena
                descriçãovpequena descriçãopequena descriçãopequena
                descriçãovpequena descrição */}
              </p>
            </CardInfo>
          </Content>
        </CardStyle>
        <CardStyle>
          <Content>
            <CardImage>
              <img src="./card02.jpg" alt="" />
            </CardImage>
            <CardInfo>
              <h3>Title</h3>
              <h4>Date</h4>
              <p>pequena descrição</p>
            </CardInfo>
          </Content>
        </CardStyle>
        <CardStyle>
          <Content>
            <CardImage>
              <img src="./card03.jpg" alt="" />
            </CardImage>
            <CardInfo>
              <h3>Title</h3>
              <h4>Date</h4>
              <p>pequena descrição</p>
            </CardInfo>
          </Content>
        </CardStyle>
        <CardStyle>
          <Content>
            <CardImage>
              <img src="./card04.jpg" alt="" />
            </CardImage>
            <CardInfo>
              <h3>Title</h3>
              <h4>Date</h4>
              <p>pequena descrição</p>
            </CardInfo>
          </Content>
        </CardStyle>
        <CardStyle>
          <Content>
            <CardImage>
              <img src="./card05.webp" alt="" />
            </CardImage>
            <CardInfo>
              <h3>Title</h3>
              <h4>Date</h4>
              <p>pequena descrição</p>
            </CardInfo>
          </Content>
        </CardStyle>
      </CardListStyle>
    </CardSectionStyle>
  )
}

export default Xumes
