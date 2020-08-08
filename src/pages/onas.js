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
import blob from "../images/blob.svg"
//import solar_panel from "../images/solar-panel.svg"
import "./../components/onas.css"

const IndexPage = () => { 
  const data = useStaticQuery( graphql`
  query imageQuery {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "onas"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
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
        <div className="onas_content_article">
          {data.allFile.edges.map(({node})=>(
           node.base === 'onas_family.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
          ))}
          <div className="onas_content_text">
            <div className="blob-bg"><img src={blob} alt="blob" /></div>
            <p >Firma Zielone Technlogie powstała aby energia pozyskiwana ze słońca była dostępna w każdym domu.</p>
          </div>
        </div>
        <div className="onas_content_article">
        {data.allFile.edges.map(({node})=>(
           node.base === 'onas_project.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
          ))}   
          <div className="onas_content_text">
          <div className="blob-bg"><img src={blob} alt="blob" /></div>
  
          <p>O Fotowoltaice wiemy wszystko, nasi pracownicy to specjalici dbający o każdy detal.</p>
          </div>
        </div>
        <div className="onas_content_article">
        {data.allFile.edges.map(({node})=>(
           node.base === 'onas_spec.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
          ))}
                    <div className="onas_content_text">

                    <div className="blob-bg"><img src={blob} alt="blob" /></div>

          <p >Wspieramy naszych klientów, na kadym etapie inwestycji. Po prostu lubimy, gdy wszystko działa tak jak należy.</p>   
        </div>
        </div>
        
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

