import styled from 'styled-components'
import {KeyboardArrowLeft} from '@styled-icons/material/KeyboardArrowLeft'

const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    flex: none;
    height: 44px;
    padding: 10px 24px;
    position: relative;
`
const Icon = styled(KeyboardArrowLeft)`
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  color: rgba(255,255,255,.7);
  position: absolute;
  right: 22px;
  top: 10px;
  transition: transform .3s cubic-bezier(0.4, 0, 0.2, 1),color .1s cubic-bezier(0.4, 0, 0.2, 1);
`

const Footer = () => {
    return (
        <Button>
            <Icon/>
        </Button>
    )
}

export default Footer;