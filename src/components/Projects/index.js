import React, { useState } from 'react'
import AOS from 'aos';
// import '../Education/node_modules/aos/dist/aos.css';
import Icon1 from '../../image/funkyFelines.png'
import Icon2 from '../../image/dex.png'
import Icon3 from '../../image/coin-tracker.png'
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';

import { ProjectsContainer, 
         ProjectsCard,  
         ProjectsH1,
         ProjectsSub, 
         ProjectsH2, 
         ProjectsIcon,  
         LanguagesP,
         GitLogoLink,
         WebsiteLink,
         ProjectsWrapper, 
         Details, 
         ProjectCardWrapper, 
         ModalContainer, 
         Modal, 
         ModalHeader, 
         ModalItem, 
         ModalContent, 
         ModalItemInfo,
         ModalTitle, 
         ModalTitleSection } from './ProjectsElements';

const Projects = () => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const showModal1 = () => {
        setModal1(true);
    }
    const hideModal1 = () => {
        setModal1(false);
    }

    const showModal2 = () => {
        setModal2(true);
    }
    const hideModal2 = () => {
        setModal2(false);
    }

    const showModal3 = () => {
        setModal3(true);
    }
    const hideModal3 = () => {
        setModal3(false);
    }



    AOS.init({
        duration: 700,
        offset: 150,
        easin: 'ease'
    })
    return (
            <ProjectsContainer id = 'projects' >
                 
                <ProjectsH1>projects</ProjectsH1>
                <ProjectsSub>more on my github</ProjectsSub>
                
                <ProjectsWrapper >
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-right" className="project-card">
                            <ProjectsIcon src={Icon1}/>
                            <ProjectsH2>Funky Felines</ProjectsH2>
                            <Details className="project-switch" onClick={showModal1}>Details <i className="uil uil-eye switch-icon"></i>  </Details>
                            
                            <LanguagesP>
                                <b>JavaScript, Solidity, Truffle, HTML5, CSS3, jQuery, Web3.js</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/Funky_Felines_DApp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-up" >
                            <ProjectsIcon src={Icon2}/>
                            <ProjectsH2>DEX DApp</ProjectsH2>
                            <Details className="project-switch" onClick={showModal2}>Details <i className="uil uil-eye switch-icon"></i>  </Details>
                            
                            <LanguagesP>
                                <b>JavaScript, Solidity, Truffle, HTML5, CSS3, jQuery, Web3.js</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/new_Dex_Dapp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard data-aos="zoom-out-left">
                            <ProjectsIcon src={Icon3}/>
                            <ProjectsH2>Coin Price Tracker</ProjectsH2>
                            <Details className="project-switch" onClick={showModal3}>Details <i className="uil uil-eye switch-icon"></i>  </Details>
                            
                            <LanguagesP>
                                <b> JavaScript, HTML5, React.js </b>

                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/coin-exchange">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                </ProjectsWrapper>
                {modal1 ?
                <Modal className="modal">
                    <ModalContainer className="modal-container">
                        <ModalHeader className="modal-header">
                            <ModalTitleSection className="modal-title-section">
                                <i className="uil uil-code-branch modal-logo"></i>
                                <ModalTitle className="modal-title">Funky Felines DApp</ModalTitle>
                            </ModalTitleSection>
                            <i className="uil uil-times modal-close" onClick={hideModal1}></i>
                        </ModalHeader>
                        <ModalContent className="modal-content">
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    CryptoKitties inspired NFT project/marketplace
                                </ModalItemInfo>
                            </ModalItem>
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    Features a marketplace to buy/sell your cat NFT's
                                </ModalItemInfo>
                            </ModalItem>
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    Each cat has a unique DNA string that is directly correlated to its attributes
                                </ModalItemInfo>
                            </ModalItem>
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    Users can also breed two parent cats to produce a new cat with a mix of both its parents attributes
                                </ModalItemInfo>
                            </ModalItem>
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    DNA mixing algorithm (written in solidity) to randomly mix the mother and farthers genes
                                </ModalItemInfo>
                            </ModalItem>
                            <ModalItem className="modal-item">
                                <i className="uil uil-check-circle soft-icon-check"></i>
                                <ModalItemInfo className="modal-item-description">
                                    Will continually improve the UI/UX in the future 
                                </ModalItemInfo>
                            </ModalItem>
                        </ModalContent>
                    </ModalContainer>
                </Modal>
            : null}
            {modal2 ?
                <Modal className="modal">
                <ModalContainer className="modal-container">
                    <ModalHeader className="modal-header">
                        <ModalTitleSection className="modal-title-section">
                            <i className="uil uil-code-branch modal-logo"></i>
                            <ModalTitle className="modal-title">Decentralized Exchange (DEX)</ModalTitle>
                        </ModalTitleSection>
                        <i className="uil uil-times modal-close" onClick={hideModal2}></i>
                    </ModalHeader>
                    <ModalContent className="modal-content">
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                A DEX with a built-in wallet containing 3 tokens (ADA, VET, LINK)
                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                Only the contract owner can add and verify tokens in this DEX
                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                Features a "getting started" page whereby a user can learn about DEX's and limit/market orders
                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                There is also a simple tutorial on how to setup MetaMask
                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                The smart contracts are built and tested using Solidity & Truffle
                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">
                                JavaScript test scripts using truffle assertions 
                            </ModalItemInfo>
                        </ModalItem>
                    </ModalContent>
                </ModalContainer>
            </Modal>
            : null}
            {modal3 ?
                <Modal className="modal">
                <ModalContainer className="modal-container">
                    <ModalHeader className="modal-header">
                        <ModalTitleSection className="modal-title-section">
                            <i className="uil uil-code-branch modal-logo"></i>
                            <ModalTitle className="modal-title">

                                Coin Price Tracker
                                
                                </ModalTitle>
                        </ModalTitleSection>
                        <i className="uil uil-times modal-close" onClick={hideModal3}></i>
                    </ModalHeader>
                    <ModalContent align="left" className="modal-content">
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                                Track the top 10 cryptocurrency's current price

                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                                Features a mock account balance allowing you to buy/sell your chosen asset

                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                            Uses an API to fetch live data from coin paprika

                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                                Used axios to send asyncronous HTTP requests 

                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                                This was my first project using React.js back in February 2021

                            </ModalItemInfo>
                        </ModalItem>
                        <ModalItem className="modal-item">
                            <i className="uil uil-check-circle soft-icon-check"></i>
                            <ModalItemInfo className="modal-item-description">

                                Soon to add a live chart and orderbook :)

                            </ModalItemInfo>
                        </ModalItem>
                    </ModalContent>
                </ModalContainer>
            </Modal>
            : null}
            </ProjectsContainer>
    )
}

export default Projects
