// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import profpic from '../assets/images/profpic.jpg';

function AboutMe() {
  return (
    <div id="about-me-section" className="section about-me-screen">
      <div className="heading-div heading-div__about-me">
        <h2 className="heading-secondary heading-secondary--about-me">About Me</h2>

      </div>

      <div className="section-content section-content--about-me">
        <div className="color-wedge color-wedge--about-me"></div>
        <div className="section-image section-image--prof-pic">
          <img alt="profile-pic" src={profpic} className="img--prof-pic" id="profile-pic"/>
        </div>

        <div className = "section-content-text-div section-content-text-div--about-me">
          <div className = "section-content-text-group section-content-text-group--about-me" >

          <div className="dropdown-heading-div"> 
            <h3 className="heading-section-content heading-section-content--about-me"> My Values </h3>
            {/* <div className="chevron-background">
            <FaChevronDown  size={"3rem"} color={"#ff7ad9"}/>
            </div> */}
          </div>

            <div className="dropdown-text-div"> 
              <p className="section-content-text section-content-text--about-me">Hi! I'm Heather Mantooth, a quick, curious, and adaptive software engineer from Houston, Texas.  I'm a lover of innovation and technology and a firm believer in their power to improve people's lives and our world.  I value empathy, creativity, diversity, and personal growth; I'm driven by the desire to help others and to make myself a little better every day.
              </p>
            </div>
          </div>

          <div className = "section-content-text-group section-content-text-group--about-me" >

          <div className="dropdown-heading-div"> 
            <h3 className="heading-section-content heading-section-content--about-me"> My Career Path </h3>
            {/* <div className="chevron-background">
            <FaChevronDown  size={"3rem"} color={"#ff7ad9"}/>
            </div> */}
          </div>

            <div className="dropdown-text-div"> 
              <p className="section-content-text section-content-text--about-me"> I began my career as an educator, a profession that appealed to my love of learning, my desire to help others, and my ability to break down and communicate complex ideas.  As a high school teacher and jack-of-all-trades, I taught English, Mathematics, and ESL, and in 2018, my district offered me the opportunity to become certified in Computer Science.  It was during the certification program that I discovered a passion and an aptitude for coding. The new concepts I was learning  - and then teaching - stimulated me, challenged me, and engaged me.
              </p>

              <p className="section-content-text section-content-text--about-me"> In the same year and subsequent    years, several events unfolded in my district and the educational landscape that led me to desire to teach.  When I decided to pursue a new career that would offer me new, fulfilling avenues of growth, software engineering was my clear choice.  In 2020, I began taking college classes at University of Houston, Clear Lake, but after a year, I desired a faster-paced learning envirnoment that focused on building usable products, and enrolled in GA's Software Engineering Immersive course. 
              </p>
            </div>
          </div>
          
          <div className = "section-content-text-group section-content-text-group--about-me" >

          <div className="dropdown-heading-div"> 
            <h3 className="heading-section-content heading-section-content--about-me"> My Future </h3>
            {/* <div className="chevron-background">
            <FaChevronDown  size={"3rem"} color={"#ff7ad9"}/>
            </div> */}
          </div>

          <div className="dropdown-text-div"> 
            <p className="section-content-text section-content-text--about-me"> I thrived in the intensive, hands-on elearning environment of General Assembly, and as I designed, coded, tested and debugged my own applications, my love of programming and the creativity and mental flexibility it entails only grew.  After earning my certificate, I am excited to continue to challenging myself and developing my skills as I solve new problems and help build innovative and useful tools.  My ambition is to excel in my field, so that I can empower and connect people across the world, to help them discover, find community, express themselves and pursue their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AboutMe;