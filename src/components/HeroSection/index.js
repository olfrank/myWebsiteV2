import React from 'react'
import {useState} from 'react';
import Typist from 'react-typist';
// import { FaLockOpen } from 'react-icons/fa';
import Video from "../../video/yellow.mp4";

import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP,
    HeroBtnWrapper, 
    ArrowForward,
    ArrowRight,
    DownArrow, 
    Button
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }

    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type= "video/mp4" />
            </HeroBg>
            <HeroContent>
                <Typist cursor={{ show: false }}>
                    <HeroH1>oliver</HeroH1>
                    <HeroP>solidity/web3 developer </HeroP>
                </Typist>
                <HeroBtnWrapper to="/cv">
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} >
                        CV/resumé {hover ? <ArrowForward />:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                <DownArrow to="about"/>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
