import { useState } from 'react';
import styled, { css } from 'styled-components'
import NavHeader from './sections/NavHeader';
import NavFooter from './sections/NavFooter';
import NavBody from './sections/NavBody';

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

  ${props => props.collapsed && css`
    @media only screen and (min-width: 600px)
    {
      width: 68px;
    }
  `}
`;

const LayoutDashboard = () => {

  const [isCollaped, setIsCollaped] = useState(false);

  const handleClick = e => {
    setIsCollaped(!isCollaped);
  };

  return (
    <Layout>
        <Nav collapsed={isCollaped}>

          <NavHeader collapsed={isCollaped} />

          <NavBody collapsed={isCollaped} />

          <NavFooter collapsed={isCollaped} collapse={handleClick} />

        </Nav>
    </Layout>
  )
}

export default LayoutDashboard;