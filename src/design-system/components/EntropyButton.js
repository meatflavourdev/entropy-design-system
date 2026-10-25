import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

function EntropyButton({ className, variant = 'contained', color = 'primary', children, ...props }) {
  return (
    <Button className={clsx(className)} variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
}

export default EntropyButton;
