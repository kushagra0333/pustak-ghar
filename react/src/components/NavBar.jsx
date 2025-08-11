import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import NoHeaderPaths from "./NoNavbarpath";
import Logo from "../assets/main-logo.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  if (NoHeaderPaths().includes(pathname)) {
    return null;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={Logo} alt="Pustak Ghar Logo" className="logo-img" />
        <p className="logo-text">
          <span className="text-danger">Pustak</span>
          <span className="text-black">Ghar</span>
        </p>
      </Link>

      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="navigation-link text-danger" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="navigation-link text-black" onClick={closeMenu}>
          Explore
        </Link>
        <Link to="/join" className="navigation-link text-black" onClick={closeMenu}>
          Join Us
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </div>
  );
};

export default NavBar;
