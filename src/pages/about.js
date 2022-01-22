import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import About from "../components/styles/about"

const AboutPage = (props) => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "aarondunphy.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <Layout>
            <SEO title="About" />
            <Header />
            <About>

                <div className="profileImage">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>

                <div class="introSection">
                    <h1>Hey, I'm Aaron!</h1>

                    <p>I'm a Full Stack Developer based in <a href="https://en.wikipedia.org/wiki/Leigh-on-Sea" target="_blank" rel="noreferrer">Leigh-on-Sea</a>, UK. I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge. I love learning so I'm always keeping up to date by watching conference talks, listening to <Link to="/blog/my-top-5-tech-podcasts-2020">podcasts</Link> and reading blog posts.</p>
                    
                    <p>My coding journey started unexpectedly in my first year of University in 2012. I went to uni for graphic design but in our first year we had to build a basic website and I thought writing code was so cool. I was hooked so I switched my degree to Web Technologies. I've been working in the industry since graduating in 2015 with a first class honours.</p>

                    <p>Outside of work I love walking our <a href="https://www.instagram.com/p/CA0Kd23luxl/" target="_blank" rel="noreferrer">cocker spaniel</a>, drinking coffee, watching Formula 1 and being outdoors.</p>
                </div>

                <div class="techSkillsSection">
                    <h2>Tech Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>TypeScript</li>
                        <li>APIs</li>
                        <li>MySQL</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                        <li>Sysadmin</li>
                        <li>Automated Testing</li>
                        <li>Composer</li>
                        <li>Digital Ocean</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </About>
        </Layout>
    )
}

export default AboutPage