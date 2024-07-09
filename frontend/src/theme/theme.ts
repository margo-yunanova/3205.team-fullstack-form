import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import { createTheme } from '@mui/material';
import { palette } from './palette';

export const theme = createTheme({
  palette,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-disabled': {
            opacity: '0.6',
          },
        },
        contained: {
          width: '390px',
          backgroundColor: palette.background?.button,
          color: palette.text?.button,
          borderRadius: '23px',
          paddingTop: '15px',
          paddingBottom: '15px',
          fontSize: '30px',
          '@media (hover: hover)': {
            ':hover': { backgroundColor: '#C1E3D6' },
          },
        },
      },
    },
  },
});
