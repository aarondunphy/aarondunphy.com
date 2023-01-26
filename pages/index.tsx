import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Home | Front End Developer based in Leigh-on-Sea, Essex"
        description="Front End Developer based in Leigh-on-Sea, Essex"
      />
      <div className="container">
        <div className="hero">
          <h2 className="hero__title">
            Hey, I&apos;m Aaron{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <h1 className="hero__text">
            Front End Developer based in Leigh-on-Sea, UK
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default Index
