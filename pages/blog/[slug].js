import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPosts } from '../lib/blog'
import Layout from "../../src/components/layout"
import Seo from "../../src/components/seo"
import Heading from "../../src/components/Heading";

const Post = ({frontmatter, content}) => {
  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <div className="container-blog">
          <div className="blog-post-container">
            <div className="blog-post">
                <Heading level={1}>{frontmatter.title}</Heading>
                <p><small>{frontmatter.date}</small></p>
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

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const markdown = await remark()
    .use(html)
    .process(post.content || '')
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
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}