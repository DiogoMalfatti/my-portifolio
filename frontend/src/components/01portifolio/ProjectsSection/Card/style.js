import styled from 'styled-components'

export const CardStyle = styled.div`
  background: #111;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 0.5rem;
  border: 0.25px solid var(--color-blue);
  border-radius: 0.25rem;
  box-shadow: 0 0 10px var(--color-blue);
`

export const CardImage = styled.div`
  width: 18.75rem;
  height: 12.5rem;
  margin-bottom: 0.5rem;
  img {
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 0.25rem;
  }
`

export const CardInfos = styled.div`
  color: var(--color-white);
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  width: 18.75rem;
  min-height: 18.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
`

export const CardInfoTitle = styled.div``

export const CardInfoDescription = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardInfoIconLink = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: var(--color-white);
  }
`
