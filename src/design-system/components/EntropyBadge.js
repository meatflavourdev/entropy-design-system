import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  chip: {
    borderRadius: 999,
    fontWeight: 600,
    padding: '2px 8px',
  },
  success: {
    background: 'rgba(34, 197, 94, 0.12)',
    color: '#166534',
  },
  warning: {
    background: 'rgba(251, 191, 36, 0.16)',
    color: '#92400e',
  },
  default: {
    background: 'rgba(17, 24, 39, 0.06)',
    color: '#1f2937',
  },
  info: {
    background: 'rgba(59, 130, 246, 0.12)',
    color: '#1d4ed8',
  },
}));

function EntropyBadge({ label, tone = 'default', ...props }) {
  const classes = useStyles();
  const toneClass = classes[tone] || classes.default;

  return <Chip className={`${classes.chip} ${toneClass}`} label={label} {...props} />;
}

export default EntropyBadge;
