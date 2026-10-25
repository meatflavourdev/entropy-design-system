import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: 12,
    background: '#fff',
  },
}));

function EntropyInput({ label = 'Label', value, onChange, placeholder, startAdornment, ...props }) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
      }}
      {...props}
    />
  );
}

export default EntropyInput;
