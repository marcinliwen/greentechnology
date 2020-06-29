import { Link } from "gatsby"
import { Link as Links, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

import facebook from "./../images/facebook.svg"
import instagram from "./../images/instagram.svg"
import menu_btn from "./../images/menu.svg"
import menu_close from "./../images/cancel.svg"




const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false);
  const toggleHamburger =()=>{setMenu(!menu)}

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    if(menu){document.body.classList.add('menu-open')}
    else{document.body.classList.remove('menu-open')}
  });
  return(
  <header>    
     <div
      role = "button"
      tabIndex={0}
      onKeyDown={toggleHamburger}
      className={`navbar-burger burger`}
      data-target="navMenu"
      onClick={toggleHamburger}
    >
      {menu?
      <img src={menu_close} width="24px" height="24px"/>:
      <img src={menu_btn} width="24px" height="24px"/>
      
      }
    </div>
         
    <div
      className="header container"
    >
      <h1 style={{ margin: 0 }}>
        <Links
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Links>
      </h1>
      <nav 
        className={menu?"-open":""}
        onKeyDown={toggleHamburger}
        onClick={toggleHamburger}
      >
      <Links className="navbar-item" 
        activeClass="active"
        to="kalkulator"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={toggleHamburger}
      >
        Kalkulator
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to="steps"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        onClick={toggleHamburger}
      >
        Realizacje
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        onClick={toggleHamburger}
      >
        O nas
      </Links>
      <Links className="navbar-item" 
        activeClass="active"
        to="faq"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        onClick={toggleHamburger}
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
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
