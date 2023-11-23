import './ProjectItem.css'

const ProjectItem = (props) => {
    return (  
        <div className="projectItem_div">
            <h5>{props.projectNum}</h5>
            <p>{props.description}</p>
            <p>{props.techStack}</p>
        </div>
    );
}
 
export default ProjectItem;