import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectsCard from "./ProjectsCard"
import { motion, useInView } from "framer-motion"
export default function ProjectsSec({ activeSection, setActiveSection }) {
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
    query  {
      allMarkdownRemark(
        filter: { parent: {}, fileAbsolutePath: { regex: "/projects/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              name
              title
              imageAlt
              date
              link
              type
              image1 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    width: 400
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
const nodes=data.allMarkdownRemark.edges
  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="mt-5 max-w-5xl px-5 py-3 cont"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      <h2 className="h2 type mt-3 ">
        Things I've Worked On
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
        {nodes.map(({ node }) => (
          <ProjectsCard node={node} key={node.id} />
        ))}
      </div>
    </motion.section>
  )
}
