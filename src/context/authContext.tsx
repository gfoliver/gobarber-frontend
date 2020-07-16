import React, { createContext, useCallback } from 'react'

import api from '../services/api'

interface User {
    id: number
    name: string
    email: string
    avatar: string | null
    token: string
}

interface SignInDTO {
    email: string
    password: string
}

interface SignInResponse {
    data: {
        token?: string
        user?: Omit<User, "token">
        message?: string
        status: boolean
    }
}

interface IAuthContext {
    signIn({ email, password }: SignInDTO): Promise<SignInResponse["data"]>
    signOut(): Promise<void>
    user: User | null
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password }: SignInDTO): Promise<SignInResponse["data"]> => {
        try {
            const response = await api.post<SignInResponse>('/auth/login', { email, password })

            return response.data.data
        } catch (error) {
            return error.response.data
        }
    }, [])
    const signOut = useCallback(async () => {}, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: null }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }