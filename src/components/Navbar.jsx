import { Link } from "gatsby"
import React, { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  const logo = "../images/logo-no-background.png"
  const smallLogo = "../images/logo-only.png"
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
    console.log("yes")
  }

  return (
    <nav className="px-3 sm:px-10 py-3 sm:h-32 bg-black text-white flex justify-between items-center sticky top-0 w-screen">
      <Link to="/"><StaticImage
        className="w-56 hidden sm:inline-block"
        src={logo}
        alt="Site Logo"
      />
      <StaticImage
        className="w-16 sm:hidden"
        src={smallLogo}
        alt="Small Site Logo"
      />
      </Link>
      {/* <h1 className="text-4xl font-semibold"></h1> */}

      <div className="hidden sm:flex sm:w-1/3 sm:justify-between sm:text-xl">
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <button
        className={hamburgerOpen ? "menu opened relative sm:hidden" : "menu sm:hidden"}
        onClick={handleHamburger}
        aria-label="Main Menu"
      >
        <svg width="64" height="64" viewBox="0 0 100 100">
          <path
            className="line line1 stroke-white"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2 stroke-white" d="M 20,50 H 80" />
          <path
            className="line line3 stroke-white"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
