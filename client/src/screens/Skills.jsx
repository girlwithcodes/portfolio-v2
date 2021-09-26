import { useState } from "react";
import { skillBadges } from "../data/SkillData";

function Skills() {

  const [skillTitle, setSkillTitle] = useState("Click on a Skill for more detail");
  const [skillDescription, setSkillDescription] = useState("");

  const setSkill = (title, description) => {
    console.log(title);
    setSkillTitle(title);
    setSkillDescription(description);
  }

  return (
    <div id="skills-section" className="section skills-screen">
      <div className="heading-div heading-div__skills">
        <h2 className="heading-secondary heading-secondary--skills">Skills</h2>
      </div>

      <div className="section-content section-content--skills">
        <div className="color-wedge color-wedge--skills"></div>

        <div className="skills-description-div">
          <h4  className="skills-description-header">{skillTitle}</h4>
          <p className="skill-description">{skillDescription}</p>
        </div>

        <h3 className="skills-title heading-section-content--skills"> Technical </h3>

        <div className="skill-icons-div skills-icon-div--tech">
        
          {skillBadges.map((skillBadge, index)=> (
            <div 
              className="skill-icon-outer-div" 
              key={index}
              onClick={() => setSkill(skillBadge.title, skillBadge.desciption)}
              > 
              <div className="skill-icon-inner-div">
                {skillBadge.badge}
              </div>
            </div>
          ))}
        </div>

        <h3 className="skills-title heading-section-content--skills"> Other Skills </h3>

        <div className="skill-icons-div skills-icon-div--soft">
        
        </div>
      </div>

    </div>
  )
}

export default Skills;