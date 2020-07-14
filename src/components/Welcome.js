import React from 'react'

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
      var scale = 0;
        if(this.state.windowWidth > 760){
            scale= 1-(this.state.fromTop/500);
        }else{
            scale = 1;
        }
        
        return (
            <div className="c_white header_title">
                <h2
                style={{
                    transform: `scale(`+ (scale > 0.7? scale: 0.7) +`)`,
                }}
                >{this.props.children}</h2>
            </div>
        )
    
    }
}

export default Welcome