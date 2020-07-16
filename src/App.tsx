import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import Global from './styles/Global'

import Login from './components/Login'
import Register from './components/Register'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Global />
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App;
