import React from 'react'

import { AuthProvider } from './Auth'
import { ToastProvider } from './Toast'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'


const AppProvider: React.FC = ({ children }) => (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <ToastProvider>
                {children}
            </ToastProvider>
        </ThemeProvider>
    </AuthProvider>
)

export default AppProvider