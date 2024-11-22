import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Library object matching paths to icons */
const iconLibrary = {
    "About": "/src/data/icons/id-card-black.svg",
    "About-white": "/src/data/icons/id-card-white.svg",
    "Projects": "/src/data/icons/computer-screen-black.svg",
    "Projects-white": "src/data/icons/computer-screen-white.svg",
    "Resume": "/src/data/icons/resume-black.svg",
    "Resume-white": "/src/data/icons/resume-white.svg"
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