import React from 'react'
import Nav from '../../components/common/header/Dashboard'


const LayoutDashboard = ({children}) => {
  console.log(children);
    return (
        <>
          <Nav />
          <div style={{backgroundColor: "lightblue"}}>
            {children}
          </div>
        </>
    )
}

export default LayoutDashboard;