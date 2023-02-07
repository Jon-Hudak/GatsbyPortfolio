import React, { useEffect, useState } from "react"
import heroPic from "../images/glitchLarge.webm"
import ContactSec from "./ContactSec"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useRef } from "react"

function Hero() {
  const h1Ref = useRef(null)
  const h1IsInView = useInView(h1Ref)
  const [contactOpen, setContactOpen] = useState(false)
  let isSmall = false
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    isSmall = window.innerWidth < 1024
  }

  const handleContact = () => {
    setContactOpen(!contactOpen)
  }
  const variants = {
    hidden: { opacity: 0, x: 50 },
    shown: i => ({
      opacity: 1,
      x: 0,
      y: 0,

      transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
    }),
    drag: { cursor: "grabbing", transition: { delay: 0 } },
    dragEnd: { cursor: "grab", opacity: 0.5, transition: { delay: 0 } },
  }

  const imgVariants = isSmall
    ? {
        hidden: { opacity: 0, x: 100, rotate: 45 },
        shown: i => ({
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,

          transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
        }),
        drag: { cursor: "grabbing", transition: { delay: 0 } },
        dragEnd: { cursor: "grab", opacity: 0.5, transition: { delay: 0 } },
      }
    : {
        hidden: { opacity: 0, x: 100, rotate: 0 },
        shown: i => ({
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,

          transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
        }),
        drag: { cursor: "grabbing", transition: { delay: 0 } },
        dragEnd: { cursor: "grab", opacity: 0.5, transition: { delay: 0 } },
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
      className="flex flex-col place-items-center w-auto mt-2 mx-1 md:mt-5 max-w-screen md:max-w-5xl overflow-hidden"
    >
      <div className="overflow-hidden border border-accent-blue rounded-lg">
        <div className="cont py-16 px-0 lg:relative lg:w-[1000px]">
          <div
            className={`flex flex-col-reverse  lg:flex-row w-full grow  px-2 sm:px-24 sm:mt-6 max-w-5xl justify-between content-center rounded-md items-center `}
          >
            <div className="px-10 max-w-lg">
              <h1
                className="mt-5 text-4xl sm:text-5xl h-36 pb-5 text-center lg:text-left select-none text-white font-title"
                ref={h1Ref}
              >
                <span className="text-white/0 absolute">
                  Freelance Web Developer
                </span>
                {h1IsInView && (
                  <TypeAnimation
                    aria-hidden={true}
                    aria-label="hi"
                    speed={30}
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
                    ]}
                    repeat={Infinity}
                  />
                )}
              </h1>
              <motion.p className="font-sans mt-5 text-xl sm:text-2xl text-center lg:text-left">
                Convert more customers with an expert focus on user experience
                and SEO!
              </motion.p>

              <motion.button
                onClick={handleContact}
                className={`relative py-6 px-6 mt-10 w-full button ${
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

            <motion.video
              className="imgShadow-sm lg:absolute lg:bottom-0 lg:-right-24 lg:w-[30rem] lg:rounded-none lg:border-none lg:shadow-none z-10 w-48 object-cover object-top rounded-full shrink-0 border-2 border-accent-blue shadow-xl pointer-none"
              autoPlay
              loop
              muted
              playsInline
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 1, bounceDamping: 3 }}
              variants={imgVariants}
              custom={4}
              initial={["hidden", { x: 100 }]}
              animate={"shown"}
              whileTap={"drag"}
              tapCancel={"dragEnd"}
            >
              <source src={heroPic} type="video/webm" />
            </motion.video>
          </div>

          <motion.div className=" bg-opacity-50 mx-5 my-5 place-self-center">
            <AnimatePresence>
              {contactOpen && (
                <motion.div
                  className="max-w-2xl overflow-hidden bg-black place-content-center flex-col rounded-lg origin-top border border-gray-600"
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
      </div>
    </section>
  )
}

export default Hero
