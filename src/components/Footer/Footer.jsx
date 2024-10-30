import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer is-fixed-bottom">
      <div className="content has-text-centered">
        <p>
          <strong>Thanks</strong> for stopping by.
        </p>
        <p>All rights reserved ® | PFC | 2024</p>
      </div>
      <div className="has-text-centered">
        <Link
          to="https://github.com/elpatoenlasolas"
          alt="link to github"
          target="_blank"
        >
          <FaGithub className="iconos"/>
        </Link>
        <Link
          to="https://linkedin.com/in/patricio-funes-cardoso"
          alt="link to linkedin"
          target="_blank"
        >
          <FaLinkedin className="iconos"/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
