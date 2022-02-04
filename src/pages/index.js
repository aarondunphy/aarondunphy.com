import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import Heading from "../components/Heading"

const IndexPage = (data) => {

    // const { nodes } = data.data.allMarkdownRemark
    // const posts = nodes.map((node, index) => (
    //     <div key={index} style={{marginBottom: 40}}>
    //         <Heading level={3} style={{marginBottom: 5}}>
    //             <Link to={ node.frontmatter.slug }>
    //                 { node.frontmatter.title }
    //             </Link>
    //         </Heading>
    //         <p style={{margin: 0}}><small>{ node.frontmatter.date }</small></p>
    //         <p>{ node.frontmatter.description }</p>

    //     </div>
    // ))

    return (
        <Layout>
          <Seo title="Home | Software Engineeer | Front End Developer | React Developer" />
          <div className="container">
              <div className="py-10 md:py-32 md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Hey, I'm Aaron <span role="img" aria-label="wave">👋</span></h2>
                <h1 className="text-xl md:text-2xl font-bold mb-2">Software Engineer with 7+ years of Web Development experience based in Leigh-on-Sea, UK</h1>
                <h2 className="text-xl">Building Products, Tools &amp; Services with Laravel &amp; React.</h2>
              </div>
              {/* <div className="mt-16">
                  { posts }
              </div> */}
          </div>
        </Layout>
    )
}

export default IndexPage

// export const pageQuery = graphql`
//     query {
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//             nodes {
//                 frontmatter {
//                     title
//                     date(formatString: "DD MMMM YYYY")
//                     description
//                     slug
//                 }
//             }
//         }
//     }
// `