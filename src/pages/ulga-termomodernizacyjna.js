import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Rodzajepomp from "../components/Rodzajepomp"
import Contact from "../components/contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import resun from "../images/re-sun.svg"
import returnon from "../images/re-turnon.svg"
import rewater from "../images/re-water.svg"
import rewind from "../images/re-wind.svg"
import reenergy from "../images/re-energy.svg"

import "./../components/pompy-ciepla.css"

const IndexPage = () => { 
  
  return(
  <Layout>
    <SEO title="Zielone Technologie - Ulga termomodernizacyjna" />
    <section id="pompy-about">
      <div className="container">
        <div className="section-title">
          <h2>Ulga termomodernizacyjna</h2>
        </div>
       
      </div>
    </section>
    <section id="steps">
    <div className="container">
      <div className="section-title">
        <h2>Jak uzyskać dofinansowanie?</h2>
      </div>
    
    </div>
  </section>
    <section id="pompy-list" className="green_gradient">
      <div className="container">
        <div className="section-title">
          <h2>Rodzaje pomp ciepła</h2>
          <p>Pompy ciepła to inteligentne urządzenia, które dzięki odnawialnym źródłom energii i takim nowoczesnym rozwiązaniom jak m.in. solary umożliwiają montaż w nowych budynkach oraz obiektach poddawanych modernizacji.</p>
        </div>
        <Rodzajepomp />
      </div>
    </section>
  <section id="contact" >
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

