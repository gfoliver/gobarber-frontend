import React, { useCallback, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import theme from '../../styles/theme'
import { Container, FormWrapper, Background } from './styles'

import Input from '../Input'
import Button from '../Button'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import { AuthContext } from '../../context/authContext'

interface LoginForm {
    email: string
    password: string
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { signIn } = useContext(AuthContext)

    const handleSubmit = useCallback(async (data: LoginForm) => {
        formRef.current?.setErrors({})

        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
                password: Yup.string().required('Senha obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            try {
                const authData = await signIn(data)

                console.log(authData)
            }
            catch(err) {
                console.log(err)
            }
        }
        catch(error) {
            const errors = getValidationErrors(error)
            formRef.current?.setErrors(errors)
        }
    }, [signIn])

    return (
        <Container>
            <FormWrapper>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>
                    <Input 
                        name="email"
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail" 
                        autoComplete="current-email" 
                        required
                    />
                    <Input 
                        name="password"
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete="current-password" 
                        required
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