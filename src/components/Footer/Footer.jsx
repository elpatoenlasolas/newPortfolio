import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer is-fixed-bottom">
            <div className="content has-text-centered">
                <p><strong>Thanks</strong> for stopping by.</p>
                <p>All rights reserved ® | PFC | 2024</p>
            </div>
            <div className="social">
                <span className="icon">
                    <Link to="https://github.com/elpatoenlasolas" target="_blank"><i className="link fa-brands fa-github"></i></Link>
                    <Link to="https://linkedin.com/in/patricio-funes-cardoso" target="_blank"><i className="link fa-brands fa-linkedin"></i></Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;