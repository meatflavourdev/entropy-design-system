import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import entropyTheme from './theme';

export function EntropyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={entropyTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default EntropyThemeProvider;
