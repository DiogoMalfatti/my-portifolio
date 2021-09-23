import styled from 'styled-components'

export const CardSectionStyle = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem 1rem 0.5rem 1rem;
  /* padding: 0 1rem 0 1rem; */
  /* background: #333; */
  color: #fff;
`

// export const CardListStyle = styled.div`
//   padding: 0 1rem 0 1rem;
// `

export const CardStyle = styled.div`
  border: 1px solid var(--color-blue);
  background: #111;
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 22.875rem; //350px
  height: 32.8125rem; //525px
`

export const CardImage = styled.div`
  /* background: var(--color-blue); */
  img {
    border-radius: 0.25rem;
    max-width: 21.875rem; //350px
    height: 12.5rem; //525px
    /* width: 18.75rem; //300px
    height: 12.5rem; //200px */
  }
`

export const CardInfo = styled.div`
  /* border: 1px solid red; */
  width: 18.75rem;
  height: 12.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-wrap: nowrap;
  overflow: hidden;
`
