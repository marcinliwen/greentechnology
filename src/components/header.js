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




const Header = (props) => {
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
        <Link
            to="/"
          >
            <div className="logo">
            <span className="text-green">Zielone</span> <img src={logo} width="32px" height="32px" alt="logo"/><span className="text-gray">Technologie</span>
            </div>
          
          </Link>
        </div>
          

        <nav 
          className={menu?"-open":""}
          //onKeyDown={toggleHamburger}
          //onClick={toggleHamburger}
        >
          <div className="nav-wrapper">
           <Link
            to="/"
            className="logo-in-menu"
          >
            <div className="logo">
            <span className="text-green">Zielone</span> <img src={logo} width="32px" height="32px" alt="logo"/><span className="text-gray">Technologie</span>
            </div>
          
          </Link>
      
        <Link className="navbar-item" 
          activeClass="active"
          to="/"
          onClick={toggleHamburger}
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
          to="/pompy-ciepla"
        >
          Pompy ciepła
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/moj-prad-3.0"
        >
          Mój prąd 3.0
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/ulga-termomodernizacyjna"
        >
          Ulga termomodernizacyjna
        </Link>
        <Link className="navbar-item" 
          style={{width: '100%',
            maxWidth: '100%'}}
          activeClass="active"
          to="/montaz-paneli-fotowoltaicznych"
        >
          Montaż paneli fotowoltaicznych
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/wiedza"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          Wiedza
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/onas"
          //spy={true}
          //smooth={true}
          //offset={-65}
          //duration={1000}
          onClick={toggleHamburger}
        >
          O nas
        </Link>
        <Link className="navbar-item" 
          activeClass="active"
          to="/kontakt"
          onClick={toggleHamburger}
        >
          Kontakt
        </Link>
        {props.location != 'kontakt' ? 
        <Links className="navbar-item text-green" 
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-65}
          duration={1000}
          onClick={toggleHamburger}
          
        >
          Zapytaj o ofertę
        </Links>

        : ""}
        <div className="contact">tel: <a href="tel:+48694163440">694 163 440</a> | <a href="tel:+48609594480">609 594 480</a></div>
        <div className="social">
          <Link to="/"><img src={f_white} width="24px" height="24px"  alt="facebook"/></Link>
          <Link to="/"><img src={inst_white}  width="24px" height="24px" alt="instagram"/></Link>
        </div>
        </div>
        </nav>
        <div className="nav_back"></div>
        {/*
        <div className="h_banner">
        <div className="contact">tel: <a href="tel:+48694163440">694 163 440</a> | <a href="tel:+48609594480">609 594 480</a></div>
        <div className="social">
          <Link to="/"><img src={facebook} width="24px" height="24px" alt="facebook"/></Link>
          <Link to="/"><img src={instagram}  width="24px" height="24px" alt="instagram"/></Link>
        </div>
        
        </div>*/}
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
