import { NavLink } from "react-router-dom";
import pLogo from "../../images/p-logo.png";
import "./Header.css";

function Header() {
    return (
        <>
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <NavLink className="navbar-item" to="/">
      <img
        src={pLogo}
        width={100}
        height={100}
        alt="logo"
      />
    </NavLink>
    <NavLink
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </NavLink>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item" to="/">Home</NavLink>
      <NavLink className="navbar-item" to='portfolio'>Portfolio</NavLink>
      <NavLink className="navbar-item" to="about">About Me</NavLink>
      <NavLink className="navbar-item" to="music">Sound</NavLink>
      <NavLink className="navbar-item" to="visual">Visual</NavLink>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <NavLink className="button is-info" to="contact">
            <strong>Contact me!</strong>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>
        </>
    )
};


export default Header;