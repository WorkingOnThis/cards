import { useState } from 'react';
import styled from 'styled-components'
import { UserFriends } from '@styled-icons/fa-solid/UserFriends'

const NavLink = styled.div`
    cursor: pointer;

    height: 32px;
    padding: 0 24px;

    align-items: center;
    color: rgba(255,255,255,.7);
    display: flex;
    text-decoration: none;
    transition: background-color .15s ease;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
`;

const LinkName = styled.div`
    margin-left: 16px;
    transition: opacity .3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
`;

const Icon = styled(UserFriends)`
    font-size: 18px;
    height: 20px;
    line-height: 20px;
    width: 20px;

    font-family: "GMP Icons";
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "liga";
    font-feature-settings: "liga";
    speak: none;
    text-decoration: none;
    -webkit-user-select: none;
`;

const NavLinkItem = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = e => {
        setIsToggled(!isToggled);
    };
    
    return (
        <NavLink onClick={handleClick}>
           <Icon /> 
           <LinkName>
                Authentication
           </LinkName> 
        </NavLink>
    )
}

export default NavLinkItem;