import React from 'react'
//import PropTypes from 'prop-types'
const BASE_URL = "https://www.google.com/maps/embed/v1/place?key=";
const GKEY = "AIzaSyDI_zdFaLx4vnV2Ypd05BqGnBV_nM_a1Jk";
const TARGET = "ul.+Dworcowa+6,+Zielona+Góra,Polska";

const Gmap = () => { 
    
    return(
    <iframe className="gmap" title="mapa dojazdu"
        src={`${BASE_URL}${GKEY}&q=${TARGET}` }allowfullscreen>
    </iframe>
            
          
    )
}
export default Gmap;