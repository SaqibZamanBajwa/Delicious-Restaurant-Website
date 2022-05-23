import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa';



const Navbar = ( {toggle} ) => {
    return (
        <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Delicious </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="home">Home</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="menu">Menu</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="specials">Specials</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="events">Events</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="chefs">Chefs</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="gallery">Gallery</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="contact">Contact</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin"> Book A Table </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default Navbar;
