import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import facebook from "./../images/facebook.svg"
import instagram from "./../images/instagram.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
      
    <div
      className="header container"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#2b2b2b`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
