import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"

const IndexPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    const posts = nodes.map((node, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <Heading level={3} style={{marginBottom: 5}}>
                <Link to={ node.frontmatter.slug }>
                    { node.frontmatter.title }
                </Link>
            </Heading>
            <p style={{margin: 0}}><small>{ node.frontmatter.date }</small></p>
            <p>{ node.frontmatter.description }</p>

        </div>
    ))

    return (
        <Layout>
          <SEO title="Home" />
          <div className="container">
              <div className="py-16">
                <h2 className="text-4xl font-bold">Hey, I'm Aaron <span role="img" aria-label="wave">👋</span></h2>
                <h1 className="text-2xl font-bold">Full Stack Developer based in Leigh-on-Sea, UK.</h1>
                <p className="text-xl">Powered by <span role="img" aria-label="coffee">☕️</span></p>
              </div>
              <div style={{marginTop: 60}}>
                  { posts }
              </div>
          </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                    description
                    slug
                }
            }
        }
    }
`