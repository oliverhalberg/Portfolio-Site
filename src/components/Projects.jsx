import projectsList from "../data/projects-list.json";
import Project from "./Project";

const projects = projectsList.projects;

const Projects = () => {
    return (
        <>
        <h2>Projects</h2>
        <div id="projectsContainer">
            {projects.map((project, i) => <><Project key={project.id} data={project} reverse={i%2 === 0}/> {(i < projects.length - 1) ? <hr className="projectDivider"/> : null}</>)}
        </div>
        </>
    );
}

export default Projects;