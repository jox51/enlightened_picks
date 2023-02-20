import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import CTA from "../components/CTA"
import Proofs from "../components/Proofs"
import AccordionTwo from "../components/AccordionTwo"
import SubscriberCall from "../components/SubscriberCall"
import FooterThree from "../components/FooterThree"

const LandingThree = () => {
  return (
    <section className="mx-8">
      <Hero />
      <Cards />
      <Proofs />
      <CTA />
      <AccordionTwo />
      <SubscriberCall />
      <FooterThree />
    </section>
  )
}

export default LandingThree
