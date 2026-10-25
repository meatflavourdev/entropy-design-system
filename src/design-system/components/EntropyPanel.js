import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 16,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[1],
    background: '#fff',
  },
}));

function EntropyPanel({ children, ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default EntropyPanel;
