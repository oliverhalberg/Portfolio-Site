import projectsList from "../data/projects-list.json";
import Project from "./Project";

const projects = projectsList.projects;

const Projects = () => {
    return (
        <div id="projectsContainer">
            {projects.map((project) => <Project key={project.id} data={project} />)}
        </div>
    );
}

export default Projects;