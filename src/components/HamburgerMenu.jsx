import { motion, spring } from "framer-motion"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { useEffect } from "react"
import { useLockBodyScroll } from "../useLockBodyScroll"

function HamburgerMenu({ hamburgerOpen, setHamburgerOpen }) {
  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener("keydown", keyListener)

    return () => document.removeEventListener("keydown", keyListener)
  })
  const closeModal = () => {
    setHamburgerOpen(false)
  }
  const handleClick = e => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useLockBodyScroll()

  const listVariants = {
    hidden: {
      y: "-100vh",
    },
    shown: {
      y: 0,
      transition: { type: spring, duration: 0.5,  delayChildren: 1, staggerChildren:1 },
    },
  }
  const itemVariants= {
    hidden:{ x:"100%", opacity:0},
    shown:{ x:0, opacity:1, transition:{type: spring, duration:0.5}}

  }

  return (
    <motion.nav
      onClick={() => {
        setHamburgerOpen(false)
      }}
      className={`flex flex-col absolute w-screen h-screen bg-black/70   z-40 backdrop-blur-md`}
      variants={listVariants}
      initial={"hidden"}
      animate={"shown"}
      exit={"hidden"}
      
    >
      <motion.ul>
        <motion.li>
          <Link
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/"
          >
            Home
          </Link>
        </motion.li>
        <motion.li>
          <AnchorLink
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/#about"
          >
            About
          </AnchorLink>
        </motion.li>
        <motion.li>
          <AnchorLink
            className="py-3 px-5 transition duration-100 hover:bg-gray-800"
            to="/#projects"
          >
            Projects
          </AnchorLink>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default HamburgerMenu
