import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="py-6">{children}</main>
        <Footer />
    </>
)

export default Layout