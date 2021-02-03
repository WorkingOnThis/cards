import styled from 'styled-components'
import CategoryItem from './items/CategoryItem'

const Container = styled.div`
    box-shadow: 0 -1px 0 rgb(255,255,255,0.1) inset;
    /* box-shadow: 0 -1px 0 var(--fire-color-sidenav-line) inset; */
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
`

const Body = () => {
    return (
        <Container>
            <CategoryItem/>
        </Container>
    )
}

export default Body;