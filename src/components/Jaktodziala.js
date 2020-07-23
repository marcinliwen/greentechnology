import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import jaktodziala_img from "../images/jaktodziala.jpg"
import "./jtd.css"

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Jaktodziala = () =>{

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiInput-underline:after': {
                borderBottomColor: '#11B91B',
                },
            '& label.Mui-focused': {
                color: '#11B91B',
                },
        },
        outlined:{
            borderColor: 'rgba(17, 185, 27, 0.5)',
            color: '#11B91B',
        },  
    }));
    const classes = useStyles();

    return(
    <div class="section_content jtd_content">
        <div className="jtd_img">
          <img src={jaktodziala_img} alt="jak działa fotowoltaika"/>
        </div>
        <div className="jdt_mapping_container">
          <div className="jtd_mapping">
            <div className="jtd_mapping_item">1</div>
            <div className="jtd_mapping_item">2</div>
            <div className="jtd_mapping_item">3</div>
            <div className="jtd_mapping_item">4</div>
            <div className="jtd_mapping_item">5</div>
            <div className="jtd_mapping_item">6</div>
          </div>
            <ol className="jtd_mapping_description">
                <li className="jtd_mapping_desc_item">panele fotowoltaiczne</li>
                <li className="jtd_mapping_desc_item">inverter (falownik)</li>
                <li className="jtd_mapping_desc_item">dwukierunkowy licznik energii elektrycznej</li>
                <li className="jtd_mapping_desc_item">bilansowanie energii z siecią</li>
                <li className="jtd_mapping_desc_item">linia zakładu energetycznego</li>
                <li className="jtd_mapping_desc_item">odbiorniki</li>
            </ol>  
            <div className="jdt_mapping_link">
                    <Button variant="outlined" className={classes.root, classes.outlined}>
                        <Link className="navbar-item" 
                to="wiedza" 
                >
                Dowiedz się więcej
                </Link>
                    </Button>
                </div>
        </div> 
    </div>
    )
};

export default Jaktodziala;