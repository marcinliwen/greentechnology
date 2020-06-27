import React from 'react'
import { Link as Links, animateScroll as scroll } from "react-scroll";
import down_arrow from './../images/down-arrow.gif'

import './Welcome.css'

const Welcome = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        active: false,
        navBarActiveClass: '',
        isVisible: false,
        fromTop: 0,
        windowHeight: 0,
        windowWidth: 0
      }
    }
 
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
      this.setState({ windowWidth: window.innerWidth });
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
      const scrolled = window.pageYOffset;
      this.setState({
        fromTop: scrolled,
        windowHeight: window.innerHeight,
      })
    };
    render() {
        
        if(this.state.windowWidth > 760){
            var scale= 1-(this.state.fromTop/500);
        }else{
            var scale = 1;
        }
        
        return (
            <div className="c_white header_title">
                <h2
                style={{
                    transform: `scale(`+ (scale > 0.7? scale: 0.7) +`)`,
                }}
                >{this.props.children}</h2>
                <div className={'btn-conteiner' + (this.state.fromTop > (this.state.windowHeight/2) ? ' visible':'')}>
                    <div className="btn next">
                        <Links
                            className="navbar-item" 
                            activeClass="active"
                            to="kalkulator"
                            spy={true}
                            smooth={true}
                            offset={-15}
                            duration={500}
                        >
                            <div className="arrow bounce"></div>
                        </Links>
                    </div>
                </div>
            </div>
        )
    
    }
}

export default Welcome