import React, { useState } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import CVPicture from '../image/cv1.png';
import CVPicture2 from '../image/cv2.png';
import CVpdf from '../image/Oliver_Francis_Dev_CV_PDF.pdf';

import {CVPageWrapper,
        ViewCVButton,
        Header, 
        Title,
        Subheading,
        Subheading2,
        ContactInfo,
        PStatementWrapper,
        StatementText,
        EducationWrapper,
        Education,
        Skills,
        Hard,
        Soft,
        ProjectsWrapper,
        Projects,
        CertificatesWrapper,
        Certificates,
        ExtracurricularWrapper,
        Extracurricular,
        Link,
        BackArrow,
        BackHome,
        ModalCVWrapper,
        ModalCV,
        DownloadButton,
        ButtonWrapper,
        ViewCVButtonWrapper
        } from './CVElements';

        
const CVPage = () => {
    const [resume, setResume] = useState(false);
    const resumeSwitch = () => {
        setResume(old => !old)
    }

    return (
        <div className = "page">
        <BackHome to="/">
          <BackArrow  />
        </BackHome>

        <CVPageWrapper>
        <ViewCVButtonWrapper>
            <ViewCVButton onClick={resumeSwitch}>View CV (word document format)</ViewCVButton>
        </ViewCVButtonWrapper>
        <ButtonWrapper>
            <DownloadButton className="modal-button">
                <a download="" href={CVpdf} class="button-pdf">
                    Download CV (pdf)<i className="uil uil-download-alt"></i>
                </a>
            </DownloadButton>
        </ButtonWrapper>
            
        <Header>
            <Title>Oliver Francis</Title>
            <ContactInfo>olliefrancis97@hotmail.co.uk | 07901837771 | 1B Manor Crescent, Wendover, HP22 6HH | https://github.com/olfrank</ContactInfo>
        </Header>

        <PStatementWrapper>
        <Subheading>PERSONAL STATEMENT</Subheading>
            <StatementText>                           										
            A Bachelor of Science Geography graduate with a logical, pragmatic, and creative approach to solving problems. 
            A self-starter with a well-rounded and developed understanding of decentralised finance (DeFi), smart contract programming and smart contract security. 
            A strong grounding in developing user-focused and secure decentralised blockchain applications using Solidity, JavaScript, Truffle and Web3.js. 
            <br></br><br></br>
            A firm believer in decentralisation as an engine to accelerate the inclusion of marginalised communities and grant equal 
            access to financial opportunities. Eager to be part of a blockchain community that cultivates and encourages individual 
            growth and success while helping blockchain fulfil its potential.   
            </StatementText>
        </PStatementWrapper>

        <EducationWrapper>
        <Skills>
            <Subheading>SKILLS</Subheading>
                <Subheading2>Technical Skills</Subheading2>
                <Hard>
                    <li><mark>Languages:</mark> Solidity, JavaScript, HTML, CSS</li>
                    <li><mark>Frameworks:</mark> Hardhat, Truffle, OpenZeppelin</li>
                    <li><mark>Tools and Libraries:</mark> React.js, Web3.js, jQuery, Ganache, GitHub, Bootstrap</li>
                </Hard>
                <Subheading2>Other Skills</Subheading2>
                <Soft>
                    <li>Problem solving</li>
                    <li>Ability to work well in a team</li>
                    <li>Well tested communication skills, both written and verbal, developed through report writing, presentations 
                        and group work situations</li>
                    <li>Analytical and research skills </li>
                    <li>Critical evaluation and attention to detail </li>
                    <li>Personal attributes such as time-management, development of responsibility, coping well under pressure, conscientiousness</li>
                    <li>Creativity and design, as shown in my projects </li>
                </Soft>
            </Skills>
        <Subheading>EDUCATION</Subheading>
            <Education>
                    <li><mark>University of Reading (2016-2019):</mark> 2.1 Bachelor of Science in Geography (Human and Physical). </li>
                    <li><mark>Dissertation:</mark> Nuclear Power’s Part in Sustainable UK Energy Security and Potential Implications Post-Brexit</li>
                    <li><mark>Gordon’s School (2009-2016)</mark></li>
                    <li>A level:  3-B's</li>								
            </Education>
            
        </EducationWrapper>

        <ProjectsWrapper>
        <Subheading>PROJECTS</Subheading>
            <Projects>
            
            <li><mark>Website:</mark> You can view my website code on github <Link href="">here</Link> </li>
            <br></br>
            <li><mark>Funky Felines (DApp):</mark> Is an NFT (ERC721) Marketplace whereby you can buy, sell, collect and breed unique cat NFT’s. 
                Each cat has a DNA string that is directly correlated to its colors and attributes. The DApp features a breeding algorithm 
                that randomly mixes the DNA from both the mother and father to produce a unique kitten. (JavaScript, Solidity, jQuery, Web3.js, Truffle)
                <Link href="https://github.com/olfrank/Funky_Felines_DApp">Code </Link> 
                <p> </p>
                <Link href="https://olfrank.github.io/Funky_Felines_DApp/client/index.html"> DApp</Link> 
            </li>
                <br></br>
            <li><mark>DEX (DApp):</mark> Is a rudimentary decentralised exchange whereby you can trade ETH for ERC20 tokens and visa versa. 
                You can trade crypto assets through either market or limit orders, as well as view open orders via the orderbook. (JavaScript, Solidity, jQuery, Web3.js, Truffle).
                <Link href="https://github.com/olfrank/new_Dex_Dapp">Code </Link> 
                <p> </p>
                <Link href="https://olfrank.github.io/new_Dex_Dapp/client/index.html"> DApp</Link>
            </li>
            <br></br>
            <li><mark>Coin Tracker:</mark> Using an API to fetch live data from coin paprika, you can view the top 10 crypto's current price. 
                The website also features a mock account balance which can be used to purchase the assets listed. (React.js) 
                <Link href="https://github.com/olfrank/coin-exchange"> Code </Link> 
                <p> </p>
                <Link href="https://olfrank.github.io/coin-exchange/"> Website</Link> 
            </li>
            <br></br>
            <li><mark>Multi-Signature Wallet:</mark> The smart contract design is focused on reducing gas consumption while maintaining security. 
                Users can create multiple wallet instances under the same account and deposit custom ERC-20 tokens. 
                Currently developing the frontend. (Solidity, Hardhat).
                <Link href="https://github.com/olfrank/coin-exchange">Code </Link> 
                
            </li>
            <br></br>
            <li><mark>Carrot Farm:</mark> The smart contract design is focused on reducing gas consumption while maintaining security. 
                Users can create multiple wallet instances under the same account and deposit custom ERC-20 tokens. 
                Currently developing the frontend. (Solidity, Hardhat). 
                <Link href="https://github.com/olfrank/Yield_Farm_DApp_">Code </Link> 
            </li>
            <br></br>
            <li><mark>Rock Paper Scissors:</mark> The smart contract was designed to be gas efficient and secure from known attack vectors. 
                The game can be wagered in custom rock paper scissors ERC-20 token. 
                Measurements are in place to avoid funds being stuck in the contract. (Solidity, Hardhat). 
                <Link href="https://github.com/olfrank/Rock_Paper_Scissors">Code </Link> 
            </li>
            
            
            												
            </Projects>
        </ProjectsWrapper>

        <CertificatesWrapper>
            <Certificates>
            <Subheading>CERTIFICATES</Subheading>
            												
            <Subheading2><mark>Moralis (Ivan on Tech) Blockchain Academy:</mark></Subheading2> 
            
                <li>Cryptography and Privacy Coins (May 2021)</li>
                <li>DeFi 201 (May 2021)	</li>
                <li>EOS Programming 201 (May 2021)</li>
                <li>EOS Programming 101 (May 2021)</li>
                <li>Ethereum DApp Programming (April 2021)</li>
                <li>Ethereum Smart Contract Programming 201	(April 2021)</li>
                <li>Ethereum Smart Contract Security (April 2021)</li>
                <li>React Web Development 101 (March 2021)</li>
                <li>Bitcoin Standard (Feb 2021)</li>
                <li>C++ for Blockchain Developers (Feb 2021)</li>
                <li>DeFi 101 (Feb 2021)</li>
                <li>JavaScript for Blockchain Developers (Feb 2021)</li>
                <li>Blockchain & Bitcoin 101 (Jan 2021)</li>
                <li>Ethereum 101 (Jan 2021)</li>
            
            </Certificates>
        </CertificatesWrapper>

        <ExtracurricularWrapper>
            <Extracurricular>
                <Subheading>EXTRACURRICULAR & INTERESTS:</Subheading>

                <li>Embarked on a five-month trip to South America in early 2020. However due to COVID-19, it was cut short.</li>
                <li>Keen rugby player since primary school and continued through secondary school and university. 
                    Member of the Reading University Rugby Society throughout university and a regular 2nd and 1st team player.</li>
                <li>Gold and Bronze Duke of Edinburgh's Awards </li>
                <li>Children’s Country Holiday Fund (CCHF) Charity 2015. Volunteering for 7 days working in a team of 6 to 
                    organise and deliver activities for children from disadvantaged backgrounds. </li>
                <li>Combined Cadet Force (CCF) 2013-2015. Achieved Methods of Instruction qualification enabling me to supervise 
                    and teach younger cadets in preparation for their CCF exams. Involved in the three, one-week CCF camps in Cornwall and Devon.</li>
                <li>Rugby, Skiing (cross-country and downhill), Running, Music, Reading, Travelling</li>
            										
            </Extracurricular>
        </ExtracurricularWrapper>
        <ViewCVButtonWrapper>
            <ViewCVButton onClick={resumeSwitch}>View CV (word document format)</ViewCVButton>
        </ViewCVButtonWrapper>
        </CVPageWrapper>
        {resume ?
        <ModalCVWrapper className="modal-resume">
            <ModalCV className="modal-with-scrollbar">
                <i className="uil uil-times resume-close" onClick={resumeSwitch}></i>
                <ButtonWrapper>
                
                        <DownloadButton className="modal-button">
                                <a download="" href={CVpdf} class="button-pdf">
                                Download CV (pdf)<i className="uil uil-download-alt"></i>
                                </a>
                        </DownloadButton>
                </ButtonWrapper>
                <img src={CVPicture} alt="CV"/>
                <img src={CVPicture2} alt="CV"/>
                    
                    
                </ModalCV>
            
        </ModalCVWrapper>
        : null}

        <Footer />
        </div>
    )
}

export default CVPage;
