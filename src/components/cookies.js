import React, {useState, useEffect}  from 'react';
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './cookies.css'

const cookieStyle ={
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    maxWidth: '400px',
    borderRadious: '10px',
    fontSize: '14px',
    background: '#fff',
    padding: '15px 25px',
    zIndex: '999999',
    color: '#2b2b2b',
    boxShadow: '0px 4px 15px rgb(0 0 0 / 10%)'
}
const aStyle ={
    color: '#11B91B',
    marginLeft: '6px'
}
const buttonStyle={
    background: '#2b2b2b',
    boxShadow: '-3px -3px 6px #0000005c, 4px 1px 6px #6767673d',
    color: '#fff',
    border: 'none',
    borderRadious: '4px',
    padding: '4px 8px'
}
const Cookies = () => {
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

    const [cookiesClose, setCookiesclose] = useState(false)
    const cookiesAccepted =()=>{
        setCookiesclose(true)

    }
return(
    <div className={`cookies-container ${cookiesClose ? 'hide-cookies':'is-visible'} `} style={cookieStyle}>
        <p>Na naszej stronie używamy plików cookies do celów statystycznych i lepszego funkcjonowania strony. Aby dowiedzieć się więcej jak kozystamy z plików cookies zobacz naszą  
         <Link title="Polityka Prywatności" to='/polityka-prywatnosci' style={aStyle}>Politykę prywatności</Link>. 
         Kontynuując przeglądanie naszej witryny, wyrażasz zgodę na używanie przez nas plików cookie.</p>
        <Button variant="outlined" className={classes.root, classes.outlined} onClick={cookiesAccepted}>Rozumiem</Button>
        
    </div>
)}

export default Cookies;