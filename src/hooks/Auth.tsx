import React, { createContext, useCallback, useState, useContext } from 'react'

import api from '../services/api'

interface SignInDTO {
    email: string
    password: string
}

interface IAuthContext {
    signIn({ email, password }: SignInDTO): Promise<void>
    signOut(): void
    user: object
}

interface SignInResponse {
    data: {
        token: string
        user: object
    }
}

interface AuthData {
    token: string
    user: object
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthData>(() => {
        const token = localStorage.getItem('@GoBarber:token')
        const user = localStorage.getItem('@GoBarber:user')

        if (token && user) {
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthData;
    })


    const signIn = useCallback(async ({ email, password }: SignInDTO) => {
        const response = await api.post<SignInResponse>('/auth/login', { email, password })
        
        const { token, user } = response.data.data

        setData({ token, user })

        localStorage.setItem('@GoBarber:token', token)
        localStorage.setItem('@GoBarber:user', JSON.stringify(user))
    }, [])
    const signOut = useCallback(() => {
        localStorage.removeItem('@GoBarber:token')
        localStorage.removeItem('@GoBarber:user')

        setData({} as AuthData)
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext)

    if (!context)
        throw new Error('useAuth must be used inside an AuthProvider')

    return context
}

export { AuthProvider, useAuth }