import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import { Container, FormWrapper, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import theme from '../../styles/theme'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

interface RegisterForm {
    email: string
    name: string
    password: string
}

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

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

            console.log(data)
        } catch (error) {
            const errors = getValidationErrors(error)
            formRef.current?.setErrors(errors)
        }
    }, [])

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