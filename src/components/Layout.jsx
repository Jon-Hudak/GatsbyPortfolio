import React, { useState } from "react"
import Navbar from "./Navbar"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

function Layout({ children, background, className, footerClass }) {
  const [navbarChange, setNavbarChange] = useState(false)
  const [showToTop, setShowToTop] = useState(false)
  const [lastYPos, setLastYPos] = useState()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", yPos => {
    setLastYPos(yPos)
    setShowToTop(yPos < lastYPos)
    handleNav(yPos)
  })

  function handleNav(yPos) {
    if (yPos < 10 || showToTop === true) {
      setNavbarChange(false)
    } else {
      setNavbarChange(true)
    }
  }

  return (
    <div
      className={`overflow-hidden flex min-h-screen flex-col layout ${background}`}
    >
      <Navbar navbarChange={navbarChange} />
      <div className="flex-1 grow mt-24 ">
        <div className={`${className} `}>{children}</div>
      </div>
      <AnimatePresence>
        <motion.div
          className="bg-blue-500 h-16 w-16 fixed bottom-16 right-16 rounded-full cursor-pointer shadow-2xl z-50"
          initial={{ y: "15rem" }}
          animate={{ y: showToTop ? "0" : "15rem" }}
        >
          <AnchorLink title="Top of Page" to="#top" className=" flex text-center p-auto">
            <div className="m-auto p-4 w-full text-4xl font-bold font-sans -rotate-90">
              <svg
                className="svg-shadow"
                fill="#FFFFFF"
                height="100%"
                width="100%"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_27_"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
            </div>
          </AnchorLink>
        </motion.div>
      </AnimatePresence>

      <footer
        className={`min-h-20 flex flex-col border-t-2 border-gray-600 bg-black mt-3 z-40 ${footerClass}`}
      >
        
        <p className="text-right mt-auto px-3 py-3 text-white">
          Copyright 2023 Jon Hudak Development
        </p>
      </footer>
    </div>
  )
}

export default Layout
