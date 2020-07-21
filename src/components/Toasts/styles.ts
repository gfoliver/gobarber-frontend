import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ToastProps {
    type: "info" | "success" | "error"
}

const ToastTypes = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
    success: css`
        background: #e6fffa;
        color: #2e656a;
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `,
}

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
`

export const Toast = styled(animated.div)<ToastProps>`
    position: relative;
    width: 360px;
    padding: 16px 50px 16px 16px;
    border-radius: 8px;
    display: flex;
    margin-bottom: 8px;

    ${props => ToastTypes[props.type]}

    >svg {
        margin-right: 16px;
        margin-top: 4px;
        margin-bottom: 4px;
    }

    .content {
        flex: 1;

        .title {
            font-weight: 500;
        }

        .description {
            margin-top: 4px;
            font-size: 14px;
        }
    }

    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        position: absolute;
        top: 19px;
        right: 16px;
        opacity: .7;
        transition: all .3s ease;
        
        &:hover {
            opacity: 1;
        }
    }
`