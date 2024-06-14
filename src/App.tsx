import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material'

import { Layout } from './pages/Layout/Layout'

const theme = createTheme({
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
      <Layout />
    </ThemeProvider>
  )
}
