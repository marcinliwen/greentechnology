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

    function mappingHandle(e){
        var index = e.target.getAttribute('data_index');
        const mapItemList = document.querySelectorAll('.jtd_mapping_item')
        const mapItemDescList = document.querySelectorAll('.jtd_mapping_desc_item');

        for(let i = 0; i < mapItemList.length; i++){
            if(mapItemList[i].classList.contains('this')){
                mapItemList[i].classList.remove('this')
            }
        }
    
        for(let i = 0; i < mapItemDescList.length; i++){
            if(mapItemDescList[i].classList.contains('this')){
                mapItemDescList[i].classList.remove('this')
            }
        }
        document.querySelector('.jtd_mapping_item[data_index="'+index+'"').classList.add('this');
        document.querySelector('.jtd_mapping_desc_item[data_index="'+index+'"').classList.add('this');

    }
    function mappingLeave(){
        const mapItemList = document.querySelectorAll('.jtd_mapping_item')
        const mapItemDescList = document.querySelectorAll('.jtd_mapping_desc_item');

        for(let i = 0; i < mapItemList.length; i++){
            if(mapItemList[i].classList.contains('this')){
                mapItemList[i].classList.remove('this')
            }
        }
    
        for(let i = 0; i < mapItemDescList.length; i++){
            if(mapItemDescList[i].classList.contains('this')){
                mapItemDescList[i].classList.remove('this')
            }
        }
    }
    return(
    <div className="section_content jtd_content">
        <div className="jtd_img">
          <img src={jaktodziala_img} alt="jak działa fotowoltaika"/>
        </div>
        <div className="jdt_mapping_container">
          <div className="jtd_mapping">
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="1">1</div>
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="2">2</div>
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="3">3</div>
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="4">4</div>
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="5">5</div>
            <div className="jtd_mapping_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="6">6</div>
          </div>
            <div className="jtd_mapping_description">
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="1">1. panele fotowoltaiczne</div>
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="2">2. inverter (falownik)</div>
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="3">3. dwukierunkowy licznik energii elektrycznej</div>
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="4">4. bilansowanie energii z siecią</div>
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="5">5. linia zakładu energetycznego</div>
                <div className="jtd_mapping_desc_item" onMouseEnter={mappingHandle}  onMouseLeave={mappingLeave} data_index="6">6. odbiorniki</div>
            </div>  
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