import React from 'react'
// import { IconBase } from 'react-icons/lib'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} >about</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} >projects</SidebarLink>
                    <SidebarLink to='education' onClick={toggle} >education</SidebarLink>
                    <SidebarLink to='certificates' onClick={toggle} >certificates</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
