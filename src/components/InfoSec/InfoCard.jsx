import { motion } from "framer-motion"
import React from "react"
import { useRef } from "react"
import { ReactSVG } from "react-svg"


function InfoCard({ title, children, icon}) {
  const ref = useRef(null)


  return (
    <motion.div
      className="card mt-3 mx-auto md:mt-5 py-3 cont flex flex-col max-w-sm lg:max-w-xs"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      <h2
        ref={ref}
        className="notype card-title h-10 font-bold text-center text-2xl"
      >
        {title}
      </h2>

      <ReactSVG
        src={icon}
        wrapper="div"
        className="flex place-self-center h-24 w-24"
      />
      <p className="card-info  mx-auto text-white/70 mt-2 text-lg flex flex-col shrink">
        {children}
      </p>
    </motion.div>
  )
}

export default InfoCard
