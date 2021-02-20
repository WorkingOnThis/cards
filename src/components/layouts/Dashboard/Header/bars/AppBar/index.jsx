import { useState } from 'react';
import styled from 'styled-components';
import Left from './sections/Left';
import Middle from './sections/Middle';
import Right from './sections/Right';

const Container = styled.div`
    grid-area: appbar;
`

const AppBar = styled.div`
    align-items: stretch;
    /* background: var(--fire-color-canvas); */
    background: ${props => props.bgScrolled};
    box-shadow: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    height: 48px;
    padding: 0 24px;
    position: absolute;
    transform: translateZ(0);
    transition: box-shadow .15s cubic-bezier(0.4, 0, 1, 1),background-color .15s cubic-bezier(0.4, 0, 1, 1);
    width: 100%;

    ${({ bgScrolled }) => bgScrolled !== 'transparent' && `
        box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 1px 3px 1px rgb(60 64 67 / 15%);
    `}

    & > * {
        display: flex;
        align-items: center;
    }
`

const Appbar = ({ bgColor }) => {

    const [bgScrolled, setBgScrolled] = useState('transparent');

    const changeBackground = () => {
        window.scrollY >= 48 ? setBgScrolled(bgColor) : setBgScrolled('transparent')
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Container>
            <AppBar bgScrolled={bgScrolled}>
                <Left/>
                <Middle/>
                <Right/>
            </AppBar>
        </Container>
    )
}

export default Appbar;