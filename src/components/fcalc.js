import PropTypes from "prop-types"
import React ,{useState} from "react"
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

import "./fcalc.css"
import kalkdata from "./kalkdata.json"
import power from './../images/power.svg'
import ecology from './../images/ecology.svg'
import calculator from './../images/calculator.svg'
import cash from './../images/cash.svg'
import line from './../images/line.svg'
import money from './../images/money.svg'


const Fcalc =()=>{
    const [price, setPrice] = useState('120');
    const changeHandler = (e, newValue) => setPrice(newValue);
    
    const yearPrice = price * 12;
   
    var kwhmsc = Math.round(price / 0.62);
    var kwhyear = Math.round(kwhmsc * 12);
    var kwp = Number.parseFloat(((kwhyear*0.25) + ((kwhyear * 0.75)/0.8))/1000).toFixed(2);
    
    var total_price = 0;
    if(kwp > 0 &&  kwp <= 5){
        let value = Math.floor(kwp);
        total_price += 3780 * value;
    }else if( kwp > 5 && kwp <= 10){
        total_price += 5 * 3780;
        let next_value = Math.floor(kwp - 5);
        total_price += next_value * 3672; 
    }else if(kwp > 10){
        total_price += 5 * 3780;
        total_price += 5 * 3672; 
        let next_value = Math.floor(kwp - 10);
        total_price += next_value * 3564; 
    }

    const returnTime = Math.floor(total_price / yearPrice)||0;
    const yearSave =  (25 * yearPrice) - total_price;

    const useStyles = makeStyles({
        root: {
          color: '#48a73d',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      });
      const classes = useStyles();
    return(
        <div className="kalk_container">
            <h2>Dopasuj instalację fotowoltaiczną</h2>
            <form>
                <div className="k_header">
                    <div className="k_title">Miesięczny koszt energii:</div>
                    <div className="k_start_value"><strong>{price}PLN/msc</strong></div> 
                </div>
            {/*<input 
                type="range" 
                min = "0"
                max = "1500"
                step = "10"
                value={price}
                onChange={changeHandler}
                className="c_slider"
            />*/}
             <Slider 
                classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    thumb: classes.thumb,
                    track: classes.track,
                    rail: classes.rail,
                    active: classes.active,
                }}
                value={price}
                aria-labelledby="continuous-slider"
                onChange={changeHandler}
                min={0}
                max={1500}
            />
            </form>
           
            <div className="k_element">
                <div className="k_img"><img src={power} width="32px"/></div>
                <div className="k_desc">
                    <div className="k_label">Ptrzebna moc instalacji: </div>
                    <strong className="k_value">{kwp}kWp</strong>
                </div>
            </div>
            <div className="k_element">
                <div className="k_img"><img src={ecology} width="32px"/></div>
                    <div className="k_desc">
                        <div className="k_label">Dzieki tej mocy wyprodukujesz rocznie:</div>
                        <strong className="k_value">{kwhyear}kWh</strong>
                    </div> 
                </div>
            <div className="k_element">
                <div className="k_img"><img src={calculator} width="32px"/></div>
                <div className="k_desc">
                    <div className="k_label">Koszt brutto instalacji od: </div>
                    <strong className="k_value">{total_price}PLN</strong>
                </div>
            </div>
           <div className="k_element">
                <div className="k_img"><img src={cash} width="32px"/></div>
                <div className="k_desc">
                    <div className="k_label">Roczny rachunek bez instalacji fotovoltaicznej:</div>
                    <strong className="k_value">{yearPrice}PLN</strong>
                </div>
            </div>
           <div className="k_element">
                <div className="k_img"><img src={line} width="32px"/></div>
                <div className="k_desc">
                    <div className="k_label">Okres zwrotu inwestycji:</div>
                    <strong className="k_value">{returnTime} lat</strong>
                </div>
            </div>
            <div className="k_element b_green">
                <div className="k_img"><img src={money} width="32px"/></div>
                <div className="k_desc">
                    <div className="k_label">Oszczędnośc po 25 latach:</div>
                    <strong className="k_value">{yearSave}PLN</strong>
                </div>
            </div>
        </div>
    )
}

export default Fcalc;