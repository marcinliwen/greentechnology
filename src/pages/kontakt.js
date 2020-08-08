import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Faq from "../components/Faq"
import Contact from "../components/contact"
import Contactform from "../components/contactform"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import "../components/contactform.css"


const IndexPage = () => {   
    return(
    <Layout location="kontakt">
      <SEO title="Zielone Technologie - kontakt" />
      <section id="kontakt">
        <div className="container">
          <div className="section-title">
            <h2>Kontakt</h2>
          </div>
        </div>
        <Contactform title="Napisz do nas"/>
        <div className="container contakt-address">
            <div className="contakt-title">
                <h3>Znajdź nas</h3>
            </div>
            <div className="contakt-map"></div>
            <div className="contakt-company">
              <p>Zielone Technologie</p>
              <p>ul. Dworcowa 6</p>
              <p>65-019 Zielona Góra</p>
              <p>NIP: 9731051910</p>
              <p>REGON: 369511714</p>
            </div>
        </div>
      </section>
    
    </Layout>
  )
      }
  export default IndexPage