import { FaLink, FaGithub} from 'react-icons/fa';
function ProjectCard(props) {
  const { projectInfo } = props;

  return (
    <div className="project-card">
      <div className="project-card--title"><h3 className="heading-section-content heading-section-content--project-card">{projectInfo.title}</h3></div>
      <div className="project-card--image-div">
        <img src={projectInfo.image} alt="project screenshot" className="project-card--project-image"/>
      </div>

      <div className="project-card--text-div">
        <div className="project-card--description">{projectInfo.description}</div>
        <div className="project-card--tech">
          {projectInfo.tech.map((bullet, index)=> (
            <p className="project-card--tech-bullet" key={index}>"⬩"{bullet}</p>
          ))}
        </div>
      </div>

      <div className="project-card--link-div">
        <a href={projectInfo.gitHubUrl}>
          <div className="project-card--github-link">
            <FaGithub className="github-icon--project-card"/>
          </div>
          </a>
        <a href={projectInfo.projectUrl}>
          <div className="project-card--project-link">
          <FaLink className="link-icon--project-card" />
        </div>
        </a>
      </div>
    </div> 
  )
}

export default ProjectCard;