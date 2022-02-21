import styled from 'styled-components';
import {GoChecklist} from 'react-icons/go';
import {BiCube} from 'react-icons/bi';

export const CertificatesContainer = styled.div`
    height: 1100px;
    background: #222;
`;

export const CertificatesH1 = styled.h1`
    color: #f1dfad;
    text-align: center;
    padding-top: 120px;
    margin-bottom:10px;
    font-size: 4rem;
    font-weight: 800;
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
    align-items: center;
    display:flex;
`;

export const BlockSwitch = styled.button`
font-size: 2rem;
color: hsl(39deg 78% 61%);
margin-right: 15rem;
border: none;
background: rgba(49, 48, 48, 0);
transition: all 0.2s ease-in-out;
&:hover{
    color: #ffd913;
    transform: scale(1.1);
}
`;

export const OtherSwitch = styled.button`
font-size: 2rem;
color: hsl(39deg 78% 61%);
margin-left: 10rem;
border: none;
background: rgba(49, 48, 48, 0);
transition: all 0.2s ease-in-out;
&:hover{
    color: #ffd913;
    transform: scale(1.1);
}
`;

export const Icon1 = styled(BiCube)`
font-size: 2rem;
// color: orange;
`;

export const Icon2 = styled(GoChecklist)`
font-size: 2rem;
// color: orange;
`;

