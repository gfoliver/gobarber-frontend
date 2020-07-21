import React from 'react'
import { useTransition } from 'react-spring'

import { Container } from './styles'
import Toast from './Toast'
import { useToasts } from '../../hooks/Toast'

const ToastContainer: React.FC = () => {
    const { toasts } = useToasts()
    
    const animatedToasts = useTransition(
        toasts, 
        toast => toast.id, 
        {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        }
    )

    return (
        <Container>
            {animatedToasts.map(({ item, key, props }) => (
                <Toast 
                    key={key}
                    style={props}
                    id={item.id}
                    title={item.title} 
                    description={item.description} 
                    type={item.type} 
                />
            ))}
        </Container>
    )
}

export default ToastContainer