import { createMuiTheme } from '@material-ui/core/styles';

export const entropyColors = {
  primary: '#00e676',
  primaryDark: '#00b853',
  primaryLight: '#66f9a0',
  background: '#f5f7fa',
  surface: '#ffffff',
  surfaceAlt: '#eef3f8',
  border: '#e5e7eb',
  text: '#111827',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  dark: '#111827',
  darkAlt: '#1f2937',
  success: '#22c55e',
  warning: '#fbbf24',
  danger: '#ef4444',
  info: '#3b82f6',
};

export const entropySpacing = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64];

const entropyTheme = createMuiTheme({
  palette: {
    primary: {
      main: entropyColors.primary,
      dark: entropyColors.primaryDark,
      light: entropyColors.primaryLight,
      contrastText: '#0f172a',
    },
    secondary: {
      main: entropyColors.darkAlt,
      contrastText: '#ffffff',
    },
    background: {
      default: entropyColors.background,
      paper: entropyColors.surface,
    },
    text: {
      primary: entropyColors.text,
      secondary: entropyColors.textSecondary,
      disabled: entropyColors.textMuted,
    },
    divider: entropyColors.border,
    success: { main: entropyColors.success },
    warning: { main: entropyColors.warning },
    error: { main: entropyColors.danger },
    info: { main: entropyColors.info },
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.2 },
    h3: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.25 },
    h4: { fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.3 },
    h5: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.35 },
    h6: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.4 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.5 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.01em' },
  },
  shape: { borderRadius: 12 },
  spacing: entropySpacing,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 12,
        padding: '10px 18px',
      },
      outlined: {
        borderColor: entropyColors.border,
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 16,
      },
    },
  },
});

export default entropyTheme;
