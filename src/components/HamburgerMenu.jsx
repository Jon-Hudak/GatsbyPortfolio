import { motion} from "framer-motion"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { useEffect } from "react"
import { useLockBodyScroll } from "../useLockBodyScroll"

function HamburgerMenu({ setHamburgerOpen }) {
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
  

  useLockBodyScroll()

  const listVariants = {
    hidden: {
      y: "-100vh",
      opacity: 1,
    },
    shown: {
      y: 0,
      opacity: 1,
      transition: {
        
        duration: 0.5,
        when: "beforeChildren",
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },exit: {y:"-100%", transition:{ease:"easeIn",type:"linear"}}
  }
  const itemVariants = {
    hidden: { x: "-100%", opacity: 1 },
    shown: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.25,
        duration: 1,
        ease: "easeOut",
      },
    },
    
  }

  return (
    <motion.nav
      onClick={() => {
        setHamburgerOpen(false)
      }}
      className={`absolute w-screen h-screen bg-black/70 z-40 backdrop-blur-md`}
      variants={listVariants}
      initial={"hidden"}
      animate={"shown"}
      exit={"exit"}
    >
      <motion.ul
        id="hamburgerLinks"
        className="flex flex-col h-full divide-y divide-accent-blue/20 divide-w-24"
        variants={listVariants}
        initial={"hidden"}
        animate={"shown"}
        exit={"exit"}
      >
        <motion.li variants={itemVariants}>
          <Link className="" to="/">
            Home
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <AnchorLink className="" to="/#about">
            About
          </AnchorLink>
        </motion.li>
        <motion.li variants={itemVariants}>
          <AnchorLink className="" to="/#projects">
            Projects
          </AnchorLink>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default HamburgerMenu
