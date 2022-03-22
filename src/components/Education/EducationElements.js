import styled from 'styled-components';
// import Bg from '../../image/treeBreeze.jpg'

export const EducationContainer = styled.div`
    color: #fff;
    overflow: hidden;
    // background: #d1d6a1;
    background: #191919;
  
    
    // background-attachment: fixed;
    // background-size: cover;

    @media screen and (max-width: 768px){
        padding:100px 0;
    }
`;

export const EducationWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1100px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const EducationRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and(max-width: 768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`
    // margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    width: 40vw;
`;

export const Column2 = styled.div`
    // margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    // width: 40vw;
`;

export const TextWrapper = styled.div`
    max-width: 840px;
    padding-top: 0;
    // padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #e06c15;
    font-size: 35px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;

    color: #fff;
    

    @media screen and (max-width: 480px){
        font-size: 32px;
        
    }
`;

export const Subtitle = styled.div`
    max-width: 540px;
    background-color: #382314;
    margin-bottom: 35px;
    font-size: 1.3rem;
    line-height: 1.7;
    font-weight: 800;
    color: #fff;
    padding: 10px;
    // position: relative;
    transition: all ease-in-out 2s;
    box-shadow: rgba(218, 94, 4, 0.4) -5px 5px, 
                    rgba(218, 94, 4, 0.3) -10px 10px, 
                    rgba(218, 94, 4, 0.2) -15px 15px, 
                    rgba(218, 94, 4, 0.1) -20px 20px, 
                    rgba(218, 94, 4, 0.05) -25px 25px;

    &:hover{
        transition: all ease-in-out 2s;
        
        box-shadow: rgba(218, 94, 4, 0.4) -0px 0px, 
                    rgba(218, 94, 4, 0.3) -0px 0px, 
                    rgba(218, 94, 4, 0.2) -0px 0px, 
                    rgba(218, 94, 4, 0.1) -0px 0px, 
                    rgba(218, 94, 4, 0.05) -0px 0px;
        transform: translate(-10px, 10px);
    }
`;


export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    // width: 100%;
    position: relative;
    top: 50px;


`;

export const Img = styled.img`
    width: 400%;
    position: relative;
    margin: 0 0 15px 0;
    padding-right: 0;
    right: 10rem;
    
`;