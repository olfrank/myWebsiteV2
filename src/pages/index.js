import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Education from '../components/Education'
// import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import '../App.css';
import Certificates from '../components/Certificates/index';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div className = "page">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection/>
            <Projects />
            <Education/>
            <Certificates />
            <Footer />
            
        </div>
    )
}

export default Home
