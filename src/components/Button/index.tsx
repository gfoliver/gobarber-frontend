import React, { ButtonHTMLAttributes } from 'react'

import { Btn } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => {
    return (
        <Btn {...props} />
    )
}

export default Button