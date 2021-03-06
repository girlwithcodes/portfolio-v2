import { FaLink, FaGithub} from 'react-icons/fa';
function ProjectCard(props) {
  const { projectInfo } = props;

  return (
    <div className="project-card">
      <div className="project-card--title">
        <h3 className="heading-section-content heading-section-content--project-card">{projectInfo.title}</h3>
      </div>

      <div className="project-card-content--outer-div"> 
        <div className="project-card-content--inner-div"> 
          <a href={projectInfo.projectUrl} target="_blank" rel="noreferrer">
            <div className="project-card--image-div">
              <img src={projectInfo.image} alt="project screenshot" className="project-card--project-image"/>
            </div>
          </a>

          <div className="project-card--text-div">
            <div className="project-card--description">{projectInfo.description}</div>
            <div className="project-card--tech">
              {projectInfo.tech.map((bullet, index)=> (
                <p className="project-card--tech-bullet" key={index}>⬩{bullet}</p>
              ))}
            </div>
          </div>

          <div className="project-card--link-div">
            <a href={projectInfo.gitHubUrl} target="_blank" rel="noreferrer">
              <div className="project-card--github-link">
                <FaGithub size="2.5rem" color="#c684ee" className="github-icon--project-card"/>
              </div>
            </a>
            <a href={projectInfo.projectUrl} target="_blank" rel="noreferrer">
              <div className="project-card--project-link">
                <FaLink size="2.5rem" color="#c684ee" className="link-icon--project-card" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ProjectCard;