import React from "react"
import Footer from "./footer"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className="py-6">{children}</main>
    <Footer />
  </>
)

export default Layout
