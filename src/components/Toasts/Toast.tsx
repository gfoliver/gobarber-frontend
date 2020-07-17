import React, { useCallback } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { Toast as ToastStyle } from './styles'
import { useToasts } from '../../hooks/Toast'

interface ToastProps {
    id: string
    title: string
    description: string
    type?: "info" | "success" | "error"
}

const icons = {
    info: <FiInfo />,
    success: <FiCheckCircle />,
    error: <FiAlertCircle />,
}

const Toast: React.FC<ToastProps> = ({ id, title, description, type = "info" }) => {
    const { removeToast } = useToasts()

    const remove = useCallback(() => {
        removeToast(id)
    }, [removeToast, id]);

    return (
        <ToastStyle type={type}>
            { icons[type] }
            <div className="content">
                <div className="title">{ title }</div>
                <div className="description">{ description }</div>
            </div>
            <button onClick={remove}>
                <FiXCircle size={18} />
            </button>
        </ToastStyle>
    )
}

export default Toast