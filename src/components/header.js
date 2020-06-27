import { Link } from "gatsby"
import { Link as Links, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types"
import React from "react"

import facebook from "./../images/facebook.svg"
import instagram from "./../images/instagram.svg"

const Header = ({ siteTitle }) => (
  <header>    
    <div
      className="header container"
    >
      <h1 style={{ margin: 0 }}>
        <Links
          to="/"
          style={{
            color: `#2b2b2b`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Links>
      </h1>
      <nav>
      <Links className="navbar-item" 
        activeClass="active"
        to="kalkulator"
        spy={true}
        smooth={true}
        offset={70}
        duration={500}
      >
        Kalkulator
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to="kalkulator"
        spy={true}
        smooth={true}
        offset={70}
        duration={500}
      >
        Realizacje
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to="kalkulator"
        spy={true}
        smooth={true}
        offset={70}
        duration={500}
      >
        O nas
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to="kalkulator"
        spy={true}
        smooth={true}
        offset={70}
        duration={500}
      >
        Wiedza
      </Links>
      </nav>
      <div className="h_banner">
      <div className="contact">tel: 500 600 700</div>
      <div className="social">
        <Link to="/"><img src={facebook} width="24px" height="24px" /></Link>
        <Link to="/"><img src={instagram}  width="24px" height="24px"/></Link>
      </div>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
