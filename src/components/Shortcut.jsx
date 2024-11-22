import PropTypes from 'prop-types';

/* Library object matching paths to icons */
const iconLibrary = {
    "About": "/src/data/icons/id-card-black.svg",
    "Projects": "/src/data/icons/computer-screen-black.svg",
    "Resume": "/src/data/icons/resume-black.svg"
}

const Shortcut = ({ path }) => {
    return (
        <div className='shortcutContainer'>
            <a href={"/" + path.toLowerCase()}>
                <img src={iconLibrary[path]} alt={path} />
            </a>
            <p className='shortcutText'>{path}</p>
        </div>
    )
}

export default Shortcut;

Shortcut.propTypes = {
    path: PropTypes.string.isRequired
}