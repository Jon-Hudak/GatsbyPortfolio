import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import InfoSec from "../components/InfoSec/InfoSec"
import TestimonialSec from "../components/TestimonialSec"
import ProjectsSec from "../components/ProjectsSec"
import ContactSec from "../components/ContactSec"
import Testimodal from "../components/Testimodal"
import { AnimatePresence } from "framer-motion"

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
        content="Get peace of mind with a site made the right way, with a focus on user experience, accessibility, and SEO."
      />
      <meta
        name="keywords"
        content="Website, Custom, Portfolio, Site, Build, Create, React, Gatsby,Wordpress, Wix, HTML, CSS, JavaScript "
      />
      <meta name="author" content="Jon Hudak" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Get more customers with a custom-made website!" />
      <meta property="og:image" content="https://jonhudak.dev/img/ogmeta" />
    </>
  )
}
