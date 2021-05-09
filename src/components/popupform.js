import React, {useState, useEffect}  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



import Typography from '@material-ui/core/Typography';
import './popupform.css'
import Contact from './contact'
import solarPower from '../images/solar-power.jpg'

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
});


  
const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
}))(MuiDialogContent);
  

function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(true);
  
    const handleClose = () => {
      setOpen(false);
      setCookie('pf_close', true)
    };

    const onSend = () =>{
      setOpen(false);
      setCookie('pf_close', true, 365)
    }
  
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    
    return (
      <div >
        <Dialog  
          aria-labelledby="customized-dialog-title" 
          open={open}
          scroll='body'
          fullScreen={fullScreen}
        >
            <DialogContent dividers id="popup-form">
                <h3>Skontaktujemy się z Tobą</h3>
                <p>zostaw nam swój numer, oddzwonimy!</p>    
                <Contact onClose={handleClose} onSend={onSend} />
                {/*<img src={solarPower} />*/}
                <Img
                style={{position: "absolute"}}
                  fluid={props.data.file.childImageSharp.fluid}
                   alt="Fotovoltaic"
                />
            </DialogContent>
            
        </Dialog>
      </div>
    );
  }

const Popupform = () =>{
    
    const [popupformDisplay, setPopupformDisplay] = useState(false)
    const [ispopupClose, setIspopupClose] = useState(false)
    
    useEffect( ()=>{
        checkCookie()
    })

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      
      function checkCookie() {
        var ac = getCookie("ac");
        var pf_close = getCookie("pf_close")
        console.log(ac, pf_close)
        if (ac === 'true') {
            setPopupformDisplay(true)
            if(pf_close === 'true'){
                setPopupformDisplay(false)
            }
        }
      }
      const data = useStaticQuery( graphql`
  query {
    file(relativePath: {eq: "solar-power.jpg"}) {
      childImageSharp {
        fluid (fit: COVER){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

    return(
        <div>
            {popupformDisplay
            ? <div>
                <CustomizedDialogs data={data}/>
            </div>
            : null
            }
        </div>
    )
}

export default Popupform