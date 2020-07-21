import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Route from './Route'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Logout from '../components/Logout'

const Routes: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={Home} isPrivate />
                <Route path="/logout" component={Logout} isPrivate />
            </Switch>
        </Router>
    )
}

export default Routes