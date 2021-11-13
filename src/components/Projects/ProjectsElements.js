import styled from 'styled-components';
import img from '../../image/lake.JPG';
import {IoIosBuild} from 'react-icons/io';
import {TiTick} from 'react-icons/ti';


export const ProjectsContainer = styled.div`
    height: 1100px;
    // width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FF9C55;
    
    //background-image: linear-gradient(#FF9C55, #FFD913);
    //#101606;
    background-image: url(${img});
    background-attachment: fixed;
    background-size: cover;
    // -o-object-fit: cover;
    // object-fit: cover;
    
    @media screen and(max-width: 768px){
        height: 1100px;
    }

    @media screen and(max-width: 480px){
        height: 1300px;
    }
`;


export const ProjectsH1 = styled.h1`
    font-size: 4rem;
    color: #f1dfad;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 10px;
    font-weight: 800;
    text-shadow: 4px 4px 9px black;

    @media (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ProjectsSub = styled.h3`
    color: #222;
    font-size: 1.5rem;
    //margin-bottom: 90px;
    margin-top: 10px;
`;

export const BlockSwitch = styled.button`
    font-size: 2rem;
    color: #e2c9ad;
    
    border: none;
    background: rgba(49, 48, 48, 0);
    transition: all 0.2s ease-in-out;
    &:hover{
        color: #1FC11B;
        transform: scale(1.1);
    }

    &.active{
        color: #1FC11B;
    }
`;

export const OtherSwitch = styled.button`
    font-size: 2rem;
    color: #e2c9ad;
    
    border: none;
    background: rgba(49, 48, 48, 0);
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px; 
    &:hover{
        color: #1FC11B;
        transform: scale(1.1);
    }

    &.active{
        color: #1FC11B;
    }
`;

export const Icon2 = styled(IoIosBuild)`
font-size: 2rem;
// color: orange;
`;

export const Icon1 = styled(TiTick)`
font-size: 2rem;
// color: orange;
`;

export const ProjectsWrapper = styled.div`
    // max-width: 1000px;
    width: 70%;
    height: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 0px;

    @media screen and(max-width: 1000px){
        grid-template-column: 1fr 1fr;
    }

    @media screen and(max-width: 768px){
        grid-template-column: 1fr;
        padding: 0, 20px;
    }
`;
export const ProjectCardWrapper = styled.div`
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;


export const ProjectsCard = styled.div`
    background: rgb(58, 58, 58, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 700px;
    padding: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    position:relative;
    
    margin-bottom: 300px;
    text-decoration: none;
    
`;

export const ProjectsIcon = styled.img`
    height: 100%;
    width: 100%;
    margin-bottom: 30px;
    object-fit: cover;
    border-radius: 9px;
    position: relative;
    z-index: 1;
`;

export const ProjectsIconWIP = styled.img`
    height: 60%;
    width: 100%;
    margin-bottom: 5px;
    object-fit: cover;
    border-radius: 9px;
`;

export const LanguagesP = styled.p`
    font-size: 1rem;
    color: #fff;
    padding: 20px;
    
    text-align: center;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    font-weight: 800;
//    background-color: #1ec11b3d;
    background-color: #9171a04f;
    
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 10px;
    padding-top: 10px;
    font-weight: 900;
    color: #fff;
`;


export const GitLogoLink = styled.a`
    font-size: 45px;
    color: #88b377;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        color: #FF5555;
        transition: all 0.2s ease-in-out;
    }
`;

export const WebsiteLink = styled.a`
    font-size: 45px;
    //color: #FF9C55;
    color: #9171a0d6;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: #FF5555;
        transition: all 0.2s ease-in-out;
    }

`;
export const Details = styled.div`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #2e2e2e;
    font-weight: 900;

    
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    z-index: 1000;
    transition: 0.3s;
`;

export const ModalContainer = styled.div`
    position: relative;
    background-color: #2e2e2e;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 3px solid #88b377;
`;

export const ModalItem = styled.div`
    display: flex;
    align-items: center;
`;
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const ModalHeader = styled.div`
    margin-left: 0px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    color: #fff;
`;
export const ModalItemInfo = styled.p`
    font-size: 1.25rem;
    font-weight: 900;
    color: #fff;
`;
export const ModalTitleSection = styled.div`
    display: flex;
    padding: 0 0 0 24rem;
`;
export const ModalTitle = styled.div`
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    text-align: center;

`;

