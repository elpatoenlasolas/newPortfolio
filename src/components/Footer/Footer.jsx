import "./Footer.css";

function Footer() {
    return (
        <footer className="footer is-fixed-bottom">
            <div className="content has-text-centered">
                <p><strong>Thanks</strong> for stopping by.</p>
                <p>All rights reserved ® | PFC | 2024</p>
            </div>
            <div className="social">
                <span className="icon">
                    <a href="https://github.com/elpatoenlasolas" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://linkedin.com/patricio-funes-cardoso" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;