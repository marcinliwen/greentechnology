import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 16,
    padding: 8
  },
}))(Tooltip);



export default function CustomTooltip(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
  return (
      <LightTooltip 
        disableFocusListener
        title={
            <React.Fragment>{props.title}</React.Fragment>
        }
        arrow
        TransitionComponent={Zoom}
      >
        <em style={{whiteSpace: 'nowrap'}}>{props.children}<ContactSupportRoundedIcon /></em >
      </LightTooltip>
  
  );
}
