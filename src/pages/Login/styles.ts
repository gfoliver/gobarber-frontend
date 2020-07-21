import styled, { keyframes } from 'styled-components'
import backgroundImg from '../../assets/login-background.png'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
`

const animation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        opacity: 1;
    }
`

export const FormWrapper = styled.div`
    padding: 100px 160px;
    width: 100%;
    max-width: 660px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
        margin-bottom: 80px;
        animation: ${animation} .7s;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 1em;
    }

    button {
        margin-top: 16px;
        margin-bottom: 24px;
    }

    form {
        margin-bottom: 80px;
        width: 100%;
        animation: ${animation} .7s;

        a {
            color: ${props => props.theme.colors.text};
            animation: none;
        }
    }

    a {
        margin: 0 auto;
        width: fit-content;
        animation: ${animation} .7s;
    }

    @media only screen and (max-width: 660px) {
        padding: 50px 30px;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`