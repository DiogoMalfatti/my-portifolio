import styled from 'styled-components'

export const CardSectionStyle = styled.section`
  color: #fff;
  min-height: 90vh;
  overflow: hidden;
  padding: 1rem 1rem;
`

export const CardListStyle = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`

export const CardStyle = styled.div`
  background: green;
  min-height: 30vh;
  border-color: blue;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`

export const CardInfo = styled.div`
  text-align: left;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
