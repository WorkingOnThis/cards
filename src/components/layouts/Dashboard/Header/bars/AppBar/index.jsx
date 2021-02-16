import styled from 'styled-components';
import Left from './sections/Left';
import Middle from './sections/Middle';
import Right from './sections/Right';

const Container = styled.div`
    grid-area: appbar;
`

const AppBar = styled.div`
    align-items: stretch;
    background: transparent;
    /* background: #1a73e8; */
    /* background: var(--fire-color-canvas); */
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

    & > * {
        display: flex;
        align-items: center;
    }
`

const Appbar = () => {
    return (
        <Container>
            <AppBar>
                <Left/>
                <Middle/>
                <Right/>
            </AppBar>
        </Container>
    )
}

export default Appbar;