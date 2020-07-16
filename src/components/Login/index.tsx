import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Container, FormWrapper, Background } from './styles'
import Input from '../Input'
import Button from '../Button'
import theme from '../../styles/theme'
import { Form } from '@unform/web'

const Login: React.FC = () => {
    const handleSubmit = useCallback((data: object) => {
        console.log(data)
    }, [])

    return (
        <Container>
            <FormWrapper>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>
                    <Input 
                        name="email"
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail" 
                        autoComplete="current-email" 
                    />
                    <Input 
                        name="password"
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete="current-password" 
                    />
                    <Button type="submit">Entrar</Button>
                    <Link to="/forgot-password">Esqueci minha senha</Link>
                </Form>
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