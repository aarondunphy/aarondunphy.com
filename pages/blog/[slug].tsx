import { remark } from "remark"
import html from "remark-html"
import { getPostBySlug, getAllPosts } from "../../lib/blog"
import Layout from "../../src/components/layout"
import Seo from "../../src/components/seo"
import Heading from "../../src/components/Heading"
import { Post } from "../../src/types"
import React from "react"

interface PostProps {
  frontmatter: Post
  content: any
}

const Post = ({ frontmatter, content }: PostProps) => {
  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.title} />
      <div className="container-blog">
        <div className="blog-post-container">
          <div className="blog-post">
            <Heading level={1}>{frontmatter.title}</Heading>
            <p>
              <small>{frontmatter.date}</small>
            </p>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post

interface GetStaticPropsProps {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: GetStaticPropsProps) {
  const post = getPostBySlug(params.slug)
  const markdown = await remark()
    .use(html)
    .process(post.content || "")
  const content = markdown.toString()
  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
