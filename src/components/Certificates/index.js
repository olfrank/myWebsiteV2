import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper/react';


import { CertificatesContainer, CertificatesH1, CertificatesSub, CertificateChoiceWrapper, BlockSwitch, OtherSwitch, Icon1, Icon2 } from './CertificatesElements'

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';

import uni from '../../allCertificates/uni.jpg'
import dofe from '../../allCertificates/dofe.JPG'
import cert1 from '../../allCertificates/cert01.png';
import cert2 from '../../allCertificates/cert02.png';
import cert3 from '../../allCertificates/cert03.png';
import cert4 from '../../allCertificates/cert04.png';
import cert5 from '../../allCertificates/cert05.png';
import cert6 from '../../allCertificates/cert06.png';
import cert7 from '../../allCertificates/cert07.png';
import cert8 from '../../allCertificates/cert08.png';
import cert9 from '../../allCertificates/cert09.png';
import cert10 from '../../allCertificates/cert-10.png';
import cert11 from '../../allCertificates/cert-11.png';
import cert12 from '../../allCertificates/cert-12.png';
import cert13 from '../../allCertificates/cert-13.png';
import cert14 from '../../allCertificates/cert-14.png';
import cert15 from '../../allCertificates/cert-15.png';

SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
    const [block, setBlock] = useState(false);
    const [other, setOther] = useState(true);

    const blockSwitch = () => {
        setBlock(true)
        setOther(false)
    }

    const otherSwitch = () => {
        setBlock(false)
        setOther(true)
    }


    return (
        <CertificatesContainer id="certificates">
            <CertificatesH1>certificates</CertificatesH1>
            <CertificatesSub>online courses</CertificatesSub>
            <CertificateChoiceWrapper>
                <BlockSwitch onClick={blockSwitch}>
                    <Icon1/> Blockchain
                </BlockSwitch>
                <OtherSwitch onClick={otherSwitch}>
                    <Icon2 /> Other
                </OtherSwitch>
                
            </CertificateChoiceWrapper>


            { block ?
            <Swiper className="pagination-color"
            grabCursor="true"
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
                rotate: 5,
                stretch: 20,
                depth: 75,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={{
                clickable: true, 
                type: "fraction",
            }} >
            
                <SwiperSlide> 
                    <img src={cert1} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert2} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert3} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert4} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert5} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert6} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert7} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert8} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert9} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert10} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert11} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert12} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert13} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert14} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={cert15} alt="certificate" className="certificate-img"/>
                </SwiperSlide>
            </Swiper>
            : null}

            {other ? 
            <Swiper className="pagination-color"
            grabCursor="true"
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={2}
            loop={false}
            coverflowEffect={{
                rotate: 5,
                stretch: 20,
                depth: 75,
                modifier: 6,
                slideShadows: false,
            }}
            pagination={{
                clickable: true, 
                type: "fraction",
            }} >
                <SwiperSlide> 
                    <img src={uni} alt="certificate" className="certificate-img2"/>
                </SwiperSlide>
                <SwiperSlide> 
                    <img src={dofe} alt="certificate" className="certificate-img2"/>
                </SwiperSlide>
            </Swiper>
        : null}
        
        </CertificatesContainer>
    )
}

export default Certificates;