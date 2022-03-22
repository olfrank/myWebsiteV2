import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';


export const FooterContainer = styled.div`
    background-color: #151516;

`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(LinkScroll)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 3.5rem;
    dispaly: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLinkFa = styled.a`
    color: #FF5555;
    font-size: 40px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`;
export const SocialIconLinkTw = styled.a`
    color: #FFD913;
    font-size: 40px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`;
export const SocialIconLinkLi = styled.a`
    color: #1FC11B;
    font-size: 40px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`;
export const SocialIconLinkGi = styled.a`
    color: #FF9C55;
    font-size: 40px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

