import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}
