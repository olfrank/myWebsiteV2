import React, { useState } from 'react';
import '../App.css';
import Footer from '../components/Footer';
import CVPicture from '../images/cv.png';
import CVpdf from '../images/cv.pdf';
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
            <ViewCVButton onClick={resumeSwitch}>View CV (document format)</ViewCVButton>
        </ViewCVButtonWrapper>
            
        <Header>
            <Title>Oliver Francis</Title>
            <ContactInfo>olliefrancis97@hotmail.co.uk | 07901837771 | 1B Manor Crescent, Wendover, HP22 6HH | https://github.com/olfrank</ContactInfo>
        </Header>

        <PStatementWrapper>
        <Subheading>PERSONAL STATEMENT</Subheading>
            <StatementText>                           										
            A Bachelor of Science Geography graduate with a highly logical, pragmatic and creative approach to solving problems. 
            A self-starter mentality with a well rounded and developed understanding of Decentralised Finance (DeFi) and smart contract programming (OOP). 
            An eagerness to continually learn and improve will no doubt prove to be a valuable trait 
            </StatementText>
        </PStatementWrapper>

        <EducationWrapper>
        <Subheading>EDUCATION</Subheading>
            <Education>
                    <li><mark>University of Reading (2016-2019):</mark> 2.1 Bachelor of Science in Geography (Human and Physical). </li>
                    <li><mark>Dissertation:</mark> Nuclear Power’s Part in Sustainable UK Energy Security and Potential Implications Post-Brexit</li>
                    <li><mark>Gordon’s School (2009-2016)</mark></li>
                    <li>GCSE: 2-A’s, 6-B’s, 1-C’s  </li>
                    <li>A level:  3-B's</li>								
            </Education>
            <Skills>
            <Subheading>SKILLS</Subheading>
                <Subheading2>Technical Skills</Subheading2>
                <Hard>
                    <li><mark>Languages:</mark> Solidity, JavaScript, HTML5, CSS3</li>
                    <li><mark>Frameworks:</mark> Truffle</li>
                    <li><mark>Tools and Libraries:</mark> React.js, Node.js, Web3.js, jQuery, Ganache, OpenZeppelin, GitHub, Bootstrap</li>
                    <li>Blockchain Fundamentals & Decentralised Finance</li>
                    <li>Solidity best practices</li>
                </Hard>
                <Subheading2>Other Skills</Subheading2>
                <Soft>
                    <li>Critically interpret data, reports and studies</li>
                    <li>Ability to think analytically and evaluate research/data</li>
                    <li>Well tested communication skills, both written and verbal, developed through report writing, data presentations 
                        and group work situations</li>
                    <li>Ability to efficiently work to deadlines gained from fieldwork assignments and projects</li>
                </Soft>
            </Skills>
        </EducationWrapper>

        <ProjectsWrapper>
        <Subheading>PROJECTS</Subheading>
            <Projects>
            
            <li><mark>Website:</mark> You can view my website code on github <Link href="">here</Link> </li>

            <li><mark>Funky Felines (DApp):</mark> Is an NFT (ERC721) Marketplace whereby you can buy, sell, collect and breed unique cat NFT’s. 
                Each cat has a DNA string that is directly correlated to its colors and attributes. The DApp features a breeding algorithm 
                that randomly mixes the DNA from both the mother and father to produce a unique kitten. 
                <Link href="https://github.com/olfrank/Funky_Felines_DApp">Code</Link> 
                <Link href="">DApp</Link> </li>

            <li><mark>DEX (DApp):</mark> Is a rudimentary decentralised exchange whereby you can trade ETH for ERC20 tokens and visa versa. 
                You can trade crypto assets through either market or limit orders, as well as view open orders via the orderbook. 
                <Link href="https://github.com/olfrank/new_Dex_Dapp">Code</Link> 
                <Link href="">DApp</Link></li>
            
            <li><mark>Coin Tracker:</mark> Using an API to fetch live data from coin paprika, you can view the top 10 crypto's current price. 
                The website also features a mock account balance which can be used to purchase the assets listed. 
                <Link href="https://github.com/olfrank/coin-exchange">Code</Link> 
                <Link href="">Website</Link> </li>
            
            <li> (Currently working on a multisig wallet DApp)</li>
            												
            </Projects>
        </ProjectsWrapper>

        <CertificatesWrapper>
            <Certificates>
            <Subheading>CERTIFICATES</Subheading>
            												
            <Subheading2><mark>Ivan on Tech Blockchain Academy:</mark></Subheading2> 
            
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
                <li>Gold and Bronze Duke of Edenborough Awards </li>
                <li>Children’s Country Holiday Fund (CCHF) Charity 2015. Volunteering for 7 days working in a team of 6 to 
                    organise and deliver activities for children from disadvantaged backgrounds. </li>
                <li>Combined Cadet Force (CCF) 2013-2015. Achieved Methods of Instruction qualification enabling me to supervise 
                    and teach younger cadets in preparation for their CCF exams. Involved in the three, one-week CCF camps in Cornwall and Devon.</li>
                <li>Rugby, Skiing, Running, Music, Reading, Travelling</li>
            										
            </Extracurricular>
        </ExtracurricularWrapper>

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
                    
                    
                </ModalCV>
            
        </ModalCVWrapper>
        : null}

        <Footer />
        </div>
    )
}

export default CVPage;
