import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import clsx from 'classnames';

export function EntropyButton({ className, variant = 'contained', color = 'primary', children, ...props }) {
  return (
    <Button
      className={clsx(className)}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
}

export function EntropyCard({ className, children, ...props }) {
  return (
    <Paper className={className} elevation={0} {...props}>
      {children}
    </Paper>
  );
}

export default {
  EntropyButton,
  EntropyCard,
};
