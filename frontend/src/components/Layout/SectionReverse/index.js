import styled from 'styled-components'

const SectionReverse = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'sectionLeft'
    'sectionRight';
  gap: 1rem;

  /* TABLET */
  @media (min-width: 767px) {
  }
  /* NOTEBOOK */
  @media (min-width: 1365px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'sectionRight sectionLeft';
  }
  /* DESKTOP */
  @media (min-width: 1919px) {
  }
`

export default SectionReverse
