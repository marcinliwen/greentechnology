import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Faq from "../components/Faq"
import Contact from "../components/contact"
import Jaktodziala from "../components/Jaktodziala"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import garden from "../images/garden.svg"
import money_save from "../images/money_save.svg"
import planet from "../images/planet.svg"
//import solar_panel from "../images/solar-panel.svg"


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
`);

const useStyles = makeStyles((theme) => ({
  root: {
      '& .MuiInput-underline:after': {
          borderBottomColor: '#11B91B',
          },
      '& label.Mui-focused': {
          color: '#11B91B',
          },
  },
  outlined:{
      borderColor: 'rgba(17, 185, 27, 0.5)',
      color: '#11B91B',
  },
  textPrimary:{
      color: '#11B91B'
  },
 
  
}));
const classes = useStyles();
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
            <img src={garden} width="64" height="64" alt="garden"/> 
          </div>
            <div>
            Bądź niezależny energetycznie
              </div>
            </li>
        <li>
        <div>
            <img src={money_save} width="64" height="64" alt="money"/> 
          </div>
            <div>Redukuj rachunki za prąd do 0zł</div></li>
        <li>
        <div>
            <img src={planet} width="64" height="64"  alt="planet"/> 
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
  <section id="jaktodziala">
    <div className="container">
      <div className="section-title">
        <h2>Jak działa fotowoltaika?</h2>
      </div>
      <Jaktodziala />
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

