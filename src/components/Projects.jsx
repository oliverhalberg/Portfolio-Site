import projectsList from "../data/projects-list.json";
import Project from "./Project.jsx";

const projects = projectsList.projects;

const Projects = () => {
    return (
        <>
        <h2 id="projectsTitle">Projects</h2>
        <p id="projectsSubtitle">Projects are presented in approximate chronological order, with the oldest ones listed first. This page may not be entirely up to date; check out my <a href="https://github.com/oliverhalberg">Github page</a> to see what projects are currently in progress.</p>
        <div id="projectsContainer">
            {projects.map((project, i) => <div key={project.id}><Project key={project.id} data={project} reverse={i%2 === 0}/> {(i < projects.length - 1) ? <hr className="projectDivider"/> : null}</div>)}
        </div>
        </>
    );
}

export default Projects;