import styled from 'styled-components';
import img from '../../image/ferns.jpeg';
import {FaHandPointRight} from 'react-icons/fa';
import {FaHandPointLeft} from 'react-icons/fa';

// import {TiTick} from 'react-icons/ti';


export const ProjectsContainer = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FF9C55;
    background: #222;
    
    overflow: hidden;
    background-image: url(${img});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    // -o-object-fit: cover;
    // object-fit: cover;

    // height: 160vh;
    // background-image: url(${img}); 
    // background-repeat: no-repeat;
    // background-position: top;
    // background-size: cover;
    // overflow: hidden;
    // background-attachment: fixed;
    // position: relative
    // width: 100%;
    
    @media screen and(max-width: 768px){
        height: 1100px;
    }

    @media screen and(max-width: 480px){
        height: 1300px;
    }

    
`;

// export const ProjectBg = styled.div`
// display: flex;
// justify-content: center;
//     height: 1100px;
//     background-image: url(${img}); 
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//     overflow: hidden;
//     position: relative;
//     width: 100%;
//     z-index: 1;
// `;


export const ProjectsH1 = styled.h1`
    

    margin-left: 24%;
    margin-top: 80px;
    margin-bottom: 10px;
    color: #e06c15;
    font-size: 40px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;

    @media (max-width: 480px){
        font-size: 2rem;
    }
    
`;

export const ProjectsSub = styled.h3`
    color: #d8d5d5;
    margin-left: 24%;
    //margin-bottom: 90px;
    margin-top: 10px;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
`;

export const BlockSwitch = styled.div`
    font-size: 25px;
    color: #d8d5d5;
    border: none;
    margin-left: 24%;
    background: rgba(49, 48, 48, 0);
    transition: all 0.2s ease-in-out;
    display: flex;

    &:hover{
        color: #ffd913;
        transform: scale(1.1);
    }
`;

export const OtherSwitch = styled.div`
    font-size: 25px;
    color: #d8d5d5;
    border: none;
    margin-left: 24%;
    background: rgba(49, 48, 48, 0);
    transition: all 0.2s ease-in-out;
    display: flex;
    
    &:hover{
        color: #ffd913;
        transform: scale(1.1);
    }
`;

export const Icon1 = styled(FaHandPointRight)`
    font-size: 25px;
    // color: orange;
`;

export const Icon2 = styled(FaHandPointLeft)`
    font-size: 25px;
    // color: orange;
`;



export const ProjectsWrapper = styled.div`
    // max-width: 1000px;
    width: 95%;
    height: 75%;
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
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.07);
        transition: all 0.4s ease-in-out;
        cursor: pointer;
    }
`;


export const ProjectsCard = styled.div`
    background: #191919;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // border-radius: 10px;
    max-height: 700px;
    padding: 1px;
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
    // border-radius: 9px;
    position: relative;
    z-index: 1;
`;

export const ProjectsIconWIP = styled.img`
    height: 60%;
    width: 100%;
    margin-bottom: 5px;
    object-fit: cover;
    // border-radius: 9px;
`;

export const LanguagesP = styled.p`
    font-size: 1rem;
    color: #fff;
    padding: 20px;
    
    text-align: center;
    border: none;
    //border-radius: 5px;
    margin-top: 15px;
    font-weight: 800;
    background-color: #372a2ac7;
    
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
    color: #d29466;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        color: #63a562;
        transition: all 0.2s ease-in-out;
    }
`;

export const WebsiteLink = styled.a`
    font-size: 45px;
    //color: #FF9C55;
    color: #c6a58e;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: #63a562;
        transition: all 0.2s ease-in-out;
    }

`;
export const Details = styled.div`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: #000;
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
    background-color: #191919;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 3px solid #aa571c;
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

