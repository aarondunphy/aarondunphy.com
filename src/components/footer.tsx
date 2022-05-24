import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer__social-list">
        <li>
          <a
            href="https://twitter.com/aarondunphy"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aarondunphy"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/aarondunphy"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/aarondunphy"
            target="_blank"
            rel="noreferrer"
            className="footer__social-list-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; Aaron Dunphy {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer
