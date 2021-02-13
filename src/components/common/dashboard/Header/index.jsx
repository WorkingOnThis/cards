import styled from 'styled-components'
// import AppBarBanner from './bars/AppBarBanner';
import AppBar from './bars/AppBar';

const Layout = styled.div`
    display: grid;
    grid-area: header;
    grid-template-areas:
        "appbar-banner"
        "appbar";
    grid-template-rows: min-content min-content;
    position: sticky;
    top: 0;
    z-index: 50;
`;


const Header = () => {
  return (
    <Layout>

      {/* <AppBarBanner /> */}

      <AppBar />

    </Layout>
  )
}

export default Header;