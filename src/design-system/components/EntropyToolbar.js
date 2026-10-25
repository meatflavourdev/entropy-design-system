import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, IconButton, Tooltip } from '@material-ui/core';
import Crop75Icon from '@material-ui/icons/Crop75';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    gap: 4,
    padding: 6,
    borderRadius: 12,
    border: `1px solid ${theme.palette.divider}`,
    background: '#fff',
  },
}));

function EntropyToolbar({ onAction }) {
  const classes = useStyles();

  const actions = [
    { label: 'Block', icon: <CheckBoxOutlineBlankIcon />, onClick: () => onAction && onAction('block') },
    { label: 'Decision', icon: <RadioButtonUncheckedIcon />, onClick: () => onAction && onAction('decision') },
    { label: 'Terminator', icon: <Crop75Icon />, onClick: () => onAction && onAction('terminator') },
    { label: 'Add view', icon: <DashboardIcon />, onClick: () => onAction && onAction('view') },
    { label: 'Handle', icon: <TouchAppIcon />, onClick: () => onAction && onAction('handle') },
  ];

  return (
    <div className={classes.root}>
      <ButtonGroup variant="outlined" color="default">
        {actions.map((action) => (
          <Tooltip title={action.label} key={action.label}>
            <IconButton size="small" onClick={action.onClick}>{action.icon}</IconButton>
          </Tooltip>
        ))}
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="default">
        <Tooltip title="Undo">
          <IconButton size="small" onClick={() => onAction && onAction('undo')}>
            <UndoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redo">
          <IconButton size="small" onClick={() => onAction && onAction('redo')}>
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}

export default EntropyToolbar;
