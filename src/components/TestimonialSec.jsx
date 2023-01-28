import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion, useInView } from "framer-motion"
import TestimonialCard from "./TestimonialCard"


export default function TestimonialSec({
  activeSection,
  setActiveSection,
  testimodal,
  setTestimodal,
}) {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    margin: "0px 0px -80% 0px",
    amount: "some",
  })

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionRef.current.id)
    }
  }, [isInView, activeSection, setActiveSection])

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
              excerpt
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
  
  console.log(nodes)
  return (
    <motion.section
      ref={sectionRef}
      id="testimonials"
      className="mt-5 w-auto px-5 py-3 max-w-5xl cont"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      <h2 className="h2 type">Some Nice Words</h2>

      {nodes.map(({ node },index) => (
        <TestimonialCard
          node={node}
          key={node.id}
          index={index}
          testimodal={testimodal}
          setTestimodal={setTestimodal}
        />
      ))}
    </motion.section>
  )
}
