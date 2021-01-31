import styled from 'styled-components'

export default styled.main`
  display: grid;
  grid:
      "nav header" min-content
      "nav module-host" 1fr/min-content 1fr;
  min-height: 100vh;
`