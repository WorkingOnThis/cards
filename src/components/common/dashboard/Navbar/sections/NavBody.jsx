import styled, { css } from 'styled-components'
import NavCategoryItem from '../items/NavCategoryItem'

const Container = styled.div`
    box-shadow: 0 -1px 0 rgb(255,255,255,0.1) inset;
    /* box-shadow: 0 -1px 0 var(--fire-color-sidenav-line) inset; */
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;

    ${props => props.collapsed && css`
        @media only screen and (min-width: 600px)
        {
            flex-grow: 0;
            flex-shrink: 1;
        }
    `}
`

const NavBody = ({ collapsed }) => {
    return (
        <Container collapsed={collapsed}>
            <NavCategoryItem collapsed={collapsed}/>
        </Container>
    )
}

export default NavBody;