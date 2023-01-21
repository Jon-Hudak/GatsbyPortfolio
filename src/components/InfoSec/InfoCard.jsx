import { motion, useInView } from "framer-motion"
import React from "react"
import { useRef } from "react"
import { TypeAnimation } from "react-type-animation"

function InfoCard({ title, children, icon, typeCursor, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  return (
    <motion.section
      className="card mt-3 md:mt-5 py-3 px-5 text-white bg-black bg-opacity-40 rounded-lg border border-orange-400 shadow-xl"
      initial={{ opacity: 0, x: 50, display:"none" }}
      animate={{ opacity: 1, x: 0, display:"block" }}
      viewport={{ once: true, margin:"0px 0px -10% 0px" }}
      transition={{ duration: 1}}
    >
      <h2 ref={ref}>
      {isInView&& <TypeAnimation className="card-title type h-10 font-bold text-center text-3xl text-red-600 after:absolute" sequence={[" ",index*1000,title,1000 ]} cursor={typeCursor} />}
       </h2> 
      <img className="w-20 mx-auto shadow-lg" src={icon} alt=""/>
      <div className="card-info mt-2 text-lg flex flex-col shrink">
        {children}
      </div>
    </motion.section>
  )
}

export default InfoCard
