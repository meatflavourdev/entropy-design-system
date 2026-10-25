import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  actions: {
    padding: theme.spacing(2, 3, 3),
  },
}));

function EntropyModal({ open, onClose, title, children, actions, maxWidth = 'sm' }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth={maxWidth}
      fullWidth
      classes={{ paper: classes.paper }}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions className={classes.actions}>{actions}</DialogActions>}
    </Dialog>
  );
}

export default EntropyModal;
