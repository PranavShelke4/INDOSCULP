import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./header.css";
import logo from "../../../assets/img/Logo1.svg";



const Header = () => {
  return (
    <>
      {/* <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Navbar.Brand href="/" className="px-4">
          <img alt="" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active href="/" className="mx-2 rounded btn-info">
              Products
            </Nav.Link>
            <NavDropdown
              title="Markets & Applications"
              id="basic-nav-dropdown"
              className="mx-2 rounded btn-info"
            >
              <NavDropdown.Item href="/" className="">
                Agriculture
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Construction
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Food & Beverage
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Intralogistics
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Logistics
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Marine & Offshore
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Mining
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Packaging
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Wind
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Textile
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Recycling
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Company"
              id="basic-nav-dropdown"
              className="mx-2 rounded btn-info"
            >
              <NavDropdown.Item href="/" className="">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Excellence
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Financial Highlights
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Social Responsibility
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                News, Media & Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Contacts
              </NavDropdown.Item>
              <NavDropdown.Item href="/" className="">
                Bonfiglioli Service
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className="mx-2 rounded btn-info">
              Peoples
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}


      <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand href="#home"><img alt="" src={logo} /><b>Indosculp</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="#features"><b>Products</b></Nav.Link>
              <NavDropdown className="nav-dropdown" title={<b>Markets & Applications</b>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Agriculture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Construction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Food & Beverage</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Intralogistics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logistics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Marine & Offshore</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mining</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Packaging</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wind</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Textile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Recycling</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<b>Company</b>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Excellence</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Financial Highlights</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Social Responsibility</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">News, Media & Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Contacts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bonfiglioli Service</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing"><b>Peoples</b></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><i class='bx bxl-facebook bx-md'></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default Header;
