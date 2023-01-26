import React from "react"
import InfoCard from "./InfoCard"
import lightbulbSVG from "../../images/lightbulb.svg"
import magnifySVG from "../../images/magnifyingGlass.svg"
import phoneSVG from "../../images/phone.svg"
import { motion } from "framer-motion"

function InfoSec() {
  const items = [
    {
      text: "59.6% of website traffic comes from mobile devices. 92.1% of people access the internet using a mobile phone. It's more important than ever to ensure that your website or app not only works on phones, but is made with a mobile-first approach.",
      icon: phoneSVG,
      typeCursor: false,
      title: " Mobile-Friendly",
    },
    {
      text: "If a product is confusing to use, then people don't want to use it, no matter how beautiful it is. This is where a focus on user-experience comes in to eliminate lost conversions due to people not knowing how to interact with your website or app.",
      icon: lightbulbSVG,
      typeCursor: false,
      title: " User Experience",
    },
    {
      text: "Get on Google's good side with a focus on the metrics that Google's  algorithms use to rank your site highly when your potential customers search for your product. People are looking for you, so let's make it easier for them to find you!",
      icon: magnifySVG,
      typeCursor: true,
      title: "SEO",
    },
  ]

  return (
    <section
      id="about"
      className="mt-5 grid grid-cols-1 max-w-6xl md:gap-0 md:grid-cols-3 lg:gap-10 xl:gap-15 "
    >
      {items.map((item, i) => (
        <InfoCard
          title={item.title}
          typeCursor={item.typeCursor}
          key={item.title}
          index={i}
          icon={item.icon}
        >
          {item.text}
        </InfoCard>
      ))}

      {/* <InfoCard title="Mobile-Friendly" typeCursor={false}>
        <img className="w-20 mx-auto shadow-lg" src={phoneSVG} alt=""/>
        59.6% of website traffic comes from mobile devices. 92.1% of people
        access the internet using a mobile phone. It's more important than ever
        to ensure that your website or app not only works on phones, but is made
        with a mobile-first approach.
      </InfoCard>
      <InfoCard title="User Experience" typeCursor={false}>
        <img className="w-20 mx-auto shadow-lg" src={lightbulbSVG} alt="" 
        
        /> 
        If a product is confusing to use, then people don't want to use it, no
        matter how beatiful it is. This is where a focus on user-experience
        comes in to eliminate lost conversions due to people not knowing how to
        interact with your website or app.
      </InfoCard>
      <InfoCard title="SEO" typeCursor={true}>
        <img className="w-20 mx-auto shadow-lg" src={magnifySVG} alt=""/>
        Get on Google's good side with a focus on the metrics that Google's
        algorithms use to rank your site highly when your potential customers
        search for your product. People are looking for you, so let's make it
        easier for them to find you!
      </InfoCard> */}
    </section>
  )
}

export default InfoSec
