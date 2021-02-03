import styled from 'styled-components'
import Header from './sections/Header';
import Footer from './sections/Footer';
import Body from './sections/Body';

const Layout = styled.div`
  grid-area: nav;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const Nav = styled.nav`
  background-attachment: fixed;
  background-color: #051e34;
  background-image: url('https://www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png');
  background-position: left 0 bottom 0;
  background-repeat: no-repeat;
  background-size: 256px 556px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: width .3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 256px;
`;

const LayoutDashboard = () => {
    return (
        <Layout>
            <Nav>
                <Header />

                <Body />

                <Footer />
            </Nav>
        </Layout>
    )
}

export default LayoutDashboard;