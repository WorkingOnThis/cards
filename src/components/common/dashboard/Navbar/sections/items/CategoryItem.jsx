import { useState } from 'react';
import styled, { css } from 'styled-components'
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp'
import NavLinkItem from './NavLinkItem';

const Container = styled.div`
    border-bottom: 1px solid rgb(255,255,255,0.1);
    display: flex;
    flex-direction: column;
`;

const GroupHeader = styled.div`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: block;
    letter-spacing: .25px;
    max-width: 100%;
    padding: ${props => (props.expanded ? `20px 24px 0px` : `20px 24px`)};
    /* padding: 20px 24px; */
    position: relative;
    text-align: left;
    transition: background-color .15s ease;

    ${ props => props.expanded && css`
        background-color: rgba(71,98,130,0.2);
        /* background-color: var(--fire-color-sidenav-bg-selected); */
        transition: background-color .2s cubic-bezier(0.4, 0, 0.2, 1),padding .3s ease;
    `};
`;

const Icon = styled(KeyboardArrowUp)`
    opacity: ${props => (props.expanded ? 1 : 0)};
    color: rgba(255,255,255,.7);
    font-size: 20px;
    position: absolute;
    right: 8px;
    top: 20px;
    /* transform: rotate(180deg); */
    transform: ${props => (props.expanded ? `rotate(0deg)` : `rotate(180deg)`)};
    transition: opacity .3s cubic-bezier(0.4, 0, 0.2, 1), transform .3s cubic-bezier(0.4, 0, 0.2, 1);
    background-repeat: no-repeat;
    display: inline-block;
    fill: currentColor;
    height: 24px;
    width: 24px;
`;

const TitleCategoryItem = styled.div`
    color: #fff;
    font-family: "Google Sans",sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 2px;
`;

const SubtitleCategoryItem = styled.div`
    opacity: ${props => (props.expanded ? 0 : 1)};
    color: rgba(255,255,255,.5);
    transition: opacity .15s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const GroupNavLinks = styled.div`
    padding-bottom: 20px;
`;

const CategoryItem = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = e => {
        setIsToggled(!isToggled);
    };
    
    return (
        <Container onClick={handleClick}>
            <GroupHeader expanded={isToggled}>
                <TitleCategoryItem>
                    Compilación
                </TitleCategoryItem>
                <Icon expanded={isToggled} />
                <SubtitleCategoryItem expanded={isToggled}>
                    Authentication, Cloud Firestore, Realtime Database, Storage, Hosting, Functions y Machine Learning
                </SubtitleCategoryItem>
            </GroupHeader>

            <GroupNavLinks expanded={isToggled}>
                <NavLinkItem/>
            </GroupNavLinks>
            
        </Container>
    )
}

export default CategoryItem;