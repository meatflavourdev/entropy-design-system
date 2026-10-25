import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: '100%',
    marginTop: theme.spacing(1),
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
}));

function EntropyChatInput({ onSubmit }) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    if (onSubmit) {
      onSubmit(trimmed);
    }
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <TextField
        className={classes.input}
        label="Write a message"
        variant="outlined"
        multiline
        rows={3}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<SendRoundedIcon />}
      >
        Send
      </Button>
    </form>
  );
}

export default EntropyChatInput;
