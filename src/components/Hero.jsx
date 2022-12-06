import React from "react"
import heroPic from "../images/GlitchCB.gif"

function Hero() {
  return (
    
      <div className="flex  sm:flex-row  justify-center">
        <div className="flex flex-col-reverse sm:flex-row py-5 sm:py-20 px-2 sm:px-24 sm:mt-6 md:w-10/12  align-center bg-black bg-opacity-40 content-center rounded-md items-center">
          <div className="sm:pr-24 place-content-center	">
            <h1 className="mt-5 text-5xl text-center sm:text-left  text-red-700" >Freelance Web Developer</h1>
            <h2 className="mt-5 text-2xl text-center sm:text-left ">
              Convert more customers with an expert focus on user experience and SEO!
            </h2>

            <button className="py-6 px-6 mt-10 w-full font-black text-lg sm:text-xl rounded-full shadow-lg border-white bg-yellow-500 text-gray-900 hover:bg-yellow-700 hover:text-gray-300 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-500">Get Your Free Consultation Now!</button>
          </div>
        
          <img
            className="h-48 w-48 object-cover object-top rounded-full shrink-0 shadow-md"
            alt="Animated picture of me with a glitch effect"
            src={heroPic}
          />
        </div>
        
      </div>
  )
}

export default Hero
