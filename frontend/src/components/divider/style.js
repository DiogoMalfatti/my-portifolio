import styled from 'styled-components'

export const DividerStyle = styled.div`
  margin-top: var(--height-top);
  margin-bottom: var(--height-bottom);
  height: 1px;
  background: linear-gradient(
    270deg,
    var(--color-bar) 0%,
    var(--color-blue) 100%
  );
  box-shadow: 0 0 10px var(--color-blue), 0 0 10px var(--color-white);
`
