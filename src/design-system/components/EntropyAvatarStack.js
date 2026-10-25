import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    marginLeft: -8,
    border: `2px solid ${theme.palette.background.paper}`,
    color: '#111827',
    fontSize: 12,
    fontWeight: 700,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

function EntropyAvatarStack({ users = [], max = 4 }) {
  const classes = useStyles();
  const visibleUsers = users.slice(0, max);
  const remaining = users.length - visibleUsers.length;

  return (
    <div className={classes.root}>
      {visibleUsers.map((user) => (
        <Tooltip title={user.name} key={user.name} arrow>
          <Avatar className={classes.avatar} style={{ backgroundColor: user.color || '#00e676' }}>
            {user.name.charAt(0)}
          </Avatar>
        </Tooltip>
      ))}
      {remaining > 0 && (
        <Avatar className={classes.avatar} style={{ backgroundColor: '#e5e7eb' }}>
          +{remaining}
        </Avatar>
      )}
    </div>
  );
}

export default EntropyAvatarStack;
