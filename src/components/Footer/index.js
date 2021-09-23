import React from 'react'
import {animateScroll as scroll } from 'react-scroll';
import {BiArrowToTop} from 'react-icons/bi';
import {FaFacebook, FaTwitter, FaLinkedin, FaGithub  } from 'react-icons/fa';
import {FooterContainer, 
        FooterWrap,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLinkFa,
        SocialIconLinkTw,
        SocialIconLinkLi,
        SocialIconLinkGi} from './FooterElements';


const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop()
      }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            <BiArrowToTop />
                        </SocialLogo>
                        <WebsiteRights>Oliver Francis © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLinkFa href="https://www.facebook.com/ollie.francis.501/" target="_blank" aria-label ="Facebook">
                                <FaFacebook />
                            </SocialIconLinkFa>
                            <SocialIconLinkGi href="https://github.com/olfrank" target="_blank" aria-label ="Github">
                                <FaGithub />
                            </SocialIconLinkGi>
                            <SocialIconLinkTw href="https://twitter.com/OllieFrancis18" target="_blank" aria-label ="Twitter">
                                <FaTwitter />
                            </SocialIconLinkTw>
                            <SocialIconLinkLi href="https://www.linkedin.com/in/ollie-francis-57256b1b1/" target="_blank" aria-label ="Linkedin">
                                <FaLinkedin />
                            </SocialIconLinkLi>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
