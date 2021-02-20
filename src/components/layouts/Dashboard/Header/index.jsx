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

  const bgColor = 'linear-gradient(to right, rgb(239, 108, 0), rgb(251, 140, 0))';

  return (
    <Layout>

      {/* <AppBarBanner /> */}

      <AppBar bgColor={bgColor} />

    </Layout>
  )
}

export default Header;