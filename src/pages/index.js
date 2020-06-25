import React from "react"
import { Link } from "gatsby"
import Fcalc from "../components/fcalc"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import greent from "../images/greent.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Zielone Technologie" />
   <section>
    
     <div className="c_white header_title"><h2>Oblicz jak zmniejszyć rachunki za prąd do 0zł!</h2></div>
     {/*<div className="img_icon"><img src={greent} width="64px" height="64px"/></div>*/}
     <Fcalc />
   </section>
  </Layout>
)

export default IndexPage
