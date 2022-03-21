import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    
    // background: #192619;
    background: #191919;
    overflow: hidden;
    @media screen and (max-width: 768px){
        padding:100px 0;
    }
`;

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
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
    width: 120%;
    @media screen and(min-width: 768px){
        width:50%;
    }
`;

export const Column2 = styled.div`
    // margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
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
    color: #f7f8fa;
    

    @media screen and (max-width: 480px){
        font-size: 1rem;
        
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.3rem;
    line-height: 1.7;
    font-weight: 800;
    color: #fff;
    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`;


export const ImgWrap = styled.div`
    max-width: 555px;
    hieght: 100%;

`;

export const Img = styled.img`
    width: 400%;
    position: relative;
    margin: 0 0 15px 0;
    padding-right: 0;
    right: 10rem;
    
`;