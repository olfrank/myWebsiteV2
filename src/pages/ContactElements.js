import styled from 'styled-components';
import {BsArrowDownShort} from 'react-icons/bs';
import { IoMailOutline} from 'react-icons/io5';
import { TiArrowLeftThick } from 'react-icons/ti';
import { Link as LinkRouter } from 'react-router-dom';
import {GrPowerReset} from 'react-icons/gr';

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const NameField = styled.div`
    margin: 10px;
    font-size: 20px;
    color: #FF5555;
    height: 42px;
    
    @media (max-width: 480px){
        font-size: 15px;
        max-width: 15px;
    }
`;
export const EmailField= styled.div`
    margin: 10px;
    color: #FF9C55;
    font-size: 20px;
    @media (max-width: 480px){
        font-size: 15px;
        max-width: 15px;
    }
`;
export const SubjectField= styled.div`
    margin: 10px;
    color: rgb(20, 189, 152);
    font-size: 20px;
    @media (max-width: 480px){
        font-size: 15px;
        max-width: 15px;
    }
`;
export const MessageField= styled.div`
    margin: 10px;
    
    color: #FFD913;
    font-size: 20px;
    @media (max-width: 480px){
        font-size: 15px;
        max-width: 15px;
    }
    
`;
export const Button = styled.button`
    border-radius: 4px;  
    font-size:  20px;
    color: black;
    cursor: pointer;
    

    background: rgb(145, 201, 42);
    border: none;
    border-radius: 25px;
    z-index: 1;
    display: flex;
    width: 10rem;
    height: 3rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 800px){
        font-size: 15px;
        width: 5rem;
        height: 2rem;
    }

    &:hover{
        background-image:     linear-gradient(
           to right, 
           #E7484F,
           #E7484F 16.65%,
           #F68B1D 16.65%,
           #F68B1D 33.3%,
           #FCED00 33.3%,
           #FCED00 49.95%,
           #009E4F 49.95%,
           #009E4F 66.6%,
           #00AAC3 66.6%,
           #00AAC3 83.25%,
           #732982 83.25%,
           #732982 100%,
           #E7484F 100%
         );
       animation:slidebg 5s linear infinite;
     }
     
     
     @keyframes slidebg {
       to {
         background-position:20vw;
       }

       

`;

export const ResetBtn = styled.button`
    border-radius: 25px;  
    font-size:  15px;
    padding: 10px;
    color: black;
    cursor: pointer;
    background: pink;
    border: none;
    position: sticky;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    margin-bottom: 15px;
    

    
`;

export const Header = styled.h1`
    font-size: 5rem;
    text-align: center;
    color: #e0c695;
    position: relative;
    padding-left: 5px;
    justify-content: center;
    z-index: 2;
    margin-bottom: -30px;
    margin-top: 40px;
    animation-name: floating;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    text-shadow: 0px 0px 10px #fff;

    @media screen and (max-width: 800px){
        font-size: 3rem;
    }

    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 30px); }
        100%   { transform: translate(0, -0px); }   
    }
    
`;

export const ArrowDown = styled(BsArrowDownShort)`
    font-size: 90px;
    position: relative;
    display: flex;
    top: 30px;
    color: #e0c695;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    text-shadow: 0px 0px 10px #fff;

    @media screen and (max-width: 800px){
        font-size: 50px;
    }

    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 25px); }
        100%   { transform: translate(0, -0px); }   
    }


`;
export const ResetArrow = styled(GrPowerReset)`
    font-size: 20px;
    cursor: pointer;
    
    animation-name: spinning;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes spinning {
        0% { transform: rotate(0deg); }
        100%   { transform: rotate(360deg); }   
    }

`;

export const MailIcon = styled(IoMailOutline)`
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 70px;
    margin-top: 0;
    margin-bottom: 0;
    color: #fff;

`;

export const BackHome = styled(LinkRouter)`
    float-left;
    left: 10px;
    top: 10px;
    position: relative;
    
`;

export const BackArrow = styled(TiArrowLeftThick)`
    font-size: 60px;
    color: rgb(95, 230, 212);
    cursor: pointer;
    animation-name: side;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes side {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(25px, 0); }
        100%   { transform: translate(-0px, 0px); }   
    }

    &:hover{
        color: #1FC11B;
    }
`;

