import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav})=>(scrollNav ? '#151516' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justif-content: center;
    align-items: center;
    font-size: 20px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;

    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%
    padding: 10px 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkScroll)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    margin-left: 24px;
    margin-right: 20%;

    &:hover{
        color: #c31f81;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
    
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: 132px;

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoation: none;
    padding: 0 1rem;
    height: 86%;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;

    &:hover{
        color: #e9b34e;
    }

     &.active { //scrolling will underline the associated navbar link 
        border-bottom: 6px solid #e06c15;
        color: #e9b34e;
        font-weight: 900;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    cursor: pointer

    @media screen and (max-width: 786px){
        display: flex;

    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #e9b34e;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }

`;