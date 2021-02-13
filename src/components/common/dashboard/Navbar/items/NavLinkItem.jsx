import styled, { css } from 'styled-components'
import Icons from '../../../Icons'

const NavLink = styled.a`
    align-items: center;
    color: rgba(255,255,255,.7);
    cursor: pointer;
    display: flex;
    height: 32px;
    padding: 0 24px;
    text-decoration: none;
    transition: background-color .15s ease;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    
    :hover {
        background-color: rgba(255,255,255,.08);
    }

    & > svg {
        font-size: 18px;
        height: 17px;
        line-height: 20px;
        width: 17px;

        overflow: visible;
    }

    & > div {
        margin-left: 16px;
        transition: opacity .3s cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;

        ${props => props.collapsed && css`
            @media only screen and (min-width: 600px)
            {
                opacity: 0;
            }
        `}
    }
`;

const NavLinkItem = ({ collapsed, nameIcon, nameLink }) => {

    const Icon = Icons[nameIcon];
    
    return (
        <NavLink collapsed={collapsed}>
           <Icon /> 
           <div>
                { nameLink }
           </div> 
        </NavLink>
    )
}

export default NavLinkItem;