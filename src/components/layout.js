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
import { Link } from "gatsby"

import Header from "./header"

import "./layout.css"
import logo from "./../images/logo.svg"


const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
//console.log(props.location)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}  location={props.location}/>
     
        <main>{props.children}</main>
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
                <Link className="navbar-item" 
                  activeClass="active"
                  to="/"
                >
                  Kalkulator
                </Link>
                <Link className="navbar-item" 
                  activeClass="active"
                  to="/realizacje"
                >
                  Realizacje
                </Link>
                <Link className="navbar-item" 
                  activeClass="active"
                  to="/wiedza"
                >
                  Wiedza
                </Link>
                <Link className="navbar-item" 
                  activeClass="active"
                  to="/onas"
                >
                  O nas
                </Link>
                <Link className="navbar-item" 
                  activeClass="active"
                  to="/kontakt"
                >
                  Kontakt
                </Link>
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
              <span className="company">
              © {new Date().getFullYear()} -  
              {` `}
              Zielone Technologie
              </span>
              <span className="realisation">Realizacja: <a href="https://marcinliwen.netlify.app" style={{color:'inherit'}}>MarcinL.</a></span>
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
