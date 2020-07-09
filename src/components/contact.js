import React from 'react'
import { navigate } from 'gatsby-link'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
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
      //.then(() => navigate(form.getAttribute('action')))
      .then(()=>{})
      .catch((error) => alert(error))
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    textPrimary:{
        color: '#11B91B'
    },
   
    
  }));
  const classes = useStyles();
  return (
    <div className="contact_content">
    <Button variant="outlined" className={classes.root, classes.outlined} onClick={handleClickOpen}>
            Zapytaj o ofertę
        </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Kontakt</DialogTitle>
            <DialogContent >
            <DialogContentText>
                Dowiedz się co jeszcze zyskasz inwestując w fotowoltaikę.
            </DialogContentText>
      <form
        name="contact"
        method="post"
       // action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={classes.root}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact"  />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
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
                    id="kwp_msc"
                    name="kwp_msc"
                    label="Ile miesięcznie płacisz za prąd?"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />

                <TextField
                    margin="dense"
                    id="message"
                    name="message"
                    label="Wiadomość"
                    fullWidth
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    className={classes.underline}
                />
        <DialogActions>
        <Button onClick={handleClose} color="primary" className={classes.textPrimary}>
            Anuluj
          </Button>
          <Button variant="outlined" className={classes.root, classes.outlined}  type="submit" >
            Wyślij 
          </Button>
          </DialogActions>
      </form>
      </DialogContent>
        
        
          
        
      </Dialog>
      </div>
  )
}