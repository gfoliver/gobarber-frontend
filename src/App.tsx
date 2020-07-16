import React from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Global from './styles/Global'

import Router from './Routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Global />
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App;
