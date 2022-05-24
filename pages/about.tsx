import React from "react"

import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Image from "next/image"
import Heading from "../src/components/Heading"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Front End Developer based in Leigh-on-Sea, Essex"
      />
      <div className="container">
        <Heading level={1}>Hey, I&apos;m Aaron 👋</Heading>

        <div className="about">
          <div>
            <p>
              I&apos;m a Front End Developer based in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Leigh-on-Sea"
                target="_blank"
                rel="noreferrer"
              >
                Leigh-on-Sea
              </a>
              , UK.
            </p>

            <p>
              My coding journey started unexpectedly in my first year of
              University in 2012. I went to uni for graphic design but in our
              first year we had to build a basic website and I thought writing
              code was so cool. I was hooked so I switched my degree to Web
              Technologies. I&apos;ve been working in the industry since
              graduating in 2015 with a first class honours.
            </p>

            <p>
              Outside of work I like to spend my time walking our{" "}
              <a
                href="https://www.instagram.com/p/CA0Kd23luxl/"
                target="_blank"
                rel="noreferrer"
              >
                cocker spaniel
              </a>
              , drinking coffee, playing golf, gaming and watching Formula 1.
            </p>
          </div>
          <div className="about__image-container">
            <Image
              src="/images/aarondunphy.jpg"
              alt="Profile Picture"
              layout="responsive"
              width={389}
              height={321}
            />
          </div>
        </div>

        <section className="tech-skills">
          <Heading level={2}>Tech Skills</Heading>
          <ul className="tech-skills__list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Gatsby</li>
            <li>CI/CD</li>
            <li>APIs</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Automated Testing</li>
            <li>Linux</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
