import React from 'react'
// import Nav from '../../components/common/header/Dashboard'
import DashboardLayout from '../../styles/DashboardLayout';


const LayoutDashboard = ({children}) => {
    return (
        <DashboardLayout>
          {/* <Nav /> */}
          <div style={{backgroundColor: "lightblue"}}>
            {children}
          </div>
        </DashboardLayout>
    )
}

export default LayoutDashboard;