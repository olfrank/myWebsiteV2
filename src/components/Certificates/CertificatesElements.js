import styled from 'styled-components';
import {GoChecklist} from 'react-icons/go';
import {BiCube} from 'react-icons/bi';

export const CertificatesContainer = styled.div`
    height: 1100px;
    background: #222;
`;

export const CertificatesH1 = styled.h1`
    margin-left: 15%;
    color: #e06c15;
    font-size: 40px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;

    padding-top: 120px;
    margin-bottom:10px;
    text-shadow: 4px 4px 9px black;

`;

export const CertificatesSub = styled.h3`
    color: #a2845d;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

export const CertificateChoiceWrapper = styled.div`
    position: relative;
    
`;

export const BlockSwitch = styled.div`
margin-left: 15%;
font-size: 30px;
line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
color: hsl(39deg 78% 61%);
margin-right: 15rem;
border: none;
background: rgba(49, 48, 48, 0);
transition: all 0.2s ease-in-out;
&:hover{
    color: #ffd913;
    transform: scale(1.04);
}
`;

export const OtherSwitch = styled.div`
margin-left: 15%;
font-size: 30px;
color: hsl(39deg 78% 61%);
margin-top: 3%;

border: none;
background: rgba(49, 48, 48, 0);
transition: all 0.2s ease-in-out;
&:hover{
    color: #ffd913;
    transform: scale(1.04);
}
`;

export const Icon1 = styled(BiCube)`
font-size: 30px;
// color: orange;
`;

export const Icon2 = styled(GoChecklist)`
font-size: 30px;
// color: orange;
`;

