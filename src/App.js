import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Chip,
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import EntropyButton from './design-system/components/EntropyButton';
import EntropyAvatarStack from './design-system/components/EntropyAvatarStack';
import EntropyToolbar from './design-system/components/EntropyToolbar';
import EntropyChatInput from './design-system/components/EntropyChatInput';
import EntropyDrawer from './design-system/components/EntropyDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  hero: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },
  panel: {
    borderRadius: 16,
    border: `1px solid ${theme.palette.divider}`,
    background: '#fff',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[1],
  },
  appBar: {
    background: '#fff',
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 700,
    letterSpacing: '-0.04em',
  },
  section: {
    marginBottom: theme.spacing(5),
  },
  stat: {
    borderRadius: 16,
    padding: theme.spacing(2),
    background: '#f7faf9',
    border: `1px solid ${theme.palette.divider}`,
    minHeight: 112,
  },
}));

const collaborators = [
  { name: 'Jeremy', color: '#00e676', photo: '' },
  { name: 'Nathan', color: '#1f2937', photo: '' },
  { name: 'Niko', color: '#3b82f6', photo: '' },
  { name: 'Ava', color: '#fbbf24', photo: '' },
];

const recentMessages = [
  { user: 'Nathan', text: 'Updated the flow for sign-up onboarding.', time: '2m ago' },
  { user: 'Jeremy', text: 'Need a quick review of the chat drawer states.', time: '12m ago' },
  { user: 'Ava', text: 'The new collaboration banner looks clean.', time: '35m ago' },
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.toolbarTitle}>
            Entropy Design System
          </Typography>
          <EntropyButton variant="contained">Launch Demo</EntropyButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className={classes.hero}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" gutterBottom>
              A cleaner, collaborative product language.
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Built for diagram editing, real-time collaboration, and shared visual communication.
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mt={3}>
              <EntropyButton variant="contained">Primary action</EntropyButton>
              <EntropyButton variant="outlined">Secondary</EntropyButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Collaboration overview
              </Typography>
              <EntropyAvatarStack users={collaborators} max={4} />
              <Box mt={3}>
                <Chip label="Synced" color="primary" />
                <Chip label="Live editing" style={{ marginLeft: 8 }} />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Foundation
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div className={classes.stat}>
              <Typography variant="overline" color="textSecondary">Primary accent</Typography>
              <Typography variant="h4">#00e676</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.stat}>
              <Typography variant="overline" color="textSecondary">Neutral base</Typography>
              <Typography variant="h4">#111827</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.stat}>
              <Typography variant="overline" color="textSecondary">Radius</Typography>
              <Typography variant="h4">12px / 16px</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Component preview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Editor toolbar
              </Typography>
              <EntropyToolbar onAction={(action) => console.log(action)} />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Chat drawer
              </Typography>
              <EntropyDrawer open title="Team chat" width={320}>
                <List>
                  {recentMessages.map((message) => (
                    <React.Fragment key={message.user + message.time}>
                      <ListItem alignItems="flex-start">
                        <Avatar style={{ background: '#00e676', marginRight: 12 }}>{message.user[0]}</Avatar>
                        <ListItemText
                          primary={message.user}
                          secondary={`${message.text} · ${message.time}`}
                        />
                      </ListItem>
                      <Divider component="li" />
                    </React.Fragment>
                  ))}
                </List>
                <EntropyChatInput onSubmit={(value) => console.log(value)} />
              </EntropyDrawer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
