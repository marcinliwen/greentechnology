import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact(props) {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => handleSuccess())
      .then(()=> setTimeout (()=>{ handleClose()}, 3000))
      .catch((error) => handleError(error))
  }

  const [messageError, setError] = React.useState();
  const handleError = (error) => {
      setError(error);
  }

  const [messageSuccess, setSuccess] = React.useState(false);
  const handleSuccess = () => {
      setSuccess(true);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setSuccess(false);
    setError();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
        '& .MuiInput-underline:after': {
            borderBottomColor: '#11B91B',
            },
        '& label.Mui-focused': {
            color: '#11B91B',
            },
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          [theme.breakpoints.up('sm')]: {
            width: 'calc(50% - 16px)'
          },
          
        },
    },
    outlined:{
        borderColor: 'rgba(17, 185, 27, 0.5)',
        color: '#11B91B',
        marginTop: '20px',
    },
    textPrimary:{
        color: '#11B91B'
    },
   
    
  }));
  const classes = useStyles();
  return (
    <div className="contact_content">
        {/*<Button variant="outlined" className={classes.root, classes.outlined} onClick={handleClickOpen}>
            Zapytaj o ofertę
  </Button>*/}

     {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Kontakt</DialogTitle>
            <DialogContent >
            <h4 style={{fontSize:'18px'}}>
                Dowiedz się co jeszcze zyskasz inwestując w fotowoltaikę.
            </h4>
            <p style={{fontSize:'14px', padding: '0px'}}>
              Zostaw kontakt do siebie a my oddzwonimy lub odpiszemy.
            </p>
*/}    
 
      <form
        name="contact"
        method="post"
        //action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={classes.root}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" aria-label="hidden" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} aria-label="hidden"/>
          </label>
        </p>
                <TextField
                    margin="dense"
                    id="name"
                    name="name"
                    label="Imię"
                    type="text"
                    required="true"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    required="true"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Nr telefonu"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    id="kwp_msc"
                    name="kwp_msc"
                    label="Ile miesięcznie płacisz za prąd?"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />

                {/*<TextField
                    margin="dense"
                    id="message"
                    name="message"
                    label="Wiadomość"
                    fullWidth
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    className={classes.underline}
                />*/}
        <DialogActions style={{width: '100%'}}>
       {/*} <Button onClick={handleClose} color="primary" className={classes.textPrimary}>
            Anuluj
              </Button>*/}
          {props.onClose 
          ?
          <Button  variant="outlined" className={classes.root, classes.outlined}  onClick={props.onClose}>
            zamknij
          </Button>
          : null
          }
          <Button variant="outlined" className={classes.root, classes.outlined}  type="submit" >
            Wyślij 
          </Button>
          
          </DialogActions>
      </form>
      {messageSuccess ? (<Alert style={{margin:'15px 0 25px 0'}} severity="success">Dziękujemy! Dostaliśmy Twoją wiadomość.</Alert>) : ""}
      {messageError ? ( <Alert style={{margin:'15px 0 25px 0'}} severity="error">{messageError}</Alert>) : ""}  
           
      {/*</DialogContent>
        
        
          
        
      </Dialog>*/}
      </div>
  )
}