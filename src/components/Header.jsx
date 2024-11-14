import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <span>Oliver Halberg</span>
            <ul id="navbar">
                <li className="navbarLink"><NavLink to='/'>Home</NavLink></li>
                <li className="navbarLink"><NavLink to='/about'>About</NavLink></li>
                <li className="navbarLink"><NavLink to='/projects'>Projects</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;