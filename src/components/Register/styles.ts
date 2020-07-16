import styled from 'styled-components'

import * as LoginStyle from '../Login/styles'

import backgroundImg from '../../assets/register-background.png'

export const Container = styled(LoginStyle.Container)``

export const FormWrapper = styled(LoginStyle.FormWrapper)`
    >a {
        color: ${props => props.theme.colors.text};
    }
`

export const RadioInputGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;

    label {
        font-size: 16px;
        color: ${props => props.theme.colors.textLight};
        padding-bottom: 8px;
        border-bottom: solid 2px transparent;
        margin: 0;
        transition: all .3s ease;

        & + input + label {
            margin-left: 24px;
        }
    }

    input {
        display: none;

        &:checked + label {
            color: ${props => props.theme.colors.text};
            border-color: ${props => props.theme.colors.primary};
        }
    }
`

export const Background = styled(LoginStyle.Background)`
    background-image: url(${backgroundImg});
`