import styled from 'styled-components'

const Container = styled.div`
    padding: 0 20px 48px;
`

const MainSection = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainSection;