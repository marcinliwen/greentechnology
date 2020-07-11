import React ,{useState} from "react"
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

import "./fcalc.css"
import power from './../images/power.svg'
import ecology from './../images/ecology.svg'
import calculator from './../images/calculator.svg'
import cash from './../images/cash.svg'
import line from './../images/line.svg'
import money from './../images/money.svg'
import save_energy from './../images/save-energy.svg'


const Fcalc =()=>{
    const [price, setPrice] = useState('120');
    const changeHandler = (e, newValue) => setPrice(newValue);
    
    const yearPrice = price * 12;
   
    var kwhmsc = Math.round(price / 0.62);
    var kwhyear = Math.round(kwhmsc * 12);

    var kwp = (((kwhyear*0.25) + ((kwhyear * 0.75)/0.8))/1000);
    //console.log(kwp);
    var total_price = 0;
    if(kwp <= 4){
        if(kwp < 2){
          
            total_price = 12000 ;

        }
        else if(kwp >= 2 && kwp < 3){
            let unit = (15000 - 13500)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 13500 + (unit * perUnit);
        }
        else if(kwp >= 3 && kwp < 4 ){
            let unit = (18000 - 15000)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 15000 + (unit * perUnit);
        }  
    }   
    else{
        total_price = 18000 + ((kwp-4)*3000);
    }


    const returnTime = Math.floor(total_price / yearPrice)||0;
    const yearSave =  (15 * yearPrice) - total_price;

    const useStyles = makeStyles({
        root: {
          color: '#2b2b2b',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#2b2b2b',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &:active': {
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
        <div id="kalkulator" className="kalk_container">
            <form>
            <div className="k_element">
                    <div className="k_img b_grafit"><img src={cash} width="32px" alt="cash"/></div>
                    <div className="k_desc">
                    <div className="k_label">Twój miesięczny koszt energii:</div>
                    <div className="k_value"><strong>{price}PLN/msc</strong></div> 
                    </div>
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
            <div className="k_element w_100">
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
                min={50}
                max={1000}
            />
            </div>
            </form>
           <div className="k_steps">
            <div className="k_element">
                <div className="k_img b_grafit"><img src={ecology} width="32px" alt="ecology"/></div>
                <div className="k_desc">
                    <div className="k_label">Rocznie potrzebujesz wyprodukować:</div>
                    <strong className="k_value">{kwhyear}kWh</strong>
                </div> 
            </div>
            <div className="k_element">
                <div className="k_img b_grafit"><img src={power} width="32px" alt="power"/></div>
                <div className="k_desc">
                    <div className="k_label">Potrzebna moc instalacji: </div>
                    <strong className="k_value">{Math.floor(kwp)}kWp</strong>
                </div>
            </div>
            
            <div className="k_element">
                <div className="k_img b_grafit"><img src={calculator} width="32px" alt="calculator"/></div>
                <div className="k_desc">
                    <div className="k_label">Koszt brutto instalacji od: </div>
                    <strong className="k_value">{Math.floor(total_price)}PLN</strong>
                </div>
            </div>
            <div className="k_element">
                <div className="k_img blue_gradient"><img src={save_energy} width="32px" alt="save energy"/></div>
                <div className="k_desc">
                    <div className="k_label">Koszt brutto z dotacją <span style={{whiteSpace:"nowrap"}}>"Mój prąd":</span></div>
                    <strong className="k_value">{Math.floor(total_price - 5000)}PLN</strong>
                </div>
            </div>
           <div className="k_element">
                <div className="k_img b_grafit"><img src={line} width="32px" alt="line"/></div>
                <div className="k_desc">
                    <div className="k_label">Ta inwestycja zwróci Ci się po:</div>
                    <strong className="k_value">{returnTime} lat</strong>
                </div>
            </div>
            <div className="k_element">
                <div className="k_img green_gradient"><img src={money} width="32px" alt="money"/></div>
                <div className="k_desc">
                    <div className="k_label">Po 15 latach zaoszczędzisz:</div>
                    <strong className="k_value">{Math.round(yearSave * 100) / 100 > 0? Math.round(yearSave * 100) / 100 : 0}PLN</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Fcalc;