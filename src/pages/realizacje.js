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
import "./../components/realizacje.css"

const IndexPage = () => { 
 
    const data = useStaticQuery( graphql `
    query Realizacje {
        allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "realizacje"}}) {
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
    <SEO title="Zielone Technologie - realizacje" />
    <section id="realizacje">
      <div className="container">
        <div className="section-title">
          <h2>Realaizacje</h2>
        </div>
        <div className="re_content">
            <div className="re_item">
                {data.allFile.edges.map(({node})=>(
                    node.base === 'realize_1.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o łącznej mocy 39,6 kWp na dachu budynku OZEnergia w miejscowości Kiełpin koło Zielonej Góry</h4>
                </div>
            </div>
            <div className="re_item">
                {data.allFile.edges.map(({node})=>(
                    node.base === 'realize_2.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż dwóch generatorów PV: Letnica 1 o mocy 39,875 i Letnica 2 o mocy 39,95</h4>
                </div>
            </div>
            <div className="re_item">
                {data.allFile.edges.map(({node})=>(
                    node.base === 'realize_3.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o mocy 39,48 kWp na dachu budynku Schenker w Zielonej Górze przy ul. Dworcowej 14</h4>
                </div>
            </div>
            <div className="re_item">
                {data.allFile.edges.map(({node})=>(
                    node.base === 'realize_4.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o mocy 14,1 kWp na dachu budynku OBR Nemo w Zielonej Górze przy ul. Dworcowej 6</h4>
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

