import React from "react"
import { Link } from "gatsby"
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
import jaktodziala_img from "../images/jaktodziala.jpg"
import "../components/jtd.css"
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
      <div class="section_content jtd_content">
        <div className="jtd_img">
          <img src={jaktodziala_img} alt="jak działa fotowoltaika"/>
        </div>
        <div className="jdt_mapping_container">
          <div className="jtd_mapping">
            <div className="jtd_mapping_item">1</div>
            <div className="jtd_mapping_item">2</div>
            <div className="jtd_mapping_item">3</div>
            <div className="jtd_mapping_item">4</div>
            <div className="jtd_mapping_item">5</div>
            <div className="jtd_mapping_item">6</div>
          </div>
          <div className="jtd_mapping_description">
            <div className="jtd_mapping_desc_item">1. panele fotowoltaiczne</div>
            <div className="jtd_mapping_desc_item">2. inverter (falownik)</div>
            <div className="jtd_mapping_desc_item">3. dwukierunkowy licznik energii elektrycznej</div>
            <div className="jtd_mapping_desc_item">4. bilansowanie energii z siecią</div>
            <div className="jtd_mapping_desc_item">5. linia zakładu energetycznego</div>
            <div className="jtd_mapping_desc_item">6. odbiornik</div>
            <div className="jdt_mapping_link">
            <Button variant="outlined" className={classes.root, classes.outlined}>
            <Link className="navbar-item" 
              to="wiedza" 
            >
              Dowiedz się więcej
            </Link>
            </Button>
            </div>
          </div>  
        </div> 
      </div>
    </div>
  </section>
  <section id="contact">
  <div className="container">
      <div className="section-title">
        <h2>Napisz do nas</h2>
        <p>i dowiedz się co jeszcze możesz zyskać inwestując  w fotowoltaikę.</p> 
      </div>
    <Contact />
   {/* <div className="contact_icon"><img src={solar_panel} width="64px" alt="solar panel"/></div>*/}
  </div>
    </section>
  </Layout>
)
    }
export default IndexPage

