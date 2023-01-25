import React, { useState } from "react"
import heroPic from "../images/GlitchCB.gif"
import ContactSec from "./ContactSec"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import autoprefixer from "autoprefixer"
import { useRef } from "react"

function Hero() {
  const h1Ref=useRef(null);
  const h1IsInView=useInView(h1Ref);
  const [contactOpen, setContactOpen] = useState(false)
  const handleContact = () => {
    setContactOpen(!contactOpen)
  }

  const variants = {
    hidden: { opacity: 0, x: 50, cursor: "grab" },
    shown: i => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
    }),
    drag: { cursor: "grabbing", transition: { delay: 0 } },
  }
  const contactVariant = {
    hidden: { opacity: 1, height: 0, transition: { duration: 1.5 } },
    shown: i => ({
      opacity: 1,
      height: "auto",
      //scaleY: 1,
      transition: { delay: i * 0.5, duration: 1.5, ease: "easeOut" },
    }),
  }

  return (
    <section
      id="hero"
      className="flex flex-col place-items-center mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="cont py-16 px-0  ">
        <div
          className={`flex flex-col-reverse lg:flex-row w-full grow  px-2 sm:px-24 sm:mt-6 max-w-5xl justify-between content-center rounded-md items-center `}
        >
          <div className="px-10 max-w-lg">
            <h1
              className="mt-5 text-4xl sm:text-5xl h-36 pb-5 text-center lg:text-left select-none text-white font-title "
              ref={h1Ref}
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
              initial={"hidden"}
              whileInView={"shown"}
              viewport={{ once: true }}
              whileTap={"drag"}
            >
              {h1IsInView && <TypeAnimation
              className="type after:absolute after:w-0 "
                sequence={[
                  "Freelance Web Developer",
                  1000,
                  "Freelance Pittsburgher",
                  1000,
                  "Freelance Karaoke Enthusiast",
                  1000,
                  "Freelance Coffee Drinker",
                  1000,
                  "Freelance Weeb",
                  5,
                ]}
                repeat={Infinity}
              />}
            </h1>
            <motion.p
              className="text-white/60 font-sans mt-5 text-xl sm:text-2xl text-center lg:text-left "
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
              variants={variants}
              custom={1}
              initial={"hidden"}
              animate={"shown"}
              whileTap={"drag"}
            >
              Convert more customers with an expert focus on user experience and
              SEO!
            </motion.p>

            <motion.button
              onClick={handleContact}
              className={`relative py-6 px-6 mt-10 w-full font-black font-mono text-lg sm:text-2xl rounded-full shadow-lg border border-neutral-400 text-gray-900 hover:bg-sky-700 hover:text-gray-300 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-sky-500 ${
                contactOpen ? "bg-sky-600" : "bg-accent-blue"
              }`}
              variants={variants}
              custom={2}
              initial={"hidden"}
              whileInView={"shown"}
              viewport={{ once: true }}
            >
              Get Your Free Consultation
            </motion.button>
          </div>

          <motion.img
            className="z-20 h-48 w-48 lg:h-64 lg:w-64 object-cover object-top rounded-full shrink-0 hover:grayscale border-2 border-accent-blue shadow-xl cursor-move"
            alt="Me with a glitch effect"
            src={heroPic}
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
            variants={variants}
            custom={4}
            initial={["hidden", { x: 100, rotate: 45 }]}
            whileInView={"shown"}
            viewport={{ once: true }}
          />
        </div>

        <motion.div className=" bg-opacity-50 mx-5 my-5 place-self-center">
          <AnimatePresence>
            {contactOpen && (
              <motion.div
                className="overflow-hidden bg-black place-content-center flex-col rounded-lg origin-top border border-gray-600"
                variants={contactVariant}
                custom={0}
                initial={"hidden"}
                animate={"shown"}
                exit={"hidden"}
              >
                <ContactSec popup={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
