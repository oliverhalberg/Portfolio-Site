import PropTypes from 'prop-types';
const Project = ({ data }) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <h3>Technologies used:</h3>
            <ul>
                {data.technologies.map((tech) => <li>{tech}</li>)}
            </ul>
            <p>{data.description}</p>
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
