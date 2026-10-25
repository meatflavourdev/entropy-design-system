import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
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
import EntropyButton from './design-system/components/EntropyButton';
import EntropyAvatarStack from './design-system/components/EntropyAvatarStack';
import EntropyToolbar from './design-system/components/EntropyToolbar';
import EntropyChatInput from './design-system/components/EntropyChatInput';
import EntropyDrawer from './design-system/components/EntropyDrawer';
import EntropyInput from './design-system/components/EntropyInput';
import EntropyBadge from './design-system/components/EntropyBadge';
import EntropyModal from './design-system/components/EntropyModal';
import EntropyAppBar from './design-system/components/EntropyAppBar';
import SearchIcon from '@material-ui/icons/Search';

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
  section: {
    marginBottom: theme.spacing(5),
  },
  stat: {
    borderRadius: 16,
    padding: theme.spacing(2),
    background: '#f7faf9',
    border: `1px solid ${theme.palette.divider}`,
    minHeight: 120,
  },
  galleryGrid: {
    marginTop: theme.spacing(1),
  },
  row: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  modalContent: {
    paddingTop: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

const collaborators = [
  { name: 'Jeremy', color: '#00e676' },
  { name: 'Nathan', color: '#1f2937' },
  { name: 'Niko', color: '#3b82f6' },
  { name: 'Ava', color: '#fbbf24' },
];

const recentMessages = [
  { user: 'Nathan', text: 'Updated the flow for sign-up onboarding.', time: '2m ago' },
  { user: 'Jeremy', text: 'Need a quick review of the chat drawer states.', time: '12m ago' },
  { user: 'Ava', text: 'The new collaboration banner looks clean.', time: '35m ago' },
];

function App() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.root}>
      <EntropyAppBar
        title="Entropy Design System"
        actions={
          <>
            <EntropyButton variant="outlined" style={{ marginRight: 8 }}>
              Docs
            </EntropyButton>
            <EntropyButton variant="contained">Launch demo</EntropyButton>
          </>
        }
      />

      <Container maxWidth="lg" className={classes.hero}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" gutterBottom>
              A cleaner, collaborative product language.
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Built for diagram editing, live collaboration, and shared visual communication.
            </Typography>
            <Box className={classes.row} mt={3}>
              <EntropyButton variant="contained">Primary action</EntropyButton>
              <EntropyButton variant="outlined">Secondary</EntropyButton>
              <EntropyButton variant="outlined" color="secondary">
                More details
              </EntropyButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Collaboration overview
              </Typography>
              <EntropyAvatarStack users={collaborators} max={4} />
              <Box mt={3} className={classes.row}>
                <EntropyBadge label="Synced" tone="success" />
                <EntropyBadge label="Live editing" tone="info" />
                <EntropyBadge label="Needs review" tone="warning" />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Foundations
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
          Component gallery
        </Typography>

        <Grid container spacing={3} className={classes.galleryGrid}>
          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Search + input
              </Typography>
              <EntropyInput
                label="Search workspace"
                placeholder="Find a file, node, or comment"
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Status badges
              </Typography>
              <Box className={classes.row} mt={2}>
                <EntropyBadge label="Healthy" tone="success" />
                <EntropyBadge label="Review" tone="warning" />
                <EntropyBadge label="Info" tone="info" />
                <EntropyBadge label="Default" tone="default" />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Editor toolbar
              </Typography>
              <Box mt={2}>
                <EntropyToolbar onAction={(action) => console.log(action)} />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Chat drawer
              </Typography>
              <Box mt={2}>
                <EntropyDrawer open title="Team chat" width={300}>
                  <List>
                    {recentMessages.map((message) => (
                      <React.Fragment key={message.user + message.time}>
                        <ListItem alignItems="flex-start">
                          <Avatar style={{ background: '#00e676', marginRight: 12 }}>{message.user[0]}</Avatar>
                          <ListItemText primary={message.user} secondary={`${message.text} · ${message.time}`} />
                        </ListItem>
                        <Divider component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                  <EntropyChatInput onSubmit={(value) => console.log(value)} />
                </EntropyDrawer>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card className={classes.panel}>
              <Typography variant="h6" gutterBottom>
                Modal / action pattern
              </Typography>
              <Box className={classes.row} mt={2}>
                <EntropyButton variant="contained" onClick={() => setModalOpen(true)}>
                  Open modal
                </EntropyButton>
              </Box>
              <EntropyModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Share document"
                actions={
                  <>
                    <EntropyButton variant="outlined" onClick={() => setModalOpen(false)}>
                      Cancel
                    </EntropyButton>
                    <EntropyButton variant="contained" onClick={() => setModalOpen(false)}>
                      Copy link
                    </EntropyButton>
                  </>
                }
              >
                <div className={classes.modalContent}>
                  Anyone with the link can view this collaborative document. Toggle access to enable editing.
                </div>
              </EntropyModal>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
