import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { Button } from '../ButtonElement'
import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine, 
        Subtitle, 
        Heading, 
        //BtnWrap, 
        ImgWrap, 
        Img
    } from './InfoElements';

const InfoSection = ({lightBg, imgStart, topLine, lightText, darkText, description, description2, description3, img, alt, id, headline, headline2}) => {
    AOS.init({
        duration: 700,
        offset: 200,
        easing: 'ease'
    })
    
    return (
        <React.Fragment>
            <InfoContainer lightBg={lightBg} id={id} >

                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine data-aos="flip-up">{topLine}</TopLine>
                            <Heading data-aos="flip-up" lightText={lightText}>{headline}</Heading>
                            <Heading data-aos="flip-up" lightText={lightText}>{headline2}</Heading>
                            <Subtitle data-aos="flip-up" darkText={darkText}>{description}</Subtitle>
                            <Subtitle data-aos="flip-up" darkText={darkText}>{description2}</Subtitle>
                            <Subtitle data-aos="flip-up" darkText={darkText}>{description3}</Subtitle>
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
                                <Img data-aos="flip-up" src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    )
}

export default InfoSection;
