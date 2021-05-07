import React ,{useState} from "react"
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Contact from "../components/contact"
import { Link } from "gatsby"

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
    console.log(kwp);
    var total_price = 0;
    if(kwp <= 50){
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
        else if(kwp >= 4 && kwp < 5 ){
            let unit = (20200 - 18000)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 18000 + (unit * perUnit);
        }  
        else if(kwp >= 5 && kwp < 6 ){
            let unit = (22400 - 20200)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 20200 + (unit * perUnit);
        }  
        else if(kwp >= 6 && kwp < 6.5 ){
            let unit = (23500 - 22400)/5;
            let perUnit = (kwp%1).toFixed(1)*5;
            total_price = 22400 + (unit * perUnit);
        }  
        else if(kwp >= 6.5 && kwp < 7 ){
            let unit = (25000 - 23500)/5;
            let perUnit = (kwp%1).toFixed(1)*5;
            total_price = 23500 + (unit * perUnit);
        }
        else if(kwp >= 7 && kwp < 8 ){
            let unit = (28000 - 25000)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 25000 + (unit * perUnit);
        }  
        else if(kwp >= 8 && kwp < 9 ){
            let unit = (30000 - 28000)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 28000 + (unit * perUnit);
        }  
        else if(kwp >= 9 && kwp < 10 ){
            let unit = (32000 - 30000)/10;
            let perUnit = (kwp%1).toFixed(1)*10;
            total_price = 30000 + (unit * perUnit);
        }  
        else{
            total_price = 32000 + ((kwp-10)*3450);
         }
    }   
    
    else{
       total_price = 170000 + ((kwp-50)*3000);
    }

    const returnTime = Math.floor(total_price / yearPrice)||0;
    const yearSave =  (15 * yearPrice) - total_price;

    var totalPrice = Math.floor(total_price);
    var totaLPriceExtra = Math.floor(total_price - 5000);
    var totalSave = Math.round(yearSave * 100) / 100 > 0? Math.round(yearSave * 100) / 100 : 0;
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
                    <div className="k_img b_grafit"><img src={cash} width="24px" alt="cash"/></div>
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
                max={2200}
            />
            </div>
            </form>
           <div className="k_steps">
            <div className="k_element">
                <div className="k_img b_grafit"><img src={ecology} width="24px" alt="ecology"/></div>
                <div className="k_desc">
                    <div className="k_label">Rocznie potrzebujesz wyprodukować:</div>
                    <strong className="k_value">{kwhyear}kWh</strong>
                </div> 
            </div>
            <div className="k_element">
                <div className="k_img b_grafit"><img src={power} width="24px" alt="power"/></div>
                <div className="k_desc">
                    <div className="k_label">Potrzebna moc instalacji: </div>
                    <strong className="k_value">{kwp >= 6.5 && kwp < 7 ? 6.5 : Math.floor(kwp)}kWp</strong>
                </div>
            </div>
            
            <div className="k_element">
                <div className="k_img b_grafit"><img src={calculator} width="24px" alt="calculator"/></div>
                <div className="k_desc">
                    <div className="k_label">Koszt brutto instalacji od: </div>
                    <strong className="k_value">{totalPrice.toLocaleString()}PLN</strong>
                </div>
            </div>
            <div className="k_element">
                <div className="k_img blue_gradient"><img src={save_energy} width="24px" alt="save energy"/></div>
                <div className="k_desc">
                    <div className="k_label">Koszt brutto z dotacją <Link to="/moj-prad-3.0"><span style={{whiteSpace:"nowrap"}}>"Mój prąd 3.0"</span></Link>:</div>
                    <strong className="k_value">{totaLPriceExtra.toLocaleString()}PLN</strong>
                </div>
            </div>
           <div className="k_element">
                <div className="k_img b_grafit"><img src={line} width="24px" alt="line"/></div>
                <div className="k_desc">
                    <div className="k_label">Ta inwestycja zwróci Ci się po:</div>
                    <strong className="k_value">{returnTime} lat</strong>
                </div>
            </div>
            <div className="k_element">
                <div className="k_img green_gradient"><img src={money} width="24px" alt="money"/></div>
                <div className="k_desc">
                    <div className="k_label">Po 15 latach zaoszczędzisz:</div>
                    <strong className="k_value">{totalSave.toLocaleString()}PLN</strong>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Fcalc;