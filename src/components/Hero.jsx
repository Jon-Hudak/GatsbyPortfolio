import React from "react"
import heroPic from "../images/GlitchCB.gif"

function Hero() {
  return (
    
      <div className="flex  justify-center">
        <div className="flex flex-col-reverse grow lg:flex-row mx-5 py-10 sm:py-20 px-2 sm:px-24 sm:mt-6 max-w-5xl justify-between align-center bg-black bg-opacity-40 content-center rounded-md items-center border border-orange-400 shadow-xl">
          <div className="px-10 max-w-lg place-content-center	">
            <h1 className="mt-5 text-5xl text-center lg:text-left  text-red-700" >Freelance Web Developer</h1>
            <h2 className="mt-5 text-2xl text-center lg:text-left ">
              Convert more customers with an expert focus on user experience and SEO!
            </h2>

            <button className="py-6 px-6 mt-10 w-full font-black text-lg sm:text-xl rounded-full shadow-lg border-white bg-yellow-400 text-gray-900 transition duration-500 hover:bg-yellow-700 hover:text-gray-300 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-500">Get Your Free Consultation Now!</button>
          </div>
        
          <img
            className="h-48 w-48 object-cover object-top rounded-full shrink-0 transition duration-200 hover:grayscale border-2 border-orange-400 shadow-xl"
            alt="Animated picture of me with a glitch effect"
            src={heroPic}
          />
        </div>
        
      </div>
  )
}

export default Hero
