import React, { createContext, useContext, useCallback, useState } from 'react'
import ToastContainer from '../components/Toasts'
import { uuid } from 'uuidv4'

interface Toast {
    id: string
    title: string
    description: string
    type?: "info" | "success" | "error"
}

interface IToastContext {
    toasts: Toast[]
    addToast({ title, description, type }: Omit<Toast, "id">): void
    removeToast(id: string): void
}

const ToastContext = createContext<IToastContext>({} as IToastContext)

const ToastProvider: React.FC = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([])

    const removeToast = useCallback(id => {
        setToasts(toasts => toasts.filter(item => item.id !== id))
    }, [])

    const addToast = useCallback(({ title, description, type = "info" }: Omit<Toast, "id">) => {
        const id = uuid()
        setToasts(toasts => [...toasts, { id, title, description, type }])

        setTimeout(() => {
            removeToast(id)
        }, 5000)
    }, [removeToast])

    return (
        <ToastContext.Provider value={{ addToast, toasts, removeToast }}>
            { children }
            <ToastContainer />
        </ToastContext.Provider>
    )
}

const useToasts = () => {
    const context = useContext(ToastContext)

    if (!context)
        throw new Error('useToasts must be used inside an ToastProvider')

    return context
}

export { ToastProvider, useToasts }