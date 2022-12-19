import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectsCard from "./ProjectsCard";



export default function ProjectsSec({  }) {
  const data = useStaticQuery(graphql`
  query Projects {
  allFile(
    filter: {absolutePath: {regex: "/content/projects/"}, extension: {eq: "mdx"}}
    sort: {childrenMdx: {frontmatter: {date: DESC}}}
  ) {
      edges {
        node {
          childMdx {
            body
            id
            frontmatter {
              date
              image1 {
                childImageSharp {
                  gatsbyImageData( placeholder: BLURRED, width: 300)
                }
              }
              imageAlt
              title
              type
              link
            }
          }
        }
      }
    }
  }
  `)

  
console.log(data);
  return (
    <section id="projects" className="mt-5 w-7xl px-5 py-3 bg-black bg-opacity-40 max-w-5xl rounded-lg place-self-center border border-orange-400 shadow-xl">
      
      <h2 className="text-3xl mt-3 text-red-600 font-bold text-center md:text-4xl md:text-left">
        Here's some things I've worked on
      </h2>
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
        {data.allFile.edges.map(({ node }) => 
        <ProjectsCard node={node}/>)}
      </div> 
    </section>
  )
}
