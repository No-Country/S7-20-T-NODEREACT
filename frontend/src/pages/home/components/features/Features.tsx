import { IconScheduleSend } from '@/components'
import { IconEdit, IconLock } from '@/pages/home/components'
import styled from 'styled-components'

const FeaturesStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 4vw, 8rem);
  background-color: #eef4f4;
  padding: clamp(2.5rem, 2.5vw, 5rem) clamp(1rem, 1vw, 2rem);
`
const FeaturesHeading = styled('h2')`
  color: #2E2D53;
  font-size: clamp(1rem, 1.25vw, 2.5rem);
  font-weight: 700;
  text-align: center;

 @media screen and (min-width: 49.75rem) {
    width: 50%;
 }
`
const FeaturesList = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  gap: clamp(1.5rem, 4vw, 8rem);
  padding: 0 clamp(1rem, 13.75vw, 27.5rem);
`
const FeaturesItem = styled('li')`
  flex: 1 1 clamp(14.5rem, 14.5vw, 29rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 1vw, 2rem);
  border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
  background-color: #DBE7E7;
  padding: clamp(2rem, 2vw, 4rem) clamp(1rem, 1vw, 2rem);

  svg {
    fill: #6D6BC5;
    width: clamp(2.5rem, 2.5vw, 5rem);
    padding: clamp(0.25rem, 0.25vw, 0.5rem);
    border-radius: clamp(0.25rem, 0.25vw, 0.5rem);
    background-color: #2E2D53;
  }
`
const FeaturesDescription = styled('h3')`
  color: #3C3B6C;
  font-size: clamp(0.875rem, 0.875vw, 1.75rem);
  font-weight: 700;
  text-align: center;
`

const Features = (): JSX.Element => {
  return (
    <FeaturesStyled>
      <FeaturesHeading>Nueva aplicación de comunicación, ¡Envíe mensajes GRATIS cuando y donde quiera que esté, las 24 horas del día!</FeaturesHeading>
      <FeaturesList>
        <FeaturesItem>
          <IconEdit />
          <FeaturesDescription>Chatea sin límites con todos tus conocidos.</FeaturesDescription>
        </FeaturesItem>
        <FeaturesItem>
          <IconScheduleSend />
          <FeaturesDescription>Programa tus mensajes para tener más control.</FeaturesDescription>
        </FeaturesItem>
        <FeaturesItem>
          <IconLock />
          <FeaturesDescription>Mensajes privados y seguros al alcance de tus dedos.</FeaturesDescription>
        </FeaturesItem>
      </FeaturesList>
    </FeaturesStyled>
  )
}

export { Features }
