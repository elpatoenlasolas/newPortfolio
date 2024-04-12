import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p><strong>Thanks</strong> for stopping by.</p>
                <p>Please check my socials, or send me an <NavLink to="contact" className="pref">email.</NavLink></p>
            </div>
            <div className="social">
                <span className="icon">
                    <a href="https://instagram.com/elpatoenlasolas" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/elpatoenlasolas" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;