// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa'; // Icons for links

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=100" // Replace with your logo URL
          alt="Logo"
          className="d-inline-block align-top"
        />
        MyApp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">
            <FaInfoCircle /> About
          </Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/services">
              <FaCog /> Services
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/blog">
              Blog
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
