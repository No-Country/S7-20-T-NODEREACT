import { IconFacebook, IconGoogle, IconTwitter } from '@/components'
import { useAuth } from '@/hooks'
import { Button, HeadingWithDashed, HrWithDashed, SocialMedia } from '@/styled-components/components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignInStyled = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(2rem, 2vw, 4rem);
`
const WrapperFormControl = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(0.5rem, 0.5vw, 1rem);
`
const LabelStyled = styled('label')`
  color: #281828;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 900;
`
const InputStyled = styled('input')`
  color: #6f646f;
  font-size: clamp(0.75rem, 0.75vw, 1.5rem);
  font-weight: 500;
  border: 0.125rem solid #6f646f;
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: #dbe7e7;
  padding: clamp(1rem, 1vw, 2rem);

  ::placeholder {
    color: inherit;
  }
`
const WrapperFormOptions = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(0.5rem, 0.5vw, 1rem);
  color: #281828;
  font-size: clamp(0.875rem, 0.875vw, 1.75rem);
  font-weight: 500;
`
const LabelRememberMe = styled('label')`
  :hover {
    color: #6d6bc5;
  }
`
const LinkForgotPassword = styled(Link)`
  text-decoration: underline;
  margin: 0 0 0 auto;

  :hover {
    color: #6d6bc5;
  }
`
const CheckboxStyled = styled('input')`
  width: clamp(1.25rem, 1.25vw, 2.5rem);
  height: clamp(1.25rem, 1.25vw, 2.5rem);
  position: relative;

  :checked {
    ::after {
      opacity: 1;
    }
    ::before {
      background-color: #281828;
    }
  }

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: clamp(0.25rem, 0.25vw, 0.5rem);
    height: clamp(0.5rem, 0.5vw, 1rem);
    border: solid white;
    border-width: 0 clamp(0.125rem, 0.125vw, 0.25rem) clamp(0.125rem, 0.125vw, 0.25rem) 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 200ms;
  }
  ::before {
    content: '';
    width: clamp(1.25rem, 1.25vw, 2.5rem);
    height: clamp(1.25rem, 1.25vw, 2.5rem);
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    background-color: #6f646f;
    transition: background-color 200ms;
  }
`
const WrapperRegister = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(0.75rem, 0.75vw, 1.5rem);
`
const LinkRegister = styled(Link)`
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  text-decoration: underline;
`
const Heading = styled('h3')`
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 400;
  font-style: italic;
`

const SignIn = (): JSX.Element => {
  const { setUser, setUserID, setUserToken, signIn } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    const name = ev.target.name
    const value = ev.target.value
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleFormSubmit = async (ev: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      ev.preventDefault()
      const { token, user } = await signIn(form)
      setUserID(user._id)
      setUserToken(token)
      setUser(user)
    } catch (error) {
      console.log(error.response.data.msg)
    }
  }

  return (
    <SignInStyled onSubmit={handleFormSubmit}>
      <HeadingWithDashed>
        <HrWithDashed />
        INICIA SESIÓN
        <HrWithDashed />
      </HeadingWithDashed>
      <WrapperFormControl>
        <LabelStyled htmlFor='email'>Email</LabelStyled>
        <InputStyled onChange={handleInputChange} value={form.email} id='email' name='email' type='email' placeholder='email@ejemplo.com' />
      </WrapperFormControl>
      <WrapperFormControl>
        <LabelStyled htmlFor='password'>Contraseña</LabelStyled>
        <InputStyled onChange={handleInputChange} value={form.password} id='password' name='password' type='password' placeholder='*********' />
      </WrapperFormControl>
      <WrapperFormOptions>
        <CheckboxStyled type='checkbox' name='checkbox' id='checkbox' />
        <LabelRememberMe htmlFor='checkbox'>Recuérdame</LabelRememberMe>
        <LinkForgotPassword to='#'>Recuperar contraseña</LinkForgotPassword>
      </WrapperFormOptions>
      <Button>INICIAR SESIÓN</Button>
      <HeadingWithDashed as='h3' isItalic>
        <HrWithDashed />o también
        <HrWithDashed />
      </HeadingWithDashed>
      <SocialMedia>
        <IconFacebook />
        <IconTwitter />
        <IconGoogle />
      </SocialMedia>
      <WrapperRegister>
        <Heading>No tenés cuenta?</Heading>
        <LinkRegister to='/register'>Registrate</LinkRegister>
      </WrapperRegister>
    </SignInStyled>
  )
}

export { SignIn }
