import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Heading from "../components/Heading"

const BlogPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    const posts = nodes.map((node, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <Heading level={3}>
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
          <Seo title="Blog" />
          <div className="container">
              <Heading level={1}>Blog</Heading>
              <div className="mt-16">
                  { posts }
              </div>
            </div>
        </Layout>
    )
}

export default BlogPage

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