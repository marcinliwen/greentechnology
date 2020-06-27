import React from "react"
import { Link } from "gatsby"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import sky_3 from "../images/sky_9.jpg"
import greent from "../images/greent.svg"
import garden from "../images/garden.svg"
import money_save from "../images/money_save.svg"
import planet from "../images/planet.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Zielone Technologie" />
   <section 
   className="img_position"
   style={{
    backgroundImage: `url(${
      sky_3 
    })`,
    backgroundAttachment: `fixed`
   }}
   
   >
     <div className="container">
        <Welcome>Oblicz jak zmniejszyć rachunki za prąd do 0zł!</Welcome>
        <Fcalc />
     </div>
   </section>
   <section id="pros">
     <div className="container">
       <div className="section-title">
        <h2>Korzyści z Fotowoltaiki</h2>
       </div>
     <div>
       <ul className="pros-container">
         <li>
           <div>
            <img src={garden} width="64" height="64" /> 
           </div>
            <div>
            Niezalezność energetyczna na lata
              </div>
            </li>
         <li>
         <div>
            <img src={money_save} width="64" height="64" /> 
           </div>
            <div>Redukcja rachunków za prąd do 0zł</div></li>
         <li>
         <div>
            <img src={planet} width="64" height="64" /> 
           </div>
            <div>Dbaj o środowisko</div></li>
       </ul>
     </div>
     </div>
     
   </section>
  </Layout>
)

export default IndexPage
