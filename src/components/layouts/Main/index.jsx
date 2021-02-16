import React from 'react'
// import Nav from '../../components/common/header/Main'

const LayoutMain = ({children}) => {
    return (
        <>
          {/* <Nav /> */}
          <div style={{backgroundColor: "tomato"}}>
            {children}
          </div>
        </>
    )
}

export default LayoutMain;