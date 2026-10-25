import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#fff',
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: '-0.04em',
  },
}));

function EntropyAppBar({ title, actions }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {actions}
      </Toolbar>
    </AppBar>
  );
}

export default EntropyAppBar;
