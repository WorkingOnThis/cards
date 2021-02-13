import styled, { css } from 'styled-components'
import Icons from '../../../Icons'

const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    flex: none;
    height: 44px;
    padding: 10px 24px;
    position: relative;

    & > svg {
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

        ${props => props.collapsed && css`
            @media only screen and (min-width: 600px)
            {
                transform: rotate(180deg);
            }
        `}
    }
    
    &:hover > svg {
        color: #fff;
    }

    ${props => props.collapsed && css`
        @media only screen and (min-width: 600px)
        {
            flex-grow: 1;
            flex-shrink: 0;
            justify-content: center;
        }
    `}
`

const NavFooter = ({collapsed, collapse}) => {

    const Icon = Icons['KeyboardArrowLeft'];
    
    return (
        <Button collapsed={collapsed} onClick={collapse}>
            <Icon />
        </Button>
    )
}

export default NavFooter;