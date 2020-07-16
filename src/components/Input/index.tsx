import React, { InputHTMLAttributes, useEffect, useRef, useCallback, useState } from 'react'
import { IconType } from 'react-icons/lib'
import { Container } from './styles'
import theme from '../../styles/theme'
import { useField } from '@unform/core'
import Tooltip from '../Tooltip'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType
    name: string
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isFilled, setIsFilled] = useState(false)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    const handleInputBlur = useCallback(() => {
        setIsFilled(!!inputRef.current?.value)
    }, [])

    return (
        <>
            <Container isFilled={isFilled} hasError={!!error}>
                { Icon && <Icon color={theme.colors.textLight} /> }
                <input 
                    ref={inputRef} 
                    defaultValue={defaultValue} 
                    {...props} 
                    onBlur={handleInputBlur}
                />
                {error && <Tooltip color={theme.colors.error} title={error} />}
            </Container>
        </>
    )
}

export default Input