import styled, { css } from 'styled-components'

interface InputProps {
    isFilled: boolean,
    hasError?: boolean
}

export const Container = styled.label<InputProps>`
    display: block;
    background-color: ${props => props.theme.colors.inputBackground};
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 18px;
    width: 100%;
    border: solid 1px transparent;
    transition: all .3s ease;
    
    svg {
        margin-right: 18px;
        width: 16px;
        transition: all .3s ease;
    }

    input {
        padding: 0;
        background-color: ${props => props.theme.colors.inputBackground};
        margin: 0;
        border: none;
        font-size: 16px;
        flex: 1;
        
        &::placeholder {
            color: ${props => props.theme.colors.textLight};
        }

        &:active,
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    svg + input {
        max-width: calc(100% - 34px);
    }

    &:focus-within {
        svg {
            color: ${props => props.theme.colors.primary} !important;
        }

        border-color: ${props => props.theme.colors.primary};
    }

    ${props => props.isFilled && css`
        svg {
            color: ${props => props.theme.colors.primary} !important;
        }
    `}

    ${props => props.hasError && css`
        border-color: ${props => props.theme.colors.error};

        svg {
            color: ${props => props.theme.colors.error} !important;      
        }

        input + div {
            margin-left: 16px;
        }
    `}
`