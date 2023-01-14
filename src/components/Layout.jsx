import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Layout({ children, background, className }) {
  const [navbarChange, setNavbarChange] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setNavbarChange(true)
    } else {
      setNavbarChange(false)
    }
  }

  useEffect(() => {
    window.removeEventListener("scroll", changeColor)
    window.addEventListener("scroll", changeColor)
  }, [])

  console.log(navbarChange, window.scrollY)

  return (
    <div className={`flex flex-col layout ${background}`}>
      <Navbar navbarChange={navbarChange} />
      <div className="flex-1 grow mt-24">
        <div className={className}>{children}</div>
      </div>
      <AnchorLink
        to="/#hero"
        className=" flex text-center p-autoo bg-blue-500 h-16 w-16 fixed bottom-5 right-5 rounded-full cursor-pointer"
      >
        <span className="m-auto text-4xl font-bold font-sans">^</span>
      </AnchorLink>

      <footer className="h-20 flex flex-col border-t-2 border-gray-600 bg-black mt-3">
        <p className="text-right mt-auto px-3 py-3 text-white">
          Copyright 2022 Jon Hudak Development
        </p>
      </footer>
    </div>
  )
}

export default Layout
