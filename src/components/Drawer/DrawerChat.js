import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  drawerChat: {
    flexShrink: 0,
    zIndex: 900,
  },
  drawerPaperChat: {
    width: drawerWidth,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  drawerHeaderChat: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function DrawerChat({ openChat, messages = [], onSubmitMessage, currentUser }) {
  const classes = useStyles();
  const chatListBottomRef = useRef(null);

  const submitMessage = (inputValue) => {
    if (!inputValue || !onSubmitMessage) return;
    onSubmitMessage(inputValue);
  };

  return (
    <Drawer
      className={classes.drawerChat}
      variant="persistent"
      anchor="right"
      open={openChat}
      classes={{
        paper: classes.drawerPaperChat,
      }}
    >
      <div className={classes.drawerHeaderChat}></div>
      <Divider />
      <ChatList messages={messages} currentUser={currentUser} chatListBottomRef={chatListBottomRef} />
      <ChatInput submitMessage={submitMessage} />
    </Drawer>
  );
}
