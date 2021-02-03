import React from 'react'
import Navbar from '../../components/common/dashboard/Navbar';

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
          <div style={{backgroundColor: "lightblue"}}>
            {children}
          </div>
        </DashboardLayout>
    )
}

export default LayoutDashboard;