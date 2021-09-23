
import { ProjectData } from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard";
import Carousel from "../components/Carousel";

function Projects() {

  const carouselData = ProjectData.map((project, index)=>(
    <ProjectCard projectInfo={project} key={index}/>
  ));

  return (
    <div id="projects-section" className="section projects-screen">
      <div className="heading-div heading-div__projects">
        <h2 className="heading-secondary heading-secondary--projects">Projects</h2>
      </div>

      <div className="section-content section-content-projects">
        <div className="color-wedge color-wedge--projects"></div>
        <Carousel carouselData={carouselData}/>
      {ProjectData.map((project, index)=>(
        <ProjectCard projectInfo={project} key={index}/>
      ))}
      </div>

      
    </div>
  )
}

export default Projects;