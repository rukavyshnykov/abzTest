import { Provider } from 'react-redux'

import { ThemeProvider } from '@mui/material'

import { Router } from './router'
import { store } from './store/store'
import { theme } from './theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  )
}
