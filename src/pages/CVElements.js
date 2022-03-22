import styled from 'styled-components';
import { TiArrowLeftThick } from 'react-icons/ti';
import { Link as LinkRouter } from 'react-router-dom';



export const CVPageWrapper = styled.div`
width: 70%;
height: 100%;
margin: auto;
align-items: center;
position relative;
background: #e1d3b4;
border-radius: 5px;
padding: 12%;
margin-bottom: 3rem;

`;
export const Header = styled.div`
    text-align: center;
    margin-top: 10px;
    position: relative;
    line-height: 1.5;
    font-weight: 900;
`;

export const Title = styled.h1`
    text-align: center;
    color: #000;
    line-height: 1.5;
    font-weight: 900;
    
`;
export const Subheading = styled.h3`
    text-decoration: underline;
    color: #000;
    text-align: left;
    line-height: 1.5;
    margin-top: 3rem;
    font-weight: 900;
    
`;

export const Subheading2 = styled.h4`
    text-decoration: underline;
    color: #000;
    text-align: left;
    line-height: 1.5;
    margin-top: 2rem;
    font-weight: 900;
    
`;

export const ContactInfo = styled.p`
text-align: center;
color: #000;
line-height: 1.5;
font-weight: 900;

`;

export const PStatementWrapper = styled.div`
margin-top: 3rem;
`;

export const StatementText = styled.p`
text-align: left;
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const EducationWrapper = styled.div`
margin-top: 3rem;

`;

export const Education = styled.ul`
text-align: left;
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const Skills = styled.ul`
margin-top: 3rem;
font-size: 17px;


`;

export const Hard = styled.p`
text-align: left;
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const Soft = styled.p`
text-align: left;
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const ProjectsWrapper = styled.div`
margin-top: 3rem;
`;

export const Projects = styled.ul`
text-align: left;
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const CertificatesWrapper = styled.div`
margin-top: 3rem;
`;

export const Certificates = styled.ul`
color: #000;
line-height: 1.5;
font-weight: 900;
font-size: 17px;

`;

export const ExtracurricularWrapper = styled.div`
margin-top: 3rem;
margin-bottom: 4rem;
`;

export const Extracurricular = styled.ul`
color: #000;
line-height: 1.5;
font-weight: 800;
font-size: 17px;

`;

export const Link = styled.a`
    color: #2f22e3;
`;

export const BackHome = styled(LinkRouter)`
    float-left;
    left: 10px;
    top: 10px;
    position: relative;
    
`;

export const BackArrow = styled(TiArrowLeftThick)`
    font-size: 60px;
    color: #fff;
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
        color: #db6813;
    }
`;

export const ModalCVWrapper = styled.div`
    position: fixed;
    margin: auto;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    z-index: 999;
    transition: 0.3s;
`;

export const ModalCV = styled.div`
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 10px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const DownloadButton = styled.button`
    border: none;
    border-radius: 10px;
    background: #555;
    color: #f6b382;
    padding: 15px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 900;
    transition: all 0.3s ease-in-out;
    

    &:hover{
        background: #222;
        color: #555;
        transform: scale(1.01);
        box-shadow: 0px 0px 10px 2px #f6b382;
        
        
    }

`;

export const ViewCVButton = styled.button`
    border: none;
    border-radius: 10px;
    background: #555;
    color: #f6b382;
    padding: 10px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 900;
    transition: all 0.3s ease-in-out;
    

    &:hover{
        background: #222;
        color: #f6b382;
        transform: scale(1.01);
        box-shadow: 0px 0px 10px 2px #f6b382;
        

    }
    
`;
export const ViewCVButtonWrapper = styled.div`
    position: relative;
    display: flex;
`;

