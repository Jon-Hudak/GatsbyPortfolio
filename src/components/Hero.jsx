import React, { useState } from "react"
import heroPic from "../images/GlitchCB.gif"
import ContactSec from "./ContactSec"
import { motion } from "framer-motion"

function Hero() {
  const [contactOpen, setContactOpen] = useState(false)
  const handleContact = () => {
    setContactOpen(!contactOpen)
  }
  return (
    <section id="hero" className="flex flex-col place-items-center mt-5">
      <div className="border border-orange-400 rounded-lg shadow-xl bg-black bg-opacity-50 ">
        <div className={`flex flex-col-reverse lg:flex-row w-full grow  px-2 sm:px-24 sm:mt-6 max-w-5xl justify-between   content-center rounded-md items-center ${contactOpen?"pt-10 sm:pt-20":"py-10 sm:py-20"}`}>
          <div className="px-10 max-w-lg">
            <motion.h1 className="mt-5 text-5xl text-center lg:text-left  text-red-700 cursor-move"
             drag dragSnapToOrigin  dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
             >
              Freelance Web Developer
            </motion.h1>
            <motion.h2 className="mt-5 text-2xl text-center lg:text-left"
             drag dragSnapToOrigin  dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
             >
              Convert more customers with an expert focus on user experience and
              SEO!
            </motion.h2>

            <button
              onClick={handleContact}
              className={`relative py-6 px-6 mt-10 w-full font-black text-lg sm:text-xl rounded-full shadow-lg border border-gray-400  text-gray-900 transition duration-500 hover:bg-yellow-700 hover:text-gray-300 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-500 ${contactOpen?"bg-yellow-700":"bg-yellow-400"}`}
            >
              Get Your Free Consultation Now!
            </button>
          </div>

          <motion.img
            className="z-20 h-48 w-48 lg:h-64 lg:w-64 object-cover object-top rounded-full shrink-0 hover:grayscale border-2 border-orange-400 shadow-xl cursor-move"
            alt="Me with a glitch effect"
            src={heroPic}
            drag dragSnapToOrigin  dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
            
            
          />
        </div>
        <div className="bg-black bg-opacity-50 mx-5 my-5 place-self-center">
          <div
            className={`place-content-center flex-col animate-menuOpen rounded-lg origin-top ${
              contactOpen ? "border border-gray-600" : "hidden"
            }`}
          >
            <ContactSec popup={true}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
