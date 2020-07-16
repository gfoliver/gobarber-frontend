import styled from 'styled-components'

import { shade } from 'polished'

export const Btn = styled.button`
    padding: 18px 32px;
    font-size: 16px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    border: solid 1px ${props => props.theme.colors.primary};;
    border-radius: 10px;
    width: 100%;
    font-weight: 500;
    transition: all .3s ease;

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
        }
    }

    &:active,
    &:focus,
    &:hover {
        outline: none;
        box-shadow: none;
        background-color: ${props => shade(0.2, props.theme.colors.primary)};
        border-color: ${props => shade(0.2, props.theme.colors.primary)};
    }
`