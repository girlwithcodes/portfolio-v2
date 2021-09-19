
function Welcome() {
  return (
    <div className="section welcome-screen">
      <div className="heading-div__welcome">
        <h1 className="heading-primary">
          <div className="heading-primary--main">Welcome</div>
          <div className="heading-primary--sub">Heather Mantooth | Software Engineer</div>
        </h1>
      </div>
      <div className="btn-div__welcome">
        <a href="#" className="btn btn--main btn--about-me">About Me</a>
        <a href="#" className="btn btn--main btn--projects">Projects</a>
        <a href="#" className="btn btn--main btn--skills">Skills</a>
        <a href="#" className="btn btn--main btn--contact">Contact</a>
      </div>
    </div>
  )
}

export default Welcome;