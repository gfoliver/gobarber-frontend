import React, { InputHTMLAttributes, } from 'react'
import { IconType } from 'react-icons/lib'

import { Container } from './styles'

import theme from '../../styles/theme'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
    const Icon = icon

    return (
        <Container>
            { Icon && <Icon color={theme.colors.textLight} /> }
            <input {...props} />
        </Container>
    )
}

export default Input