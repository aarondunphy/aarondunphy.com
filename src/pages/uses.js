import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Heading from "../components/Heading"

const UsesPage = () => {
  return (
    <Layout>
        <Seo title="Uses" />
        <div className="container">

          <Heading level={1}>Uses</Heading>

          <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">

              <div className="w-full md:w-1/2">
                  <Heading level={2}>Software &amp; Hardware I Use</Heading>

                  <Heading level={3}>Development</Heading>
                  <ul className="list-disc ml-5 mb-8">
                      <li>VS Code</li>
                      <li>iTerm 2</li>
                      <li>Postman</li>
                      <li>Table Plus</li>
                      <li>Laravel Valet</li>
                      <li>Docker</li>
                      <li>Homebrew</li>
                      <li>Magnet</li>
                      <li>Google Chrome</li>
                  </ul>

                  <Heading level={3}>Office Setup</Heading>
                  <ul className="list-disc ml-5 mb-8">
                      <li>MacBook Pro (15-inch, 2017), 2.9 GHz Quad-Core Intel Core i7, 16 GB memory</li>
                      <li>LG 27″ 4K UHD IPS LED (27UD68P)</li>
                      <li>Apple Magic Mouse 2</li>
                      <li>Apple Magic Keyboard 2</li>
                      <li>Apple Air Pods</li>
                      <li>Sony WH-1000XM4 Headphones</li>
                      <li>Rode Podmic</li>
                      <li>Focusrite Scarlett Solo Interface</li>
                      <li>Rode PSA1 Boom Arm</li>
                      <li>Autonomous SmartDesk 2</li>
                      <li>Herman Miller Aeron chair</li>
                  </ul>

                  <Heading level={3}>Miscellaneous</Heading>
                  <ul className="list-disc ml-5">
                      <li>iPhone 12 Pro</li>
                      <li>The North Face Vault Backpack</li>
                  </ul>
              </div>
              <div className="w-full md:w-1/2">
                <StaticImage src="../images/office.jpg" alt="Office" />                  
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default UsesPage