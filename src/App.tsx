import { Provider } from 'react-redux'

import { ThemeProvider, createTheme, radioClasses } from '@mui/material'

import { Router } from './router'
import { store } from './store/store'

const theme = createTheme({
  components: {
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

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  )
}
