import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import InfoSec from "../components/InfoSec/InfoSec"
import TestimonialSec from "../components/TestimonialSec"
import ProjectsSec from "../components/ProjectsSec"
import { graphql, useStaticQuery } from "gatsby"
import ContactSec from "../components/ContactSec"


export default function Home() {
  return (
    <div className="bg-gray-800  text-white font-mono">
      <Layout className="flex place-content-center">
        <div className=" flex flex-col mx-5 max-w-7xl">
          
          <Hero />
          <InfoSec />
          <TestimonialSec />
          <ProjectsSec />
          <ContactSec />
          
        </div>
      </Layout>
    </div>
    
  )
}