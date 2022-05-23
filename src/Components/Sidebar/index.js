import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,SidebarLink,
        SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}> 
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="menu" onClick={toggle}>
                        Menu
                    </SidebarLink>
                    <SidebarLink to="specials" onClick={toggle}>
                        Specials
                    </SidebarLink>
                    <SidebarLink to="events" onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to="chefs" onClick={toggle}>
                        Chefs
                    </SidebarLink>
                    <SidebarLink to="gallery" onClick={toggle}>
                        Gallery
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Book A Table</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;