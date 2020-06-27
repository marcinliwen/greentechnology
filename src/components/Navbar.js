import React from 'react'
//import { Link } from 'gatsby'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      isVisible: false,
      fromTop: 0,
      windowHeight: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    
    const scrolled = window.pageYOffset;
    console.log(window.pageYOffset);
    this.setState({
      fromTop: scrolled,
      windowHeight: window.innerHeight,
    })
  };
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={"navbar is-fixed-top is-transparent" + (this.state.fromTop > this.state.windowHeight ? ' visible':'')}
        role="navigation"
        aria-label="main-navigation"
        style={{background: '#fff', boxShadow: '0 3px 6px rgba(0,0,0,.19)'}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
                Zielone Technologie
            </Link>
            {/* Hamburger menu */}
            <div
              role = "button"
              tabIndex={0}
              onKeyDown={() => this.toggleHamburger()}
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                O nas
              </Link>
              <Link className="navbar-item" to="/#kalkulator"
                activeClass="active"
                to="kalkulator"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                Kalkulator
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <span
                className="navbar-item"
              >
                tel: +48 500 600 700
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
