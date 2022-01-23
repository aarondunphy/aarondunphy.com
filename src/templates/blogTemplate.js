import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Heading from "../components/Heading";

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <div className="container">
          <div className="blog-post-container">
            <div className="blog-post">
                <Heading level={1}>{frontmatter.title}</Heading>
                <p><small>{frontmatter.date}</small></p>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        slug
        title
      }
    }
  }
`