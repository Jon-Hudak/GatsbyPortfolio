import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function TestimonialSec({  }) {
  const data = useStaticQuery(graphql`
  query Testimonials {
    allFile(filter: {absolutePath: {regex: "/content/testimonials/"}, extension: {eq: "mdx"}}) {
      edges {
        node {
          childMdx {
            body
            id
            frontmatter {
              date
              image1 {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1, placeholder: BLURRED, width: 100)
                }
              }
              imageAlt
              name
              title
            }
          }
        }
      }
    },
  }
  `)

  console.log(data)

  return (
    
    <section className="mt-5  w-auto px-5 py-3 bg-black bg-opacity-40 max-w-5xl rounded-lg place-self-center border border-orange-400 shadow-xl">
      
      <h2 className="text-3xl mt-3 text-red-600 font-bold text-center lg:text-4xl lg:text-left">Here's what others said!</h2>

      {data.allFile.edges.map(({ node }) => (
        <div
          className="flex flex-col lg:flex-row place-items-center my-5 py-5 lg:px-5 border border-gray-700 rounded-md"
          key={node.childMdx.id}
        >
          <div className="flex flex-col place-items-center">
            <GatsbyImage
              className="w-32 h-32 rounded-full transition duration-200 hover:grayscale border-2 border-orange-400 shadow-xl shrink-0"
              image={getImage(node.childMdx.frontmatter.image1)}
              alt={node.childMdx.frontmatter.imageAlt}
            />
            <div className="mt-4 text-center "><h3 className="text-2xl text-red-600 font-bold">{node.childMdx.frontmatter.title}</h3> <h4 className='text-gray-500'>{node.childMdx.frontmatter.name}</h4></div>
          </div>

          <p className="px-10 lg:pr-0 mt-5 text-lg">{node.childMdx.body}</p>
        </div>
      ))} 
    </section>
  )
}
