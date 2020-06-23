import React from "react"
import { Link } from "gatsby"
import Fcalc from "../components/fcalc"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <section>
     <Fcalc />
   </section>
  </Layout>
)

export default IndexPage
