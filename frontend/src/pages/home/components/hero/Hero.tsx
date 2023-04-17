import { ButtonLink } from '@/styled-components/components'
import styled from 'styled-components'

const HeroStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1.5rem, 2.5vw, 5rem);
  background-image: url("https://res.cloudinary.com/dos3i5jqy/image/upload/v1680880762/chatbox/images/hero-img_x2wvia.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: clamp(7.5rem, 14vw, 28rem) clamp(1rem, 7.5vw, 15rem);
`
const HeroHeading = styled('h1')`
  width: 40%;
  color: #ffffff;
  font-size: clamp(1.5rem, 3vw, 6rem);
  font-weight: 700;
  text-shadow: 0 0.625rem 0.625rem rgba(40, 24, 40, 0.2);

 @media screen and (max-width: 49.75rem) {
    width: 100%;
    text-align: center;
 }
`
const WrapperAvailableApps = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: clamp(1rem, 2vw, 4rem);
  width: 40%;

 @media screen and (max-width: 49.75rem) {
    width: 100%;
 }
`
const HeroAppsImage = styled('img')`
  aspect-ratio: 3;
`
const HeroButton = styled(ButtonLink)`
  display: none;
  
  @media screen and (max-width: 64rem) {
     display: block;
     width: 40%;
  }
  @media screen and (max-width: 49.75rem) {
     width: 100%;
  }
`

const Hero = (): JSX.Element => {
  return (
    <HeroStyled>
      <HeroHeading>La mejor manera de mantenerse en contacto con quienes más importan.</HeroHeading>
      <HeroButton to='/welcome'>ABRIR CHATBOX</HeroButton>
      <WrapperAvailableApps>
        <HeroAppsImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1680879824/chatbox/images/0BpxdgM3WUr_1_v9jcf9.png' alt='Imagen de app disponible en Playstore' />
        <HeroAppsImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1680879824/chatbox/images/LjIQEL8csb0_1_jy7j28.png' alt='Imagen de app consíguelo en Microsoft' />
      </WrapperAvailableApps>
    </HeroStyled>
  )
}

export { Hero }
