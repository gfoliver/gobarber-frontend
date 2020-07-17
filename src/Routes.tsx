import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'

import { AuthProvider } from './hooks/Auth'

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