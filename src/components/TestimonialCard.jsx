import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Testimodal from "./Testimodal"
import quotationSVG from "../images/quotationSVG.svg"

function TestimonialCard({ node, testimodal, setTestimodal, index }) {

    const reverse=index%2===0?"":"md:first:order-last"
   
   


  return (
    <div
      className="bg-dark-gray px-5 py-10 gap-3 flex flex-col md:flex-row place-items-center border rounded-md relative border-gray-700 my-5 m-5 "
    >
      <div className={`py-3 px-3 rounded-md flex flex-row md:flex-col gap-5 place-items-center ${reverse}`}>
        <GatsbyImage
          className="w-32 h-32 z-0 rounded-full transition duration-200 hover:grayscale border-2 border-accent-blue shadow-xl shrink-0" 
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
          <img alt="" className="inline h-10 md:h-24 w-10 md:w-24 rotate-180" src={quotationSVG}></img>
          <div
            className="quotebox first:m-5 inline text-2xl md:text-3xl px-3 md:px-5"
            dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }}
          />
          <img alt="" className="inline h-10 md:h-24 w-10 md:w-24 place-self-end" src={quotationSVG}></img>
        </div>
        
          <button
            className="underline text-neutral-300 hover:text-white place-self-end absolute bottom-4 right-4"
            onClick={() => {
              setTestimodal({ ...testimodal, open: true, node: node })
            }}
          >
            Read the Full Review
          </button>
        
      </div>
    </div>
  )
}

export default TestimonialCard
