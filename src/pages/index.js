import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Faq from "../components/Faq"
import Contact from "../components/contact"
import Contactform from "../components/contactform"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"
import sky_3 from "../images/sky_9.jpg"
import img_cover_1 from "../images/sky_9_1.png"
import img_cover_414 from "../images/sky_9_x414.png"
import img_cover_768 from "../images/sky_9_x768.png"
import img_cover_1280 from "../images/sky_9_x1280.png"
import img_cover_1440 from "../images/sky_9_x1440.png"
import greent from "../images/greent.svg"
import garden from "../images/garden.svg"
import money_save from "../images/money_save.svg"
import planet from "../images/planet.svg"
import steps from "../images/realizacja.png"
import img_faq_1 from "../images/faq_x1.png"
import img_faq_414 from "../images/faq_x414.png"
import img_faq_768 from "../images/faq_x768.png"
import img_faq_1280 from "../images/faq_x1280.png"
import img_faq_1440 from "../images/faq_x1440.png"

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
    <SEO title="Zielone Technologie" />
   <section className="has_img_bg" id="home">
    <div className="img_background">
      {/*<picture>
        <source media="(min-width: 1441px)" srcSet={img_cover_1}/>
        <source media="(min-width: 1281px) and (max-width: 1440px)" srcSet={img_cover_1440}/>
        <source media="(min-width: 769px) and (max-width: 1280px)" srcSet={img_cover_1280}/>
        <source media="(min-width: 415px) and (max-width: 768px)" srcSet={img_cover_768}/>
        <source media="(max-width: 414px)" srcSet={img_cover_414}/>
        <img src={img_cover_1} />
      </picture>*/}
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </div>
     <div className="container">
        <Welcome>Oblicz jak zmniejszyć rachunki za prąd do 0zł!</Welcome>
        <Fcalc />
     </div>
   </section>
  <section id="pros" className="green_gradient">
    <div className="container">
      <div className="section-title">
        <h2>Jakie są korzyści z Fotowoltaiki?</h2>
      </div>
    <div>
      <ul className="pros-container">
        <li>
          <div>
            <img src={garden} width="64" height="64" /> 
          </div>
            <div>
            Bądź niezależny energetycznie
              </div>
            </li>
        <li>
        <div>
            <img src={money_save} width="64" height="64" /> 
          </div>
            <div>Redukuj rachunki za prąd do 0zł</div></li>
        <li>
        <div>
            <img src={planet} width="64" height="64" /> 
          </div>
            <div>Dbaj o środowisko</div></li>
      </ul>
    </div>
    </div>
  </section>
  <section id="steps">
    <div className="container">
      <div className="section-title">
        <h2>Jak realizujemy projekt?</h2>
      </div>
    <div className="steps_content">
      
      <Realisation />
    </div>
    </div>
  </section>
  <section id="faq" className="has_img_bg">
    <div className="img_background">
      <Faqimg />
      {/*<picture>
        <source media="(min-width: 1441px)" srcSet={img_faq_1}/>
        <source media="(min-width: 1281px) and (max-width: 1440px)" srcSet={img_faq_1440}/>
        <source media="(min-width: 769px) and (max-width: 1280px)" srcSet={img_faq_1280}/>
        <source media="(min-width: 415px) and (max-width: 768px)" srcSet={img_faq_768}/>
        <source media="(max-width: 414px)" srcSet={img_faq_414}/>
        <img src={img_faq_1} />
      </picture>*/}
    </div>
    <div className="container">
      <div className="section-title">
        <h2>Pytania, które mogą Cię nurtować.</h2>
      </div>
      <div className="faq_content">
        <Faq />
      </div>
    </div>
  </section>
  <section id="contact">
  <div className="container">
      <div className="section-title">
        <h2>Napisz do nas</h2>
        <p>i dowiedz się co jeszcze możesz zyskać inwestując  w fotowoltaikę.</p> 
      </div>
    {/*<Contactform />*/}
    <Contact />
    </div>
  </section>
  </Layout>
)
    }
export default IndexPage

