import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const UsesPage = () => {
  return (
    <Layout>
        <Header />
        <SEO title="Uses" />

        <h1 className="mb-8">Software &amp; Hardware I Use</h1>

        <div className="flex flex-col-reverse gap-8 md:flex-row">

          <div>
            
            <h2>Development</h2>
            
            <ul className="list-disc">
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

            <h2>Office Setup</h2>

            <ul className="list-disc">
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

            <h2>Miscellaneous</h2>
            <ul className="list-disc">
                <li>iPhone 12 Pro</li>
                <li>The North Face Vault Backpack</li>
            </ul>
          </div>
          <div className="self-center md:self-baseline">
            <StaticImage src="../images/office.jpg" alt="Office" />
          </div>
        </div>
    </Layout>
  )
}

export default UsesPage