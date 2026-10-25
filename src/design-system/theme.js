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

export const entropyTheme = createMuiTheme({
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
    success: {
      main: entropyColors.success,
    },
    warning: {
      main: entropyColors.warning,
    },
    error: {
      main: entropyColors.danger,
    },
    info: {
      main: entropyColors.info,
    },
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.03em',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: entropySpacing,
  shadows: [
    'none',
    '0px 2px 8px rgba(17, 24, 39, 0.06)',
    '0px 4px 12px rgba(17, 24, 39, 0.08)',
    '0px 8px 24px rgba(17, 24, 39, 0.10)',
    '0px 12px 30px rgba(17, 24, 39, 0.12)',
    '0px 18px 40px rgba(17, 24, 39, 0.14)',
    '0px 22px 46px rgba(17, 24, 39, 0.16)',
    '0px 28px 56px rgba(17, 24, 39, 0.18)',
    '0px 32px 64px rgba(17, 24, 39, 0.20)',
    '0px 36px 72px rgba(17, 24, 39, 0.22)',
    '0px 42px 80px rgba(17, 24, 39, 0.24)',
    '0px 48px 96px rgba(17, 24, 39, 0.26)',
    '0px 54px 104px rgba(17, 24, 39, 0.28)',
    '0px 60px 110px rgba(17, 24, 39, 0.30)',
    '0px 72px 120px rgba(17, 24, 39, 0.32)',
    '0px 84px 128px rgba(17, 24, 39, 0.34)',
    '0px 96px 144px rgba(17, 24, 39, 0.36)',
    '0px 116px 160px rgba(17, 24, 39, 0.38)',
    '0px 132px 180px rgba(17, 24, 39, 0.40)',
    '0px 144px 200px rgba(17, 24, 39, 0.42)',
    '0px 160px 220px rgba(17, 24, 39, 0.44)',
    '0px 180px 240px rgba(17, 24, 39, 0.46)',
    '0px 200px 260px rgba(17, 24, 39, 0.48)',
    '0px 220px 280px rgba(17, 24, 39, 0.50)',
  ],
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 12,
        padding: '10px 18px',
        minHeight: 42,
      },
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0px 8px 20px rgba(0, 230, 118, 0.28)',
        },
      },
      outlined: {
        borderColor: entropyColors.border,
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: entropyColors.surface,
      },
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid ${entropyColors.border}`,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 16,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 12,
        backgroundColor: entropyColors.surface,
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: entropyColors.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: entropyColors.primary,
          borderWidth: 2,
        },
      },
    },
  },
});

export default entropyTheme;
