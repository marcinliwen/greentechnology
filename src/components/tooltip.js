import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 16,
    padding: 8
  },
}))(Tooltip);



export default function CustomTooltip(props) {
    const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <LightTooltip 
        
        title={
            <React.Fragment>{props.title}</React.Fragment>
        }
        arrow
        TransitionComponent={Zoom}
        onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
      >
        <em style={{whiteSpace: 'nowrap', cursor: 'pointer'}}
        onClick={handleTooltipOpen}
        
        >{props.children}<ContactSupportRoundedIcon style={{fontSize: '24px'}}/></em >
      </LightTooltip>
      </ClickAwayListener>
  );
}
