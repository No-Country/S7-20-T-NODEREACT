import { Logo, SignIn } from '@/pages/login/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconArrowBack } from '../chatbox/pages/chat/components'

const LoginPageStyled = styled('main')`
  display: flex;
  flex-flow: column nowrap;
  background-color: #C9DBDB;
  padding: clamp(1rem, 1vw, 2rem);
  gap: clamp(2.75rem, 2.75vw, 5.5rem);
`

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <Link to='/register'><IconArrowBack /></Link>
      <Logo />
      <SignIn />
    </LoginPageStyled>
  )
}

export { LoginPage }
