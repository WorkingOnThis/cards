import styled from 'styled-components'

const Layout = styled.div`
  grid-area: module-host;
  min-width: 0;
  position: relative;
  overflow: auto;
`;


const Main = ({children}) => {

  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default Main;