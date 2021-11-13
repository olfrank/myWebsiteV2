import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { Button } from '../ButtonElement'
// import img from '../../svg/Vision/Vision.svg'
import LottieAnimation from '../../Lottie'
import education from '../../animation/animation-edu.json'

import {EducationContainer, 
        EducationWrapper, 
        EducationRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Subtitle, 
        Heading, 
        //BtnWrap, 
        ImgWrap, 
        // Img
    } from './EducationElements';

const Education = () => {
    AOS.init({
        duration: 700,
        offset: 200,
        easing: 'ease'
    })
    
    return (
        <React.Fragment>
            <EducationContainer id='education'>

                <EducationWrapper>
                    <EducationRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine data-aos="flip-up">education...</TopLine>
                            <Heading data-aos="flip-up" >BSc Geography, University of Reading.</Heading>
                            <Heading data-aos="flip-up" >Moralis (Ivan on Tech) Blockchain Academy (15 Courses)</Heading>
                            <Subtitle data-aos="flip-up" ><mark>Languages:</mark>   JavaScript, Solidity, HTML, CSS</Subtitle>
                            <Subtitle data-aos="flip-up" ><mark>Frameworks:</mark>  Hardhat, Truffle, OpenZeppelin</Subtitle>
                            <Subtitle data-aos="flip-up" ><mark>Tools & Libraries:</mark>   React.js, Web3.js, jQuery, Ganache, Github, Bootstrap</Subtitle>
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
                            <LottieAnimation lotti={education} />
                                {/* <Img data-aos="flip-up" src={img}/> */}
                            </ImgWrap>
                        </Column2>
                    </EducationRow>
                </EducationWrapper>
            </EducationContainer>
        </React.Fragment>
    )
}

export default Education;
