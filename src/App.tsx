import React from 'react'
import AppProvider from './hooks'
import Router from './routes'
import Global from './styles/Global'

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router />
        <Global />
      </div>
    </AppProvider>
  )
}

export default App;
