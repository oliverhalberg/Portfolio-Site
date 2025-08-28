
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <span> &copy;{currentYear} Oliver Halberg </span>
            <br />
            <span>
                <a href="https://www.linkedin.com/in/oliver-halberg" className="link">LinkedIn </a>
                <a href="https://github.com/oliverhalberg" className="link">GitHub</a>
            </span>
            <br/>
            <span className="footer-mini-text">Last site update: August 28, 2025</span>
        </footer>
    );
}

export default Footer;