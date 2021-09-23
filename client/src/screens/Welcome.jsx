
function Welcome() {
  return (
    <div id="welcome-section" className="section welcome-screen">
      <div className="heading-div__welcome">
        <h1 className="heading-primary">
          <div className="heading-primary--main">Welcome</div>
          <div className="heading-primary--sub animation__shrink-in">Heather Mantooth | Software Engineer</div>
        </h1>
      </div>
      <div className="btn-div__welcome">
        <a href="#about-me-section" className="btn btn--main btn--about-me">About Me</a>
        <a href="#projects-section" className="btn btn--main btn--projects">Projects</a>
        <a href="#skills-section" className="btn btn--main btn--skills">Skills</a>
        <a href="#contact-section" className="btn btn--main btn--contact">Contact</a>
      </div>
    </div>
  )
}

export default Welcome;