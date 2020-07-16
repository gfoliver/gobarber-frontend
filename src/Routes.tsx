import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'

import { AuthProvider } from './context/authContext'

const Routes: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default Routes