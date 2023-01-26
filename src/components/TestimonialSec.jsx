import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function TestimonialSec({ activeSection, setActiveSection }) {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    margin: "0px 0px -80% 0px",
    amount: "some",
  })

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionRef.current.id)
      console.log()
    }
  }, [isInView, activeSection])

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonials/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              company
              link
              title
              date
              imageAlt
              image1 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 400
                    transformOptions: { cropFocus: CENTER, fit: FILL }
                  )
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.edges
  return (
    <motion.section
      ref={sectionRef}
      id="testimonials"
      className="mt-5 w-auto px-5 py-3 max-w-5xl cont "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      <h2 className="h2 type">
        Some Nice Words
      </h2>

      {nodes.map(({ node }) => (
        <div
          className="flex m-5 flex-col lg:flex-row place-items-center my-5 py-5 lg:px-5 border border-gray-700 rounded-md"
          key={node.id}
        >
          <div className="flex flex-col place-items-center">
            <GatsbyImage
              className="w-32 h-32 rounded-full transition duration-200 hover:grayscale border-2 border-accent-blue shadow-xl shrink-0"
              image={getImage(node.frontmatter.image1)}
              alt={node.frontmatter.imageAlt}
            />
            <div className="mt-4 text-center ">
              <h3 className="text-2xl text-accent-blue font-bold">
                {node.frontmatter.name}
              </h3>
              <h4 className="text-gray-500">{node.frontmatter.title}<a className="hover:text-white/70" href={node.frontmatter.link}> <br/>{node.frontmatter.company}</a></h4>
            </div>
          </div>

          <p className="px-10 lg:pr-0 mt-5 text-lg " dangerouslySetInnerHTML={{__html: node.html}} />
        </div>
      ))}
    </motion.section>
  )
}
