import React, { useEffect, useState } from "react"
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width > 700) {
        setIsMenuOpen(false)
      }
    })
  }, [])

  useEffect(() => {
    document.body.style.position = isMenuOpen ? "fixed" : "relative"
  }, [isMenuOpen])

  return (
    <header className="header">
      <nav className="container nav">
        <div className="nav__container">
          <Link href="/" className="logo">
            Aaron Dunphy
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
