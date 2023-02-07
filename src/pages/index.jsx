import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import InfoSec from "../components/InfoSec/InfoSec"
import TestimonialSec from "../components/TestimonialSec"
import ProjectsSec from "../components/ProjectsSec"
import ContactSec from "../components/ContactSec"
import Testimodal from "../components/Testimodal"
import { AnimatePresence } from "framer-motion"
import ogImg from "../images/ogPhoto.webp"


export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [testimodal, setTestimodal] = useState({
    open: false,
    node: "",
  })
  console.log(testimodal.open)

  useEffect(() => {
    console.log(activeSection)
  }, [activeSection])

  return (
    <main className={"text-white font-sans"}>
      <Layout
        className="flex place-content-center"
        activeSection={activeSection}
        background="bg-neutral-700"
      >
        <div
          id="top"
          className=" flex flex-col place-items-center mx-5 max-w-7xl "
        >
          <Hero />
          <InfoSec />
          <TestimonialSec
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            testimodal={testimodal}
            setTestimodal={setTestimodal}
          />
          <ProjectsSec
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <ContactSec />
          <AnimatePresence>
            {testimodal.open && (
              <Testimodal
                testimodal={testimodal}
                setTestimodal={setTestimodal}
              />
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </main>
  )
}
export function Head() {
  return (
    <>
      <title>Jon Hudak Web Development</title>
      <meta
        name="description"
        content="Attract more customers with a custom-made website!"
      />
      <meta
        name="keywords"
        content="Website, Custom, Portfolio, Site, Build, Create, React, Gatsby, Wordpress, Wix, HTML, CSS, JavaScript, Coding, Webapps, Apps, Programmer, Web Developer, Development"
      />
      <meta name="author" content="Jon Hudak" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Jon Hudak Web Development" />
      <meta property="og:image" content={`https://jonhudak.dev${ogImg}`} />
      <meta property="og:title" content="Jon Hudak Web Development" />
      <meta property="og:url" content="https://jonhudak.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Attract more customers with a custom-made website!" />


    </>
  )
}
