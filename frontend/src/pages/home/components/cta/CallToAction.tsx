import { Button } from '@/styled-components/components'
import styled from 'styled-components'

const CallToActionStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

 @media screen and (max-width: 56rem) {
    grid-template-columns: 1fr;
 }
`
const CallToActionInfo = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(.75rem, .75vw, 1.5rem);
  padding: clamp(2.5rem, 7.5vw, 15rem) clamp(1rem, 5.75vw, 11.5rem);
`
const CallToActionHeading = styled('h4')`
  color: #2E2D53;
  font-size: clamp(1rem, 1.5vw, 3rem);
  font-weight: 700;
`
const CallToActionParagraph = styled('p')`
  font-size: clamp(0.875rem, 1.125vw, 2.25rem);
  font-weight: 500;
  margin: 0 0 clamp(2rem, 2.5vw, 5rem) 0;
`
const WrapperImages = styled('div')`
  position: relative;
  padding: 0 0 clamp(8.25rem, 8.25vw, 16.5rem) 0;

 @media screen and (max-width: 56rem) {
    display: none;
 }
`
const CallToActionImage = styled('img')`
  width: clamp(18.75rem, 18.75vw, 37rem);
  aspect-ratio: 1 / 2;

  :nth-child(1) {
    position: absolute;
    top: 18%;
    left: 30%;
  }
`

const CallToAction = (): JSX.Element => {
  return (
    <CallToActionStyled>
      <CallToActionInfo>
        <CallToActionHeading>¿Te gustaría estar conectado con tus seres queridos de manera más cercana y personal?</CallToActionHeading>
        <CallToActionParagraph>Nuestra aplicación te permite estar en contacto con las personas que más importan en tu vida, sin importar dónde te encuentres.</CallToActionParagraph>
        <Button secondary>ABRIR CHATBOX EN TU NAVEGADOR</Button>
      </CallToActionInfo>
      <WrapperImages>
        <CallToActionImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1680896361/chatbox/images/Device_Android_LIP_kvqsay.png' alt='Imagen con diseño de la bienvenido a la app en vista mobile' />
        <CallToActionImage src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1680896361/chatbox/images/mockups-der_ko0nqs.png' alt='Imagen con diseño del chat la app en vista mobile' />
      </WrapperImages>
    </CallToActionStyled>
  )
}

export { CallToAction }
