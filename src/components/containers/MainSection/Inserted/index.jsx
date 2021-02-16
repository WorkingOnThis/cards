import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 12px;

    width: 960px;
    padding: 0 12px;

    display: flex;
    flex-direction: row;
    margin: 0 auto;
    flex-wrap: wrap;
`

const Inserted = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Inserted;