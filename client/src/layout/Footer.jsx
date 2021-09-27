import resume from "../assets/files/resume.pdf";
import { FaCopyright, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa"
function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-div">
        <h3 className="footer__logo-text">
          <span className="footer__logo-text--char1">H</span>
          <span className="footer__logo-text--char2">M</span>
          <span className="footer__logo-text--char3"> | </span>
          <span className="footer__logo-text--char4">S</span>
          <span className="footer__logo-text--char5">E</span>
          </h3>
          <p className="copyright-statement"><FaCopyright size="2rem"/> 2021 Heather Mantooth</p>
      </div>

      <div className="footer__links-div">
        <a href="https://github.com/girlwithcodes" 
          target="blank"
          className="footer--link footer--link-text">
          <div className="footer--icon-text-div footer--icon-text">
            <FaGithub />
            <p>GitHub</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/heather-mantooth-grlwcds/" 
          target="blank"
          className="footer--link footer--link-text">
          <div className="footer--icon-text-div footer--icon-text">
            <FaLinkedin />
            <p>LinkedIn</p>
          </div>
        </a>
        <a href={resume} target="blank" className="footer--link footer--link-text">
          <div className="footer--icon-text-div footer--icon-text">
            <FaFilePdf />
            <p>Resume</p>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Footer;