import React from 'react';
import AOS from 'aos';
// import '../Education/node_modules/aos/dist/aos.css';
//import { Button } from '../ButtonElement'
import LottieAnimation from '../../Lottie'
import aboutme from '../../animation/about-me.json'
// import img2 from '../../svg/Succes/Succes.svg'

import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Subtitle, 
        Heading,  
        ImgWrap, 
        // Img
    } from './InfoElements';

const InfoSection = () => {
    AOS.init({
        duration: 700,
        offset: 200,
        easing: 'ease'
    })
    
    return (
        <React.Fragment>
            <InfoContainer id="about">

                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                        <TextWrapper>
                            <TopLine data-aos="flip-up">about me...</TopLine>

                            <Heading data-aos="flip-up" >I am Ollie, a Solidity/Web3 developer from London 
                                                         with a growing fascination for blockchain technology 
                                                         and its potential.</Heading>

                            <Subtitle data-aos="flip-up" >After coming across blockchain in 2020, an insatiable 
                                                          curiosity and interest began to develop. Ever since I 
                                                          have been eager to be a part of the industry and contribute 
                                                          to its growth.</Subtitle>
                            
                            {/* <BtnWrap>
                                <Button 
                                data-aos="flip-up"
                                to="home" 
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <LottieAnimation lotti={aboutme} />
                                {/* <Img data-aos="flip-up" src={img2}/> */}
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    )
}

export default InfoSection;
