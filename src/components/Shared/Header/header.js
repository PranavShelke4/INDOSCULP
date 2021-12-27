/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.css";
import logo from "../../../assets/icon/LOGOnew.png";
import MediaBar from "../Social_Media_Bar/mediaBar";


const Header = () => {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-350px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <>
      <MediaBar/>
      <Navbar id="navbar" className="autohide" collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand href="/"><img alt="" src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link"><b>Products</b></Nav.Link> 
              <NavDropdown className="nav-dropdown" title={<b>Markets & Applications</b>} id="collasible-nav-dropdown">
                <NavDropdown.Item id="nav_dropdown_item" href="/agriculture">Agriculture</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Construction</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Food & Beverage</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Intralogistics</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Logistics</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Marine & Offshore</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Mining</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Packaging</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Wind</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Textile</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Recycling</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<b>Company</b>} id="collasible-nav-dropdown">
              <NavDropdown.Item id="nav_dropdown_item" href="/">About us</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Excellence</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Financial Highlights</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Social Responsibility</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">News, Media & Events</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Contacts</NavDropdown.Item>
                <NavDropdown.Item id="nav_dropdown_item" href="/">Bonfiglioli Service</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/"><b>Peoples</b></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" 
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" 
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
              </Nav.Link>

              <Nav.Link href="/">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" 
                        width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" 
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
