import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (  
        <article className="projectItem_wrap">
            <ProjectItem
                projectNum={'Project 1'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'}
                techStack={'JavaScript   React   Sass'}
            />
            <ProjectItem
                projectNum={'Project 2'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'}
                techStack={'JavaScript  React  Sass'}
            />
            <ProjectItem
                projectNum={'Project 3'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.'}
                techStack={'JavaScript  React  Sass'}
            />
        </article>
    );
}

export default Projects;