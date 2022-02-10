import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import BlogCard from "../src/components/BlogCard/BlogCard"
import Heading from "../src/components/Heading"
import { getAllPosts } from "../lib/blog"

const Index = ({posts}) => {
    
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
          <Seo title="Home | Software Developer in Leigh-on-Sea, Essex" />
          <div className="container">
              <div className="py-10 md:py-32 md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Hey, I'm Aaron <span role="img" aria-label="wave">👋</span></h2>
                <h1 className="text-xl md:text-2xl font-bold mb-2">Software Developer with 7+ years of Web Development experience based in Leigh-on-Sea, UK</h1>
              </div>
              <div className="mt-16">
                <Heading level={2}>Blog Posts</Heading>
                  <Posts />
              </div>
          </div>
        </Layout>
    )
}

export default Index

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    },
  }
}
