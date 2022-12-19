import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function ProjectsCard({ node, key}) {
  return (
    <div className="my-5 py-5 md:px-5  w-auto mx-auto" key={node.childMdx.id}>
          <a className="p-5 hover:bg-black flex h-full flex-col rounded-md place-items-center w-72 transition duration-200 hover:bg-opacity-30 group border border-gray-700" href={node.childMdx.frontmatter.link}>
            <GatsbyImage
              className="w-64 h-72 rounded-sm shadow-lg transition duration-200 group-hover:grayscale group-hover:contrast-100"
              image={getImage(node.childMdx.frontmatter.image1)}
              alt={node.childMdx.frontmatter.imageAlt}
            />
            <div className="mt-4 text-center ">
              <h3 className="text-2xl text-red-600 font-bold">
                {node.childMdx.frontmatter.title}
              </h3>{" "}
              <h4 className="text-gray-500">
                {node.childMdx.frontmatter.type}
              </h4>
            </div>
          

          <p className="mt-5 text-lg">{node.childMdx.body}</p>
          </a>
        </div>
      )}
      
  


