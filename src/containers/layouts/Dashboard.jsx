import React from 'react'
import Navbar from '../../components/common/dashboard/Navbar';
import Header from '../../components/common/dashboard/Header';

import styled from 'styled-components'

const DashboardLayout = styled.main`
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
          <div>
            {children}
          </div>
        </DashboardLayout>
    )
}

export default LayoutDashboard;