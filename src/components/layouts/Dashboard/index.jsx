import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';

import styled from 'styled-components'

const DashboardLayout = styled.div`
  display: grid;
  grid:
      "nav header" min-content
      "nav module-host" 1fr/min-content 1fr;
  min-height: 100vh;
`

const LayoutDashboard = ({children}) => {
    return (
        <DashboardLayout>
          <Navbar/>
          <Header/>
          <Main>
            {children}
          </Main>
        </DashboardLayout>
    )
}

export default LayoutDashboard;