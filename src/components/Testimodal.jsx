import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useLockBodyScroll } from "../useLockBodyScroll"
import {  motion } from "framer-motion"
import { useEffect } from "react"

function Testimodal({ testimodal, setTestimodal }) {
  const node = testimodal.node
  const html = node.html

  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        closeModal();
      }
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });
  const closeModal=()=>{
    setTestimodal({ ...testimodal, open: false, node: "" });
  }
  const handleClick = e => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  useLockBodyScroll()
  return (
    <motion.div
      className="flex fixed h-screen  bg-black/70 backdrop-blur-md top-0 bottom-0 left-0 right-0 z-50  p-5"
      onClick={handleClick}
      initial={{ opacity: 0, overflow: "auto" }}
      animate={{ opacity: 1, overflow: "auto" }}
      exit={{ opacity: 0, overflow: "auto" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-3xl my-auto"
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-dark-gray px-5 py-10 gap-3 flex flex-col md:flex-row place-items-center  border  rounded-md relative border-accent-blue">
          <div className="py-3 px-3 rounded-md flex flex-row md:flex-col gap-10 md:gap-5 place-items-center">
            <GatsbyImage
              className="md:w-48 md:h-48 w-32 h-32 z-0 rounded-full transition duration-200 hover:grayscale border-2 border-accent-blue shadow-xl shrink-0"
              image={getImage(node.frontmatter.image1)}
              alt={node.frontmatter.imageAlt}
            />
            <div className=" text-center">
              <h3 className="text-2xl text-accent-blue font-bold">
                {node.frontmatter.name}
              </h3>
              <h4 className="text-gray-500">
                {node.frontmatter.title}
                <a className="hover:text-white/70" href={node.frontmatter.link}>
                  <br />
                  {node.frontmatter.company}
                </a>
              </h4>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div
                className="quotebox first:m-5 text-xl"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            
            
          </div>
        </div>
        
        <button
          className="menu opened absolute top-2 left-2"
          onClick={handleClick}
          
          aria-label="Main Menu"
        >
          <svg
            className="stroke-white/60 pointer-events-none"
            width="56"
            height="56"
            viewBox="0 0 100 100"
          >
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
      </motion.div>
    </motion.div>
  )
}

export default Testimodal
