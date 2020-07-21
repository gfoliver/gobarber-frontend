import React, { ComponentType, useCallback } from 'react'
import { Route as RRDRoute, RouteProps as RRDRouteProps, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks/Auth'

interface RouteProps extends RRDRouteProps {
    isPrivate?: boolean
    component?: ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...props }) => {
    const { user } = useAuth()

    const renderRoute = useCallback(() => {
        if (isPrivate === !!user && Component)
            return <Component />
        else if (isPrivate)
            return <Redirect to="/login" />
        else
            return <Redirect to="/" />
    }, [isPrivate, user, Component])

    return (
        <RRDRoute {...props} render={renderRoute} />
    )
}

export default Route