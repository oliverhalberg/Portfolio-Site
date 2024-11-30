import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Library object matching paths to icons */
const iconLibrary = {
    "About": "/icons/id-card-black.svg",
    "About-white": "/icons/id-card-white.svg",
    "Projects": "/icons/computer-screen-black.svg",
    "Projects-white": "/icons/computer-screen-white.svg",
    "Resume": "/icons/resume-black.svg",
    "Resume-white": "/icons/resume-white.svg"
}

const Shortcut = ({ path }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className='shortcutContainer'>
            <NavLink to={"/" + path.toLowerCase()} onMouseOver={()=> setHover(true)} onMouseOut={()=> setHover(false)}>
                <img src={hover ? iconLibrary[path + "-white"] : iconLibrary[path]} alt={path} />
            </NavLink>
            <p className='shortcutText'>{path}</p>
        </div>
    )
}

export default Shortcut;

Shortcut.propTypes = {
    path: PropTypes.string.isRequired
}