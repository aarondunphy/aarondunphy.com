import React from "react"
import Heading from "../src/components/Heading"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <Heading level={1}>NOT FOUND</Heading>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
