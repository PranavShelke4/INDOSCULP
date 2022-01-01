/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.css";
import logo from "../../../assets/icon/LOGOnew.png";
// import MediaBar from "../Social_Media_Bar/mediaBar";

const Header = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-350px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Navbar
        id="navbar"
        className="autohide"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img alt="" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="nav-dropdown"
              title={<b>Products</b>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS25 Foot Type
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS25 Flange Type
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS30 Foot Type
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS30 Flange Type
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS35 Foot Type
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/PS25">
                PS35 Flange Type
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="nav-dropdown"
              title={<b>Markets & Applications</b>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item id="nav_dropdown_item" href="/agriculture">
                Agriculture
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Construction
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Food & Beverage
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Intralogistics
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Logistics
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Marine & Offshore
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Mining
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Packaging
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Wind
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Textile
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Recycling
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<b>Company</b>} id="collasible-nav-dropdown">
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Excellence
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Financial Highlights
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Social Responsibility
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                News, Media & Events
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Contacts
              </NavDropdown.Item>
              <NavDropdown.Item id="nav_dropdown_item" href="/">
                Bonfiglioli Service
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">
              <b>People</b>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/info">
              <div className="contact-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                <samp>CONTACT US</samp>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
