import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Heading from "../src/components/Heading"
import BlogCard from "../src/components/BlogCard/BlogCard"
import { getAllPosts } from "./lib/blog"

const Blog = ({posts}) => {

  const Posts = () => {
    return posts.map((post, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <BlogCard
              title={post.frontmatter.title}
              slug={post.frontmatter.slug}
              date={post.frontmatter.date}
            />
        </div>
    ))
  }
    return (
        <Layout>
          <Seo title="Blog" />
          <div className="container">
              <Heading level={1}>Blog</Heading>
              <div className="mt-16">
                  <Posts />
              </div>
            </div>
        </Layout>
    )
}

export default Blog

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    },
  }
}
