import React from 'react'



export default function Display({display, answer}) {
  return (
    <>
     <div id="display" className="text-4xl text-yellow-500 py-0 my-0">{display}</div>
     <div id="answer" className="text-3xl text-gray-300 py-0 my-0">{answer} </div>
    </>
  )
}
