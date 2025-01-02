import PropTypes from 'prop-types';
const Project = ({ data, reverse }) => {
    return (
        <div className='project' style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
            <div className='projectText'>
                <h2>{data.title}</h2>
                <h3>Technologies used:</h3>
                <div className='projectTechContainer'>
                    {data.technologies.map((tech) => <span className='projectTech' key={tech}>{tech}</span>)}
                </div>
                <p className='projectDescription'>{data.description}</p>
                {/* Include link to source code on Github, if present */}
                {data.githubLink ? <p><a href={data.githubLink} className='externalLink'>Github</a></p> : null}
            </div>
            <div className='projectImgDiv'>
                <img src={data.imgPath} className='projectImg' alt={data.altText} />
            </div>
        </div>
    );
}

export default Project;

Project.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        githubLink: PropTypes.string,
        imgPath: PropTypes.string.isRequired
    })
}
