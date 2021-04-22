import React ,{useState} from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import "./pompy.css"


const Pompa = () =>{
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
        <section id="pompa" className="b_white">
        <div className="container">
            <div className="section-title">
              <h2>Pompy ciepła</h2>
            </div>
            <div className="pompa-content">
                <Link to="/pompy-ciepla" className="pompa-element">
                    <div className="pompa-power">4.0 kW</div>
                    <div className="pompa-value"> 19 000 zł <div>/brutto</div></div>
                </Link>
                <Link to="/pompy-ciepla" className="pompa-element">
                    <div className="pompa-power">5.0 kW</div>
                    <div className="pompa-value"> 20 000 zł <div>/brutto</div></div>
                </Link>
                <Link to="/pompy-ciepla" className="pompa-element">
                    <div className="pompa-power">7.0 kW</div>
                    <div className="pompa-value"> 25 000 zł <div>/brutto</div></div>
                </Link>
                <Link to="/pompy-ciepla" className="pompa-element">
                    <div className="pompa-power">9.0 kW</div>
                    <div className="pompa-value"> 29 000 zł <div>/brutto</div></div>
                </Link>
            </div>
            <div className="pompa-subtitle">
                <p>Cena obejmuje: montaż jednostki wewnętrznej i zewnętrznej (do 5m instalacji zewnętrznej), montaż i uruchomienie instalacji.</p>
                <p>Pompy spełniają warunki programu "Czyste powietrze" i dotacji do modernizacji systemów grzewczych prowadzonych przez urzędy miast i gmin</p>
            </div>
            <div className="steps_item btn">
            <Button variant="outlined" className={classes.root, classes.outlined}>
                <Link className="" 
                    to="/pompy-ciepla" 
                >
                    Poznaj pompy ciepła
                </Link>
            </Button>
            </div>
          </div>
        </section>
    )
}

export default Pompa