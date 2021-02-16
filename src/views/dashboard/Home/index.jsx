import React from 'react'
import Presentation from '../../../components/containers/Presentation'
import MainSection from '../../../components/containers/MainSection'
import Footer from '../../../components/containers/Footer'
import Inserted from '../../../components/containers/MainSection/Inserted'

const Dashboard = () => {
  return (
    <>
      <Presentation />
      <MainSection>
        <Inserted>
          <p>Palabrerio</p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Inserted>
      </MainSection>
      <Footer />
    </>
  )
}

export default Dashboard
