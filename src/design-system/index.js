import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import entropyTheme from '../theme';

export function EntropyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={entropyTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export { default as EntropyButton } from './EntropyButton';
export { default as EntropyAvatarStack } from './EntropyAvatarStack';
export { default as EntropyToolbar } from './EntropyToolbar';
export { default as EntropyChatInput } from './EntropyChatInput';
export { default as EntropyDrawer } from './EntropyDrawer';
export { default as EntropyPanel } from './EntropyPanel';
export { default as EntropyInput } from './EntropyInput';
export { default as EntropyBadge } from './EntropyBadge';
export { default as EntropyModal } from './EntropyModal';
export { default as EntropyAppBar } from './EntropyAppBar';

export default EntropyThemeProvider;
