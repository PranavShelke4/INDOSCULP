/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./header.css";
import logo from "../../../assets/img/Logo1.svg";



const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand><img alt="" src={logo} /><b>Indosculp</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link"><b>Products</b></Nav.Link>
              <NavDropdown className="nav-dropdown" title={<b>Markets & Applications</b>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Agriculture</NavDropdown.Item>
                <NavDropdown.Item href="/">Construction</NavDropdown.Item>
                <NavDropdown.Item href="/">Food & Beverage</NavDropdown.Item>
                <NavDropdown.Item href="/">Intralogistics</NavDropdown.Item>
                <NavDropdown.Item href="/">Logistics</NavDropdown.Item>
                <NavDropdown.Item href="/">Marine & Offshore</NavDropdown.Item>
                <NavDropdown.Item href="/">Mining</NavDropdown.Item>
                <NavDropdown.Item href="/">Packaging</NavDropdown.Item>
                <NavDropdown.Item href="/">Wind</NavDropdown.Item>
                <NavDropdown.Item href="/">Textile</NavDropdown.Item>
                <NavDropdown.Item href="/">Recycling</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<b>Company</b>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">About us</NavDropdown.Item>
                <NavDropdown.Item href="/">Excellence</NavDropdown.Item>
                <NavDropdown.Item href="/">Financial Highlights</NavDropdown.Item>
                <NavDropdown.Item href="/">Social Responsibility</NavDropdown.Item>
                <NavDropdown.Item href="/">News, Media & Events</NavDropdown.Item>
                <NavDropdown.Item href="/">Contacts</NavDropdown.Item>
                <NavDropdown.Item href="/">Bonfiglioli Service</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/"><b>Peoples</b></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/"><img src="https://img.icons8.com/ios/30/000000/facebook-f.png"/></Nav.Link>
              <Nav.Link href="/"><img src="https://img.icons8.com/ios/30/000000/gmail--v2.png"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default Header;
