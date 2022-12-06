import React from "react"
import Navbar from "./Navbar"

function Layout({ children, background }) {
  return (
    <div className={`flex flex-col h-screen layout ${background}`}>
      <div className="flex-1 grow">
        <Navbar />
        <div className="content">{children}</div>
      </div>

      <footer className="">
        <p className="text-right px-4">Copyright 2022 Jon Hudak Development</p>
      </footer>
    </div>
  )
}

export default Layout
