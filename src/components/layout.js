/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Container from "./styles/container"
import "./layout.css"

const Layout = ({ children }) => (
    <>
        <Container>
            <main style={{padding: `20px 0px`}}>{children}</main>
        </Container>
        <Footer />
    </>
)

export default Layout