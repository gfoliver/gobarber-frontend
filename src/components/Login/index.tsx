import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Container, FormWrapper, Background } from './styles'
import Input from '../Input'
import Button from '../Button'
import theme from '../../styles/theme'

const Login: React.FC = () => {
    return (
        <Container>
            <FormWrapper>
                <img src={logoImg} alt="GoBarber" />

                <form>
                    <h1>Faça seu login</h1>
                    <Input 
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail" 
                        autoComplete="current-email" 
                    />
                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete="current-password" 
                    />
                    <Button type="submit">Entrar</Button>
                    <Link to="/forgot-password">Esqueci minha senha</Link>
                </form>
                <Link to="/register">
                    <FiLogIn color={theme.colors.primary} /> 
                    Criar Conta
                </Link>
            </FormWrapper>
            <Background />
        </Container>
    )
}

export default Login