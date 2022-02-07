import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogCard from "../components/BlogCard/BlogCard"
import Heading from "../components/Heading"

const IndexPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    const posts = nodes.map((node, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <BlogCard
              title={node.frontmatter.title}
              slug={node.frontmatter.slug}
              date={node.frontmatter.date}
            />
        </div>
    ))

    return (
        <Layout>
          <Seo title="Home | Freelance Web Developer in Leigh-on-Sea, Essex | Developer Mentor" />
          <div className="container">
              <div className="py-10 md:py-32 md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Hey, I'm Aaron <span role="img" aria-label="wave">👋</span></h2>
                <h1 className="text-xl md:text-2xl font-bold mb-2">Freelance Web Developer with 7+ years of industry experience based in Leigh-on-Sea, UK</h1>
                <h2 className="text-xl">On a mission to help people start and build a career in Web Development</h2>
              </div>
              <div className="mt-16">
                <Heading level={2}>Blog Posts</Heading>
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