import PropTypes from 'prop-types';
const Project = ({ data }) => {
    return (
        <div className='project'>
            <div className='projectText'>
                <h2>{data.title}</h2>
                <h3>Technologies used:</h3>
                <ul>
                    {data.technologies.map((tech) => <span className='projectTech'>{tech}</span>)}
                </ul>
                <p>{data.description}</p>
            </div>
            {/* Include image, if present (not all projects might have associated images) */}
            <div className={data.imgPath ? 'projectImgDiv' : 'projectImgDivNoImg'}>
                {data.imgPath ? <img src={data.imgPath} className='projectImg' /> : null}
            </div>
            {/* Include link to source code on Github, if present */}
            {data.githubLink ? <a href={data.githubLink} className='projectGithubLink'>Github</a> : null}
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
