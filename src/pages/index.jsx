import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className="bg-gray-800 text-white font-mono">
      <Layout className="h-screen">
        <div>
          
          <Hero/>
          {/* <h3>Develop & Deploy</h3>
          <p>UX designer & web devloper based in Pittsburgh</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            officiis id! Tempore impedit, fugit repellat, blanditiis quidem,
            quis quae fuga porro in tenetur molestias a explicabo veritatis
            dignissimos quisquam facere consequatur. Voluptates fuga deleniti
            necessitatibus cumque magnam. Perspiciatis eos quis modi delectus
            ducimus itaque tempora quisquam, animi sunt ipsa nemo quaerat
            officiis odio ut, eaque illum harum dolorem distinctio deleniti
            aperiam dolore maxime. Similique labore blanditiis ducimus repellat
            incidunt voluptas? Voluptate aliquam repellendus sequi esse
            repudiandae? Modi temporibus cumque sit dolore, labore nobis
            assumenda enim quam voluptates ipsam, tempora illo pariatur quas
            dignissimos fuga natus dicta dolor ut qui quia. Minus quas fuga
            veniam libero earum facilis, voluptatibus recusandae aspernatur nisi
            cumque cupiditate! Eveniet eius quod consectetur vero quae. Incidunt
            voluptate error minima sit rerum mollitia eaque similique provident
            praesentium iste atque, accusantium laudantium obcaecati unde hic
            nesciunt ut, minus suscipit. Beatae non quae distinctio doloremque,
            repellat a dolor, modi debitis sint consectetur in doloribus ipsum
            atque consequuntur, aperiam quam impedit optio nesciunt. Quas non
            animi alias sint neque architecto eum ullam{" "}
          </p> */}
        </div>
      </Layout>
    </div>
  )
}
