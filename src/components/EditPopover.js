import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, IconButton, Button } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: 0,
    }, 
    editButton: {
        textTransform: 'none',
    },
}));

const EditPopover = ({ onClick }) => {
  const classes = useStyles();
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
      <IconButton className={classes.button} aria-describedby={id} onClick={handleClick}>
        <MoreHorizIcon style={{fill: theme.palette.primary.main}}/> 
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Button className={classes.editButton} onClick={onClick}>Edit Response</Button>
      </Popover>
    </div>
  );
}

export default EditPopover;