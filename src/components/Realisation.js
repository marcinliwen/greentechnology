import React from 'react';
import { Link } from "gatsby"
import './Realisation.css';

import Popover from './Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function CustomizedTimeline() {
  
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
  return (
    <div>
        <div className="steps_item">    
            <div className="number">1</div>
            <div className="steps_item_title">Oględziny i konsultacja.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">2</div>
            <div className="steps_item_title">Koncepcja i projekt instalacji, podpisanie umowy.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">3</div>
            <div className="steps_item_title">Przygotowanie dokumentacji z wnioskiem kredytowym.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">4</div>
            <div className="steps_item_title">
                Wykonanie instalacji "pod klucz".
                <Popover title="„pod klucz">
                <ul style={{    padding: '30px 15px',
    marginBottom: '0'}}>
                    <li>przygotowanie projektu wykonawczego instalacji</li>
                    <li>wykonanie instalacji fotowoltaicznej</li>
                    <li>prace montażowe niezbędne do przyłączenia instalacji do sieci energetycznej</li>
                    <li>programowanie inwertera i urządzeń monitorujących</li>
                    <li>transport</li>
                    <li>przygotowanie kompletu dokumentów niezbędnych do przyłączenia instalacji do sieci</li>
                </ul>
            </Popover>
            </div>
            
            
            
                
            
        </div>
        <div className="steps_item">    
            <div className="number">5</div>
            <div className="steps_item_title">Zgłoszenie instalacji do Zakładu Energetycznego.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">6</div>
            <div className="steps_item_title">Konsultacje w sprawie umowy z operatorem sieci elektroenergetycznej.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">7</div>
            <div className="steps_item_title">Ciesz się darmowym prądem.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item btn">
            <Button variant="outlined" className={classes.root, classes.outlined}>
                <Link className="" 
                    to="/realizacje" 
                >
                    Zobacz co już zrobiliśmy
                </Link>
            </Button>
        </div>
        
    </div>
    
  );
}
