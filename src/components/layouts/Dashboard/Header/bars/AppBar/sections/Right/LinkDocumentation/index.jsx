import styled from 'styled-components'

const LinkDocumentation = styled.a`
  flex: 0 0 auto;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  font-weight: 500;
  /* color: var(--theme-color-fg-secondary);
  font-size: var(--fire-font-size-large);
  font-weight: var(--fire-font-weight-medium); */
  line-height: 48px;
  letter-spacing: 0;
  padding: 0 8px;
  text-decoration: none;
  white-space: nowrap;
`

const Documentation = () => {
  return (
    <LinkDocumentation>
      Ir a la documentación
    </LinkDocumentation>
  )
}

export default Documentation;