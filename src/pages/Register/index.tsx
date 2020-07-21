import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.svg'

import { Container, FormWrapper, Background } from './styles'
import theme from '../../styles/theme'

import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utils/getValidationErrors'

import { useToasts } from '../../hooks/Toast'
import api from '../../services/api'

interface RegisterForm {
    email: string
    name: string
    password: string
}

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { addToast } = useToasts()
    const history = useHistory()

    const handleSubmit = useCallback(async (data: RegisterForm) => {
        formRef.current?.setErrors({})

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
                password: Yup.string().min(8, 'No mínimo 8 dígitos')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post('/users', data)
            
            addToast({
                type: "success",
                title: "Cadastro efetuado!",
                description: "Sucesso no cadastro! Faça seu login"
            })

            history.push('/login')

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error)
                formRef.current?.setErrors(errors)
                
                return
            }

            addToast({
                type: "error",
                title: "Erro no cadastro",
                description: "Houve um erro ao executar o seu cadastro, tente novamente."
            })
        }
    }, [addToast, history])

    return (
        <Container>
            <Background />
            <FormWrapper>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input 
                        name="name"
                        icon={FiUser} 
                        type="text" 
                        placeholder="Nome" 
                        autoComplete="name" 
                        required
                    />
                    <Input 
                        name="email"
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail" 
                        autoComplete="email" 
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
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Link to="/login">
                    <FiArrowLeft color={theme.colors.text} /> 
                    Voltar para login
                </Link>
            </FormWrapper>
        </Container>
    )
}

export default Register