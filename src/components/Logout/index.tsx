import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/Auth'

const Logout: React.FC = () => {
    const { signOut } = useAuth()

    useEffect(() => {
        signOut()
    }, [signOut])

    return <Redirect to="/login" />
}

export default Logout