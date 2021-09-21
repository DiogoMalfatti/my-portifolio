import styled from 'styled-components'

export const MenuStyle = styled.div`
  /* container */
  display: flex;
  align-items: center;
`
export const MenuNav = styled.div`
  /* ul , li */
  &.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  &.show {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-content: center;
    opacity: 1;
    visibility: visible;
    background: var(--color-bar);
    ul,
    li {
      margin: 0.5rem 0 0.5rem 0;
      padding: 0 1rem 0 1rem;
      margin: 4rem 0 4rem 0;
      text-align: center;
    }
    li {
      padding: 1rem 1rem 1rem 1rem;
      border: 1px solid var(--color-blue);
      border-radius: 0.25rem;
      background: var(--color-body);
      box-shadow: 0 0 20px var(--color-blue);
    }
    a {
      color: var(--color-white);
    }
  }
  /* NOTEBOOK */
  @media (min-width: 1300px) {
    /* tem que mostar normal */
    a {
      position: relative;
      transition: color 0.2s;
    }
    a:hover {
      color: var(--color-blue);
    }
    a::after {
      position: absolute;
      left: 0;
      bottom: -1.5rem;
      content: '';
      width: 0%;
      height: 2px;
      background: var(--color-blue);
      transition: width 0.2s;
    }
    a:hover::after {
      width: 100%;
    }
  }
`
export const MenuButton = styled.button`
  /* button */
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--color-blue);
  background: var(--color-body);
  border-radius: 0.25rem;
  color: #fff;
  box-shadow: 0 0 20px var(--color-blue);
  z-index: 100;
  /* NOTEBOOK */
  @media (min-width: 1300px) {
    /* tem que mostar normal */
    opacity: 0;
    visibility: hidden;
  }
`
