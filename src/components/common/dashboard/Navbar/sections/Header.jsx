import styled from 'styled-components'

const Anchor = styled.a`
    box-shadow: 0 -1px 0 rgb(255,255,255,0.1) inset;
`;

const Container = styled.nav`
    padding: 0 20px;
    align-items: center;
    display: flex;
    height: 48px;
`;

const LogoImage = styled.img.attrs({
    src: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
  })`
    height: 28px;
    position: relative;
    top: -1px;
`

const LogoText = styled.img.attrs({
    src: '//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
  })`
    height: 18px;
    margin-left: 12px;
    transition: opacity .3s cubic-bezier(0.4, 0, 0.2, 1);
`

const Header = () => {
    return (
        <Anchor>
            <Container>
                <LogoImage />
                <LogoText />
            </Container>
        </Anchor>
    )
}

export default Header;