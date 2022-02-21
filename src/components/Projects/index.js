import React, { useState } from 'react'
import AOS from 'aos';
// import '../Education/node_modules/aos/dist/aos.css';
import Img1 from '../../image/funkyFelines.png'
import Img2 from '../../image/dex.png'
import Img3 from '../../image/coin-tracker.png'
import Img4 from '../../image/capstone.png'
import Img5 from '../../image/flightSurety.png'
import Img6 from '../../image/authWines.png'
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';

import { ProjectsContainer, 
         ProjectsCard,  
         ProjectsH1,
         ProjectsSub, 
         ProjectsH2, 
         BlockSwitch,
         OtherSwitch,
         Icon1,
         Icon2,
         ProjectsIcon,
         ProjectsIconWIP,  
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
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);

    const [block, setBlock] = useState(true);
    const [other, setOther] = useState(false);
    const [active, setActive] = useState(false);


      
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

    const showModal4 = ()=>{
        setModal4(true);
    }
    const hideModal4 = () => {
        setModal4(false);
    }

    const showModal5 = ()=>{
        setModal5(true);
    }
    const hideModal5 = () => {
        setModal5(false);
    }

    const showModal6 = ()=>{
        setModal6(true);
    }
    const hideModal6 = () => {
        setModal6(false);
    }


    const blockSwitch = () => {
        setBlock(true)
        setOther(false)
        setActive(true)
    }

    const otherSwitch = () => {
        setBlock(false)
        setOther(true)
        setActive(true)
    }



    AOS.init({
        duration: 700,
        offset: 150,
        easin: 'ease'
    })
    return (
            <ProjectsContainer id = 'projects' >
                 
                <ProjectsH1>projects</ProjectsH1>
                <ProjectsSub>(more on my github)</ProjectsSub>
                <BlockSwitch onClick={blockSwitch}>
                    <Icon1 />2021-2022
                </BlockSwitch>
                <OtherSwitch onClick={otherSwitch}>
                    2020-2021<Icon2/>
                </OtherSwitch>
                { block ?
                <ProjectsWrapper >
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-right" className="project-card">
                            <ProjectsIconWIP src={Img4}/>
                            <ProjectsH2>zkProperties (Capstone)</ProjectsH2>
                            <Details className="project-switch" onClick={showModal4}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b>Solidity, TypeScript, ethers.js, Hardhat.</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/CapstoneV2_Blockchain">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://testnets.opensea.io/collection/zkproperties">
                                <CgWebsite />
                            </WebsiteLink>

                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-up" >
                            <ProjectsIconWIP src={Img5}/>
                            <ProjectsH2>FlightSurety</ProjectsH2>
                            <Details className="project-switch" onClick={showModal5}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b>Solidity, JavaScript, HTML, CSS, web3.js, Node.js, Truffle</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/FlightSuretyDApp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://aged-scene-6641.on.fleek.co/src/dapp/">
                                <CgWebsite />
                            </WebsiteLink>

                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard data-aos="zoom-out-left">
                            <ProjectsIconWIP src={Img6}/>
                            <ProjectsH2>Authentic Wines</ProjectsH2>
                            <Details className="project-switch" onClick={showModal6}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b>Solidity, JavaScript, HTML, CSS, web3.js, Truffle.</b>

                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/WineSupplyChainDApp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://shiny-truth-6645.on.fleek.co/">
                                <CgWebsite />
                            </WebsiteLink>

                        </ProjectsCard>
                    </ProjectCardWrapper>
                </ProjectsWrapper>
                : null}

                {other ? 
                <ProjectsWrapper >
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-right" className="project-card">
                            <ProjectsIcon src={Img1}/>
                            <ProjectsH2>Funky Felines</ProjectsH2>
                            <Details className="project-switch" onClick={showModal1}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b>JavaScript, Solidity, Truffle, HTML, CSS, jQuery, Web3.js</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/Funky_Felines_DApp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://olfrank.github.io/Funky_Felines_DApp/client/index.html">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard  data-aos="zoom-out-up" >
                            <ProjectsIcon src={Img2}/>
                            <ProjectsH2>DEX DApp</ProjectsH2>
                            <Details className="project-switch" onClick={showModal2}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b>JavaScript, Solidity, Truffle, HTML, CSS, jQuery, Web3.js</b>
                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/new_Dex_Dapp">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://olfrank.github.io/new_Dex_Dapp/client/index.html">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                    <ProjectCardWrapper>
                        <ProjectsCard data-aos="zoom-out-left">
                            <ProjectsIcon src={Img3}/>
                            <ProjectsH2>Coin Price Tracker</ProjectsH2>
                            <Details className="project-switch" onClick={showModal3}>Details <i className="uil uil-eye switch-icon"></i>  </Details>

                            <LanguagesP>
                                <b> JavaScript, HTML, React.js </b>

                            </LanguagesP>
                            <GitLogoLink href="https://github.com/olfrank/coin-exchange">
                                <FaGithub />
                            </GitLogoLink>
                            <WebsiteLink href="https://olfrank.github.io/coin-exchange/">
                                <CgWebsite />
                            </WebsiteLink>
                        </ProjectsCard>
                    </ProjectCardWrapper>
                </ProjectsWrapper>
                : null}

                { modal1 ?
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
                                        DNA mixing algorithm (written in solidity) to randomly mix the mother and farther's genes
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Will continue to improve the UI/UX in the future 
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

                { modal4 ?
                    <Modal className="modal">
                        <ModalContainer className="modal-container">
                            <ModalHeader className="modal-header">
                                <ModalTitleSection className="modal-title-section">
                                    <i className="uil uil-code-branch modal-logo"></i>
                                    <ModalTitle className="modal-title">Property Listing Application</ModalTitle>
                                </ModalTitleSection>
                                <i className="uil uil-times modal-close" onClick={hideModal4}></i>
                            </ModalHeader>
                            <ModalContent className="modal-content">
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Implements zkSNARKs through ZoKrates to verifiy a title to property
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Deployed to Rinkeby Testnet and listed on OpenSea
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Tests driven development (Hardhat & TypeScript) and secure from known attack vectors
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        ERC721 and ERC165 token standards
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Minted 10 tokens on deployment and sold 5 using a different wallet
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Will be adding a frontend to generate zk proof and mint an NFT in the future
                                    </ModalItemInfo>
                                </ModalItem>
                            </ModalContent>
                        </ModalContainer>
                    </Modal>
                : null}
                { modal5 ?
                    <Modal className="modal">
                        <ModalContainer className="modal-container">
                            <ModalHeader className="modal-header">
                                <ModalTitleSection className="modal-title-section">
                                    <i className="uil uil-code-branch modal-logo"></i>
                                    <ModalTitle className="modal-title">FlightSurety</ModalTitle>
                                </ModalTitleSection>
                                <i className="uil uil-times modal-close" onClick={hideModal5}></i>
                            </ModalHeader>
                            <ModalContent className="modal-content">
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                         Flight Insurance Application (Two actors involved: Airline and Passenger)
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Oracle requests and responses for flight statuses are simulated using an express.js server
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Contract is upgradable, pausable and has multi-party consensus in place for decentralised decision making
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Test driven development (Truffle & JavaScript) and secure from known attack vectors
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        IPFS powered website/frontend (truly decentralised) through Fleek
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Creative and engaging frontend for a pleasant UX  
                                    </ModalItemInfo>
                                </ModalItem>
                            </ModalContent>
                        </ModalContainer>
                    </Modal>
                : null}
                { modal6 ?
                    <Modal className="modal">
                        <ModalContainer className="modal-container">
                            <ModalHeader className="modal-header">
                                <ModalTitleSection className="modal-title-section">
                                    <i className="uil uil-code-branch modal-logo"></i>
                                    <ModalTitle className="modal-title">Authentic Wines</ModalTitle>
                                </ModalTitleSection>
                                <i className="uil uil-times modal-close" onClick={hideModal6}></i>
                            </ModalHeader>
                            <ModalContent className="modal-content">
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        UML used to architect this blokchain solution (Activity, Sequence, State and Data Model Diagrams)
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Access control for different actors involved in the supply chain (Vigneron, Distributor, Retailer, Consumer)
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Test driven development (Truffle & JavaScript) and secure from known attack vectors
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Secure from known attack vectors 
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Measurement are in place to prevent users funds being stuck in contract
                                    </ModalItemInfo>
                                </ModalItem>
                                <ModalItem className="modal-item">
                                    <i className="uil uil-check-circle soft-icon-check"></i>
                                    <ModalItemInfo className="modal-item-description">
                                        Moves are hased with a secret word chosen by the player to prevent cheating
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
