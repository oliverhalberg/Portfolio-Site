import PropTypes from 'prop-types';
const Project = ({ data }) => {
    return (
        <div>
            <h2>{data.title}</h2>
            {/* Include image, if present (not all projects might have associated images) */}
            {data.imgPath ? <img src={data.imgPath} /> : null}
            <h3>Technologies used:</h3>
            <ul>
                {data.technologies.map((tech) => <li>{tech}</li>)}
            </ul>
            <p>{data.description}</p>
            {/* Include link to source code on Github, if present */}
            {data.githubLink ? <a href={data.githubLink}>Github</a> : null}
        </div>
    );
}

export default Project;

Project.PropTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        githubLink: PropTypes.string,
        imgPath: PropTypes.string
    })
}
