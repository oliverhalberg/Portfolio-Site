
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <span> &copy;{currentYear} Oliver Halberg </span>
            <br />
            <a href="https://www.linkedin.com/in/oliver-halberg">LinkedIn</a>
        </footer>
    );
}

export default Footer;