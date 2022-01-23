import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
    <footer className="bg-gray-100 py-16 text-gray-800">
        <div className="container">
            <div className="text-center">
                <div className="flex gap-4 mb-6 justify-center">
                    <a href="https://twitter.com/aarondunphy" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/aarondunphy" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/aarondunphy" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://instagram.com/aarondunphy" target="_blank" rel="noreferrer" className="text-gray-800 text-xl hover:text-indigo-600">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p style={{fontSize: 16}}>&copy; Aaron Dunphy { new Date().getFullYear() }</p>
                <p style={{marginBottom: 0}}>Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> &amp; <span role="img" aria-label="coffee">☕️</span></p>
            </div>
        </div>
    </footer>
)

export default Footer