import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: (props) => props.width || 320,
    padding: theme.spacing(2),
    background: '#f8fafb',
    boxShadow: theme.shadows[4],
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

function EntropyDrawer({ open, children, title, width = 320 }) {
  const classes = useStyles({ width });

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      classes={{ paper: classes.paper }}
    >
      <div className={classes.content}>
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </Drawer>
  );
}

export default EntropyDrawer;
