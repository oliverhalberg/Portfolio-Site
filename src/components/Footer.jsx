
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <span> &copy;{currentYear} Oliver Halberg </span>
            <span>
                <a href="https://www.linkedin.com/in/oliver-halberg" className="externalLink">LinkedIn</a>
            </span>
        </footer>
    );
}

export default Footer;