import { IconFacebook, IconGoogle, IconTwitter, Logo } from '@/components'
import { Button, HeadingWithDashed, HrWithDashed, SocialMedia } from '@/styled-components/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WelcomePageStyled = styled('main')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(2rem, 2vw, 4rem);
  background-color: #C9DBDB;
  padding: clamp(4rem, 4vw, 8rem) clamp(1rem, 1vw, 2rem);
`
const Heading = styled('h2')`
  color: #281828;
  font-size: clamp(1.5rem, 1.5vw, 3rem);
  font-weight: 700;
  text-align: center;
`

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled>
      <Logo />
      <Heading>¡Bienvenido! , crea tu cuenta gratuita</Heading>
      <Button to='/login' as={Link}>INICIAR SESIÓN</Button>
      <Button secondary>CREAR CUENTA</Button>
      <HeadingWithDashed isItalic>
        <HrWithDashed />o también<HrWithDashed />
      </HeadingWithDashed>
      <SocialMedia>
        <IconFacebook />
        <IconTwitter />
        <IconGoogle />
      </SocialMedia>
    </WelcomePageStyled>
  )
}

export { WelcomePage }
