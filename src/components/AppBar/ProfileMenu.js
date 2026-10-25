import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#00e676'),
    backgroundColor: '#00e676',
    marginRight: '15px',
    marginTop: '8px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ProfileMenu({ user, onSignOut }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    if (onSignOut) {
      await onSignOut();
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <AccountCircleIcon style={{ fontSize: 26 }} />
      </IconButton>

      <StyledMenu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={{ backgroundColor: 'transparent' }}>
          <Grid container direction="row" justify="center">
            <Avatar className={classes.avatar} src={user.photoURL} />
            <ListItemText primary={user.displayName} secondary={user.email} />
          </Grid>
        </MenuItem>

        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="default" />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
