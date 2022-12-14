import React from 'react'

function InfoCard({title, children}) {
  return (
    <section id="card" className='mt-3 md:mt-5 py-3 px-5 text-white bg-black bg-opacity-40 rounded-lg border border-orange-400 shadow-xl'>
        <div id="title" className='font-bold text-center text-3xl text-red-600'>{title}</div>
        <div id="info" className='mt-2 text-lg flex flex-col shrink'>{children}</div>
        </section>
  )
}

export default InfoCard