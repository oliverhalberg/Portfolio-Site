import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <span id="nameSpan">Oliver Halberg</span>
            <button
                className="menuBtn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Navigation Menu'
                aria-expanded={isOpen}
            >
                <img src={isOpen ? "/src/data/icons/close_menu.svg" : "/src/data/icons/open_menu.svg"} />
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul id="navbar">
                    <li className="navbarLink"><NavLink to='/'>Home</NavLink></li>
                    <li className="navbarLink"><NavLink to='/about'>About</NavLink></li>
                    <li className="navbarLink"><NavLink to='/projects'>Projects</NavLink></li>
                    <li className="navbarLink"><NavLink to='/resume'>Resume</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;