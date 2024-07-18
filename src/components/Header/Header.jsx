import { NavLink } from "react-router-dom";
import "./Header.css";
import React, { useState } from 'react';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive}
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" exact to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/about" onClick={closeMenu}>
              About Me
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/music" onClick={closeMenu}>
              Sound
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/visual" onClick={closeMenu}>
              Visual
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button contact-btn" to="/contact">
                  <strong>Contact me!</strong>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;