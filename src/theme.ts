import { createTheme, radioClasses } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: `var(--color-secondary)`,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          lineHeight: '14px',
          marginLeft: '16px',
          marginTop: '4px',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          [`&.${radioClasses.checked}`]: {
            color: `var(--color-secondary)`,
          },
          color: `var(--color-gray-100)`,
        },
      },
    },
  },
  typography: {
    body1: {
      lineHeight: '26px',
    },
    fontFamily: ['Nunito', 'Roboto', 'sans-serif'].join(','),
  },
})
