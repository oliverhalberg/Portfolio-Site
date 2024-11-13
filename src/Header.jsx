import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul id="navbar">
                <li className="navbarLink"><NavLink to='/'>Home</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;