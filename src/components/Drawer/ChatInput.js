import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
    width: '95%',
  },
  textfield: {
    width: '95%',
    backgroundColor: 'white',
  },
  chatForm: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: '15px',
    paddingTop: '0.5em',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#f6f6f6',
  },
}));

function useTextFieldInput(id, className, label, variant, onKeyUp, defaultVal = '', multiline = true) {
  const [value, setValue] = React.useState(defaultVal);
  const input = (
    <TextField
      id={id}
      className={className}
      label={label}
      variant={variant}
      multiline={multiline}
      value={value}
      onKeyUp={onKeyUp}
      onChange={(e) => setValue(e.target.value)}
    />
  );
  return [value, setValue, input];
}

export default function ChatInput({ submitMessage }) {
  const classes = useStyles();

  function handleKeypress(e) {
    e.preventDefault();
    if (e.which === 13 && !e.shiftKey) {
      handleSendClick();
    }
  }

  const [value, setValue, input] = useTextFieldInput(
    'outlined-basic',
    classes.textfield,
    'Got something to say?',
    'outlined',
    handleKeypress,
  );

  const handleSendClick = () => {
    submitMessage && submitMessage(value.replace(/\n\s*\n/g, '\n').trim());
    setValue('');
  };

  return (
    <form
      id="chatForm"
      className={classes.chatForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleSendClick();
      }}
      noValidate
    >
      {input}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSendClick}
        endIcon={<SendRoundedIcon />}
      >
        Send
      </Button>
    </form>
  );
}
