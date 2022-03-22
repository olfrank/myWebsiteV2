import React, {useState, useEffect} from 'react';
import {GoThreeBars} from 'react-icons/go';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    

    const changeNav = ()=> {
      if(window.scrollY >= 80) {
        setScrollNav(true);
      }else{
        setScrollNav(false);
      }
    }

    useEffect(()=> {
      window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = ()=>{
      scroll.scrollToTop()
    }


    return (
      <React.Fragment>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
           <NavLogo onClick={toggleHome}>ollie francis</NavLogo>
           <MobileIcon onClick={toggle} >
             <GoThreeBars />
           </MobileIcon>
           <NavMenu>
             <NavItem>
               <NavLinks to="about" smooth={true} duration={1500} spy={true} exact='true' offset={-80}>about</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to="projects" smooth={true} duration={1500} spy={true} exact='true' offset={-80} >projects</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to="education" smooth={true} duration={1500} spy={true} exact='true' offset={-80}>education</NavLinks>
             </NavItem>
             <NavItem>
               <NavLinks to="certificates" smooth={true} duration={1500} spy={true} exact='true' offset={-80}>certificates</NavLinks>
             </NavItem>
           </NavMenu>
           <NavBtn>
             <NavBtnLink to="/contact" >contact me</NavBtnLink>
           </NavBtn>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </React.Fragment>
    );
};

export default Navbar;
