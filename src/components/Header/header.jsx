import React, { useState } from "react";
import "./header.css"; // CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NoHeaderPaths from "./NoHeaderPaths";
import Logo from "../../assets/main-logo.jpg"
// Sample list of items in the capabilities drop down menu

const Header = () => {
  // State for whether a dropdown menu is visible or not

  // Handler to change the selected sub menu state

  const { pathname } = useLocation();

  if (NoHeaderPaths().includes(pathname)) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar collapseOnSelect className="bg-white header" sticky="top" expand="md">
      <Container className="header-container">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo}  alt="Pustak Ghar" className="logo fluid" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="header-toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="main-menu me-auto">
            <Nav.Link
              eventKey="0"
              className="capabilities-link"
              as={Link}
              to="/"
              onClick={scrollToTop}
            >
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/"
              onClick={scrollToTop}
            >
              Category
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              as={Link}
              to="/about-us"
              onClick={scrollToTop}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              as={Link}
              to="/"
              onClick={scrollToTop}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="d-flex main-menu align-items-center px-2 py-2">
          <Nav.Link eventKey="4" as={Link} to="/login" rel="noreferrer noopener" className="">
            Log In/Sign Up
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;