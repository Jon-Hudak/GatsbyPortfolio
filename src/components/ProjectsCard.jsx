import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { motion } from "framer-motion"

export default function ProjectsCard({ node }) {
  return (
    <motion.div
      className="my-5 md:px-5  w-auto mx-auto"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <a
        className="p-5 hover:bg-black flex h-full flex-col rounded-md place-items-center w-72 transition duration-200 hover:bg-opacity-30 group border border-gray-700"
        href={node.frontmatter.link}
      >
        <GatsbyImage
          className="w-64 h-72 rounded-sm shadow-lg transition duration-200 group-hover:grayscale group-hover:contrast-100"
          image={getImage(node.frontmatter.image1)}
          alt={node.frontmatter.imageAlt}
        />
        <div className="mt-4 text-center ">
          <h3 className="text-2xl text-accent-blue font-bold duration-200 group-hover:text-white">
            {node.frontmatter.title}
          </h3>
          <h4 className="text-gray-500">{node.frontmatter.type}</h4>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: node.html }}
          className="mt-5 text-lg"
        />
      </a>
    </motion.div>
  )
}
