import React from "react"
import Link from "next/link"

const Header = () => {
  let isMenuOpen = false

  const handleMobileMenuClick = () => {
    isMenuOpen = !isMenuOpen
    const mobileMenu = document.querySelector("#mobile-menu")
    const menuOpen = document.querySelector("#menu-open")
    const menuClosed = document.querySelector("#menu-closed")

    mobileMenu?.classList.toggle("block")
    mobileMenu?.classList.toggle("hidden")

    menuOpen?.classList.toggle("block")
    menuOpen?.classList.toggle("hidden")

    menuClosed?.classList.toggle("block")
    menuClosed?.classList.toggle("hidden")
  }

  return (
    <header className="py-4">
      <nav>
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={handleMobileMenuClick}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  id="menu-closed"
                  className="block h-8 w-8"
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
                <svg
                  id="menu-open"
                  className="hidden h-8 w-8"
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
              </button>
            </div>

            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a className="text-2xl font-bold italic hover:text-gray-700">
                    Aaron Dunphy
                  </a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex gap-2">
                  <Link href="/">
                    <a className="px-3 py-2 rounded-md font-medium">Home</a>
                  </Link>
                  <Link href="/about">
                    <a className="px-3 py-2 rounded-md font-medium">About</a>
                  </Link>
                  <Link href="/projects">
                    <a className="px-3 py-2 rounded-md font-medium">Projects</a>
                  </Link>
                  <Link href="/blog">
                    <a className="px-3 py-2 rounded-md font-medium">Blog</a>
                  </Link>
                  <Link href="/uses">
                    <a className="px-3 py-2 rounded-md font-medium">Uses</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden" id="mobile-menu">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a className="block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
            </Link>
            <Link href="/projects">
              <a className="block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </a>
            </Link>
            <Link href="/uses">
              <a className="block px-3 py-2 rounded-md text-base font-medium">
                Uses
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
