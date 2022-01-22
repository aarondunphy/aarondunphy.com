import { Link } from "gatsby"
import React from "react"
import NavHeader from "../components/styles/navHeader"

const Header = () => (
<NavHeader>
    <div className="logo">
        <Link to="/">
            Aaron Dunphy
        </Link>
    </div>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/uses">Uses</Link>
            </li>
        </ul>
    </nav>
</NavHeader>
)

export default Header