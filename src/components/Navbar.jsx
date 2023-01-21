import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { motion } from "framer-motion"

function Navbar( { navbarChange }) {
  const logo = "../images/logo-no-background.svg"
  //const smallLogo = "../images/logo-only.png"
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  
  
    
  

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  const handleKeyDown = e => {
    if (e.key == "escape") {
      handleHamburger()
    }
  }

  return (
    <header className="fixed w-full top-0 z-50" onKeyDown={handleKeyDown}>
      <motion.nav
        className="px-5 py-3 sm:h-3r2 bg-black text-white flex justify-between items-center "
        animate={{height: navbarChange?50:100, backgroundColor: navbarChange?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 1)"}}
        transition={{duration:0.5}}
      >
        
        <Link to="/">
          <motion.div
        initial={{width:50}}
        animate={{width:navbarChange?90:200}}
        transition={{duration:0.5}}
        >
          <StaticImage
            imgClassName=""
            className="h-full w-full transition duration-100 hover:grayscale hover:contrast-0 "
            layout="constrained"
            src={logo}
            alt="Site Logo"
          />
          {/* <StaticImage
        className="w-16 sm:hidden transition duration-100 hover:grayscale hover:contrast-0"
        src={smallLogo}
        alt="Small Site Logo"
      /> */}
        </motion.div>
        </Link>
        
        {/* <h1 className="text-4xl font-semibold"></h1> */}

        <div className="hidden sm:flex sm:w-72 sm:justify-between sm:text-xl">
          <AnchorLink
            className="transition duration-200 hover:text-yellow-600"
            to="/#about"
          >
            About
          </AnchorLink>
          <AnchorLink
            className="transition duration-200 hover:text-yellow-600"
            to="/#projects"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            className="transition duration-200 hover:text-yellow-600"
            to="/#contactSection"
          >
            Contact
          </AnchorLink>
        </div>
        <button
          className={
            hamburgerOpen ? "menu opened relative sm:hidden" : "menu sm:hidden"
          }
          onClick={handleHamburger}
          onKeyDown={handleHamburger}
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
      </motion.nav>
      {
        <div
          onClick={() => {
            setHamburgerOpen(false)
          }}
          className={`sm:hidden  w-screen h-screen divide-y divide-gray-700 flex-col absolute right-0 text-right text-5xl bg-black bg-opacity-90 border border-gray-700 ${
            hamburgerOpen
              ? "flex origin-top animate-menuOpen"
              : "hidden origin-top animate-menuClose"
          }`}
        >
          <Link
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/"
          >
            Home
          </Link>
          <AnchorLink
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/#about"
          >
            About
          </AnchorLink>
          <AnchorLink
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/#projects"
          >
            Projects
          </AnchorLink>
        </div>
      }
    </header>
  )
}

export default Navbar
