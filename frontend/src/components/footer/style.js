import styled from 'styled-components'

export const FooterStyle = styled.section`
  width: 100%;
  z-index: 100;
  margin: 0.5rem 0 0.5rem 0;
  padding: 2rem 1rem 2rem 1rem;
  background: #111;
`

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid var(--color-blue);
    box-shadow: 0 0 20px var(--color-blue);
  }
  h1 {
    text-transform: uppercase;
    color: var(--color-white);
    text-shadow: 0 0 20px var(--color-blue), 0 0 20px var(--color-blue);
  }
`

export const LinksLists = styled.div`
  display: flex;
  justify-content: space-around;
`
export const LinksList = styled.div`
  width: 100%;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-family: var(--font-title);
    color: var(--color-blue);
    margin: 0.5rem 0 0.5rem 0;
  }
  a {
    color: var(--color-white);
    margin: 0.5rem 0 0.5rem 0;
  }
`

export const IconsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
