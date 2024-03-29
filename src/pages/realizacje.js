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
import ImageGallery from 'react-image-gallery';
import Gallery from "../components/gallery"


const IndexPage = () => { 
 
    const data = useStaticQuery( graphql `
    query Realizacje {
        case1 : allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "realizacje/re04"}}) {
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
        case2: 
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "realizacje/re01"}}) {
          edges {
            node {
              base
              childImageSharp {
                fixed {
                  src
                  srcSet
                  width
                  height
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
        case3: 
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "realizacje/re02"}}) {
          edges {
            node {
              base
              childImageSharp {
                fixed {
                  src
                  srcSet
                  width
                  height
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
        case4: 
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "realizacje/re03"}}) {
          edges {
            node {
              base
              childImageSharp {
                fixed {
                  src
                  srcSet
                  width
                  height
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
        thumb: 
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "realizacje/all"}}) {
          edges {
            node {
              base
              childImageSharp {
                fixed(height: 400, width: 400) {
                  src
                  srcSet
                  width
                  height
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
        full: 
        allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "realizacje/full"}}) {
          edges {
            node {
              childImageSharp {
                fixed(quality: 100, width: 900) {
                  src
                }
              }
            }
          }
        }
      }
      `)

      var newGalery = data.full.edges.slice(0).reverse().map((item)=>{
        return(
        {original: item.node.childImageSharp.fixed.src,}
      )})
  return(
  <Layout>
    <SEO title="Realizacje - Panele fotowoltaiczne Zielona Góra lubuskie"
    description="Zielone Technologie - Rachunki za prąd za 0zł z panelami słonecznymi. Sprawdź nasze realizacje. Zapraszamy do kontaktu pod nr 694 163 440 oraz 609 594 480" />
    <section id="realizacje">
      <div className="container">
        <div className="section-title">
          <h2>Realaizacje</h2>
        </div>
        <Gallery thumb={data.thumb.edges} items={newGalery}/>
        {/*<div className="re_content">
            <div className="re_item">
                {data.case1.edges.map(({node})=>(
                    node.base === 'realize_1.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o łącznej mocy 39,6 kWp na dachu budynku OZEnergia w miejscowości Kiełpin koło Zielonej Góry</h4>
                </div>
            </div>
            
             
            <div className="re_item">
                {data.case1.edges.map(({node})=>(
                    node.base === 'realize_2.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż dwóch generatorów PV: Letnica 1 o mocy 39,875 i Letnica 2 o mocy 39,95</h4>
                </div>
            </div>
            <div className="re_item">
                {data.case1.edges.map(({node})=>(
                    node.base === 'realize_3.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o mocy 39,48 kWp na dachu budynku Schenker w Zielonej Górze przy ul. Dworcowej 14</h4>
                </div>
            </div>
            <div className="re_item">
                {data.case1.edges.map(({node})=>(
                    node.base === 'realize_4.jpg' ? <Img fluid={node.childImageSharp.fluid} />  :""
                ))}
                <div className="re_description">
                    <h4>Montaż generatora PV o mocy 14,1 kWp na dachu budynku OBR Nemo w Zielonej Górze przy ul. Dworcowej 6</h4>
                </div>
            </div>
        </div>
        
                */}
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
