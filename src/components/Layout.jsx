import React from "react"
import Navbar from "./Navbar"

function Layout({ children, background, className }) {
  return (
    <div className={`flex flex-col layout ${background}`}>
      <Navbar /><div className="flex-1 grow">
        
        <div className={className}>{children}</div>
      </div>

      <footer className="h-20 flex flex-col border-t-2 border-gray-600 bg-black mt-3">
        <p className="text-right mt-auto px-3 py-3 text-white">Copyright 2022 Jon Hudak Development</p>
      </footer>
    </div>
  )
}

export default Layout
