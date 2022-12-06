import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

function Projects() {
  return (
    <Layout>
      <h1 className='text-5xl my-5 mb-10'>Projects I've worked on</h1>
      
      <Link className='text-xl px-10 py-5 my-10 bg-gray-800 text-white' to="/projects/calculator">Calculator</Link>
    </Layout>
  )
}

export default Projects