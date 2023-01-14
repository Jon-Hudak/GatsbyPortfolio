import React from "react"
import NumPad from "../../components/calculator/NumPad.jsx"
import Display from "../../components/calculator/Display.jsx"
import Layout from "../../components/Layout.jsx"
import { useState } from "react"
import { motion } from "framer-motion"
function Calculator() {
  const [display, setDisplay] = useState("0")
  const [answer, setAnswer] = useState("0")

  return (
    <Layout background="bg-gradient-to-r from-gray-800 to-green-300 min-h-screen">
      <motion.div className="mt-5 flex place-content-center sm:mt-20"
      initial={{scale:0.5, opacity: 0, y: 50 }}
      animate={{scale:1, opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      >
        <div
          id="calculatorApp"
          className="w-80 border-2 border-gray-500 "
        >
          <div className="w-full font-mono bg-black py-4 text-right">
            <Display display={display} answer={answer} />
          </div>
          <div
            id="btnCont"
            className="h-96 grid grid-cols-4 auto-rows-auto gap-0"
          >
            <NumPad
              display={display}
              answer={answer}
              setDisplay={setDisplay}
              setAnswer={setAnswer}
            />
          </div>
        </div>
      </motion.div>

    </Layout>
  )
}

export default Calculator
