import { IconFacebook, IconInstagram, IconTwitter } from '@/components'
import { SocialMedia } from '@/styled-components/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterStyled = styled('footer')`
  display: grid;
  grid-template: "list" auto "social" auto "copyright" auto / 1fr;
  place-items: center;
  gap: clamp(2rem, 4vw, 8rem);
  background-color: #281828;
  padding: clamp(2.5rem, 2.5vw, 5rem) clamp(3rem, 5.75vw, 11.5rem);
  color: #ffffff;
  font-size: clamp(1rem, 1vw, 2rem);
  font-weight: 700;
  text-align: center;

 @media screen and (min-width: 49.75rem) {
    grid-template: "social copyright list" auto / 1fr 1fr 1fr;
 }
`
const FooterList = styled('ul')`
  grid-area: list;
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 1vw, 2rem);
`
const FooterListItem = styled('li')`
 @media screen and (min-width: 49.75rem) {
    text-align: start;
 }
`
const WrapperSocialMedia = styled('div')`
  grid-area: social;
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 1vw, 2rem);

  svg {
    fill: #ffffff;
  }
`
const FooterCopyright = styled('h6')`
  grid-area: copyright;
  color: #8A89D1;
`

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <FooterList>
        <FooterListItem><Link to='/#'>Condiciones</Link></FooterListItem>
        <FooterListItem><Link to='/#'>Sobre nosotros</Link></FooterListItem>
        <FooterListItem><Link to='/#'>Política de cookies</Link></FooterListItem>
      </FooterList>
      <WrapperSocialMedia>
        <h6>Seguinos en nuestras redes.</h6>
        <SocialMedia>
          <Link to='/#'><IconFacebook boxShadow={false} /></Link>
          <Link to='/#'><IconTwitter boxShadow={false} /></Link>
          <Link to='/#'><IconInstagram /></Link>
        </SocialMedia>
      </WrapperSocialMedia>
      <FooterCopyright>© ChatBox 2023</FooterCopyright>
    </FooterStyled>
  )
}

export { Footer }
