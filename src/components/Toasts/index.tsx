import React from 'react'

import { Container } from './styles'
import Toast from './Toast'
import { useToasts } from '../../hooks/Toast'

const ToastContainer: React.FC = () => {
    const { toasts } = useToasts()

    return (
        <Container>
            {toasts.map(toast => (
                <Toast 
                    key={toast.id}
                    id={toast.id}
                    title={toast.title} 
                    description={toast.description} 
                    type={toast.type} 
                />
            ))}
        </Container>
    )
}

export default ToastContainer