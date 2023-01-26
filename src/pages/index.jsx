import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import InfoSec from "../components/InfoSec/InfoSec"
import TestimonialSec from "../components/TestimonialSec"
import ProjectsSec from "../components/ProjectsSec"
import { graphql, useStaticQuery } from "gatsby"
import ContactSec from "../components/ContactSec"


export default function Home() {
  const [activeSection, setActiveSection]=useState(0);
  useEffect(() => {
  console.log(activeSection);
  }, [activeSection])

  
  
  return (
    <main className="text-white font-sans">
      
      <Layout className="flex place-content-center" activeSection={activeSection} background="bg-neutral-700">
        <div id="top" className=" flex flex-col place-items-center mx-5 max-w-7xl">
          
          <Hero />
          <InfoSec />
          <TestimonialSec activeSection={activeSection} setActiveSection={setActiveSection} />
          <ProjectsSec activeSection={activeSection} setActiveSection={setActiveSection} />
          <ContactSec />
          
        </div>
      </Layout>
    </main>
    
  )
}