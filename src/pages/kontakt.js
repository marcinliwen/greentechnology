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
      </section>
    
    </Layout>
  )
      }
  export default IndexPage