import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Heading from "../components/Heading"

const AboutPage = () => {
    return (
        <Layout>
          <Seo title="About" />
          <div className="container">
            
            <Heading level={1}>Hey, I'm Aaron 👋</Heading>

            <div className="flex flex-col-reverse gap-8 items-center mb-10 md:flex-row">
              <div className="md:w-2/3">

                <p>I'm a Full Stack Developer based in <a href="https://en.wikipedia.org/wiki/Leigh-on-Sea" target="_blank" rel="noreferrer">Leigh-on-Sea</a>, UK. I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge. I love learning so I'm always keeping up to date by watching conference talks, listening to <Link to="/blog/my-top-5-tech-podcasts-2020">podcasts</Link> and reading blog posts.</p>
                
                <p>My coding journey started unexpectedly in my first year of University in 2012. I went to uni for graphic design but in our first year we had to build a basic website and I thought writing code was so cool. I was hooked so I switched my degree to Web Technologies. I've been working in the industry since graduating in 2015 with a first class honours.</p>

                <p>Outside of work I love walking our <a href="https://www.instagram.com/p/CA0Kd23luxl/" target="_blank" rel="noreferrer">cocker spaniel</a>, drinking coffee, playing golf and watching Formula 1.</p>
              </div>
              <div className="md:w-1/3">
                <StaticImage src="../images/aarondunphy.jpg" alt="Profile Picture" />
              </div>
            </div>

            <Heading level={2}>Tech Skills</Heading>
            <ul className="list-disc columns-3 ml-6">
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
        </Layout>
    )
}

export default AboutPage