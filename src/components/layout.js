/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link as Links} from "react-scroll";

import Header from "./header"

import "./layout.css"
import logo from "./../images/logo.svg"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
     
        <main>{children}</main>
        <footer
          style={{textAlign: `center`}}
        > 
          <div className="container">
            <div className="footer_content">
            <div className="logo">
              <span className="text-green">Zielone</span> <img src={logo} width="32px" alt="logo"/><span className="text-gray">Technologie</span>
            </div>
            <div className="footer_nav">
              <div>
                <Links className="navbar-item" 
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  
                >
                  Kalkulator
                </Links>
                <Links className="navbar-item" 
                  activeClass="active"
                  to="steps"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={800}
                  
                >
                  Realizacje
                </Links>
                <Links className="navbar-item" 
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                  
                >
                  Wiedza
                </Links>
                <Links className="navbar-item" 
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={1000}
                >
                  Zapytaj o ofertę
                </Links>
              </div>
            </div>
            <div className="footer_company">
              <p>Zielone Technologie</p>
              <p>ul. Dworcowa 6</p>
              <p>65-019 Zielona Góra</p>
              <p>NIP: 9731051910</p>
              <p>REGON: 369511714</p>
            </div>
            </div>
            <div className="bottom_bar">
            © {new Date().getFullYear()}, 
          {` `}
          Zielone Technologie
            </div>
         
          </div>
        </footer>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
