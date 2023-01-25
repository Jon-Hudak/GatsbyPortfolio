import { motion, useInView } from "framer-motion"
import React from "react"
import { useRef } from "react"
import { ReactSVG } from "react-svg"
import { TypeAnimation } from "react-type-animation"

function InfoCard({ title, children, icon, typeCursor, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  
  return (
    <motion.section
      className="card mt-3 md:mt-5 py-3 cont flex flex-col"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin:"0px 0px -10% 0px" }}
      transition={{ duration: 1}}
    >
      <h2 ref={ref}>
      {isInView&& <TypeAnimation className="type card-title  h-10 font-bold text-center text-2xl " sequence={[" ",index*1000,title,1000 ]} cursor={typeCursor} />}
       </h2> 
       
       <ReactSVG src={icon} wrapper="div"  className="flex place-self-center h-24 w-24"/>
      {/* <img className="w-20 mx-auto stroke-green-500 fill-red-500" src={icon} alt=""/> */}
      <p className="card-info text-white/70 mt-2 text-lg flex flex-col shrink">
        {children}
      </p>
    </motion.section>
  )
}

export default InfoCard
