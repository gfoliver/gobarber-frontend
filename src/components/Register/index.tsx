import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Container, FormWrapper, Background, RadioInputGroup } from './styles'
import Input from '../Input'
import Button from '../Button'
import theme from '../../styles/theme'

const Register: React.FC = () => {
    return (
        <Container>
            <Background />
            <FormWrapper>
                <img src={logoImg} alt="GoBarber" />

                <form>
                    <RadioInputGroup>
                            <input type="radio" name="register-type" id="register-customer" checked />
                            <label htmlFor="register-customer">Sou cliente</label>                        
                            <input type="radio" name="register-type" id="register-barber" />
                            <label htmlFor="register-barber">Sou barbeiro</label>
                    </RadioInputGroup>
                    <Input 
                        icon={FiUser} 
                        type="text" 
                        placeholder="Nome" 
                        autoComplete="name" 
                    />
                    <Input 
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail" 
                        autoComplete="email" 
                    />
                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete="current-password" 
                    />
                    <Button type="submit">Cadastrar</Button>
                </form>
                <Link to="/login">
                    <FiArrowLeft color={theme.colors.text} /> 
                    Voltar para login
                </Link>
            </FormWrapper>
        </Container>
    )
}

export default Register