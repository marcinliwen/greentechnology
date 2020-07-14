import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Faqimg = () => { 
    const data = useStaticQuery( graphql`
    query {
      file(relativePath: {eq: "faq_x1.png"}) {
        childImageSharp {
          fluid (fit: COVER){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(<Img 
    fluid={data.file.childImageSharp.fluid}
    alt="A corgi smiling happily"
    />
        )
}

export default Faqimg;