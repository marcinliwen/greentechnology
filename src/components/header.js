import { Link } from "gatsby"
import { Link as Links} from "react-scroll";
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import Contact from "../components/contact"

import facebook from "./../images/facebook.svg"
import instagram from "./../images/instagram.svg"
import menu_btn from "./../images/menu.svg"
import menu_close from "./../images/cancel.svg"
import f_white from "./../images/facebook_white.svg"
import inst_white from "./../images/instagram_white.svg"
import logo from "./../images/logo.svg"




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
      <img src={menu_close} width="24px" height="24px" alt="menu"/>:
      <img src={menu_btn} width="24px" height="24px" alt="menu"/>
      
      }
    </div>
         
    <div className="header">
      <div className="container">
        <div className="logo-container">
        <Links
            to="/"
          >
            <div className="logo">
            <span className="text-green">Zielone</span> <img src={logo} width="32px" alt="logo"/><span className="text-gray">Technologie</span>
            </div>
          
          </Links>
        </div>
          

        <nav 
          className={menu?"-open":""}
          //onKeyDown={toggleHamburger}
          //onClick={toggleHamburger}
        >
      
        <Links className="navbar-item" 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-65}
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
          offset={-65}
          duration={800}
          onClick={toggleHamburger}
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
          onClick={toggleHamburger}
        >
          Wiedza
        </Links>
        <Links className="navbar-item" 
          activeClass="active"
          //to="contact"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          //onClick={toggleHamburger}
        >
          <Contact />
        </Links>
        <div className="contact mobile"><div>tel: 694 163 440</div><div>609 594 480</div></div>
        <div className="social mobile">
          <Link to="/"><img src={f_white} width="24px" height="24px"  alt="facebook"/></Link>
          <Link to="/"><img src={inst_white}  width="24px" height="24px" alt="instagram"/></Link>
        </div>
        </nav>
        <div className="nav_back"></div>
        <div className="h_banner">
        <div className="contact">tel: 694 163 440 | 609 594 480</div>
        <div className="social">
          <Link to="/"><img src={facebook} width="24px" height="24px" alt="facebook"/></Link>
          <Link to="/"><img src={instagram}  width="24px" height="24px" alt="instagram"/></Link>
        </div>
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
