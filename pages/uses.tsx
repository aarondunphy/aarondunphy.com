import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Image from "next/image"
import Heading from "../src/components/Heading"

const Uses = () => {
  return (
    <Layout>
      <Seo
        title="Uses"
        description="Front End Developer based in Leigh-on-Sea, Essex"
      />
      <div className="container">
        <Heading level={1}>Uses</Heading>

        <div className="uses">
          <div className="uses__content">
            <Heading level={2}>Software &amp; Hardware I Use</Heading>

            <Heading level={3} className="uses__categoryTitle">
              Development
            </Heading>
            <ul>
              <li>VS Code</li>
              <li>iTerm 2</li>
              <li>Slack</li>
              <li>Magnet</li>
              <li>Google Chrome</li>
            </ul>

            <Heading level={3} className="uses__categoryTitle">
              Office Setup
            </Heading>
            <ul>
              <li>
                MacBook Pro (15-inch, 2017), 2.9 GHz Quad-Core Intel Core i7, 16
                GB memory
              </li>
              <li>LG 27″ 4K UHD UltraGear (27GP950)</li>
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

            <Heading level={3} className="uses__categoryTitle">
              Miscellaneous
            </Heading>
            <ul>
              <li>iPhone 12 Pro</li>
              <li>The North Face Vault Backpack</li>
            </ul>
          </div>

          <div className="uses__imageContainer">
            <Image
              src="/images/office.jpg"
              alt="Office"
              layout="responsive"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Uses
