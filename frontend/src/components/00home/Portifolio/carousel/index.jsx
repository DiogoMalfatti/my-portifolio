import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import { useApi } from '../../../09hooks/useApi'
import Card from '../../../01portifolio/ProjectsSection/Card'

const Carroussel = () => {

  const { data } = useApi('/portifolio')

  return (
    <CarrousselStyle>
      <Container>
        <CarrousselWrapper>
          <ItemDestaque></ItemDestaque>
          <CarouselStyle className="styling-example">
          <Carousel enableAutoPlay autoPlaySpeed={2500}>
            {data?.data?.map(project => {
              return <Card key={project.title} project={project} />
            })}
          </Carousel>
          </CarouselStyle>
        </CarrousselWrapper>
      </Container>

    </CarrousselStyle>
  )
}

const CarouselStyle = styled.div`
    .rec.rec-arrow {
      border-radius: 0.25rem;
      background: transparent;
    }
    .rec.rec-dot {
      border-radius: 0.25rem;
      border: 1px solid var(--color-white);
      width: 15px;
      height: 15px;
      margin: 0 15px;
    }
    .rec.rec-dot.rec-dot_active {
      border-radius: 0.25rem;
      background: transparent;
      border: 2px solid var(--color-white);
      box-shadow: 0 0 20px 3px var(--color-blue);
    }
  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    .rec.rec-carousel {
      width: 70%;
    }
    .rec.rec-arrow:hover {
      box-shadow: 0 0 20px 3px var(--color-blue);
    }
    .rec.rec-dot:hover {
      box-shadow: 0 0 20px 3px var(--color-blue);
    }
    .rec.rec-dot.rec-dot_active:hover {
      border-radius: 0.25rem;
      box-shadow: 0 0 20px 3px var(--color-blue);
    }
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

const CarrousselStyle = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  /* TABLET */
    @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

const Container = styled.div`

`

const CarrousselWrapper = styled.div`

`

const ItemDestaque = styled.div`

`

export default Carroussel
