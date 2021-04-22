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
    <SEO title="Zielone Technologie - pompy ciepła" />
    <section id="pompy-about">
      <div className="container">
        <div className="section-title">
          <h2>Pompy ciepła</h2>
        </div>
        <div className="pompy__about">
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={returnon} />
            </div>
            <div className="pompy__about-text">          
              <p>Pompy ciepła to ekologiczny i oszczędny sposób ogrzewania Twojegodomu. Wykorzystują one energię ziemi, słońca, wody a także powietrza i pozwalają bezpiecznie wykorzystywać odnawialne źródła energii bez generowania jakichkolwiek zanieczyszczeń. Pompy ciepła są ponadto urządzeniami wyjątkowo trwałymi i niezawodnymi.</p>
            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={resun} />
            </div>
            <div className="pompy__about-text">          
              <p>Minimalne wykorzystywanie energii elektrycznej do eksploatacji pompciepła stanowi o ich bezkonkurencyjności w porównaniu z innymisystemami grzewczymi, które wykorzystują tradycyjne, wciąż drożejąceźródła energii.</p>
            </div>
            
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={reenergy} />
            </div>
            <div className="pompy__about-text">          
              <p>Co więcej, pompa ciepła nie wymaga wykonywania drogich przyłączygazowych czy komina. Nie istnieje również konieczność przechowywaniapaliwa, co pozwala na lepsze wykorzystanie dostępnej przestrzeni, atakże zwiększa walory estetyczne domu i podnosi bezpieczeństwo jegoużytkowania.</p>
            </div>
            
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={rewind} />
            </div>
            <div className="pompy__about-text">          
              <p>Urządzenia te są bezawaryjne i praktycznie bezobsługowe aich sprawność nie maleje wraz z upływem lat. Sprawia to, iż pompaciepła gwarantuje oszczędności oraz komfort użytkowanianieporównywalny z innymi systemami grzewczymi.</p>
            </div>
            
          </div>
          
        </div>
        
      
      </div>
    </section>
    <section id="pompy-list" className="green_gradient">
      <div className="container">
        <div className="section-title">
          <h2>Rodzaje pomp ciepła</h2>
          <p>Pompy ciepła to inteligentne urządzenia, które dzięki odnawialnymźródłom energii i takim nowoczesnym rozwiązaniom jak m.in. solaryumożliwiają montaż w nowych budynkach oraz obiektach poddawanychmodernizacji.</p>
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

