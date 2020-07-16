import React from 'react'
import { Container } from './styles'
import { FiAlertCircle } from 'react-icons/fi'
import theme from '../../styles/theme'

interface TooltipProps {
    title: string
    color?: string
    textColor?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, color = theme.colors.primary, textColor = theme.colors.text }) => (
    <Container color={color} textColor={textColor}>
        <FiAlertCircle color={color} />
        <span>{title}</span>
    </Container>
)

export default Tooltip