import styled from 'styled-components'

import * as LoginStyle from '../Login/styles'

import backgroundImg from '../../assets/register-background.png'

export const Container = styled(LoginStyle.Container)``

export const FormWrapper = styled(LoginStyle.FormWrapper)`
    >a {
        color: ${props => props.theme.colors.text};
    }
`

export const Background = styled(LoginStyle.Background)`
    background-image: url(${backgroundImg});
`