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
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="nav__menuButton"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          {isMenuOpen && (
            <>
              <span className="sr-only">Close main menu</span>
              <svg
                className="nav__menuButton-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          )}
          {!isMenuOpen && (
            <>
              <span className="sr-only">Open main menu</span>
              <svg
                className="nav__menuButton-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </>
          )}
        </button>

        <div className="nav__container">
          <Link href="/">
            <a className="logo">Aaron Dunphy</a>
          </Link>
          <div
            className={`nav__links-container ${
              isMenuOpen ? "nav__links-container--open" : ""
            }`}
          >
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
            <Link href="/about">
              <a className="nav__link">About</a>
            </Link>
            <Link href="/blog">
              <a className="nav__link">Blog</a>
            </Link>
            <Link href="/uses">
              <a className="nav__link">Uses</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
