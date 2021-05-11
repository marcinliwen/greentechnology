import React, {useState, useEffect}  from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';


const GreenCheckbox = withStyles({
    root: {
      color: '#11B91B',
      '&$checked': {
        color: '#11B91B',
      },
    },
  })((props) => <Checkbox color="default" {...props} required="true"/>);

export default function CheckboxRodo(){
    const [state, setState] = React.useState({})

    const [ischecked, setChecked] = React.useState({
        checkedG: false,
    });

  const handleCheckbox = (event) => {
    setChecked({ ...state, [event.target.name]: event.target.checked });
  };

  const useStyles = makeStyles((theme) => ({
    formControl:{
        margin: '0px',
        '& :before':{
          content: '*',
        }
      },
  }))
  const classes = useStyles();

  return(
    <>     
        <FormControlLabel
            className={classes.formControl}
            control=
            {<GreenCheckbox  checked={ischecked.checkedG} onChange={handleCheckbox} name="checkedG" />}
            label={<p style={{fontSize: '12px', margin: '0px', textAlign: 'left'}}><span style={{color: 'red'}}>*</span>Zapoznałem się z informacją o administratorze i przetwarzaniu danych osobowych zawartej w <a style={{color: '#11b91b', whiteSpace: 'nowrap'}} href="/polityka-prywatnosci">Polityce prywatności</a></p>}
        />
    </>
  )
  }