import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Faq from "../components/Faq"
import Contact from "../components/contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import garden from "../images/garden.svg"
import money_save from "../images/money_save.svg"
import planet from "../images/planet.svg"
//import solar_panel from "../images/solar-panel.svg"
import "./../components/onas.css"

const IndexPage = () => { 
  const data = useStaticQuery( graphql`
  query {
    file(relativePath: {eq: "sky_9_1.png"}) {
      childImageSharp {
        fluid (fit: COVER){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return(
  <Layout>
    <SEO title="Zielone Technologie - o nas" />
    <section id="onas">
      <div className="container">
        <div className="section-title">
          <h2>O nas</h2>
        </div>
        <div className="onas_content">
          <p>Firma Zielone Technlogie powstała aby energia pozyskiwana ze słońca była dostępna w każdym domu.</p>
          <p>O Fotowoltaice wiemy wszystko, nasi pracownicy to specjalici dbający o każdy detal. Wspieramy naszych klientów, na kadym etapie inwestycji. Po prostu lubimy, gdy wszystko działa tak jak należy.</p>
        </div>
      </div>
    </section>
  <section id="contact">
  <div className="container">
      <div className="section-title">
        <h2>Skontaktujemy się z Tobą</h2>
        <p>Zostaw nam swój numer, oddzwonimy!</p> 
      </div>
    <Contact />
   {/* <div className="contact_icon"><img src={solar_panel} width="64px" alt="solar panel"/></div>*/}
  </div>
    </section>
  </Layout>
)
    }
export default IndexPage

