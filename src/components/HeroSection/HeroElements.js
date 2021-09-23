import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";
import {BsChevronDoubleDown} from "react-icons/bs";



export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-itmes: center;
    padding: 0 30px;
    height: 1100px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroBtnWrapper = styled(LinkRouter)`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

`;

export const Button = styled.button`
    border-radius: 50px;
    background: #e06c15;
    white-space: nowrap;
    padding: 12px 30px;
    color: #010606;
    font-size: 17px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-itmes: center;

    $:hover{
        background: #000;
        color: #fff;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;
    margin-top: 400px;
    text-shadow: 4px 4px 9px black;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    color: #fff;
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow: 4px 4px 9px black;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const DownArrow = styled(BsChevronDoubleDown)`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    margin-top: 100px;
    margin-bottom: 0;
    color: #fff;
    animation-name: down;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes down {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 30px); }
        100%   { transform: translate(0px, -0px); }   
    }

`;