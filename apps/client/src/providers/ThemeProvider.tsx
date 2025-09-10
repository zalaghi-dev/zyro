import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7B23D6',
    },
    secondary: {
      main: '#5a189a',
    },
    background: {
      default: '#10002b',
      paper: '#0a0020',
    },
    text: {
      primary: '#eccdff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Exo 2',
    },
    fontFamily: 'Exo 2',
    fontSize: 12,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
  },
};

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
