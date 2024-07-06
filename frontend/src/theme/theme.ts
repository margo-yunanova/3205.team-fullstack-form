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
          // '&:active': {
          //   backgroundColor: palette.background?.brandDayDark,
          //   color: palette.text?.baseWhite,
          // },
          // ':hover': {
          //   backgroundColor: palette.background?.brandDay1,
          //   color: palette.text?.baseWhite,
          // },
          '@media (hover: hover)': {
            ':hover': { backgroundColor: '#C1E3D6' },
          },
          // '&.Mui-disabled': {
          //   backgroundColor: palette.background?.brandDay1,
          //   color: palette.text?.baseWhite,
        },
      },
      //       outlined: {
      //         width: '100%',
      //         backgroundColor: 'transparent',
      //         color: palette.text?.brandDay1,
      //         borderColor: palette.text?.brandDay1,
      //         borderRadius: '8px',
      //         paddingTop: '8px',
      //         paddingBottom: '8px',
      //         '&:active': {
      //           backgroundColor: palette.background?.brandDayDark,
      //           color: palette.text?.baseWhite,
      //         },
      //         ':hover': {
      //           backgroundColor: palette.background?.brandDay1,
      //           color: palette.text?.baseWhite,
      //         },
      //         '&.Mui-disabled': {
      //           backgroundColor: 'transparent',
      //           color: palette.text?.brandDay1,
      //           borderColor: palette.text?.brandDay1,
      //         },
      //       },
      //       text: {
      //         color: palette.text?.brandDay1,
      //         borderColor: 'transparent',
      //         '&:active': {
      //           color: palette.text?.brandDayDark,
      //         },
      //         ':hover': {
      //           backgroundColor: 'transparent',
      //           border: 'none',
      //         },
      //         '@media (hover: hover)': {
      //           ':hover': {
      //             color: palette.text?.brandDay2,
      //             outline: '1px solid',
      //             outlineColor: palette.text?.brandDay4,
      //           },
      //         },
      //         '&.Mui-disabled': {
      //           color: palette.text?.brandDay1,
      //         },
      //       },
      //     },
      //   },
      //   MuiIconButton: {
      //     styleOverrides: {
      //       root: {
      //         padding: '0px',
      //         color: palette.text?.primary,
      //       },
      //     },
      //   },

      //   MuiInputLabel: {
      //     styleOverrides: {
      //       root: {
      //         position: 'initial',
      //         color: '#6B7A99',
      //         fontSize: '21px',
      //         lineHeight: '32px',
      //         fontWeight: 500,
      //         letterSpacing: '0.2px',
      //         '&.Mui-focused': {
      //           color: '#6B7A99',
      //         },
      //       },
      //     },
      //   },
      //   MuiInputBase: {
      //     styleOverrides: {
      //       root: {
      //         '& .MuiInputBase-input': {
      //           border: '2px solid',
      //           borderColor: 'transparent',
      //           borderRadius: '8px',
      //           backgroundColor: 'transparent',
      //           fontSize: '16px',
      //           color: palette.text?.greyDusk1,
      //           padding: '10px 16px',
      //           boxShadow:
      //             '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      //           '&:focus': {
      //             borderColor: palette.text?.brandDay1,
      //           },
      //           '&:invalid': {
      //             boxShadow:
      //               '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      //           },
      //         },
      //       },
      //     },
    },
  },
});
