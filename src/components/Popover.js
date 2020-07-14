import React from 'react';
import Popover from '@material-ui/core/Popover';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <span className="key_more">
        <HelpOutlineIcon aria-describedby={id}  onClick={handleClick}/>
        </span>
        
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        {props.children}
      </Popover>
    </div>
  );
}
